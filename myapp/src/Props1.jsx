
// creat a react app using propes to display the students detailes 
// reqirments 
// 1. create a parent component and name Prop1.jsx
// 2. pass the following data to the child component named Pros2.jsx using props
// 3. data : Student name, roll number , marks
// 4. in child component display student details and incress the marks by 1 and display the new marks 

import Props2 from './Props2'

function Props1() {
  return (
    <>
        <Props2 name="mihir" rollNumber="7" marks={90}/>
    </>
  )
}

export default Props1