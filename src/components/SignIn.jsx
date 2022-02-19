import { View, Pressable, StyleSheet } from 'react-native';
import {object, string,} from 'yup';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    padding: 10,
  },
  textInput: {
    marginTop: 10,
    padding: 10,
    flexGrow: 1,
    borderWidth: 1,
    borderRadius: 5

  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 5
  },
  buttonText: {
    textAlign:'center',
    color: theme.colors.lightText,
    fontSize: theme.fontSizes.subheading,
    fontWeight:theme.fontWeights.bold
  }
})

const validationSchema = object().shape({
  username: string().required('Username is required'),
  password: string().required('Password is required'),
})

const SignInForm = ({onSubmit}) => {
  return(
    <View style={styles.container}>
      <FormikTextInput name='username' placeholder='Username' style={styles.textInput}/>
      <FormikTextInput name='password' placeholder="Password" style={styles.textInput} secureTextEntry/>
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  )
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(`Username: ${values.username} Password: ${values.password}`)
  }

  const initialValues={
    username: '',
    password: ''
  }

  return(
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({handleSubmit}) => <SignInForm onSubmit={handleSubmit}/>}
    </Formik>
  );
};

export default SignIn