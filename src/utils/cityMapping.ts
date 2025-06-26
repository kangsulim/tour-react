// utils/cityMapping.ts
import { WeatherApiConfig, WeatherLocation } from '../types/weatherTypes';

// 한국 주요 도시명 한->영 매핑 테이블
export const CITY_MAPPING: Record<string, string> = {
  // 특별시/광역시
  '서울': 'Seoul',
  '서울시': 'Seoul',
  '서울특별시': 'Seoul',
  '부산': 'Busan',
  '부산시': 'Busan',
  '부산광역시': 'Busan',
  '대구': 'Daegu',
  '대구시': 'Daegu',
  '대구광역시': 'Daegu',
  '인천': 'Incheon',
  '인천시': 'Incheon',
  '인천광역시': 'Incheon',
  '광주': 'Gwangju',
  '광주시': 'Gwangju',
  '광주광역시': 'Gwangju',
  '대전': 'Daejeon',
  '대전시': 'Daejeon',
  '대전광역시': 'Daejeon',
  '울산': 'Ulsan',
  '울산시': 'Ulsan',
  '울산광역시': 'Ulsan',
  '세종': 'Sejong',
  '세종시': 'Sejong',
  '세종특별자치시': 'Sejong',
  
  // 경기도
  '수원': 'Suwon',
  '수원시': 'Suwon',
  '성남': 'Seongnam',
  '성남시': 'Seongnam',
  '고양': 'Goyang',
  '고양시': 'Goyang',
  '용인': 'Yongin',
  '용인시': 'Yongin',
  '부천': 'Bucheon',
  '부천시': 'Bucheon',
  '안산': 'Ansan',
  '안산시': 'Ansan',
  '안양': 'Anyang',
  '안양시': 'Anyang',
  '남양주': 'Namyangju',
  '남양주시': 'Namyangju',
  '화성': 'Hwaseong',
  '화성시': 'Hwaseong',
  '평택': 'Pyeongtaek',
  '평택시': 'Pyeongtaek',
  '의정부': 'Uijeongbu',
  '의정부시': 'Uijeongbu',
  '시흥': 'Siheung',
  '시흥시': 'Siheung',
  '파주': 'Paju',
  '파주시': 'Paju',
  '광명': 'Gwangmyeong',
  '광명시': 'Gwangmyeong',
  '김포': 'Gimpo',
  '김포시': 'Gimpo',
  
  // 강원도
  '춘천': 'Chuncheon',
  '춘천시': 'Chuncheon',
  '원주': 'Wonju',
  '원주시': 'Wonju',
  '강릉': 'Gangneung',
  '강릉시': 'Gangneung',
  '동해': 'Donghae',
  '동해시': 'Donghae',
  '태백': 'Taebaek',
  '태백시': 'Taebaek',
  '속초': 'Sokcho',
  '속초시': 'Sokcho',
  '삼척': 'Samcheok',
  '삼척시': 'Samcheok',
  
  // 충청북도
  '청주': 'Cheongju',
  '청주시': 'Cheongju',
  '충주': 'Chungju',
  '충주시': 'Chungju',
  '제천': 'Jecheon',
  '제천시': 'Jecheon',
  
  // 충청남도
  '천안': 'Cheonan',
  '천안시': 'Cheonan',
  '공주': 'Gongju',
  '공주시': 'Gongju',
  '보령': 'Boryeong',
  '보령시': 'Boryeong',
  '아산': 'Asan',
  '아산시': 'Asan',
  '서산': 'Seosan',
  '서산시': 'Seosan',
  '논산': 'Nonsan',
  '논산시': 'Nonsan',
  '계룡': 'Gyeryong',
  '계룡시': 'Gyeryong',
  '당진': 'Dangjin',
  '당진시': 'Dangjin',
  
  // 전라북도
  '전주': 'Jeonju',
  '전주시': 'Jeonju',
  '군산': 'Gunsan',
  '군산시': 'Gunsan',
  '익산': 'Iksan',
  '익산시': 'Iksan',
  '정읍': 'Jeongeup',
  '정읍시': 'Jeongeup',
  '남원': 'Namwon',
  '남원시': 'Namwon',
  '김제': 'Gimje',
  '김제시': 'Gimje',
  
  // 전라남도
  '목포': 'Mokpo',
  '목포시': 'Mokpo',
  '여수': 'Yeosu',
  '여수시': 'Yeosu',
  '순천': 'Suncheon',
  '순천시': 'Suncheon',
  '나주': 'Naju',
  '나주시': 'Naju',
  '광양': 'Gwangyang',
  '광양시': 'Gwangyang',
  
  // 경상북도
  '포항': 'Pohang',
  '포항시': 'Pohang',
  '경주': 'Gyeongju',
  '경주시': 'Gyeongju',
  '김천': 'Gimcheon',
  '김천시': 'Gimcheon',
  '안동': 'Andong',
  '안동시': 'Andong',
  '구미': 'Gumi',
  '구미시': 'Gumi',
  '영주': 'Yeongju',
  '영주시': 'Yeongju',
  '영천': 'Yeongcheon',
  '영천시': 'Yeongcheon',
  '상주': 'Sangju',
  '상주시': 'Sangju',
  '문경': 'Mungyeong',
  '문경시': 'Mungyeong',
  '경산': 'Gyeongsan',
  '경산시': 'Gyeongsan',
  
  // 경상남도
  '창원': 'Changwon',
  '창원시': 'Changwon',
  '진주': 'Jinju',
  '진주시': 'Jinju',
  '통영': 'Tongyeong',
  '통영시': 'Tongyeong',
  '사천': 'Sacheon',
  '사천시': 'Sacheon',
  '김해': 'Gimhae',
  '김해시': 'Gimhae',
  '밀양': 'Miryang',
  '밀양시': 'Miryang',
  '거제': 'Geoje',
  '거제시': 'Geoje',
  '양산': 'Yangsan',
  '양산시': 'Yangsan',
  
  // 제주도
  '제주': 'Jeju',
  '제주시': 'Jeju',
  '서귀포': 'Seogwipo',
  '서귀포시': 'Seogwipo'
};

