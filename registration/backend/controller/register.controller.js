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
    const details = await RegDetails.findById(req.params.id);
    if (!details) {
      return res.status(404).json({ message: "No record found" });
    }

    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update some details
const updateDetail = async (req, res) => {
  try {
    const updateData = await RegDetails.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updateData) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json(updateData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete details
const deleteDetail = async (req, res) => {
  try {
    const deleteData = await RegDetails.findByIdAndDelete(req.params.id);

    if (!deleteData) {
      return res.status(404).json({ message: "Record not found" });
    }

    res
      .status(200)
      .json({ message: "Details deleted successfully", deleteData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  allDetails,
  uniqueDetail,
  updateDetail,
  deleteDetail,
};
