
function insertionSort(array) {
  if (!array || !array.length) {
    return;
  }
  var maxLength = array.length;
  for (var i = 1; i < maxLength; i++) {
    for (var j = i; j > 0 && array[j] < array[j - 1]; j--) {
      sortTestHelper.swap(array, j, j - 1);
    }
  }
}