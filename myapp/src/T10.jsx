// create a component to perform the task as asked below:
// 1. add a text field and submit button
// while changing the value in text field display it below the field in <p>
// display this text field value in an alert box when submitting it
// 2. add a button to perform click and double click event task
// on onClick event display msg in <h3> "You clicked once"
// on onDoubleClick event display msg in <h3> "You double clicked" msg should be display below the button
// DOM methods + events

function Task10(){
    function handlechange(e){
        document.getElementById("display").innerText=e.target.value
    }
    function handlesubmit(e){
        e.preventDefault()
        alert(document.getElementById("display").innerText)
    }
    function handleclick(){
        document.getElementById("msg").innerText="You clicked once"
    }
    function handledoubleclick(){
        document.getElementById("msg").innerText="You double clicked"
    }
    return(
        <>
            <form onSubmit={handlesubmit}>
                <input type="text" onChange={handlechange} />
                <p id="display"></p>
                <button type="submit">Submit</button>
            </form>
            <button onClick={handleclick} onDoubleClick={handledoubleclick}>
                Click or Double Click
            </button>
            <h3 id="msg"></h3>
        </>
    )
}
export default Task10