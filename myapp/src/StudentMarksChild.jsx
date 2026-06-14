function Props2(props) {
  return (
    <>
        <h2> name: {props.name}</h2>
        <h2> roll number: {props.rollNumber}</h2>
        <h2> marks: {props.marks}</h2>
        <h2> new marks: {props.marks + 1}</h2>

    </>
  )
}

export default Props2