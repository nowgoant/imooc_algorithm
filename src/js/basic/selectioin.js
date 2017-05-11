
function selectionSort(array) {
  if (!array || !array.length) {
    return;
  }
  var maxLength = array.length;
  var i = 0,
    j = 0;
  for (; i < maxLength; i++) {
    var minIndex = i;
    for (j = i + 1; j < maxLength; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    sortTestHelper.swap(array, i, minIndex);
  }
}