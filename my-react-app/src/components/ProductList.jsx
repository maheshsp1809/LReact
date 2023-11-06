export default function ProductList(props) {
  return (
    <ul>
      {props.products.map((product) => (
        <li key={product.id}>
          {product.name}-${product.price}
        </li>
      ))}
    </ul>
  );
}
