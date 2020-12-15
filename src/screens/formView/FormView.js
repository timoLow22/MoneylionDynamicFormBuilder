import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import {useSelector} from 'react-redux';

import FormInput from './components/FormInput';

const FormView = () => {
  const formEntrySelector = useSelector(
    (state) => state.formCreatorReducer.formEntries,
  );

  return (
    <Container>
      <Content>
        {formEntrySelector.map((entry, index) => {
          return <FormInput key={index} name={entry.name} type={entry.type} />;
        })}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default FormView;
