import { useState } from "react";
import { useEffect } from "react";
import {View, Text} from 'react-native';
import { Button } from '@rneui/themed';
import styles from '../styles';

export default function DurationExercise({route, navigation}) {
  const {exercise, exercises} = route.params;
  const [secs, setSecs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {

    if(!isRunning) return; 

      const interval = setInterval(() => setSecs(priorSecs => priorSecs + 1),1000);
    
    return () => clearInterval(interval);
    }, [isRunning]);
  
    const mins = Math.floor(secs / 60).toString().padStart(2,0);
    const secondsDisplay = (secs % 60).toString().padStart(2,0);
  
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
    <View>
      <Text>{exercise.name}</Text>
      <Text>{secs} seconds</Text>
    
      <Button title="Start" onPress={() => setIsRunning(true)}/>
      <Button title="Reset" onPress={() => {
        setIsRunning(false);
        setSecs(0);
      }}/>
      <Button title="Suggested Exercise" onPress={goToSuggested}/>
      <Button title="Home" onPress={() => navigation.navigate("Home")}/>
    </View>
  );
}