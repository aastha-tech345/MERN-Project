const ActivityInfomation = require("../models/activity.model");
const CustomerModel = require("../models/customer.model");
const ApiFeatures = require("../utils/apiFeatures");

exports.createActivity = async (req, res) => {
  try {
    const { icon, message, customer_id } = req.body;

    // const user = await CustomerModel.Customer.findOne({
    //   created_by: "customer",
    // });
    // if (!user) {
    //   return res
    //     .status(400)
    //     .send({ message: "No customer found to link as parent" });
    // }
    const activity = new ActivityInfomation.Activity({
      icon,
      message,
      customer_id,
    });

    const result = await activity.save();
    return res.status(201).json({
      message: "activity was created",
      result,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating activity" });
  }
};

exports.getActivity = async (req, res) => {
  try {
    const resultPerPage = 1;
    const countPage = await ActivityInfomation.Activity.countDocuments();
    let pageCount = Math.ceil(Number(countPage) / 10);

    const apiFeatures = new ApiFeatures(
      ActivityInfomation.Activity.find({
        customer_id: req.params.id,
        is_deleted: { $ne: "deleted" },
      }),
      req.query
    )
      .reverse()
      .search()
      .pagination(resultPerPage);

    // const products = await productDatabase.find()
    const result = await apiFeatures.query;

    if (result?.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    // const result = await ActivityInfomation.Activity.find();
    return res.status(200).json({
      success: true,
      message: "Activity Data",
      data: result,
      pageCount: pageCount,
    });
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getActivityData = async (req, res) => {
  try {
    const result = await ActivityInfomation.Activity.findOne({
      _id: req.params.id,
      is_deleted: { $ne: "deleted" },
    });
    console.log("first", result);
    res.status(200).json({
      success: true,
      message: "Activity Data",
      data: result,
    });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getActivityDataUpdate = async (req, res) => {
  try {
    const result = await ActivityInfomation.Activity.updateOne(
      { _id: req.params.id, is_deleted: { $ne: "deleted" } },
      { $set: req.body }
    );
    if (result.n === 0) {
      return res.status(404).send({ error: "Activity not found" });
    }
    res.status(201).json({
      status: 201,
      message: "Activity update successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getActivityDataDelete = async (req, res) => {
  try {
    const result = await ActivityInfomation.Activity.updateOne(
      { _id: req.params.id, is_deleted: { $ne: "deleted" } },
      { $set: { is_deleted: "deleted" } }
    );
    res.send(result);
  } catch (error) {
    console.error("Error deleting activity data:", error);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

exports.getActivitySearch = async (req, res) => {
  try {
    const result = await ActivityInfomation.Activity.find({
      $or: [{ administration: { $regex: req.params.key, $options: "i" } }],
    });
    res.send(result);
  } catch (error) {
    console.error("Error searching for activity info:", error);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
