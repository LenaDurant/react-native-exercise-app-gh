import React, { useState } from "react";
import {View, Text} from 'react-native';
import { Button } from '@rneui/themed';
import styles from '../styles';

export default function RepetitionExercise ({route, navigation}) {

  const {exercise, exercises} = route.params;
  const [count, setCount] = useState(0);

  let goToSuggested = () => {
    const next = exercises.find(e => e.name === exercise.suggested);
    if (next.type === "repetition"){
      navigation.push("Repetition", {exercise: next, exercises});
    } else if (next.type === "distance") {
      navigation.push("Distance", {exercise: next, exercises});
    } else {
      navigation.push("Duration", {exercise: next, exercises});
    }
  };

  return (
    <View>
      <Text>{exercise.name}</Text>
      <Text>{count}</Text>

      <Button title="Add a Rep" onPress={() => setCount(count + 1)}/>
      <Button title="Reset" onPress={() => setCount(0)}/>
      <Button title="Suggested Exercise" onPress={goToSuggested}/>
      <Button title="Home" onPress={() => navigation.navigate("Home")}/>
    </View>
  );
}