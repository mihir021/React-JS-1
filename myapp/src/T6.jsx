// creat a react componet thats contains array of the obj named student 
// with the properties id,name,standerd
// perform filter operation and map
// 1> display only student whoses standerd is 5
// 2> incress there standerd by 1 and display student name uppercase

function T6(){
    const student = [
        {id:1,name:"abc",standerd:5},
        {id:2,name:"pqr",standerd:6},
        {id:3,name:"xyz",standerd:5}
    ]
    return(
        <>
        {
            student.filter((s)=>
                s.standerd==5).map((s)=><h1 key={s.id}>{s.name}</h1>
            )
        }
        
        <br />

        {
            student.map((s)=>
                <h1 key={s.id}>{s.name.toUpperCase()} {s.standerd+1}</h1>
            )   
        }
        </>
    )
}

export default T6;