import React, { createContext, useReducer, } from 'react';
import instance from '../api/apiConfig';

const initialState = {
  saveUser: () => {},
  users: [],
  user: undefined,
  alert: '',

};

const appReducer = (state: any, action: any) => {
  //   debugger;
  switch (action.type) {
    case 'GET_USERS':
      // when a case matches, the return will update the state for us
      return { ...state, users: action.payload };  
    default:
      return state;
  }
};

export const GlobalContext = createContext<InitialStateType>(initialState);

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);



  const saveUser = async (user: User) => {
    try {
      let { data } = await instance.post('/user', user);
      dispatch({ type: 'ALERT' });
      setTimeout(() => {
        dispatch({ type: 'SAVE_USER' });
      }, 2000);
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <GlobalContext.Provider
      value={{
        saveUser,
        user: state.user,
        alert: state.alert,
        users: state.users,
      }}>
        {children}
    </GlobalContext.Provider>
  );
};