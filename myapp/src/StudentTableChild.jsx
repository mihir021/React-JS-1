function S2(props) {
  return (
    <>
       <table border="1">
         <thead>
           <tr>
             <th>Name</th>
             <th>Roll Number</th>
             <th>Test 1</th>
             <th>Test 2</th>
           </tr>
         </thead>
         <tbody>
           <tr>
                <td>{props.data.s_name[0]}</td>
                <td>{props.data.s_roll[0]}</td>
                <td>{props.data.s_t1[0]}</td>
                <td>{props.data.s_t2[0]}</td>
           </tr>
           <tr>
                <td>{props.data.s_name[1]}</td>
                <td>{props.data.s_roll[1]}</td>
                <td>{props.data.s_t1[1]}</td>
                <td>{props.data.s_t2[1]}</td>
           </tr>
         </tbody>
       </table>

    </>
  )
}

export default S2