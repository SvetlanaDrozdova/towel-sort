
// You should implement your task here.
let array = [];
module.exports = function towelSort (matrix) {
  for (let j = 0; j < matrix.length; j++){
    if (j % 2 !== 0){
      matrix[j].reverse();
    }
  }
  for (let j = 0; j < matrix.length; j++){
    for (let i = 0; i < matrix[j].length; i++){
      array.push(matrix[j][i]);
    }
  }
 return array;
}