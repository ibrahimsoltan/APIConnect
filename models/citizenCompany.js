const mongoose = require("mongoose");

const citizenCompanySchema = new mongoose.Schema({
  CitizenNID: String,
  CitizenFirstName: String,
  CitizenSecondName: String,
  CitizenThirdName: String,
  CitizenFourthName: String,
  CompanyInfoDetailNID: String,
  CompanyInfoDetailCitizenName: String,
  CompanyInfoDetailUniqueIdentifierNumber: String,
  CompanyInfoDetailClassCode: String,
  CompanyInfoDetailOfficeCode: String,
  CompanyInfoDetailRegistrationCode: String,
  CompanyInfoDetailUCR: String,
  CompanyInfoDetailLegalDescription: String,
  HasCRA: Boolean
});

module.exports = mongoose.model("CitizenCompany", citizenCompanySchema);
