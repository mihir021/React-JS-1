// craete a react app using props to pass the an object from one componet to another comonet
// 1> creat a parent componet task3.jsx
// 2> creat an  obj named student details its contains student name branch and student uni name 
// 3> pass the detiles obj to chiled componet Task4C.jsx using props 
// 4> in child componet resive the obj using the propes dispal nam ebranch an duni name in H6 tag 


import Example2 from './StudentDetailsChild'

function Example1() {
  const data = {
    name: "mihir",
    branch: "computer science",
    uniName: "Gujarat University",
  }
  return (
    <>
        <Example2 data={data} />
    </>
  )
}

export default Example1