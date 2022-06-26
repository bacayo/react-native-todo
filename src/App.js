import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import HeaderSection from './components/HeaderSection';
import TaskCard from './components/TaskCard';
import ButtonCard from './components/ButtonCard/';

const App = () => {
  const [counter, setCounter] = React.useState(0);
  const [task, setTask] = React.useState([]);

  console.log(task, task.length);
  React.useState(() => {
    const taskLength = task.length;
    setCounter(taskLength);
  }, [task]);

  const renderList = ({item}) => <TaskCard task={item}></TaskCard>;

  return (
    <View style={styles.container}>
      <HeaderSection counter={counter} />
      <FlatList data={task} renderItem={renderList} />
      <ButtonCard task={task} setTask={setTask} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1017',
  },
  taskBtn: {
    backgroundColor: '#aed854',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
