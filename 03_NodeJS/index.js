import fs from "fs";
import { Command } from "commander";
const program = new Command();

program
    .name('counter')
    .description('CLI to do file based tasks')
    .version('0.8.0')

program
    .command('countwords')
    .description('Count the number of words from file')
    .argument('<file>', 'file to count')
    .action((file)=>{
        fs.readFile(file, "utf-8", function(err, data){
            if(err){
                console.log(err);
            }
            else{
                let wordCount = 0;
                for(let i = 0; i < data.length; i++){
                    if(data[i] === " "){
                        wordCount++;
                    }
                }
                console.log(`There are ${wordCount+1} words in ${file}`);
            }
        })
    })

    program.parse();
