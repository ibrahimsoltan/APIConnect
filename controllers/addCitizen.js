const CitizenCompany = require("../models/citizenCompany");

module.exports = async (req, res) => {
  const newCitizen = new CitizenCompany(req.body);
  await newCitizen.save();
  res.json({ message: "Citizen added successfully" });
};
