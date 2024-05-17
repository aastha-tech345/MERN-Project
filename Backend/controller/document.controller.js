const DocumentInfo = require("../models/document.model");
const CustomerModel = require("../models/customer.model");
const ApiFeatures = require("../utils/apiFeatures");
exports.createDocument = async (req, res) => {
  // console.log("ashish", req);/
  try {
    const result = await DocumentInfo.Document.create({
      ...req.body,
      document_upload: req?.file,
    });

    // const result = await document.save();
    return res.status(201).json({
      message: "document was created",
      result,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating document" });
  }
};

exports.getDocument = async (req, res) => {
  try {
    const resultPerPage = req.query.resultPerPage || 10;

    const countPage = await DocumentInfo.Document.countDocuments({
      is_deleted: { $ne: "deleted" },
    });
    let pageCount = Math.ceil(countPage / resultPerPage);

    const apiFeatures = new ApiFeatures(
      DocumentInfo.Document.find({
        customer_id: req.params.id,
        is_deleted: { $ne: "deleted" },
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

exports.getDocumentData = async (req, res) => {
  try {
    const result = await DocumentInfo.Document.findOne({
      _id: req.params.id,
      is_deleted: { $ne: "deleted" },
    });
    if (!result) {
      return res.status(404).send({ error: "Document not found" });
    }
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

// exports.getDocumentDataUpdate = async (req, res) => {
//   try {
//     const getDocumentbyId = await DocumentInfo.Document.findById(req.params.id);
//     let arr = getDocumentbyId?.document_upload;
//     let datares = [];
//     let removaArr = JSON.parse(req.body.removedFile);

//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < removaArr?.length; j++) {
//         if (arr[i]?.filename == removaArr[j]?.filename) {
//           arr.splice(i, 1);
//         }
//       }
//     }

//     for (let i = 0; i < req?.files?.length; i++) {
//       datares.push(req.files[i]);
//     }

//     let totalResult = [...arr, ...datares];

//     const result = await DocumentInfo.Document.findByIdAndUpdate(
//       req.params.id,
//       { ...req.body, document_upload: totalResult },
//       {
//         new: true,
//       }
//     );
//     res.send(result);
//   } catch (error) {
//     console.log("Error from here", error);
//     res.status(500).send({ error: "Internal Server Error" });
//   }
// };

exports.getDocumentDataUpdate = async (req, res) => {
  try {
    // const document = await DocumentInfo.Document.findById(req.params.id);

    // if (!document) {
    //   return res.status(404).send({ error: "Document not found" });
    // }

    // let existingFiles = document.document_upload || [];
    // let removedFiles = JSON.parse(req.body.removedFile) || [];

    // existingFiles = existingFiles.filter(
    //   (file) =>
    //     !removedFiles.some(
    //       (removedFile) => file.filename === removedFile.filename
    //     )
    // );

    // let newFiles = [];
    // if (req.files && req.files.length > 0) {
    //   newFiles = req.files;
    // }

    // const updatedFiles = [...existingFiles, ...newFiles];
    // console.log("req", req);
    const updatedDocument = await DocumentInfo.Document.findByIdAndUpdate(
      req.params.id,
      { ...req.body, document_upload: req.file },
      { new: true }
    );

    if (!updatedDocument) {
      return res.status(500).send({ error: "Failed to update document" });
    }

    res.send(updatedDocument);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getDocumentDataDelete = async (req, res) => {
  try {
    const result = await DocumentInfo.Document.updateOne(
      { _id: req.params.id, is_deleted: { $ne: "deleted" } },
      { $set: { is_deleted: "deleted" } }
    );

    if (result.nModified === 0) {
      return res.status(404).json({
        success: false,
        message: "Document Not Found or Already Deleted",
      });
    }

    res.status(200).json({
      success: true,
      message: "Document Deleted Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getDocumentSearch = async (req, res) => {
  try {
    const result = await DocumentInfo.Document.find({
      $or: [{ fname: { $regex: req.params.key } }],
    });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};