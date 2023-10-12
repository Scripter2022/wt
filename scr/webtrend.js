/*import lib*/
// import http from "http";
// import DomParser from "dom-parser";
// import fs, { write } from "fs";
// import { parse } from "himalaya";
// import { title } from "process";
// import { toURI } from "node-opcua";
// import { isUtf8 } from "buffer";
// import dialog from "e:./lib/dialog.js";

const http=require('http');
const DomParser=require('dom-parser');
const fs=require('fs');
//const serv=require("./lib/serv");
const mq=require("./lib/mqttServer")

/************************************************************************************************/
function wt(){
var options = {
  host: "172.16.242.33",
  port: "80",
  path: "/W.htm?ovrideStart=0",
};
// Callback function is used to deal with response
var callback = async function (response) {
  // Continuously update stream with
  var body = "";
  response.on("data", function (data) {
    body += data;
  });
  response.on("end", async function () {
    //console.log(body);
    /* create files for parsing */
    /* create file JSON*/
    fs.writeFile("C:/Users/ScriptEr/Documents/CODE/PROJECT/trend/scr/index.html", body,(err) => {
        if (err) throw err;
      }
    );

    /**************************************************/

    fs.readFile("C:/Users/ScriptEr/Documents/CODE/PROJECT/trend/scr/index.html","utf8", function (err, html) {

        if (!err) {

          //console.log(html);

          var parser = new DomParser();

          var dom = parser.parseFromString(html);

          var form = dom.getElementsByTagName("option value")[0].innerHTML;

          console.log(form)
          
          fs.writeFile("C:/Users/ScriptEr/Documents/CODE/PROJECT/trend/scr/views/home.handlebars", form,  (err) => {

            if (err) throw err;
          }
        );
          form=form.toString();
          mq.mq(form);
      }
    }
  );
})
  /*create server for web view*/
};
// Make a request to the server
var req = http.request(options, callback);
req.end();
process.on("uncaughtException", function (err) {
  console.log(err);
});
0;
//serv.webServer();
}

setInterval(wt, 5000);