var sortTestHelper = {
  // 生成有n个元素的随机数组，每个元素的随机范围[rangeL，rangeR]
  generateRandomArray: function (n, rangeL, rangeR) {
    var arr = new Array(n);
    rangeL = Math.ceil(rangeL);
    rangeR = Math.floor(rangeR);
    for (var i = 0; i < n; i++) {
      arr[i] = Math.floor(Math.random() * (rangeR - rangeL + 1)) + rangeL;
    }

    return arr;
  }
};