import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const addToCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>
        {inCart ? "Remove From Cart" : "Add To Cart"}
      </button>
    </li>
  );
}

export default Item;





// import React, { useState } from "react";

// function Item({ name, category }) {
//   const [inCart, setClassName] =useState(false)

//   const addToCart= () => {
//     setClassName(() => !inCart)
//   }
//   return (
//     <li className={inCart ? 'in-cart' : ''}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className="add" onClick={addToCart}>
//         {inCart ? 'Remove From Cart' : 'Add To Cart'}
//         </button>
//     </li>
//   );
// }

// export default Item;
