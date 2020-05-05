import React from 'react';
import { View } from 'react-native';

export default function CheckBox(props) {
  return (
    <View
      style={[
        {
          height: 20,
          width: 20,
          borderWidth: 1,
          borderColor: '#ccc',
          alignItems: 'center',
          justifyContent: 'center',
        },
        props.style,
      ]}
    >
      {props.selected ? (
        <View
          style={{
            height: 16,
            width: 16,
            backgroundColor: '#99bb00',
          }}
        />
      ) : null}
    </View>
  );
};