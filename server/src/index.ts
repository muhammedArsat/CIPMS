import app from "./app";
import { PORT } from "./configs/env";



//connecting the server with the PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
