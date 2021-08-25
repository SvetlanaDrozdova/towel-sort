
// You should implement your task here.
module.exports = function towelSort (matrix) {
  let array = [];
  if (typeof matrix === 'undefined'){
    return [];
  }
  for (let j = 0; j < matrix.length; j++){
    if (j % 2 !== 0){
      matrix[j].reverse();
    }
    for (let i = 0; i < matrix[j].length; i++){
     array.push(matrix[j][i]);
    }
  }
  return array;
}