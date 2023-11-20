const CustomerInfomation = require("../models/customerInfo.model");
const CustomerModel = require("../models/customer.model");

exports.createCustomerInfo = async (req, res) => {
  try {
    const {
      added_by,
      ordered_question,
      extras,
      newsletter,
      newsletter_subscription,
      statu,
      those,
      contact,
      bill,
      delivery,
      deposit,
      completion,
      created_by,
    } = req.body;

    const user = await CustomerModel.Customer.findOne({
      created_by: "customer",
    });
    if (!user) {
      return res
        .status(400)
        .send({ message: "No customer found to link as parent" });
    }
    const customerInfo = new CustomerInfomation.CustomerInfo({
      added_by,
      ordered_question,
      extras,
      newsletter,
      newsletter_subscription,
      statu,
      those,
      contact,
      bill,
      delivery,
      deposit,
      completion,
      customer_id: user._id,
      created_by,
    });

    const result = await customerInfo.save();
    res.status(201).json({
      message: "CustomerInfo was created",
      result,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating customerInfo" });
  }
};

exports.getCustomerInfo = async (req, res) => {
  try {
    const result = await CustomerModel.Customer.find();
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getCustomerData = async (req, res) => {
  try {
    const result = await CustomerModel.Customer.findOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    console.error("Error fetching customer data:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getCustomerDataUpdate = async (req, res) => {
  try {
    const result = await CustomerModel.Customer.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send(result);
  } catch (error) {
    console.error("Error updating customer data:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getCustomerDataDelete = async (req, res) => {
  try {
    const result = await CustomerModel.Customer.deleteOne({
      _id: req.params.id,
    });
    res.send(result);
  } catch (error) {
    console.error("Error deleting customer data:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getCustomerInfoSearch = async (req, res) => {
  try {
    const result = await CustomerModel.Customer.find({
      $or: [{ fname: { $regex: req.params.key, $options: "i" } }],
    });
    res.send(result);
  } catch (error) {
    console.error("Error searching for customer info:", error);
    res.status(500).send("Internal Server Error");
  }
};
