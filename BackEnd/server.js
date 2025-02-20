const app = require("./src/app");
require("dotenv").config();

app.listen(3000,()=>{
    console.log("Server is running at port no 3000");
});
