import React, {useState} from 'react';
import {Radio, ListItem, Body, Text} from 'native-base';

const BooleanItem = (props) => {
  const [selected, setSelected] = useState(props.selected);
  return (
    <ListItem noIndent>
      <Radio selected={selected} onPress={() => setSelected(!selected)} />
      <Body>
        <Text>Option 1</Text>
      </Body>
    </ListItem>
  );
};

export default BooleanItem;
