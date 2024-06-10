import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

function Search({ fetchWeatherData }) {
  const [cityName, setCityName] = useState('');

  const handleSearch = () => {
    fetchWeatherData(cityName);
  };

  return (
    <View>
      <TextInput
        value={cityName}
        onChangeText={(text) => setCityName(text)}
        placeholder="Enter city name"
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
}

export default Search;