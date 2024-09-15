import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'; // Use a URL da variável de ambiente ou uma URL padrão para desenvolvimento

interface Item {
    id: number;
    name: string;
}

export const fetchData = async (): Promise<Item[]> => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data as Item[];
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        return [];
    }
};
