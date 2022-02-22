import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(LOGIN)

  const signIn = async({username, password}) => {
    const response = await mutate({
      variables:{
        credentials: {
          username,
          password
        }
      }
    })

    return response;
  };

  return [signIn, result]
}

export default useSignIn