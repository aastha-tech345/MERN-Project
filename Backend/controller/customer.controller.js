const { Customer } = require("../models/customer.model");
const UserModel = require("../models/user.model");
const ApiFeatures = require("../utils/apiFeatures");

exports.createCustomer = async (req, res) => {
  try {
    const {
      fname,
      lname,
      phone,
      email,
      plz,
      city,
      street,
      dob,
      land,
      group,
      id,
      created_by,
    } = req.body;

    const emailFind = await Customer.findOne({ email });

    if (emailFind) {
      return res.status(407).json({
        success: false,
        message: "Email Id Already Exists",
      });
    }

    // const user = await UserModel.User.findOne({ user_type: "user" });
    // if (!user) {
    //   return res
    //     .status(400)
    //     .send({ message: "No employee found to link as parent" });
    // }

    const userData = {
      fname,
      lname,
      phone,
      email,
      plz,
      city,
      street,
      dob,
      land,
      group,
      id,
      created_by,
    };

    // Create a new customer instance
    const userInstance = new Customer(userData);

    // Save the customer instance
    const result = await userInstance.save();

    return res
      .status(200)
      .json({ message: "Customer created successfully", data: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

exports.editCustomer = async (req, res) => {
  try {
    const data = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      message: "Customer updated successfully",
      data: data,
    });
  } catch (error) {
    console.error("Error searching data:", error.message);
    res.status(500).json({ error: "Server Error" });
  }
};

exports.getCustomer = async (req, res) => {
  try {
    const resultPerPage = 10;

    const countPage = await Customer.countDocuments({
      status: "active",
    });

    let pageCount = Math.ceil(countPage / resultPerPage);
    //  console.log("pageCount",pageCount)
    const apiFeatures = new ApiFeatures(
      Customer.find({ status: "active" }),
      req.query
    )
      .reverse()
      .pagination(resultPerPage);

    const result = await apiFeatures.query;

    if (result?.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    if (apiFeatures.getCurrentPage() > pageCount) {
      apiFeatures.setCurrentPage(pageCount);
      const updatedResult = await apiFeatures.pagination(resultPerPage).query;
      return res.status(200).json({
        success: true,
        result: updatedResult,
        pageCount: pageCount,
      });
    }

    return res.status(200).json({
      success: true,
      result: result,
      pageCount: pageCount,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Server Error" });
  }
};

exports.getCustomerData = async (req, res) => {
  try {
    const result = await Customer.findOne({
      _id: req.params.id,
      status: { $ne: "deleted" },
    });

    if (result) {
      res.send(result);
    } else {
      res.status(404).send({ message: "Customer not found" });
    }
  } catch (error) {
    console.error("Error fetching customer data:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// exports.editCustomer = async (req, res) => {
//   try {
//     const data = await Customer.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });

//     if (!data) {
//       res.status(500).json({
//         success: false,
//         message: "Customer updated Unsuccessfully",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Customer updated successfully",
//       data: data,
//     });
//   } catch (error) {
//     console.error("Error searching data:", error.message);
//     res.status(500).json({ error: "Server Error" });
//   }
// };

exports.deleteCustomer = async (req, res) => {
  try {
    const result = await Customer.updateOne(
      { _id: req.params.id, status: { $ne: "deleted" } },
      { $set: { status: "deleted" } }
    );
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.searchCustomer = async (req, res) => {
  try {
    const searchKey = req.params.searchKey;
    const result = await Customer.find({
      $or: [
        { fname: { $regex: searchKey, $options: "i" } },
        { group: { $regex: searchKey, $options: "i" } },
        { email: { $regex: searchKey, $options: "i" } },
        { phone: { $regex: searchKey, $options: "i" } },
      ],
    });
    res.send(result);
    return res.send(result);
  } catch (error) {
    console.error("Error searching data:", error.message);
    res.status(500).send({ error: "Server Error" });
  }
};

// exports.getUserCustomer = async (req, res) => {
//   try {
//     const resultPerPage = 10;
//     const baseQuery = Customer.find({
//       created_by: req.params.id,
//       status: "active",
//     });

//     // Use ApiFeatures to apply reverse, pagination, etc.
//     const apiFeatures = new ApiFeatures(baseQuery, req.query)
//       .reverse()
//       .pagination(resultPerPage);

//     const result = await apiFeatures.query;

//     if (result.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: "No Data Found",
//       });
//     }

//     const pageCount = Math.ceil(result.length / resultPerPage);

//     // Ensure the current page is within valid range
//     if (apiFeatures.getCurrentPage() > pageCount) {
//       apiFeatures.setCurrentPage(pageCount);

//       // Use ApiFeatures again to apply pagination on updated page
//       const updatedResult = await new ApiFeatures(baseQuery, req.query)
//         .reverse()
//         .pagination(resultPerPage).query;

//       return res.status(200).json({
//         success: true,
//         result: updatedResult,
//         pageCount: pageCount,
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Customers under the user",
//       result: result,
//       pageCount: pageCount,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };

exports.getUserCustomer = async (req, res) => {
  try {
    const resultPerPage = 10;

    const countPage = await ContactInfomation.Contact.countDocuments({
      status: "active",
    });

    let pageCount = Math.ceil(countPage / resultPerPage);

    const apiFeatures = new ApiFeatures(
      ContactInfomation.Contact.find({
        customer_id: req.params.first,
        // added_by: req.params.second,
        status: "active",
      }),
      req.query
    )
      .reverse()
      .pagination(resultPerPage);

    const result = await apiFeatures.query;

    if (result?.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    if (apiFeatures.getCurrentPage() > pageCount) {
      apiFeatures.setCurrentPage(pageCount);
      const updatedResult = await apiFeatures.pagination(resultPerPage).query;
      return res.status(200).json({
        success: true,
        result: updatedResult,
        pageCount: pageCount,
      });
    }

    return res.status(200).json({
      success: true,
      result: result,
      pageCount: pageCount,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Server Error" });
  }
};
