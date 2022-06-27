import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TaskCard.Style';

const TaskCard = ({task, isCompleted}) => {
  return isCompleted ? (
    <View style={styles.containerIsCompleted}>
      <Text style={styles.taskCompleted}>{task.title}</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.task}>{task.title}</Text>
    </View>
  );
};
export default TaskCard;
