function compact(arr) {

  let newArr = arr.filter(function(el) {
    return el != null;
  });
  
  return newArr
}


module.exports = compact;
