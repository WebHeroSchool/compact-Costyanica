function compact(arr) {

  let newArr = arr.filter(function(el) {
  return el != null && el != "";
});
  
  return newArr
}


module.exports = compact;
