import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import CheckBoxItem from '../components/CheckBoxItem';
import BooleanItem from '../components/BooleanItem';

const FormInput = (props) => {
  return (
    <View style={styles.formInputContainer}>
      <View style={styles.fieldNameContainer}>
        <Text style={styles.fieldNameText}>{props.name}</Text>
      </View>
      {props.type === 'text' || props.type === 'number'
        ? renderTextField(props.type)
        : renderOptions(props.type)}
    </View>
  );
};

const renderTextField = (type) => {
  return (
    <TextInput
      style={styles.textInputStyle}
      keyboardType={type === 'text' ? 'default' : 'number-pad'}
    />
  );
};

const renderOptions = (type) => {
  if (type === 'checkbox') {
    return <CheckBoxItem checked={false} />;
  } else {
    return <BooleanItem selected={false} />;
  }
};
const styles = StyleSheet.create({
  formInputContainer: {
    margin: 16,
  },
  fieldNameContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 8,
  },
  fieldNameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInputStyle: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
});

export default FormInput;
