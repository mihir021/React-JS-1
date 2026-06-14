// this file resive two props product name and prise 
// the componet shode display the product name and price in table form 
// add a btn (addToCart) to the componet when the btn is click onclick event trigger
// and alert shode be displayed with the msg your product is added to cart

function T9C(props) {
    function handleclick() {
        alert("Your product is added to cart");
    }
    return (
       <>
       <table border={"1"}>
         <tr>
           <th>Product Name</th>
           <th>Price</th>
         </tr>
          {Object.values(props.product).map((p) => (
            <tr>
              <td>{p.name}</td>
              <td>{p.price}</td>
            </tr>
          ))}
       </table>
        <button onClick={handleclick}>Add To Cart</button>
       </>
       
    );
}

export default T9C;