import React from 'react';
import {View, FlatList} from 'react-native';
import { Button } from '@rneui/themed';
import styles from '../styles';

export default function Home ({ navigation, exercises}) {

  return (
    <View style={{flex: 1, padding: 20 }}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Button 
            title={item.name}

              onPress={() => {
                if (item.type === "repetition") {
                  navigation.push("Repetition", {
                    exercise: item, exercises
                  });
                } else if (item.type === "duration") {
                  navigation.push("Duration", {
                    exercise: item, exercises
                  });
                } else {
                  navigation.push("Distance", {
                    exercise: item, exercises
                  });
                }  
              }} 
            />
          )}
         />
        </View>
      );
    }