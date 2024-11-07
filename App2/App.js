import { useState, useEffect, useCallback } from 'react';
import { 
  Platform, 
  Text, 
  View, 
  StyleSheet, 
  RefreshControl,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import * as Location from 'expo-location';

// Constants
const API_KEY = "37e5671ad13b7cb4a14b3b187479acc5";
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

// Weather Service
const WeatherService = {
  async fetchWeather(lat, lon) {
    try {
      const response = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=fr`);
      
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather:', error);
      throw error;
    }
  },
};

// Forecast Card Component
const ForecastCard = ({ forecast }) => {
  return (
    <View style={styles.forecastCard}>
      <Text style={styles.forecastDate}>{getDayOfWeek(forecast.dt)}</Text>
      <View style={styles.forecastDetails}>
        <Text style={styles.forecastTemp}>{Math.round(forecast.main.temp)}°C</Text>
        <View style={styles.forecastWeather}>
          <Text style={styles.forecastDescription}>{forecast.weather[0].description}</Text>
          <View style={styles.forecastIcon}>
            <Text style={styles.forecastIconText}>{getWeatherIcon(forecast.weather[0].icon)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// Main App Component
export default function App() {
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchWeatherData = useCallback(async () => {
    try {
      setLoading(true);
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const weatherData = await WeatherService.fetchWeather(latitude, longitude);
      setWeatherData(weatherData);
    } catch (error) {
      setError('Error fetching weather data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchWeatherData();
    setRefreshing(false);
  }, [fetchWeatherData]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <View style={styles.forecastContainer}>
          <Text style={styles.cityName}>{weatherData.city.name}</Text>
          {weatherData.list.filter((_, index) => index % 8 === 0).map((forecast, index) => (
            <ForecastCard key={index} forecast={forecast} />
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const getDayOfWeek = (dt) => {
  const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const date = new Date(dt * 1000);
  return days[date.getDay()];
};

const getWeatherIcon = (iconCode) => {
  switch (iconCode) {
    case '01d':
      return '☀️';
    case '01n':
      return '🌙';
    case '02d':
    case '02n':
      return '⛅';
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return '☁️';
    case '09d':
    case '09n':
      return '🌧️';
    case '10d':
    case '10n':
      return '🌦️';
    case '11d':
    case '11n':
      return '⚡';
    case '13d':
    case '13n':
      return '❄️';
    case '50d':
    case '50n':
      return '🌫️';
    default:
      return '❓';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  forecastContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  forecastCard: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forecastDate: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '25%',
  },
  forecastDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '75%',
  },
  forecastTemp: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '40%',
    textAlign: 'right',
    marginRight: 12,
  },
  forecastWeather: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
  },
  forecastDescription: {
    fontSize: 14,
    marginRight: 6,
  },
  forecastIcon: {
    backgroundColor: '#ccc',
    borderRadius: 50,
    padding: 6,
  },
  forecastIconText: {
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});