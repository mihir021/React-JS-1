import {useContext} from 'react';
import { Fname } from './UC';

function UC2() {
  return (
    <>
      <h1>UC2 Component</h1>
      <h2>My name is {useContext(Fname)}</h2>
    </>
  );
}

export default UC2;