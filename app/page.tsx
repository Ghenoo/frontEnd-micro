import { fetchData } from '../services/api';

interface Item {
  id: number;
  name: string;
}

const Home = async () => {
  const items: Item[] = await fetchData();

  return (
    <div>
      <h1>Lista de Itens</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;