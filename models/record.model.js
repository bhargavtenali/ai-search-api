const mongoose = require("mongoose");

const RecordSchema = mongoose.Schema({
  integer_1: Number,
  integer_2: Number,
  string_1: String,
  string_2: String,
  string_3: String,
  string_4: String,
  string_5: String,
  array_1: [String],
  boolean_1: Boolean,
  boolean_2: Boolean,
  decimal_1: {
    $numberDecimal: String,
  },
  integer_11: Number,
  integer_15: Number,
  integer_16: Number,
  integer_17: Number,
  integer_3: Number,
  integer_4: Number,
  integer_5: Number,
  integer_6: Number,
  integer_7: Number,
  integer_8: Number,
  string_10: String,
  string_11: String,
  string_14: String,
  string_6: String,
  string_7: String,
  string_8: String,
  integer_10: Number,
  integer_12: Number,
  integer_13: Number,
  integer_14: Number,
  integer_9: Number,
  string_12: String,
  string_13: String,
  string_9: String,
  array_3: [Number],
  boolean_3: Boolean,
  boolean_4: Boolean,
  boolean_5: Boolean,
  integer_19: Number,
  integer_20: Number,
  string_15: String,
  string_16: String,
  string_17: String,
  string_18: String,
  string_19: String,
  array_4: [String],
  integer_18: Number,
  decimal_10: {
    $numberDecimal: String,
  },
  decimal_11: {
    $numberDecimal: String,
  },
  decimal_12: {
    $numberDecimal: String,
  },
  decimal_13: {
    $numberDecimal: String,
  },
  decimal_14: {
    $numberDecimal: String,
  },
  decimal_15: {
    $numberDecimal: String,
  },
  decimal_16: {
    $numberDecimal: String,
  },
  decimal_2: {
    $numberDecimal: String,
  },
  decimal_3: {
    $numberDecimal: String,
  },
  decimal_4: {
    $numberDecimal: String,
  },
  decimal_5: {
    $numberDecimal: String,
  },
  decimal_6: {
    $numberDecimal: String,
  },
  decimal_7: {
    $numberDecimal: String,
  },
  decimal_8: {
    $numberDecimal: String,
  },
  decimal_9: {
    $numberDecimal: String,
  },
  decimal_17: {
    $numberDecimal: String,
  },
  decimal_18: {
    $numberDecimal: String,
  },
  decimal_19: {
    $numberDecimal: String,
  },
  array_2: [Number],
  array_5: [mongoose.SchemaTypes.Mixed],
  array_6: [String],
  decimal_20: {
    $numberDecimal: String,
  },
  decimal_22: {
    $numberDecimal: String,
  },
  decimal_23: {
    $numberDecimal: String,
  },
  string_24: String,
  string_25: String,
  string_26: String,
  date_2: {
    $date: Date,
  },
  string_20: String,
  string_21: String,
  string_22: String,
  string_23: String,
  decimal_21: {
    $numberDecimal: String,
  },
  decimal_24: {
    $numberDecimal: String,
  },
});

const Record = mongoose.model("Record", RecordSchema);

module.exports = Record;
