function T11C(props) {
    const filteredPeople = props.people.filter(person => person.age > 60);
    const count = filteredPeople.length;

    return (
        <div>
            <h1>Total Count: {count}</h1>
            <ul>
                {filteredPeople.map((person) => (
                    <li>{person.name} - Age: {person.age}</li>
                ))}
            </ul>
        </div>
    );
}

export default T11C;