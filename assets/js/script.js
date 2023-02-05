// by default , browser gives us an object known as "windows"
// whichsoever fn or anything we make it all will be associated with the object.
// IIFE Immediately Invoked function Expression - function which will be invoked always automatically.
// In object, we do map the values - key:value pair 
// objectname = {}  - way to instantiate object
// function myFunction(){}   declaring fn
// var myFunction = function(){}  - fn expn we are assigning function to a variable
// we can also assign an object to a variable and  then assign function as value to an object.
// var $:{myFunction: function (){console.log("hi");}, name:Urvashi, age:25}
//  Ecmos script - good way to write fn
// var myFunction = function (name,age){
    // return name +"" + age;
// }
// It can be written as   var myFunction = (name,age) => {
//  return name +"" + age; };
//  if only one key pair then write it as 
// var myFunction =name => name 



{/* <div class="main-background-wrapper">
          <div class="main-background" id="bg">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
          </div>
        </div>
         */}

'use strict';

const $ ={
    repeatBg: () => {
        const mainBackground = document.createElement("div");
        mainBackground.classList.add("main-background");

        const line1 = document.createElement("div");
        line1.classList.add("line", "line-1");

        const line2 = document.createElement("div");
        line2.classList.add("line", "line-2");

        mainBackground.appendChild(line1);
        mainBackground.appendChild(line2);

        const mainBackgroundWrapper =document.getElementById(
            "main-background-wrapper"
        );
        mainBackgroundWrapper.appendChild(mainBackground);

        // const mainBackgroundWrapper = document.createElement("div");
        // mainBackgroundWrapper.classList.add("main-background-wrapper");
        // mainBackgroundWrapper.appendChild(mainBackground);

        // const main = document.querySelector("main");
        // main.appendChild(mainBackgroundWrapper);

    },
};

for (let i=0; i <2000; i++) {
$.repeatBg();
}