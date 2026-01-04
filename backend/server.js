import app from "./src/app.js";

import { PORT } from "./src/config/env.js";
import connectToDatabase from "./src/database/mongodb.js";

app.listen(PORT || 5000, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectToDatabase();
});
