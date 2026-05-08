import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
// Middleware para procesar JSON en las peticiones
app.use(express.json());
// Middleware para permitir peticiones desde el frontend (CORS)
app.use(cors());

// ==========================================
// EJERCICIO 2: Enumeraciones en TypeScript
// ==========================================
// Los Enums definen un conjunto de constantes con nombre. 
// Esto asegura que solo se usen valores válidos.
enum GeneroPelicula {
  Accion = "Acción",
  Drama = "Drama",
  Terror = "Terror",
  Comedia = "Comedia"
}

enum PaisPelicula {
  Venezuela = "Venezuela",
  Mexico = "México",
  Espana = "España",
  Argentina = "Argentina"
}

// Ruta GET para obtener los datos del Ejercicio 2
app.get('/api/peliculas', (req: Request, res: Response) => {
  res.json({
    generos: Object.values(GeneroPelicula),
    paises: Object.values(PaisPelicula)
  });
});

// ==========================================
// EJERCICIO 1: Intercepción de Datos
// ==========================================
// Ruta POST para recibir y procesar (interceptar) el animal favorito
app.post('/api/animal', (req: Request, res: Response) => {
  const { nombre } = req.body; // Extraemos el nombre del cuerpo de la petición
  console.log(`Interceptado: ${nombre}`);
  res.json({ animal: nombre }); // Respondemos con el dato interceptado
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
