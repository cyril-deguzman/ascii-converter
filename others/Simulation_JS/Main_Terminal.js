import {Checker} from './Checker.js'
import {Unicode} from './Unicode.js'

//TEST AREA
let c = new Checker();
let u = new Unicode();
var list = ["245D6","1CAFE","U+3041","U+0041","U+20AC","U+4F60"];
console.log("Input, UTF8, UTF16, UTF32, Character");
for(var i = 0; i < list.length; i++){
    if(c.CheckInput(list[i]) != null){
        u.SetUnicode(c.CheckInput(list[i]));
        //console.log(list[i] + ": ", u.GetAll);
        console.log(list[i] + ": ", u.GetFormatted);
        //console.log(list[i] + ", " + u.GetUTF8 + ", " + u.GetUTF16 + ", " + u.GetUTF32 + ", " + u.GetChar);
    }
    else{
        if(list[i].length === 0)
            console.log("Invalid input: Empty input");
        else
            console.log("Invalid input: " + list[i]);
    }
}