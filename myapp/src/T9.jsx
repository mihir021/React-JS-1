// this file resive two props product name and prise 
// the componet shode display the product name and price in table form 
// add a btn (addToCart) to the componet when the btn is click onclick event trigger
// and alert shode be displayed with the msg your product is added to cart

import T9C from './T9C';

function T9() {
    // add more product 
    const product = {
        p1: {
            name: "Iphone 14 Pro Max",
            price: 120000
        },
        p2: {
            name: "Samsung Galaxy S23 Ultra",
            price: 110000
        }
    }
    return (
         <>
            <T9C product={product} />
        </>
       
    );
}

export default T9;