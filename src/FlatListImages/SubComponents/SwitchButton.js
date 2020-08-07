import React from 'react';
import {View, Text} from 'react-native';

const SwitchButton = ({data = [], selected, onChange = () => {}}) => {
  return (
    <View style={[[{flexDirection: 'row', justifyContent: 'flex-start'}]]}>
      {data.map(({label, value}) => {
        return (
          <Text
            key={value}
            style={[
              {
                color: selected === value ? 'black' : 'silver',
                marginLeft: 40,
                fontSize: 16,
                fontWeight: 'bold',
              },
            ]}
            onPress={() => {
              if (value === selected) {
                return;
              }
              onChange(value);
            }}>
            {label}
          </Text>
        );
      })}
    </View>
  );
};

export default SwitchButton;
