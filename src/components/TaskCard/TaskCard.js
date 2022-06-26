import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TaskCard.Style';

const TaskCard = ({task}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.taskBtn}>
        <Text style={styles.task}>{task.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TaskCard;
