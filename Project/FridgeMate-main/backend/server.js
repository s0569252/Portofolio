const express = require('express');
const app = express();
const fridgeItemRoutes = require('./routes/item-route'); // Adjust the path to your routes
const cors = require('cors');

app.use(cors());


app.use(express.json()); // for parsing application/json

// Use the fridge item routes
app.use('/api', fridgeItemRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
