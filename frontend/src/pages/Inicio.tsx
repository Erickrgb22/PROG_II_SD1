import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Inicio = () => {
  const [animal, setAnimal] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!animal) return alert("Escribe algo");

    try {
      // Enviamos el dato al backend (Node intercepta vía POST)
      const res = await axios.post('http://localhost:3001/api/animal', { nombre: animal });
      
      // Navegamos a la otra página pasando el dato interceptado
      navigate('/resultado', { state: { nombre: res.data.animal } });
    } catch (error) {
      console.error(error);
      alert("Error al conectar con el backend. ¿Está encendido?");
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Ejercicio 1: Animal Favorito</h1>
      <p>Introduce el nombre de tu animal favorito para enviarlo al servidor:</p>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <input 
          type="text" 
          value={animal} 
          onChange={(e) => setAnimal(e.target.value)}
          placeholder="Ej: León"
          style={{ padding: '8px', fontSize: '1rem' }}
        />
        <button type="submit" style={{ marginLeft: '10px', padding: '8px 16px' }}>
          Enviar al Servidor
        </button>
      </form>
    </div>
  );
};

export default Inicio;
