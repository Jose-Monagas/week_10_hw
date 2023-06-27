function spiralMatrix(n) {
  const arr = Array(n)
    .fill()
    .map(() => Array(n));

  let val = 1; // Current value to be filled in the matrix
  let t = 0; // Top boundary index
  let b = n - 1; // Bottom boundary index
  let l = 0; // Left boundary index
  let r = n - 1; // Right boundary index

  while (l <= r && t <= b) {
    for (j = l; j >= l && j <= r; j++) {
      arr[t][j] = val;
      val++;
    }
    t++;
    for (i = t; i >= t && i <= b; i++) {
      arr[i][r] = val;
      val++;
    }
    r--;
    for (j = r; j >= l && j <= r; j--) {
      arr[b][j] = val;
      val++;
    }
    b--;
    for (i = b; i >= t && i <= b; i--) {
      arr[i][l] = val;
      val++;
    }
    l++;
  }
  return arr;
}
console.log(spiralMatrix(4));
