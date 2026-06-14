function Event() {
    function handleclick(e) {
        console.log(e.target.value);
    }
    return (
       <>
       <input type="text" name="fname" onChange={handleclick} />
       </>
       
    );
}

export default Event;