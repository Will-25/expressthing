var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
        name: "Paul",
        phonenumber: "7045679",
        email: "bro@broname",
        uniqueid: 679
    },
    {
        name: "bro",
        phonenumber: "7093434",
        email: "aha@hotmail.com",
        uniqueid: 6798
    },
    {
        name: "The Terminator",
        phonenumber: "708340394",
        email: "Notthegovernator@gmail.com",
        unqiqueid: 092342
    }
]