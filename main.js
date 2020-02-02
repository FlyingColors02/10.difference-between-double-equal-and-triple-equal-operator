"use strict"
let numValue=10;
let stringValue="10";

if(numValue==stringValue)//true
{
    console.log("true");
}
else
{
    console.log("false");
}
//here only value comparison is done 

if(numValue===stringValue)//false
{
    console.log("true");
}
else
{
    console.log("false");
}
//here value as well as data type is compared



if(numValue!==stringValue)//ERROR:unexpected token'='
{
    console.log("true");
}
else
{
    console.log("false");
}

/*
if(numValue>==stringValue)//ERROR:unexpected token'='
{
    console.log("true");
}
else
{
    console.log("false");
}
*/

//=== operator cannot be used with >,<