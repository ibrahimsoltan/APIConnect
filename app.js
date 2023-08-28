const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ credentials: true, origin: ["http://localhost:5173"] }));
app.use(express.json());

const DbURI = 'mongodb+srv://ibrahim:ibrahim1234@student.lmygtpz.mongodb.net/APIDB?retryWrites=true&w=majority';
mongoose.connect(DbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  }))
  .catch(err => console.log(err));

app.post("/addCitizen", require("./controllers/addCitizen"));
app.post("/getCompanyInfo", require("./controllers/getCompanyInfo"));
