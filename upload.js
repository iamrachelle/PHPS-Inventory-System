const express = require('express');
const fileUpload = require('express-fileupload');
// const cors = require('cors');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const _ = require('lodash');

const app = express();

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

//add other middleware
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(morgan('dev'));

//start app 
const port = process.env.PORT || 8080;
app.use(express.static('argon-dashboard-master'))

// const busboy = require('connect-busboy');

// // Default options, no immediate parsing
// app.use(busboy());
app.get('/', (req, res) => {
    // console.log(__dirname)
   res.sendFile(__dirname+'/argon-dashboard-master/pages/files.html')
  //res.send('Hello World!')
  })



const path = require("path");

  app.post("/upload", function(req, res)
{
    var file;

    if(!req.files)
    {
        res.send("File was not found");
        return;
    }

    file = req.files.source;  // here is the field name of the form
    const path = __dirname + "/files/" + file.name;
  
    file.mv(path, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send({ status: "success", path: path });
    });

    


});



app.listen(port, () => 
  console.log(`App is listening on port ${port}.`)
);