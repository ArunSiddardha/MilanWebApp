<<<<<<< HEAD
const express = require('express');
var cron = require('node-cron');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const excelToJson = require('convert-excel-to-json');
app.use(cors())
const { google } = require("googleapis");
const auth = new google.auth.GoogleAuth({
    keyFile: "./config/milan.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
 

const Culti = ['FASHION SHOW','STAGE PLAY','EYE MASK & PAINTING','BUDGET MASTERPIECE','DIGITAL POSTER','SOLO SINGING','PAANCH LAFZOON KI KAHANI', 'MILLIHUNT', 'HOSTEL DECORATION','PICTIONARY','QUIZ','GROUP DANCE','SOLO DANCE','DUO/TRIOS','BATTLE OF BANDS','DUMB CHARDES','LIFE AT IITH','SCRABBLE'];
const Techy = ['CP CONTEST','CAPTURE THE FLAG','LAMBDA HACKATHON','MINI ROBOWARS','AERO QUIZ','EXPLORING SPACE','PATHFINDER','SOLIDS BY TORQUE','GAME JAM'];
const SportsB =['ESPORTS','LAWN TENNIS','HOCKEY','TABLE TENNIS','VOLLEYBALL','CRICKET','BADMINTON','FOOTBALL','BASKETBALL','DODGEBALL','CARROM','CHESS','ATHLETICS','AQUATICS','WEIGTH LIFTING','SQUASH'];
const SportsG = ['ESPORTS','LAWN TENNIS','HOCKEY','TABLE TENNIS','VOLLEYBALL','CRICKET','BADMINTON','FOOTBALL','BASKETBALL','DODGEBALL','CARROM','CHESS','ATHLETICS','AQUATICS','WEIGTH LIFTING','SQUASH'];
// ,'26/02','27/02','28/02','01/03','02/03','03/03','04/03','05/03','06/03'
const Dates = ['25/02','26/02','27/02','28/02','01/03','02/03','03/03','04/03','05/03','06/03']

var datSB ={},
datSG ={},
datC={},
datT={},
schC={},
schT={},
schS={};
cron.schedule('*/30 * * * * *', () => {
  datTf();
  datCf();
  datSBf();
  datSGf();
  schCf();
  schTf();
  schSf();
  console.log(2);
});


async function datTf(){
=======
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const excelToJson = require("convert-excel-to-json");
const cron = require("node-cron");
// const da = excelToJson({
//     sourceFile: "back/Book.xlsx"
// });
// console.log(da);

// app.get('/data',()=>{
//     res.send(da);
// })
// app.listen(3001);
// // // const odbc = require('odbc');

// // // async function queryExcelOnline() {
// // //     const connection = await odbc.connect(`DSN=CData ExcelOnline Source`);
// // //     const data = await connection.query('SELECT Id, Column1 FROM Test_xlsx_Sheet1');
// // //     console.log(data);
// // // }

// // // queryExcelOnline();
// const { GoogleSpreadsheet } = require('google-spreadsheet');
// const creds = require('./config/milan.json'); // the file saved above
// const doc = new GoogleSpreadsheet('1tum5iFWq69SBB6iEwd-6S19jb3gOcvOTwF3-B4w8RYk');
// async function something(){
//     await doc.useServiceAccountAuth(creds);
//     await doc.loadInfo();
//     const sheet = await doc.addSheet({ headerValues: ['name', 'email'] });

// // append rows
// const larryRow = await sheet.addRow({ name: 'Larry Page', email: 'larry@google.com' });
// const moreRows = await sheet.addRows([
//   { name: 'Sergey Brin', email: 'sergey@google.com' },
//   { name: 'Eric Schmidt', email: 'eric@google.com' },
// ]);

// // read rows
// const rows = await sheet.getRows(); // can pass in { limit, offset }
// // read/write row values
// console.log(rows); // 'Larry Page'
//     // await sheet.loadCells('A1:E10'); // loads a range of cells
//     // console.log(sheet.getCell(1,0).value); // total cells, loaded, how many non-empty
// }
// something()
app.use(cors());
const { google } = require("googleapis");
const auth = new google.auth.GoogleAuth({
  keyFile: "./config/milan.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

// async function something(){
//    const client = await auth.getClient();

//   // Instance of Google Sheets API
//   const googleSheets = google.sheets({ version: "v4", auth: client });

//   const spreadsheetId = "1tum5iFWq69SBB6iEwd-6S19jb3gOcvOTwF3-B4w8RYk";

//   // Get metadata about spreadsheet
//   const metaData = await googleSheets.spreadsheets.get({
//     auth,
//     spreadsheetId,
//   });

//   // Read rows from spreadsheet
//   const getRows = await googleSheets.spreadsheets.values.get({
//     auth,
//     spreadsheetId,
//     range: "Sheet2",
//   });
//   const arr = getRows.data.values
//   var keys = arr[0];

//     //vacate keys from main array
//     var newArr = arr.slice(1, arr.length);

//     var formatted = [],
//     data = newArr,
//     cols = keys,
//     l = cols.length;
//     for (var i=0; i<data.length; i++) {
//             var d = data[i],
//                     o = {};
//             for (var j=0; j<l; j++)
//                     o[cols[j]] = d[j];
//             formatted.push(o);
//     }
//     console.log(formatted)
// }
const Culti = [
  "FASHION SHOW",
  "STAGE PLAY",
  "EYE MASK & PAINTING",
  "BUDGET MASTERPIECE",
  "DIGITAL POSTER",
  "SOLO SINGING",
  "PAANCH LAFZOON KI KAHANI",
  "MILLIHUNT",
  "HOSTEL DECORATION",
  "PICTIONARY",
  "QUIZ",
  "GROUP DANCE",
  "SOLO DANCE",
  "DUO/TRIOS",
  "BATTLE OF BANDS",
  "DUMB CHARDES",
  "LIFE AT IITH",
  "SCRABBLE",
];
const Techy = [
  "CP CONTEST",
  "CAPTURE THE FLAG",
  "LAMBDA HACKATHON",
  "MINI ROBOWARS",
  "AERO QUIZ",
  "EXPLORING SPACE",
  "PATHFINDER",
  "SOLIDS BY TORQUE",
  "GAME JAM",
];
const SportsB = [
  "ESPORTS",
  "LAWN TENNIS",
  "HOCKEY",
  "TABLE TENNIS",
  "VOLLEYBALL",
  "CRICKET",
  "BADMINTON",
  "FOOTBALL",
  "BASKETBALL",
  "DODGEBALL",
  "CARROM",
  "CHESS",
  "ATHLETICS",
  "AQUATICS",
  "WEIGTH LIFTING",
  "SQUASH",
];
const SportsG = [
  "ESPORTS",
  "LAWN TENNIS",
  "HOCKEY",
  "TABLE TENNIS",
  "VOLLEYBALL",
  "CRICKET",
  "BADMINTON",
  "FOOTBALL",
  "BASKETBALL",
  "DODGEBALL",
  "CARROM",
  "CHESS",
  "ATHLETICS",
  "AQUATICS",
  "WEIGTH LIFTING",
  "SQUASH",
];
// ,'26/02','27/02','28/02','01/03','02/03','03/03','04/03','05/03','06/03'
const Dates = [
  "25/02",
  "26/02",
  "27/02",
  "28/02",
  "01/03",
  "02/03",
  "03/03",
  "04/03",
  "05/03",
  "06/03",
];
var datSB = {},
  datSG = {},
  datC = {},
  datT = {},
  schC = {},
  schT = {},
  schS = {};

cron.schedule("* * * * *", async () => {
  await datTf();
  console.log("1");
  await datCf();
  console.log("2");
  await datSBf();
  console.log("3");
  await datSGf();
  console.log("4");
  await schCf();
  console.log("5");
  await schSf();
  console.log("6");
  await schTf();
});

async function datTf() {
>>>>>>> 30f00a215a4feec1574a603a4a00ba71df5b1d8a
  const client = await auth.getClient();
  const  googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1z7p7VPB2iKkZ1mzOSXzhyRr5Z9XeByd087dnePZ5KRg";
<<<<<<< HEAD
  const getRows = await googleSheets.spreadsheets.values.batchGet({
    auth,
    spreadsheetId,
    ranges: Techy
  });
  for (var k=0; k<Techy.length;k++){
      var Tech = Techy[k];
      
      var arr = getRows.data.valueRanges[k].values;
      
      var keys = arr[0];
        //vacate keys from main array
        var newArr = arr.slice(1, arr.length);
        var formatted = [],
        data = newArr,
        cols = keys,
        l = cols.length;
        for (var i=0; i<data.length; i++) {
                var d = data[i],
                        o = {};
                for (var j=0; j<l; j++)
                        o[cols[j]] = d[j];
                formatted.push(o);
        }
      datT[Tech] = formatted;
  }  
}


app.get('/data/techy',async (req,res)=>{
     res.send(datT) 
})
async function datCf(){
=======

  Techy.map(async (Tech) => {
    // Get metadata about spreadsheet
    // const metaData = await googleSheets.spreadsheets.get({
    //   auth,
    //   spreadsheetId,
    // });
    // Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: Tech,
    });
    const arr = getRows.data.values;
    var keys = arr[0];

    //vacate keys from main array
    var newArr = arr.slice(1, arr.length);

    var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
    for (var i = 0; i < data.length; i++) {
      var d = data[i],
        o = {};
      for (var j = 0; j < l; j++) o[cols[j]] = d[j];
      formatted.push(o);
    }
    datT[Tech] = formatted;
  });
}

app.get("/data/techy", async (req, res) => {
  // const client = await auth.getClient();
  // var datT ={}
  // // Instance of Google Sheets API
  // const googleSheets = google.sheets({ version: "v4", auth: client });

  // const sprveadsheetId = "1z7p7VPB2iKkZ1mzOSXzhyRr5Z9XeByd087dnePZ5KRg";

  // Techy.map(async (Tech)=>{
  //   // Get metadata about spreadsheet
  //       // const metaData = await googleSheets.spreadsheets.get({
  //       //   auth,
  //       //   spreadsheetId,
  //       // });
  //       // Read rows from spreadsheet
  //       const getRows = await googleSheets.spreadsheets.values.get({
  //           auth,
  //           spreadsheetId,
  //           range: Tech,
  //         });
  //         const arr = getRows.data.values
  //         var keys = arr[0];

  //           //vacate keys from main array
  //           var newArr = arr.slice(1, arr.length);

  //           var formatted = [],
  //           data = newArr,
  //           cols = keys,
  //           l = cols.length;
  //           for (var i=0; i<data.length; i++) {
  //                   var d = data[i],
  //                           o = {};
  //                   for (var j=0; j<l; j++)
  //                           o[cols[j]] = d[j];
  //                   formatted.push(o);
  //           }
  //         datT[Tech] = formatted;
  //         console.log(dat);

  //       })
  console.log(datT);
  res.send(datT);
});
async function datCf() {
>>>>>>> 30f00a215a4feec1574a603a4a00ba71df5b1d8a
  const client = await auth.getClient();
  const  googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1JlzkeXE-cCC4_zVJ9I20X1kjmc2LJ6dOr18MwjNW3Zs";
<<<<<<< HEAD
  const getRows = await googleSheets.spreadsheets.values.batchGet({
    auth,
    spreadsheetId,
    ranges: Culti
  });
  for (var k=0; k<Culti.length;k++){
    var Tech = Culti[k];
    
    var arr = getRows.data.valueRanges[k].values;
    
    var keys = arr[0];
      //vacate keys from main array
      var newArr = arr.slice(1, arr.length);
      var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
      for (var i=0; i<data.length; i++) {
              var d = data[i],
                      o = {};
              for (var j=0; j<l; j++)
                      o[cols[j]] = d[j];
              formatted.push(o);
      }
    datC[Tech] = formatted;
} 
}

app.get('/data/culti',async (req,res)=>{
   res.send(datC)
})

async function datSBf(){
  const client = await auth.getClient();
  const  googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1FbjUbFEEx1CtZvTjThD0wTDWI9ux8-7i-o8x49hhjlA";
  const getRows = await googleSheets.spreadsheets.values.batchGet({
    auth,
    spreadsheetId,
    ranges: SportsB
  });
  for (var k=0; k<SportsB.length;k++){
    var Tech = SportsB[k];
    
    var arr = getRows.data.valueRanges[k].values;
    
    var keys = arr[0];
      //vacate keys from main array
      var newArr = arr.slice(1, arr.length);
      var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
      for (var i=0; i<data.length; i++) {
              var d = data[i],
                      o = {};
              for (var j=0; j<l; j++)
                      o[cols[j]] = d[j];
              formatted.push(o);
      }
    datSB[Tech] = formatted;
} 
}

app.get('/data/sportsb',async (req,res)=>{
   res.send(datSB);
})
async function datSGf(){
=======

  Culti.map(async (Tech) => {
    // Get metadata about spreadsheet
    // const metaData = await googleSheets.spreadsheets.get({
    //   auth,
    //   spreadsheetId,
    // });
    // Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: Tech,
    });
    const arr = getRows.data.values;
    var keys = arr[0];

    //vacate keys from main array
    var newArr = arr.slice(1, arr.length);

    var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
    for (var i = 0; i < data.length; i++) {
      var d = data[i],
        o = {};
      for (var j = 0; j < l; j++) o[cols[j]] = d[j];
      formatted.push(o);
    }
    datC[Tech] = formatted;
  });
}
datCf();
app.get("/data/culti", async (req, res) => {
  // const client = await auth.getClient();
  // var datC ={}
  // // Instance of Google Sheets API
  // const googleSheets = google.sheets({ version: "v4", auth: client });

  // const spreadsheetId = "1JlzkeXE-cCC4_zVJ9I20X1kjmc2LJ6dOr18MwjNW3Zs";

  // Culti.map(async (Tech)=>{
  //   // Get metadata about spreadsheet
  //       // const metaData = await googleSheets.spreadsheets.get({
  //       //   auth,
  //       //   spreadsheetId,
  //       // });
  //       // Read rows from spreadsheet
  //       const getRows = await googleSheets.spreadsheets.values.get({
  //           auth,
  //           spreadsheetId,
  //           range: Tech,
  //         });
  //         const arr = getRows.data.values
  //         var keys = arr[0];

  //           //vacate keys from main array
  //           var newArr = arr.slice(1, arr.length);

  //           var formatted = [],
  //           data = newArr,
  //           cols = keys,
  //           l = cols.length;
  //           for (var i=0; i<data.length; i++) {
  //                   var d = data[i],
  //                           o = {};
  //                   for (var j=0; j<l; j++)
  //                           o[cols[j]] = d[j];
  //                   formatted.push(o);
  //           }
  //         datC[Tech] = formatted;
  //         console.log(dat);

  //       })

  res.send(datC);
});
async function datSBf() {
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1FbjUbFEEx1CtZvTjThD0wTDWI9ux8-7i-o8x49hhjlA";

  SportsB.map(async (Tech) => {
    // Get metadata about spreadsheet
    // const metaData = await googleSheets.spreadsheets.get({
    //   auth,
    //   spreadsheetId,
    // });
    // Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: Tech,
    });
    const arr = getRows.data.values;
    var keys = arr[0];

    //vacate keys from main array
    var newArr = arr.slice(1, arr.length);

    var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
    for (var i = 0; i < data.length; i++) {
      var d = data[i],
        o = {};
      for (var j = 0; j < l; j++) o[cols[j]] = d[j];
      formatted.push(o);
    }
    datSB[Tech] = formatted;
  });
}
datSBf();
app.get("/data/sportsb", async (req, res) => {
  // const client = await auth.getClient();
  // var datSB ={}
  // // Instance of Google Sheets API
  // const googleSheets = google.sheets({ version: "v4", auth: client });

  // const spreadsheetId = "1FbjUbFEEx1CtZvTjThD0wTDWI9ux8-7i-o8x49hhjlA";

  // SportsB.map(async (Tech)=>{
  //   // Get metadata about spreadsheet
  //       // const metaData = await googleSheets.spreadsheets.get({
  //       //   auth,
  //       //   spreadsheetId,
  //       // });
  //       // Read rows from spreadsheet
  //       const getRows = await googleSheets.spreadsheets.values.get({
  //           auth,
  //           spreadsheetId,
  //           range: Tech,
  //         });
  //         const arr = getRows.data.values
  //         var keys = arr[0];

  //           //vacate keys from main array
  //           var newArr = arr.slice(1, arr.length);

  //           var formatted = [],
  //           data = newArr,
  //           cols = keys,
  //           l = cols.length;
  //           for (var i=0; i<data.length; i++) {
  //                   var d = data[i],
  //                           o = {};
  //                   for (var j=0; j<l; j++)
  //                           o[cols[j]] = d[j];
  //                   formatted.push(o);
  //           }
  //         datSB[Tech] = formatted;
  //         console.log(dat);

  //       })
  res.send(datSB);
});
async function datSGf() {
>>>>>>> 30f00a215a4feec1574a603a4a00ba71df5b1d8a
  const client = await auth.getClient();
  const  googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1ymuHxXt9iVz62f4zL6we_aybbTwHlXqfP1Fllf4XScY";
<<<<<<< HEAD
  
  const getRows = await googleSheets.spreadsheets.values.batchGet({
    auth,
    spreadsheetId,
    ranges: SportsG
  });
  for (var k=0; k<SportsG.length;k++){
    var Tech =SportsG[k];
    
    var arr = getRows.data.valueRanges[k].values;
    
    var keys = arr[0];
      //vacate keys from main array
      var newArr = arr.slice(1, arr.length);
      var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
      for (var i=0; i<data.length; i++) {
              var d = data[i],
                      o = {};
              for (var j=0; j<l; j++)
                      o[cols[j]] = d[j];
              formatted.push(o);
      }
    datSG[Tech] = formatted;
} 
}

