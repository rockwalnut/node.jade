// require hogan
var hogan = require("hogan.js");

// construct template string
var template = "Hello {{world}}!";

// compile template
var hello = hogan.compile(template);