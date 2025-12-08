const RegDetails = require("../models/register.model");

// Registring
const register = async (req, res) => {
  try {
    const register = await RegDetails.create(req.body);
    res.status(200).json(register);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Getting all details
const allDetails = async (req, res) => {
  try {
    const details = await RegDetails.find({});
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Getting a unique id
const uniqueDetail = async (req, res) => {
  try {
    const id = req.params;
    const details = await RegDetails.find(id);
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  allDetails,
  uniqueDetail,
};