app.get('/data/sportsg',async (req,res)=>{
  res.send(datSG)
  
})
async function schCf(){
=======

  SportsG.map(async (Tech) => {
    // Get metadata about spreadsheet
    // const metaData = await googleSheets.spreadsheets.get({
    //   auth,
    //   spreadsheetId,
    // });
    // Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: Tech,
    });
    const arr = getRows.data.values;
    var keys = arr[0];

    //vacate keys from main array
    var newArr = arr.slice(1, arr.length);

    var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
    for (var i = 0; i < data.length; i++) {
      var d = data[i],
        o = {};
      for (var j = 0; j < l; j++) o[cols[j]] = d[j];
      formatted.push(o);
    }
    datSG[Tech] = formatted;
  });
}
datSGf();
app.get("/data/sportsg", async (req, res) => {
  // const client = await auth.getClient();
  // var datSG ={}
  // // Instance of Google Sheets API
  // const googleSheets = google.sheets({ version: "v4", auth: client });

  // const spreadsheetId = "1ymuHxXt9iVz62f4zL6we_aybbTwHlXqfP1Fllf4XScY";

  // SportsG.map(async (Tech)=>{
  //   // Get metadata about spreadsheet
  //       // const metaData = await googleSheets.spreadsheets.get({
  //       //   auth,
  //       //   spreadsheetId,
  //       // });
  //       // Read rows from spreadsheet
  //       const getRows = await googleSheets.spreadsheets.values.get({
  //           auth,
  //           spreadsheetId,
  //           range: Tech,
  //         });
  //         const arr = getRows.data.values
  //         var keys = arr[0];

  //           //vacate keys from main array
  //           var newArr = arr.slice(1, arr.length);

  //           var formatted = [],
  //           data = newArr,
  //           cols = keys,
  //           l = cols.length;
  //           for (var i=0; i<data.length; i++) {
  //                   var d = data[i],
  //                           o = {};
  //                   for (var j=0; j<l; j++)
  //                           o[cols[j]] = d[j];
  //                   formatted.push(o);
  //           }
  //         datSG[Tech] = formatted;
  //         console.log(dat);

  //       })

  res.send(datSG);
});
async function schCf() {
>>>>>>> 30f00a215a4feec1574a603a4a00ba71df5b1d8a
  const client = await auth.getClient();
  const  googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1HVmIgCyHN1wkLCMaMM106HoS4n-Ie6EFd3pPr3xTRxM";
<<<<<<< HEAD
  
  const getRows = await googleSheets.spreadsheets.values.batchGet({
    auth,
    spreadsheetId,
    ranges: Dates
  });
  for (var k=0; k<Dates.length;k++){
    var Date = Dates[k];
    
    var arr = getRows.data.valueRanges[k].values;
    
    var keys = arr[0];
      //vacate keys from main array
      var newArr = arr.slice(1, arr.length);
      var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
      for (var i=0; i<data.length; i++) {
              var d = data[i],
                      o = {};
              for (var j=0; j<l; j++)
                      o[cols[j]] = d[j];
              formatted.push(o);
      }
    schC[Date] = formatted;
} 
}

