const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxLength: [30, 'name cannot be more than 30 characters'],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', TaskSchema);
