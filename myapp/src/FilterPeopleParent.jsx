// propes + filter + map 

// write a program to create functional based react js app 
// having array of 6 pepoles having age [70,83,38,65,49,94]
// and display list of people who age is greater than 60 using filter method and display total count of people whose age is greater than 60 on the same page in h1 tag using props

import Props1 from './FilterPeopleChild';

function T11() {
    const people = [
        { name: "John", age: 70 },
        { name: "Jane", age: 83 },
        { name: "Doe", age: 38 },
        { name: "Smith", age: 65 },
        { name: "Emily", age: 49 },
        { name: "Michael", age: 94 }
    ];

  
  return (
    <>
      <Props1 people={people} />
    </>
  )
}

export default T11