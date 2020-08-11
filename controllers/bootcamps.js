const Bootcamp = require("../models/Bootcamp");

// @description    Get all bootcamps
// @route          GET /api/v1/bootcamps
// @access         PUBLIC

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// @description    Get single bootcamp
// @route          GET /api/v1/bootcamps/:id
// @access         PUBLIC

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};

// @description    Create new bootcamp
// @route          POST /api/v1/bootcamps
// @access         PRIVATE

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @description    Update bootcamp
// @route          PUT /api/v1/bootcamps/:id
// @access         PRIVATE

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

// @description    Delete bootcamp
// @route          Delete /api/v1/bootcamps/:id
// @access         PRIVATE

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
