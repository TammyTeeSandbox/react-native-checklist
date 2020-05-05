import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {removeGoal} from '../redux/goal';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import CheckBox from './ui/CheckBox';

export default function Goal({item}) {
  const [completed, setCompleted] = useState(false)
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => setCompleted(!completed)}>
          <CheckBox selected={!!completed} />
        </TouchableOpacity>
  
        <Text style={[
          styles.item, 
          {textDecorationLine: completed ? 'line-through' : 'none'}
        ]}>{item}</Text>
      </View>

      <TouchableOpacity onPress={() => dispatch(removeGoal(item))}>
        <Text style={styles.delete}>x</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingTop: 15,
  },

  item: {
    marginLeft: 15,
    width: '80%'
  },

  checkbox: {
    borderColor: '#ccc',
    height: 20,
    width: 20,
  },

  delete: {
    color: 'gray',
    fontFamily: 'Avenir-Light',
    fontSize: 16,
    lineHeight: 0,
    fontWeight: '100'
  }
})
