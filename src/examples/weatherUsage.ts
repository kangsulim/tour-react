// examples/weatherUsage.ts
import { WeatherApiService, CurrentWeatherResponse } from '../services/weatherApi';

// API 키를 환경변수에서 가져오기
const API_KEY = process.env.OPENWEATHER_API_KEY || 'your_api_key_here';

// WeatherApiService 인스턴스 생성
const weatherService = new WeatherApiService(API_KEY);

// 예제 1: 현재 날씨 조회
async function getCurrentWeatherExample() {
  try {
    // 도시명으로 조회
    const seoulWeather = await weatherService.getCurrentWeatherByCity('Seoul', 'metric');
    
    console.log('서울 현재 날씨:');
    console.log(`온도: ${seoulWeather.main.temp}°C`);
    console.log(`체감온도: ${seoulWeather.main.feels_like}°C`);
    console.log(`날씨: ${seoulWeather.weather[0].description}`);
    console.log(`습도: ${seoulWeather.main.humidity}%`);
    console.log(`풍속: ${seoulWeather.wind.speed}m/s`);
    
    // 좌표로 조회 (서울: 37.5665, 126.9780)
    const weatherByCoords = await weatherService.getCurrentWeatherByCoords(37.5665, 126.9780);
    console.log('좌표로 조회한 날씨:', weatherByCoords.name);
    
  } catch (error) {
    console.error('날씨 조회 실패:', error);
  }
}

// 예제 2: 5일 예보 조회
async function getForecastExample() {
  try {
    const forecast = await weatherService.getForecastByCity('Busan', 'metric');
    
    console.log('부산 5일 예보:');
    forecast.list.slice(0, 5).forEach((item, index) => {
      const date = new Date(item.dt * 1000);
      console.log(`${index + 1}일 후: ${date.toLocaleDateString('ko-KR')} ${item.main.temp}°C - ${item.weather[0].description}`);
    });
    
  } catch (error) {
    console.error('예보 조회 실패:', error);
  }
}

// 예제 3: 날씨 정보를 활용한 간단한 대시보드 데이터 생성
async function createWeatherDashboard(cities: string[]) {
  const dashboardData = [];
  
  for (const city of cities) {
    try {
      const weather = await weatherService.getCurrentWeatherByCity(city, 'metric');
      
      dashboardData.push({
        city: weather.name,
        country: weather.sys.country,
        temperature: Math.round(weather.main.temp),
        description: weather.weather[0].description,
        humidity: weather.main.humidity,
        windSpeed: weather.wind.speed,
        iconUrl: weatherService.getWeatherIconUrl(weather.weather[0].icon, '2x'),
        lastUpdated: new Date(weather.dt * 1000)
      });
      
    } catch (error) {
      console.error(`${city} 날씨 조회 실패:`, error);
    }
  }
  
  return dashboardData;
}

// 예제 4: React Hook으로 활용
import { useState, useEffect } from 'react';

function useCurrentWeather(city: string) {
  const [weather, setWeather] = useState<CurrentWeatherResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);
        setError(null);
        
        const weatherData = await weatherService.getCurrentWeatherByCity(city);
        setWeather(weatherData);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Weather fetch failed');
      } finally {
        setLoading(false);
      }
    }
    
    if (city) {
      fetchWeather();
    }
  }, [city]);
  
  return { weather, loading, error };
}

// 예제 5: 에러 처리와 재시도 로직
class WeatherApiWithRetry extends WeatherApiService {
  async getCurrentWeatherWithRetry(
    city: string, 
    maxRetries: number = 3,
    retryDelay: number = 1000
  ): Promise<CurrentWeatherResponse> {
    let lastError: Error;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await this.getCurrentWeatherByCity(city);
      } catch (error) {
        lastError = error instanceof Error ? error : new Error('Unknown error');
        
        if (attempt < maxRetries) {
          console.log(`Attempt ${attempt} failed, retrying in ${retryDelay}ms...`);
          await new Promise(resolve => setTimeout(resolve, retryDelay));
          retryDelay *= 2; // 지수 백오프
        }
      }
    }
    
    throw lastError!;
  }
}

// 실행 예제
(async function runExamples() {
  console.log('=== 현재 날씨 조회 ===');
  await getCurrentWeatherExample();
  
  console.log('\n=== 5일 예보 조회 ===');
  await getForecastExample();
  
  console.log('\n=== 대시보드 데이터 생성 ===');
  const cities = ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon'];
  const dashboardData = await createWeatherDashboard(cities);
  console.table(dashboardData);
})();

// 환경변수 설정 예제 (.env 파일)
/*
OPENWEATHER_API_KEY=your_actual_api_key_here
*/

export {
  getCurrentWeatherExample,
  getForecastExample,
  createWeatherDashboard,
  useCurrentWeather,
  WeatherApiWithRetry
};