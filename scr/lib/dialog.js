const readline=require('readline');

var rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
exports.getDialog=()=>{
    
  rl.question("What is your host? ", function(answer) {
    console.log("Your host is:", answer);
    return answer
    rl.close();
  });
}

