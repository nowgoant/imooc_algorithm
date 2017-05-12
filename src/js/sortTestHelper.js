var sortTestHelper = {
  swap: function (array, x, y) {
    var b = array[y];
    array[y] = array[x];
    array[x] = b;
  },
  // 生成有n个元素的随机数组，每个元素的随机范围[rangeL，rangeR]
  generateRandomArray: function (n, rangeL, rangeR) {
    var arr = new Array(n);
    rangeL = Math.ceil(rangeL);
    rangeR = Math.floor(rangeR);
    for (var i = 0; i < n; i++) {
      arr[i] = Math.floor(Math.random() * (rangeR - rangeL + 1)) + rangeL;
    }

    return arr;
  },
  generateNearlyOrderedArray: function (n, swapTimes) {
    var array = [];

    for (var i = 0; i < n; i++) {
      array[i] = i;
    }

    for (var i = 0; i < swapTimes; i++) {
      var posx = Math.floor(Math.random() * n);
      var posy = Math.floor(Math.random() * n);
      sortTestHelper.swap(array, posx, posy);
    }

    return array;
  }
};