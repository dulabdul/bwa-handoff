import { useState } from 'react';

export default function useForm(initialState) {
  const [state, setState] = useState(initialState);

  function fnUpdateState(e) {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return { state, fnUpdateState };
}
