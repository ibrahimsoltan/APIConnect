const CitizenCompany = require("../models/citizenCompany");

module.exports = async (req, res) => {
  const citizenNID = req.body.CitizenNID;
  const citizen = await CitizenCompany.findOne({ CitizenNID: citizenNID });
  if (citizen) {
    const {
      CompanyInfoDetailNID,
      CompanyInfoDetailCitizenName,
      CompanyInfoDetailUniqueIdentifierNumber,
      CompanyInfoDetailClassCode,
      CompanyInfoDetailOfficeCode,
      CompanyInfoDetailRegistrationCode,
      CompanyInfoDetailUCR,
      CompanyInfoDetailLegalDescription,
      HasCRA
    } = citizen;

    res.json({
      CompanyInfoDetailNID,
      CompanyInfoDetailCitizenName,
      CompanyInfoDetailUniqueIdentifierNumber,
      CompanyInfoDetailClassCode,
      CompanyInfoDetailOfficeCode,
      CompanyInfoDetailRegistrationCode,
      CompanyInfoDetailUCR,
      CompanyInfoDetailLegalDescription,
      HasCRA
    });
  } else {
    res.json({ message: "Citizen not found" });
  }
};
