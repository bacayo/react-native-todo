import React from 'react';
import {View, Button, TextInput, Alert, Keyboard} from 'react-native';
import styles from './ButtonCard.Style';

const ButtonCard = ({task, setTask}) => {
  // keep tracking of text
  const [taskValue, setTaskValue] = React.useState('');

  const handleSubmit = item => {
    // check task is empty or not
    if (item === '') {
      return Alert.alert('task cannot be empty');
      // check if task is already exist
    } else if (task.some(taskItem => taskItem.title === item)) {
      return Alert.alert('This task already exist');

      // create new task with id, title
    } else {
      const newTask = {
        id: new Date().getTime().toString(),
        title: taskValue,
        isCompleted: false,
      };

      setTask([...task, newTask]);
      setTaskValue('');
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.txtInput}
        placeholder="+ Add here the task you will focus on"
        onChangeText={setTaskValue}
        value={taskValue}
      />
      <View style={styles.sepLine} />
      <View style={styles.innerContainer}>
        <Button title="Add task" onPress={() => handleSubmit(taskValue)} />
      </View>
    </View>
  );
};

export default ButtonCard;
