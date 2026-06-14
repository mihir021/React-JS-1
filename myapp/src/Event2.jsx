function Event2() {
        function handleclick() {
            alert("Button Clicked");
        }
        return (
           <>
             <h1>Event</h1>
             <button onDoubleClick={handleclick}>Click Me</button>
           </>
           
        );
}

export default Event2;