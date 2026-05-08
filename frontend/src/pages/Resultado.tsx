import { useLocation, Link } from 'react-router-dom';

const Resultado = () => {
  const location = useLocation();
  // Recuperamos el nombre que vino del backend a través del estado de la navegación
  const { nombre } = location.state || { nombre: 'Desconocido' };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Vista de Resultado</h1>
      <div style={{ 
        padding: '2rem', 
        border: '2px solid #aa3bff', 
        borderRadius: '10px', 
        display: 'inline-block',
        marginTop: '20px'
      }}>
        <h2>¡Intercepción Exitosa!</h2>
        <p>El servidor Node recibió y devolvió el nombre:</p>
        <h3 style={{ color: '#aa3bff' }}>{nombre}</h3>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Link to="/">Volver a intentar</Link>
      </div>
    </div>
  );
};

export default Resultado;
