const {model, schema} = require('mongoose')

let capSchema = new schema({
    Guild: String,
    Role: String,
    Capture: String
});

module.exports = model("cap", capSchema);