module.exports = {
  // finger values are listed from thumb to pinky, 0 = extended, 1 = middle, 2 = curled
  // xy values are listed as leftX, leftY, rightX, rightY.
    // y is in the interval [0,1], representing bottom and top of movement range, respectively
    // x is in the interval [-1,1], representing leftmost and rightmost extremes. Left hand typically will start at -1/2, and right hand at 1/2.
  "hello": {
    left: { xy: [-1/2, 0], fingers: [0, 0, 0, 0, 0] },
    right: { xy: [1/2, 1], fingers: [0, 0, 0, 0, 0] }
  },
  "A": {
    left: { xy: [-1/2, 0], fingers: [0, 0, 0, 0, 0] },
    right: { xy: [1/2, 1], fingers: [1, 2, 2, 2, 2] }
  }
}
