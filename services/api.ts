import axios from 'axios';

const API_URL = 'http://localhost:8080';

interface Item {
    id: number;
    name: string;
  }
  
  export const fetchData = async (): Promise<Item[]> => {
    try {
      const response = await axios.get(`${API_URL}/data`);
      return response.data as Item[]; 
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return [];
    }
  };