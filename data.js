// Sign Language Data
  // to use, `let words = require("../signbot-data/data.js");`

// Spec
  // finger values are listed from thumb to pinky, 0 = extended, 1 = middle, 2 = curled
  // xy values are listed as leftX, leftY, rightX, rightY.
    // y is in the interval [0,1], representing bottom and top of movement range, respectively
    // x is in the interval [-1,1], representing leftmost and rightmost extremes. Left hand typically will start at -0.5, and right hand at 0.5.

module.exports = {
  "hello": {
    left: { xy: [-0.5, 0], fingers: [0, 0, 0, 0, 0] },
    right: { xy: [0.5, 1], fingers: [0, 0, 0, 0, 0] }
  },
  "how": {
    left: { xy: [0, 0.5], fingers: [0, 1, 1, 1, 1] },
    right: { xy: [0, 0.5], fingers: [0, 1, 1, 1, 1] }
  },
  "you": {
    left: { xy: [-0.5, 0], fingers: [0, 0, 0, 0, 0] },
    right: { xy: [0, 0.5], fingers: [2, 0, 2, 2, 2] }
  },
  
  "A": {
    left: { xy: [-0.5, 0], fingers: [0, 0, 0, 0, 0] },
    right: { xy: [0.5, 1], fingers: [1, 2, 2, 2, 2] }
  },
  "B": {
    left: { xy: [-0.5, 0], fingers: [0, 0, 0, 0, 0] },
    right: { xy: [0.5, 1], fingers: [1, 0, 0, 0, 0] }
  },
  
  "C": {
    left: { xy: [-0.5, 0], fingers: [0, 0, 0, 0, 0] },
    right: { xy: [0.5, 1], fingers: [0, 1, 1, 1, 1] }
  },
  "L": {
    left: { xy: [-0.5, 0], fingers: [0, 0, 0, 0, 0] },
    right: { xy: [0.5, 1], fingers: [0, 0, 2, 2, 2] }
  },
  "I": {
    left: { xy: [-0.5, 0], fingers: [0, 0, 0, 0, 0] },
    right: { xy: [0.5, 1], fingers: [2, 2, 2, 2, 0] }
  },
  "V": {
    left: { xy: [-0.5, 0], fingers: [0, 0, 0, 0, 0] },
    right: { xy: [0.5, 1], fingers: [2, 0, 0, 2, 2] }
  },
  "E": {
    left: { xy: [-0.5, 0], fingers: [0, 0, 0, 0, 0] },
    right: { xy: [0.5, 1], fingers: [2, 2, 2, 2, 2] }
  }
};
