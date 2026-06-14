// we have applied filter to skip digits which are less than 10 
// from the array and display all remaining digits of the array
// pass values as props

import T7C from './FilterDigitsChild';

function T7(){
    const digits = [3,5,11,4,17,8,21,2,26,13,8]
    return(
        <>
            <T7C digits={digits}/>
        </>
    )
}

export default T7;