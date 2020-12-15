import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import {useDispatch} from 'react-redux';

import {deleteEntry} from '../reduxConfigs/formCreatorActionCreators';

const EntryListItem = (props) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.entryListContainer}>
      <View style={styles.entryInfoContainer}>
        <Text>Field Name: {props.name}</Text>
        <Text>Field Type: {props.type}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButtonStyle}
        onPress={() => dispatch(deleteEntry(props.id))}>
        <Icon style={styles.deleteIconStyle} type="AntDesign" name="delete" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  entryListContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
  },
  entryInfoContainer: {
    flex: 2,
  },
  deleteButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  deleteIconStyle: {
    color: 'red',
  },
});

export default EntryListItem;
