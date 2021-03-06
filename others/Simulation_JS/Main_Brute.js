import {Checker} from './Checker.js'
import {Unicode} from './Unicode.js'

//TEST AREA
let c = new Checker();
let u = new Unicode();

//TEST MODE
var short = false;
var max = 12;
var runs = 1;
var start = new Array();
var end = new Array();
start = ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
end = ["1","A","32","64","1F4","3E8","1388","2710","C350","186A0","7A120","F4240","4C4B40","989680","E4E1C0","10FFFFF"];

if(start.length !== end.length)
    console.log("Array length mismatch!");
else{
    var time = new Array(start.length);
    for(var i = 0; i < start.length; i++)
        time[i] = 0;

    //SHORT TEST
    if(short){
        time = new Array(max);
        for(i = 0; i < max; i++)
            time[i] = 0;
        start = start.slice(0,max);
        end = end.slice(0,max);
    }

    console.log("Start: " + start);
    console.log("End: " + end);
    console.log("Runs: " + runs);
    console.log("Running...");
    for(i = 1; i <= runs; i++){
        for(var j = 0; j < start.length; j++){
            var startDate = new Date();
            for(var k = parseInt(start[j], 16); k <= parseInt(end[j],16); k++)
                u.SetUnicode(k.toString(16));
            var endDate   = new Date();
            console.log("Run: " + i + "/" + runs + ", " + start[j] + "-" + end[j] + " (" + (parseInt(end[j],16)-parseInt(start[j],16)) + " items) = " + ((endDate - startDate) / 1000) + "s");
            //console.log(((endDate - startDate) / 1000) + "s");
            time[j] = time[j] + ((endDate - startDate) / 1000);
        }
    }
    console.log("Benchmark complete!");
    for(j = 0; j < start.length; j++)
        time[j] = time[j] / runs;
    console.log(time + ""); // + "");
}
