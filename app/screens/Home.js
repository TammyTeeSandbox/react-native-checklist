import React, {useState, useCallback} from 'react';
import {View, TextInput, Button, FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addGoal} from '../redux/goal';
import Goal from '../components/Goal';

export default function Home() {
  const [goal, setGoal] = useState('')
  const dispatch = useDispatch()
  const goals = useSelector(state => state.goals)

  const handleButtonPress = useCallback(() => {
    dispatch(addGoal(goal))
    setGoal('')
  })

  return (
    <>
      <View style={styles.formWrapper}>
        <TextInput 
          style={styles.input}
          placeholder="Goal to add."
          onChangeText={(value) => setGoal(value)}
          value={goal}
        />
        <Button title="Add" onPress={handleButtonPress} />
      </View>

      <View style={styles.goalList}>
        <FlatList
          data={goals}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Goal item={item} />} 
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  input: {
    borderColor: '#efefef',
    borderWidth: 1,
    height: 40,
    padding: 10,
    width: '80%',
  },

  button: {
    backgroundColor: '#ff0000',
  },

  goalList: {
    paddingBottom: 20,
    paddingTop: 20,
  }
});