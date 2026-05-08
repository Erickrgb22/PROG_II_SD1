import { useEffect, useState } from 'react';
import axios from 'axios';

const Ejercicio2 = () => {
  const [data, setData] = useState<{ generos: string[], paises: string[] }>({ generos: [], paises: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtenemos los Enums de TypeScript desde el Backend
    axios.get('http://localhost:3001/api/peliculas')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando datos desde el servidor...</p>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Ejercicio 2: TypeScript Enums</h1>
      <p>Estos datos provienen de enumeraciones (enums) definidas en el Backend:</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '30px' }}>
        <div>
          <h3>Géneros</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {data.generos.map((g, i) => (
              <li key={i} style={{ padding: '5px', backgroundColor: '#eef', margin: '5px 0', borderRadius: '4px' }}>
                {g}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Países</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {data.paises.map((p, i) => (
              <li key={i} style={{ padding: '5px', backgroundColor: '#efe', margin: '5px 0', borderRadius: '4px' }}>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ejercicio2;