app.get('/schedule/culti',async (req,res)=>{
  res.send(schC) 
})
async function schTf(){
=======

  Dates.map(async (Date) => {
    // Get metadata about spreadsheet
    // const metaData = await googleSheets.spreadsheets.get({
    //   auth,
    //   spreadsheetId,
    // });
    // Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: Date,
    });
    const arr = getRows.data.values;
    var keys = arr[0];

    //vacate keys from main array
    var newArr = arr.slice(1, arr.length);

    var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
    for (var i = 0; i < data.length; i++) {
      var d = data[i],
        o = {};
      for (var j = 0; j < l; j++) o[cols[j]] = d[j];
      formatted.push(o);
    }
    schC[Date] = formatted;
  });
}
schCf();
app.get("/schedule/culti", async (req, res) => {
  // const client = await auth.getClient();
  // // Instance of Google Sheets API
  // const googleSheets = google.sheets({ version: "v4", auth: client });

  // const spreadsheetId = "1HVmIgCyHN1wkLCMaMM106HoS4n-Ie6EFd3pPr3xTRxM";

  // Dates.map(async (Date)=>{
  //   // Get metadata about spreadsheet
  //       // const metaData = await googleSheets.spreadsheets.get({
  //       //   auth,
  //       //   spreadsheetId,
  //       // });
  //       // Read rows from spreadsheet
  //       const getRows = await googleSheets.spreadsheets.values.get({
  //           auth,
  //           spreadsheetId,
  //           range: Date,
  //         });
  //         const arr = getRows.data.values
  //         var keys = arr[0];

  //           //vacate keys from main array
  //           var newArr = arr.slice(1, arr.length);

  //           var formatted = [],
  //           data = newArr,
  //           cols = keys,
  //           l = cols.length;
  //           for (var i=0; i<data.length; i++) {
  //                   var d = data[i],
  //                           o = {};
  //                   for (var j=0; j<l; j++)
  //                           o[cols[j]] = d[j];
  //                   formatted.push(o);
  //           }
  //           schC[Date] = formatted;
  //         console.log(dat);

  //       })

  setTimeout(() => res.send(schC), 2000);
});
async function schTf() {
>>>>>>> 30f00a215a4feec1574a603a4a00ba71df5b1d8a
  const client = await auth.getClient();
  const  googleSheets = google.sheets({ version: "v4", auth: client });


  const spreadsheetId = "1H-3swOdaEQncTiqDbnWI5lmJs1b3J0ZsqPGKJCkeKYU";
<<<<<<< HEAD
  
  const getRows = await googleSheets.spreadsheets.values.batchGet({
    auth,
    spreadsheetId,
    ranges: Dates
  });
  for (var k=0; k<Dates.length;k++){
    var Date = Dates[k];
    
    var arr = getRows.data.valueRanges[k].values;
    
    var keys = arr[0];
      //vacate keys from main array
      var newArr = arr.slice(1, arr.length);
      var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
      for (var i=0; i<data.length; i++) {
              var d = data[i],
                      o = {};
              for (var j=0; j<l; j++)
                      o[cols[j]] = d[j];
              formatted.push(o);
      }
    schT[Date] = formatted;
} 
}

