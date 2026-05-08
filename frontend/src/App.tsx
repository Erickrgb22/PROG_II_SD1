import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Resultado from './pages/Resultado';
import Ejercicio2 from './pages/Ejercicio2';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          {/* Ejercicio 1: Dos vistas */}
          <Route path="/" element={<Inicio />} />
          <Route path="/resultado" element={<Resultado />} />
          
          {/* Ejercicio 2: Enums */}
          <Route path="/ejercicio2" element={<Ejercicio2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
