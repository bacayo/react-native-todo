import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aed854',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  // taskBtn: {
  //   backgroundColor: '#aed854',
  //   padding: 10,
  //   margin: 10,
  //   borderRadius: 10,
  // },
  task: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#0f131a',
  },
  containerIsCompleted: {
    backgroundColor: '#8a9199cc',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  taskCompleted: {
    color: '#0f131a',
    textDecorationLine: 'line-through',
    fontFamily: 'Roboto-Italic',
    textAlign: 'center',
  },
});