app.get('/schedule/techy',async (req,res)=>{
  res.send(schT)
})
async function schSf(){
=======

  Dates.map(async (Date) => {
    // Get metadata about spreadsheet
    // const metaData = await googleSheets.spreadsheets.get({
    //   auth,
    //   spreadsheetId,
    // });
    // Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: Date,
    });
    const arr = getRows.data.values;
    var keys = arr[0];

    //vacate keys from main array
    var newArr = arr.slice(1, arr.length);

    var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
    for (var i = 0; i < data.length; i++) {
      var d = data[i],
        o = {};
      for (var j = 0; j < l; j++) o[cols[j]] = d[j];
      formatted.push(o);
    }
    schT[Date] = formatted;
  });
}
schTf();
app.get("/schedule/techy", async (req, res) => {
  // const client = await auth.getClient();
  // var schT ={}
  // // Instance of Google Sheets API
  // const googleSheets = google.sheets({ version: "v4", auth: client });

  // const spreadsheetId = "1H-3swOdaEQncTiqDbnWI5lmJs1b3J0ZsqPGKJCkeKYU";

  // Dates.map(async (Date)=>{
  //   // Get metadata about spreadsheet
  //       // const metaData = await googleSheets.spreadsheets.get({
  //       //   auth,
  //       //   spreadsheetId,
  //       // });
  //       // Read rows from spreadsheet
  //       const getRows = await googleSheets.spreadsheets.values.get({
  //           auth,
  //           spreadsheetId,
  //           range: Date,
  //         });
  //         const arr = getRows.data.values
  //         var keys = arr[0];

  //           //vacate keys from main array
  //           var newArr = arr.slice(1, arr.length);

  //           var formatted = [],
  //           data = newArr,
  //           cols = keys,
  //           l = cols.length;
  //           for (var i=0; i<data.length; i++) {
  //                   var d = data[i],
  //                           o = {};
  //                   for (var j=0; j<l; j++)
  //                           o[cols[j]] = d[j];
  //                   formatted.push(o);
  //           }
  //         schT[Date] = formatted;
  //         console.log(dat);

  //       })

  res.send(schT);
});
async function schSf() {
>>>>>>> 30f00a215a4feec1574a603a4a00ba71df5b1d8a
  const client = await auth.getClient();
  const  googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1Qlcc5jznOsDQYI75__3Zx7LgKzThsd5Tf0j0KfVF6UU";
<<<<<<< HEAD
  
  const getRows = await googleSheets.spreadsheets.values.batchGet({
    auth,
    spreadsheetId,
    ranges: Dates
  });
  for (var k=0; k<Dates.length;k++){
    var Date = Dates[k];
    
    var arr = getRows.data.valueRanges[k].values;
    
    var keys = arr[0];
      //vacate keys from main array
      var newArr = arr.slice(1, arr.length);
      var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
      for (var i=0; i<data.length; i++) {
              var d = data[i],
                      o = {};
              for (var j=0; j<l; j++)
                      o[cols[j]] = d[j];
              formatted.push(o);
      }
      schS[Date] = formatted;
} 
}


