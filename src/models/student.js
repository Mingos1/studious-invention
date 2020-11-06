const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema (
    {
        first_name: {
            type: String,
            required: true,
            maxlength: 100
        },
        last_name: {
            type: String,
            required: true,
            maxlength: 100
        },
        grade_level: {
            type: Number,
            required: true,
            min: 0,
            max: 12
        },
        overall_score: {
            type: Number,
            required: true,
            min: 65,
            max: 100
        }
    }
)

module.exports = mongoose.model('Student', StudentSchema);