//
// https://www.hackerrank.com/challenges/tutorial-intro
//

function processData(input) {
    var args = input.split("\n");
    var arr = args[2].split(" ");

    for(i in arr) {
      if(arr[i] == args[0]) {
        console.log(i);
        return;
      }
    }
    return -1
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
