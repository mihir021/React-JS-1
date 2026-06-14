function Event() {
    function handleclick() {
        alert("Button Clicked");
    }
    return (
       <>
         <h1>Event</h1>
         <button onClick={handleclick}>Click Me</button>
       </>
       
    );
}

export default Event;