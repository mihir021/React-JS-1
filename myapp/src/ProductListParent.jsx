// biled a react app that display list of the product 
// using propes
// 1> creata a product card componet to show the product detiles like title and price and rating and img 
// 2> use a product list componet to store product data and display multiple card componets using map +  propes

import T8C from './ProductListChild';
import img1 from './assets/p1.jpeg';
import img2 from './assets/p2.png';

function T8(){
    const product = [
        {id:1,title:"ipad",price:50000,rating:4.5,img:img1},
        {id:2,title:"i pencil",price:10000,rating:4.8,img:img2},
    ]
    return(
        <>
         <T8C product={product}/>
        </>
    )
}

export default T8;
