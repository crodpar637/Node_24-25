// Importación de librerías
const express = require("express");
// Instanciar servidor web
const app = express();
// Indicamos que procese request que vengan en JSON
app.use(express.json());

let notes = [
  { id: 1, content: "HTML is easy", important: true },
  { id: 2, content: "Browser can execute only JavaScript", important: false },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hola mundo!</h1>");
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  // Recuperar un parámetro que viene en la ruta
  const id = parseInt(request.params.id);

  const note = notes.find((note) => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

app.post('/api/notes', (request, response) => {  
    // Recuperar los datos que vienen en la petición
    const note = request.body;

    console.log(note);
    
    notes.push(note);

    response.json(note);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
