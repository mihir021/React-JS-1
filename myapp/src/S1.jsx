import S2 from './S2'

function S1() {
    const data = {
        s_name:["s1","s2"],
        s_roll:[13,14],
        s_t1:[90,80],
        s_t2:[90,80]
    };
    return (
    <>
        <S2 data={data}/>
    </>
  )
}

export default S1