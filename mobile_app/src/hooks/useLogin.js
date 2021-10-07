import { useState } from "react";
import api_name from '../api/api_name'

export default () => {

    const [errorMsg, setErrorMsg] = useState('');
    const [errorType, setErrorType] = useState('');

    const authenticateAPI = async (login, password) => {
        console.log(login);
        console.log(password);
        try {
          const response = await api_name.get('/auth', {
            params: {
              login: login,
              password: password
            }
          });
        } catch (err) {
          setErrorMsg('Bora trabalhar, @Back');
          setErrorType('login');
        }
      };

    return [errorMsg, errorType, authenticateAPI];
}
