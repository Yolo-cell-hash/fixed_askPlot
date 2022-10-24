//Declaration on Libraries
//jshint esversion:6

const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

//Variables
var input_box1= '';
var input_box2= '';
var input_box3= '';
var input_box4= '';
var input_box5= '';
var input_box6= '';

var graph_y1=''
var graph_y2=''
var graph_y3=''
var graph_y4=''
var graph_y5=''
var graph_y6=''

var data1='';
var data2='';
var data3='';
var data4='';
var data5='';
var data6='';



app.post('/',function(req,res){
    input_box1= req.body.ip1;
    input_box2= req.body.ip2;
    input_box3= req.body.ip3;
    input_box4= req.body.ip4;
    input_box5= req.body.ip5;
    input_box6= req.body.ip6;

    if(input_box1==1){
        graph_y1=1;
        // console.log(graph_y1);
    } else {
        graph_y1=0;
        // console.log(graph_y1);
    }

    if(input_box2==1){
        graph_y2=1;
        // console.log(graph_y2);
    } else{
        graph_y2=0;
        // console.log(graph_y2);
    }

    if(input_box3==1){
        graph_y3=1;
        // console.log(graph_y3);
    } else{
        graph_y3=0;
        // console.log(graph_y3);
    }  
    if(input_box4==1){
        graph_y4=1;
        // console.log(graph_y4);
    } else{
        graph_y4=0;
        // console.log(graph_y4);
    }

    if(input_box5==1){
        graph_y5=1;
        // console.log(graph_y5);
    } else{
        graph_y5=0;
        // console.log(graph_y5);
    }

    if(input_box6==1){
        graph_y6=1;
        // console.log(graph_y6);
    } else{
        graph_y6=0;
        // console.log(graph_y6);
    }

    data1=graph_y1
    data2=graph_y2
    data3=graph_y3
    data4=graph_y4
    data5=graph_y5
    data6=graph_y6

// console.log(data1);
// console.log(data2);
// console.log(data3);
// console.log(data4);
// console.log(data5);
// console.log(data6);

    // app.get("/", function(req,res){
    //     data1=Number(data1);
    //     data2=Number(data2);
    //     data3=Number(data3);
    //     data4=Number(data4);
    //     data5=Number(data5);
    //     data6=Number(data6);

    //     res.render('home',{
    //         d1: data1,
    //         d2:data2,
    //         d3:data3,
    //         d4:data4,
    //         d5:data5,
    //         d6:data6,
    //     })
    // });
    // res.redirect('/')   

});


//Testpage Route
app.get("/", function(req,res){
            res.render('index',
        //     {
        //     d1: data1,
        //     d2:data2,
        //     d3:data3,
        //     d4:data4,
        //     d5:data5,
        //     d6:data6,
        // }
        )
});

//Homepage Route
// app.get("/", function(req,res){
//     // data1=Number(data1);
//     // data2=Number(data2);
//     // data3=Number(data3);
//     // data4=Number(data4);
//     // data5=Number(data5);
//     // data6=Number(data6);
// console.log(data1);
//     res.render('home')     
// });






//Listening Route
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function(){
  console.log("Server ativated at port successfully");
});