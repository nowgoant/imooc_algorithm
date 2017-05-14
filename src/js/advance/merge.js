/**
 * 将arr[l...mid]和arr[mid...r]两部分进行归并
 */
function __merge(arr, l, mid, r) {
  var aux = [];
  var i = l;
  for (i = l; i <= r; i++) {
    aux[i - l] = arr[i];
  }

  i = l;
  var j = mid + 1, k = l;
  for (; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l];
      j++;
    } else if (j > r) {
      arr[k] = aux[i - l];
      i++;
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l];
      i++;
    } else {
      arr[k] = aux[j - l];
      j++;
    }
  }
}

/**
 * 递归使用归并排序，对arry[l....r]的范围进行排序
 */
function __mergeSort(arr, l, r) {
  if (l >= r) {
    return arr;
  }

  // 如果l和r特别大，大到相加内存溢出
  var mid = Math.floor((l + r) / 2);

  __mergeSort(arr, l, mid);
  __mergeSort(arr, mid + 1, r);
  __merge(arr, l, mid, r);
}

function mergeSort(arr) {

  __mergeSort(arr, 0, arr.length - 1);
}