import React, { useReducer, useContext, createContext } from 'react';
const Context = createContext();
const initialState = {
  cart: {},
};

export function useGlobalContext() {
  const [state, dispatch] = useContext(Context);
  if (!state || !dispatch) {
    throw new Error('useGlobalContext must used within Provider');
  }
  return { state, dispatch };
}
function Reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: state.cart
          ? { ...state.cart, [action.item.id]: action.item }
          : {
              [action.item.id]: action.item,
            },
      };
    case 'REMOVE_CART':
      console.log(action);
      return {
        ...state,
        cart: Object.keys(state.cart)
          .filter((key) => +key !== +action.id)
          .reduce((acc, key) => {
            const item = state.cart[key];
            acc[item.id] = item;
            return acc;
          }, {}),
      };
    case 'RESET_CART':
      return {
        ...state,
        cart: initialState.cart,
      };

    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
}
export default function Provider(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  // console.log(state);
  return (
    <Context.Provider
      value={[state, dispatch]}
      {...props}
    />
  );
}
