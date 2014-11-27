//
// https://www.hackerrank.com/contests/projecteuler/challenges/euler001
//


function multiples(x) {
  var sum=0;
  for (var i = 1; i < x; i++) {
    if ((i % 3 == 0) || (i % 5 == 0))
      sum += i;
    }
    return sum;
  }


  function processData(input) {
    var arr = input.split('\n')
    for(elem in arr) {
      if(elem>0) {
        console.log(multiples(arr[elem]));
      }
    }
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
  
