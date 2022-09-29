const express = require("express");
const app = express();
const PORT = 5000;

const fs = require("fs/promises"); // for asychronous file operations

async function readJsonFile(path) {
  try {
    const file = await fs.readFile(path, {
      encoding: "utf8",
    });
<<<<<<< HEAD
    const data = JSON.parse(file); // convert JSON to object
=======
    const data = JSON.parse(file); // convert JSON to JS object
>>>>>>> 0e004a34e54c27d34b4bda3e13daaf959ff9e6d3
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        for (let i = 0; i < data[key].length; i++) {
          // console.log(data[key][i].price);
          num = parseFloat(data[key][i].price.replace(",", ""));
          console.log(num);
        }
      }
    }
  } catch (err) {
    // send error response message to client
    console.log(err);
  }
}

readJsonFile("../Desktop/data.json");

app.use(express.json());

app.get("/", (req, res) => {
  const product = req.query.product; // get the product name which user queries for.

  let data = {}; // store product info here
  // do the thing here to get the list of products for the product name

  res.json(data); // send the data to client from server after processing
});

app.listen(PORT, function () {
  console.log("listening on port http://localhost:" + PORT);
});
