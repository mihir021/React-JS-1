function Contact(props) {
  return (
    // prints the data in table formet 
    <div>
        <h2>Contact Information</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {props.contactData.map((contact, index) => (
                    <tr key={index}>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default Contact;