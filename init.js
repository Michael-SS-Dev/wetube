import app from "./app";
import routes from "./routes";

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
