
var numbers = {
     0:'০',
     1:'১',
     2:'২',
     3:'৩',
     4:'৪',
     5:'৫',
     6:'৬',
     7:'৭',
     8:'৮',
     9:'৯'
  };
  
var bengali = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  function replaceEngNum(input) {
    const stringNum =  input.toString()
    var output = "";
    for (var i = 0; i < stringNum.length; ++i) {
      output += bengali[Number(stringNum[i])]
    }
    return output;
  }

  export default replaceEngNum