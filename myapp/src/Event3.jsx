function Event3() {
    function handleSubmit(event) {
        event.preventDefault();
        alert("Form submitted!");
    }
    return (
        <div>
            <h1>Event Handling in React</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Event3;