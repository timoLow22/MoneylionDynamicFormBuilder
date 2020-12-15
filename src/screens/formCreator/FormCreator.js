import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Container, Content, Picker, Button, Text} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';

import {push} from '../../navigator/navigationServices';
import EntryListItem from './components/EntryListItem';
import {addEntry} from './reduxConfigs/formCreatorActionCreators';

const FormCreator = () => {
  const dispatch = useDispatch();
  const [fieldName, setFieldName] = useState('');
  const [fieldType, setFieldType] = useState('text');
  const [option, setOption] = useState('');
  const entryBody = {
    id: Math.floor(Math.random() * 10000),
    name: fieldName,
    type: fieldType,
  };

  const formEntrySelector = useSelector(
    (state) => state.formCreatorReducer.formEntries,
  );

  return (
    <Container>
      <Content>
        {/* Field entry input area */}
        <View style={styles.formEntryContainer}>
          <TextInput
            placeholder={'Untitled Input'}
            style={styles.fieldNameInput}
            value={fieldName}
            onChangeText={(input) => setFieldName(input)}
          />
          <Picker
            mode="dropdown"
            selectedValue={fieldType}
            onValueChange={(value) => setFieldType(value)}>
            <Picker.Item label="Text" value="text" />
            <Picker.Item label="Number" value="number" />
            <Picker.Item label="Boolean" value="boolean" />
            <Picker.Item label="CheckBox" value="checkbox" />
          </Picker>
        </View>
        {/* End field entry input area */}

        <View style={styles.buttonContainer}>
          <Button
            danger
            onPress={() => {
              setFieldName('');
              setFieldType('text');
            }}>
            <Text>Clear</Text>
          </Button>
          <Button
            disabled={!fieldName}
            style={{backgroundColor: fieldName ? '#2ECFBF' : '#bdbdbd'}}
            onPress={() => dispatch(addEntry(entryBody))}>
            <Text>Add Entry</Text>
          </Button>
        </View>
        <ScrollView>
          {formEntrySelector === undefined || formEntrySelector.length === 0 ? (
            <Text style={styles.emptyEntryText}>Add an entry to your form</Text>
          ) : (
            formEntrySelector.map((entry, index) => {
              return (
                <EntryListItem
                  key={index}
                  id={entry.id}
                  name={entry.name}
                  type={entry.type}
                />
              );
            })
          )}
        </ScrollView>
      </Content>
      <View style={styles.footerButtonContainer}>
        <TouchableOpacity
          style={
            formEntrySelector.length === 0
              ? styles.buttonStyleInactive
              : styles.buttonStyleActive
          }
          disabled={formEntrySelector.length === 0}
          onPress={() => push('FormView')}>
          <Text style={styles.buttonText}>Generate Form</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  formEntryContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 16,
    margin: 16,
  },
  fieldNameInput: {
    flex: 1,
    borderRightWidth: 1,
    paddingHorizontal: 16,
  },
  optionInputContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 8,
    borderWidth: 1,
  },
  optionInputField: {
    flex: 1,
    paddingHorizontal: 16,
  },
  addOptionButton: {
    borderWidth: 1,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  emptyEntryText: {
    paddingHorizontal: 16,
    fontSize: 16,
  },
  footerButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonStyleInactive: {
    backgroundColor: '#bdbdbd',
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  buttonStyleActive: {
    backgroundColor: '#2ECFBF',
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FormCreator;
