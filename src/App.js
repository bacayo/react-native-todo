import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import HeaderSection from './components/HeaderSection';
import TaskCard from './components/TaskCard';
import ButtonCard from './components/ButtonCard/';

const App = () => {
  const [counter, setCounter] = React.useState(0);
  const [task, setTask] = React.useState([]);

  console.log(task);

  React.useEffect(() => {
    const newTask = task.filter(item => item.isCompleted === false);
    const taskLength = newTask.length;
    setCounter(taskLength);
  }, [task]);

  //delete task
  const deleteTask = item => {
    setTask(task.filter(taskItem => taskItem !== item));
  };

  //onpress change text
  const onPress = itemID => {
    const newTask = task.map(taskItem => {
      if (taskItem.id === itemID) {
        return {...taskItem, isCompleted: true};
      }
      return taskItem;
    });
    setTask(newTask);
  };

  // const renderList = ({item}) => <TaskCard task={item} />;
  const renderList = ({item}) => (
    <TouchableOpacity
      onLongPress={() => deleteTask(item)}
      onPress={() => onPress(item.id)}
      style={styles.taskBtn}>
      <TaskCard task={item} isCompleted={item.isCompleted} />
    </TouchableOpacity>
  );

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
});
