import {readFileSync} from "fs";

const data = readFileSync('./twb2.json',
            {encoding:'utf8', flag:'r'});

// Display the file data
console.log(data);