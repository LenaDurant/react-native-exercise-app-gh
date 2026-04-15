import { useState } from "react";
import {View, Text} from 'react-native';
import { Button } from '@rneui/themed';
import styles from '../styles';

export default function DistanceExercise({route, navigation}) {
  const {exercise, exercises} = route.params;
  const [steps, setSteps] = useState(0);
  const steppingDistance = 0.761;
  const distance = (steps * steppingDistance).toFixed(2);
  
  const goToSuggested = () => {
    const next = exercises.find(e => e.name === exercise.suggested);
    
      if (next.type === "repetition") {
        navigation.push("Repetition", {exercise: next, exercises});
      } else if (next.type === "distance") {
       navigation.push("Distance", {exercise: next, exercises});
      } else {
        navigation.push("Duration", {exercise: next, exercises});
      }
  };
  
  return (
    <View style= {{padding: 20}}>
      <Text style={{fontSize: 24}}>{exercise.name}</Text>
      <Text style={{fontSize: 20}}>{steps} Steps</Text>
      <Text style={{fontSize: 20}}>{distance} meters</Text>
    
      <Button title="Add a Step" onPress={() => setSteps(steps + 1)}/>
      <Button title="Reset" onPress={() => setSteps(0)}/>
      <Button title="Suggested Exercise" onPress={goToSuggested}/>
      <Button title="Home" onPress={() => navigation.navigate("Home")}/>
    </View>
  );
}