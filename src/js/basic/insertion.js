
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

function insertionSortOptimize1(array) {
  if (!array || !array.length) {
    return;
  }
  var maxLength = array.length;

  for (var i = 1; i < maxLength; i++) {
    // 寻找元素array[i]合适的插入位置
    var e = array[i];
    var j; // j保存元素e应该插入的位置 

    for (j = i; j > 0 && array[j - 1] > e; j--) {
      array[j] = array[j - 1];
    }
    array[j] = e;
  }
}