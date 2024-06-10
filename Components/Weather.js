import React from 'react';
import { Text, View } from 'react-native';
import Header from './Header';
import Search from './Search';

function Weather({ weatherData, fetchWeatherData }) {
  return (
    <View>
      <Header />
      <Search fetchWeatherData={fetchWeatherData} />
      {weatherData && (
        <View>
          <Text>Weather: {weatherData.weather[0].main}</Text>
          <Text>Temperature: {weatherData.main.temp}°C</Text>
          <Text>Humidity: {weatherData.main.humidity}%</Text>
          <Text>Feels like: {weatherData.main.feels_like}°C</Text>
        </View>
      )}
    </View>
  );
}

export default Weather;