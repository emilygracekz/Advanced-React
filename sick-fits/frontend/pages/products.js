import Products from '../components/Products';
import CreateProduct from '../components/CreateProduct';

export default function OrderPage() {
  return (
    <div>
      <p>Products</p>
      <Products />
      <CreateProduct />
    </div>
  );
}
