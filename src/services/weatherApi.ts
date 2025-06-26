// services/weatherApi.ts
import { CurrentWeatherResponse, ForecastResponse } from '../types/weatherTypes';

export class WeatherApiService {
  private readonly baseUrl = 'https://api.openweathermap.org/data/2.5';
  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  // 현재 날씨 조회 (도시명으로)
  async getCurrentWeatherByCity(
    city: string, 
    units: 'metric' | 'imperial' | 'standard' = 'metric'
  ): Promise<CurrentWeatherResponse> {
    const url = `${this.baseUrl}/weather?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=${units}&lang=kr`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(`API Error: ${data.message || 'Unknown error'}`);
      }
      
      return data as CurrentWeatherResponse;
    } catch (error) {
      console.error('Error fetching current weather:', error);
      throw error;
    }
  }

  // 현재 날씨 조회 (좌표로)
  async getCurrentWeatherByCoords(
    lat: number, 
    lon: number, 
    units: 'metric' | 'imperial' | 'standard' = 'metric'
  ): Promise<CurrentWeatherResponse> {
    const url = `${this.baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=${units}&lang=kr`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(`API Error: ${data.message || 'Unknown error'}`);
      }
      
      return data as CurrentWeatherResponse;
    } catch (error) {
      console.error('Error fetching current weather by coords:', error);
      throw error;
    }
  }

  // 5일 예보 조회 (도시명으로)
  async getForecastByCity(
    city: string, 
    units: 'metric' | 'imperial' | 'standard' = 'metric'
  ): Promise<ForecastResponse> {
    const url = `${this.baseUrl}/forecast?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=${units}&lang=kr`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(`API Error: ${data.message || 'Unknown error'}`);
      }
      
      return data as ForecastResponse;
    } catch (error) {
      console.error('Error fetching forecast:', error);
      throw error;
    }
  }

  // 5일 예보 조회 (좌표로)
  async getForecastByCoords(
    lat: number, 
    lon: number, 
    units: 'metric' | 'imperial' | 'standard' = 'metric'
  ): Promise<ForecastResponse> {
    const url = `${this.baseUrl}/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=${units}&lang=kr`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(`API Error: ${data.message || 'Unknown error'}`);
      }
      
      return data as ForecastResponse;
    } catch (error) {
      console.error('Error fetching forecast by coords:', error);
      throw error;
    }
  }

  // 날씨 아이콘 URL 생성
  getWeatherIconUrl(iconCode: string, size: '2x' | '4x' | '' = ''): string {
    const sizeParam = size ? `@${size}` : '';
    return `https://openweathermap.org/img/wn/${iconCode}${sizeParam}.png`;
  }

  // 온도 단위 변환 유틸리티
  convertTemperature(temp: number, from: 'K' | 'C' | 'F', to: 'K' | 'C' | 'F'): number {
    if (from === to) return temp;
    
    // 켈빈으로 먼저 변환
    let kelvin: number;
    switch (from) {
      case 'K':
        kelvin = temp;
        break;
      case 'C':
        kelvin = temp + 273.15;
        break;
      case 'F':
        kelvin = (temp - 32) * 5/9 + 273.15;
        break;
    }
    
    // 목표 단위로 변환
    switch (to) {
      case 'K':
        return kelvin;
      case 'C':
        return kelvin - 273.15;
      case 'F':
        return (kelvin - 273.15) * 9/5 + 32;
    }
  }
}

export interface CurrentWeatherResponse {
  // Define the structure of the response here
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
  name: string;
  dt: number;
}