import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home';
import RepetitionExercise from './src/components/RepetitionExercise';
import DurationExercise from './src/components/DurationExercise';
import DistanceExercise from './src/components/DistanceExercise';

const Stack = createNativeStackNavigator();

export default function App() {
  const exercises = [
    {name: "Push Ups", type: "repetition", suggested: "Stairmaster"},
    {name: "Squats", type: "repetition", suggested: "Push Ups"},
    {name: "Planks", type: "duration", suggested: "Squats"},
    {name: "Running", type: "duration", suggested: "Planks"},
    {name: "Stairmaster", type: "distance", suggested: "Running"},
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <Home {...props} exercises={exercises} />}
        </Stack.Screen>
        <Stack.Screen name="Repetition" component={RepetitionExercise} />
        <Stack.Screen name="Duration" component={DurationExercise} />
        <Stack.Screen name="Distance" component={DistanceExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

