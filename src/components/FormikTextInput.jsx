import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.error
  },
  errorInput: {
    borderColor: theme.colors.error
  }
});

const FormikTextInput = ({name, ...props}) => {
  const [field,meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const inputStyle = [
    props.style,
    showError && styles.errorInput
  ]
  return(
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={inputStyle}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
};

export default FormikTextInput;