app.get('/schedule/sports',async (req,res)=>{
  res.send(schS);
})

app.listen(3001)
=======

  Dates.map(async (Date) => {
    // Get metadata about spreadsheet
    // const metaData = await googleSheets.spreadsheets.get({
    //   auth,
    //   spreadsheetId,
    // });
    // Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: Date,
    });
    const arr = getRows.data.values;
    var keys = arr[0];

    //vacate keys from main array
    var newArr = arr.slice(1, arr.length);

    var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
    for (var i = 0; i < data.length; i++) {
      var d = data[i],
        o = {};
      for (var j = 0; j < l; j++) o[cols[j]] = d[j];
      formatted.push(o);
    }
    schS[Date] = formatted;
  });
}

schSf();
app.get("/schedule/sports", async (req, res) => {
  // const client = await auth.getClient();
  // var schS ={}
  // // Instance of Google Sheets API
  // const googleSheets = google.sheets({ version: "v4", auth: client });

  // const spreadsheetId = "1Qlcc5jznOsDQYI75__3Zx7LgKzThsd5Tf0j0KfVF6UU";

  // Dates.map(async (Date)=>{
  //   // Get metadata about spreadsheet
  //       // const metaData = await googleSheets.spreadsheets.get({
  //       //   auth,
  //       //   spreadsheetId,
  //       // });
  //       // Read rows from spreadsheet
  //       const getRows = await googleSheets.spreadsheets.values.get({
  //           auth,
  //           spreadsheetId,
  //           range: Date,
  //         });
  //         const arr = getRows.data.values
  //         var keys = arr[0];

  //           //vacate keys from main array
  //           var newArr = arr.slice(1, arr.length);

  //           var formatted = [],
  //           data = newArr,
  //           cols = keys,
  //           l = cols.length;
  //           for (var i=0; i<data.length; i++) {
  //                   var d = data[i],
  //                           o = {};
  //                   for (var j=0; j<l; j++)
  //                           o[cols[j]] = d[j];
  //                   formatted.push(o);
  //           }
  //        schS[Date] = formatted;

  //       })

  res.send(schS);
});

app.listen(3001);
>>>>>>> 30f00a215a4feec1574a603a4a00ba71df5b1d8a
