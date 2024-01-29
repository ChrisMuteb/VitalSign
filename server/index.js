const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:3000",
  methods: ['GET', 'POST', 'PUT']
}));
app.use('/vitalsign', authRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
