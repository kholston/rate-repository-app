import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5
  }
});

const FormikTextInput = ({name, ...props}) => {
  const [field,meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return(
    <>
      <TextInput
        onChange={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      >
        {showError && <Text style={styles.errorText}>{meta.error}</Text>}
      </TextInput>
    </>
  )
};

export default FormikTextInput;