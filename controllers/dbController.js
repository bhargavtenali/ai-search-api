const Record = require("../models/record.model");

const performDbQuery = async (req, res) => {
  try {
    console.log(req.body, "req");
    const { dbQuery } = req.body;
    const dbFind = dbQuery.find | null;
    const dbProjection = dbQuery.projection | null;
    const dbOptions = dbQuery.options | null;

    const records = await Record.find({ dbFind, dbProjection, dbOptions });

    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { performDbQuery };
