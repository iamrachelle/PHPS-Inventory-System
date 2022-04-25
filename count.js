

const express = require('express')
const app = express()
// let formidable = require('formidable');
// let fs = require('fs');
const port = 8080

app.use(express.static('argon-dashboard-master'))

app.get('/', (req, res) => {
    console.log(__dirname)
   res.sendFile(__dirname+'/argon-dashboard-master/pages/dashboard.html')
  //res.send('Hello World!')
})

app.get('/files', (req, res) => {
  console.log(__dirname)
 res.sendFile(__dirname+'/argon-dashboard-master/pages/files.html')
//res.send('Hello World!')
})

// app.post('/upload', (req,res)=>{
//   console.log("uploading")

// let form = new formidable.IncomingForm();

//   //Process the file upload in Node
//   form.parse(req, function (error, fields, file) {
//     console.log("file processing")
//     let filepath = file.fileupload.filepath;
//     let newpath = file.fileupload.originalFilename;
//     console.log("filepath", filepath)
//     console.log("newpath", newpath)
//     // let newpath = 'C:/upload-example/';
//     // newpath += file.fileupload.originalFilename;

//     //Copy the uploaded file to a custom folder
//     fs.rename(filepath, newpath, function () {
//       //Send a NodeJS file upload confirmation message
//       res.write('NodeJS File Upload Success!');
//       res.end();
//       console.log("File rename")
//     });
//   });
  
// })

app.listen(port, function ()  {
// console.log(__dirname)
  console.log(`Example app listening on port ${port}`)
})