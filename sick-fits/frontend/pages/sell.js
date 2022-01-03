import { useState } from 'react';

import CreateProduct from '../components/CreateProduct';

export default function SellPage() {
  const [name, setName] = useState('Wes');

  return (
    <div>
      <CreateProduct />
    </div>
  );
}
