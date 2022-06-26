import React from 'react';
import {View, Text} from 'react-native';
import styles from './HeaderSection.Style';

const HeaderSection = ({counter}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo's</Text>
      <Text style={styles.counter}>{counter}</Text>
    </View>
  );
};
export default HeaderSection;