/**
 * 한국어 도시명을 영어로 변환
 */
export function convertCityNameToEnglish(koreanCityName: string): string | null {
  if (!koreanCityName) return null;
  
  // 정확히 매칭되는 경우
  if (CITY_MAPPING[koreanCityName]) {
    return CITY_MAPPING[koreanCityName];
  }
  
  // 부분 매칭 (예: "서울 강남구" -> "Seoul")
  for (const [korean, english] of Object.entries(CITY_MAPPING)) {
    if (koreanCityName.includes(korean)) {
      return english;
    }
  }
  
  return null;
}

/**
 * OpenWeatherMap API URL 생성 (도시명 기반)
 */
export function createWeatherApiUrlByCity(
  locationName: string, 
  config: WeatherApiConfig
): string | null {
  const englishCityName = convertCityNameToEnglish(locationName);
  
  if (!englishCityName) {
    return null;
  }
  
  const { apiKey, units = 'metric', lang = 'kr' } = config;
  
  return `https://api.openweathermap.org/data/2.5/forecast?q=${englishCityName},kr&appid=${apiKey}&units=${units}&lang=${lang}`;
}

/**
 * OpenWeatherMap API URL 생성 (좌표 기반) - 더 정확함
 */
export function createWeatherApiUrlByCoords(
  location: WeatherLocation, 
  config: WeatherApiConfig
): string {
  const { apiKey, units = 'metric', lang = 'kr' } = config;
  
  return `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lng}&appid=${apiKey}&units=${units}&lang=${lang}`;
}

/**
 * 날씨 데이터 가져오기 (통합 함수)
 */
export async function fetchWeatherData(
  location: WeatherLocation,
  config: WeatherApiConfig
): Promise<{ [key: string]: unknown }> {
  // 1차: 좌표 기반으로 시도 (더 정확함)
  let url = createWeatherApiUrlByCoords(location, config);
  
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.warn('좌표 기반 날씨 API 요청 실패:', error);
  }
  
  // 2차: 도시명 기반으로 시도 (백업)
  if (location.cityName) {
    const cityUrl = createWeatherApiUrlByCity(location.cityName, config);
    if (cityUrl) {
      url = cityUrl;
      try {
        const response = await fetch(url);
        if (response.ok) {
          return await response.json();
        }
      } catch (error) {
        console.warn('도시명 기반 날씨 API 요청 실패:', error);
      }
    }
  }
  
  throw new Error('날씨 데이터를 가져올 수 없습니다.');
}