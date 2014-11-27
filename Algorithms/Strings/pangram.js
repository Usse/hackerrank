var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function processData(input) {
  var data = input.replace(/\s/g, "").toLowerCase().split('');

  for(index in data) {
	   var elem_index = letters.indexOf(data[index]);
     if (elem_index > -1) {
       letters.splice(elem_index, 1);
     }
  }

  if(letters.length == 0) console.log("pangram");
  else console.log("not pangram");
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
