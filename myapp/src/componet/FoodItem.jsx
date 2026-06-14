const items = [
  {
    id: 1,
    name: 'Margherita Pizza',
    price: '$12',
    img: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'Veg Burger',
    price: '$8',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    name: 'Pasta',
    price: '$10',
    img: 'https://images.unsplash.com/photo-1521389508051-d7ffb5dc8c2f?auto=format&fit=crop&w=500&q=80',
  },
];

function FoodItem() {
  return (
    <div>
      <h2>Food Items</h2>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <img
            src={item.img}
            alt={`${item.name}`}
            style={{ width: '200px', height: 'auto' }}
          />
        </div>
      ))}
    </div>
  );
}

export default FoodItem;
