import React, {useState} from 'react';
import {CheckBox, ListItem, Body, Text} from 'native-base';

const CheckBoxItem = (props) => {
  const [checked, setChecked] = useState(props.checked);
  return (
    <ListItem noIndent>
      <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
      <Body>
        <Text>Option 1</Text>
      </Body>
    </ListItem>
  );
};

export default CheckBoxItem;
