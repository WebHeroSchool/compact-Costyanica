function compact(arr) {

  let newArr = arr.filter(el => el || el ===0);
  
  return newArr
}


module.exports = compact;
