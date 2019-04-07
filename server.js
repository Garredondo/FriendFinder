// dependencies
const express = require("express");

// set up express app
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require my routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// starts server to begin listening
app.listen(PORT, function(){
    console.log("App listenting on PORT " + PORT);
});

