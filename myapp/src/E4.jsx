function E4(){
    const student = [
        {id:1,name:"abc",marks:30},
        {id:2,name:"pqr",marks:40},
        {id:3,name:"xyz",marks:50}
    ]
    return(
        student.filter((s)=>s.marks>30).map((s)=><h1 key={s.id}>{s.name}</h1>)
    )
}

export default E4;
