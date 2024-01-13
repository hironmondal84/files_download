const express= require("express");
const app=express();
const port = 5000;
const path = require('path');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'html')));

app.get("/files", (req, res) => {
  const testFolder = './html/files/';
  const fs = require('fs');
  fs.readdir(testFolder, (err, files) => {
    var html_data='';
    for (var i = 0; i < files.length; i++){
      html_data=html_data+'<tr><td>'+(i+1)+'</td><td>'+files[i]+'</td><td><a class="btn btn-outline-info" href="'+files[i]+'" download>Download</a></td></tr>'
    }
    res.render(__dirname + "/html/files_index.html",{files:html_data});
  });
});

app.listen(port,() => console.log(`Listening on port ${port}`));