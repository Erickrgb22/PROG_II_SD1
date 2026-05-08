import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      padding: '1rem', 
      backgroundColor: '#f0f0f0', 
      marginBottom: '2rem',
      display: 'flex',
      gap: '20px',
      justifyContent: 'center'
    }}>
      <Link to="/">Ejercicio 1 (Inicio)</Link>
      <Link to="/ejercicio2">Ejercicio 2 (Peliculas)</Link>
    </nav>
  );
};

export default Navbar;
