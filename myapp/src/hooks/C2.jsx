import {useContext} from 'react';
import { Fname,Lname } from './task1';

function UC2() {
  return (
    <>
      <h1>UC2 Component</h1>
      <h2>My name is {useContext(Fname)} {useContext(Lname)}</h2>
    </>
  );
}

export default UC2;