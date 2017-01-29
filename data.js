// Sign Language Data
  // to use, `let words = require("../signbot-data/data.js");`

// Spec
  // finger values are listed from thumb to pinky, 0 = extended, 1 = middle, 2 = curled
  // xy values are listed as leftX, leftY, rightX, rightY.
    // y is in the interval [0,1], representing bottom and top of movement range, respectively
    // x is in the interval [-1,1], representing leftmost and rightmost extremes. Left hand typically will start at -0.5, and right hand at 0.5.

const samples = {
  "hello": {
    {
      time : 2000,
      right: { xy: [0.3, 1], fingers: [0, 0, 0, 0, 0] }
    },
    {
      time : 500,
      right: { xy: [-0.3, 1], fingers: [0, 0, 0, 0, 0] }
    },
    {
      time : 500,
      right: { xy: [0.3, 1], fingers: [0, 0, 0, 0, 0] }
    },
    {
      time : 500,
      right: { xy: [-0.3, 1], fingers: [0, 0, 0, 0, 0] }
    },
    {
      time : 500,
      right: { xy: [0.3, 1], fingers: [0, 0, 0, 0, 0] }
    }
  },
  "bye": {
    {
      time : 2000,
      right: { xy: [0, 1], fingers: [0, 0, 0, 0, 0] }
    },
    {
      time : 400,
      right: { xy: [0, 1], fingers: [2, 2, 2, 2, 0] }
    },
    {
      time : 400,
      right: { xy: [0, 1], fingers: [0, 0, 0, 0, 0] }
    },
    {
      time : 400,
      right: { xy: [0, 1], fingers: [2, 2, 2, 2, 0] }
    },
    {
      time : 400,
      right: { xy: [0, 1], fingers: [0, 0, 0, 0, 0] }
    },
    {
      time : 400,
      right: { xy: [0, 1], fingers: [2, 2, 2, 2, 0] }
    },
    {
      time : 400,
      right: { xy: [0, 1], fingers: [0, 0, 0, 0, 0] }
    },
  },
  "how": {
    {
      time : 2000,
      left: { xy: [0.7, 0.5], fingers: [1, 1, 1, 1, 1] },
      right: { xy: [-0.7, 0.5], fingers: [1, 1, 1, 1, 1] }
    },
    {
      time : 400,
      left: { xy: [0.7, 0.4], fingers: [1, 1, 1, 1, 1] },
      right: { xy: [-0.7, 0.6], fingers: [1, 1, 1, 1, 1] }
    },
    {
      time : 400,
      left: { xy: [0.7, 0.5], fingers: [1, 1, 1, 1, 1] },
      right: { xy: [-0.7, 0.5], fingers: [1, 1, 1, 1, 1] }
    },
    
  },
  "you": {
    
    {
      time : 3000,
      left: { xy: [0, 0.3], fingers: [2, 2, 2, 2, 0] },
      right: { xy: [0, 0.5], fingers: [2, 2, 2, 2, 2] }
    }
  },
  "yes": {
    {
      time : 3000,
      left: { xy: [0, 0.3], fingers: [0, 0, 0, 0, 0] },
      right: { xy: [0, 0.7], fingers: [2, 2, 2, 2, 2] }
    },
    {
      time : 600,
      left: { xy: [0, 0.3], fingers: [0, 0, 0, 0, 0] },
      right: { xy: [0, 0.8], fingers: [2, 2, 2, 2, 2] }
    },
    {
      time : 600,
      left: { xy: [0, 0.3], fingers: [0, 0, 0, 0, 0] },
      right: { xy: [0, 0.7], fingers: [2, 2, 2, 2, 2] }
    },
    {
      time : 600,
      left: { xy: [0, 0.3], fingers: [0, 0, 0, 0, 0] },
      right: { xy: [0, 0.8], fingers: [2, 2, 2, 2, 2] }
    },
    {
      time : 600,
      left: { xy: [0, 0.3], fingers: [0, 0, 0, 0, 0] },
      right: { xy: [0, 0.7], fingers: [2, 2, 2, 2, 2] }
    }
  },
  "no": {
    {
      time : 3000,
      left: { xy: [0, 0.3], fingers: [0, 0, 0, 0, 0] },
      right: { xy: [0, 0.7], fingers: [2, 2, 0, 1, 0] }
    },
    {
      time : 600,
      left: { xy: [0, 0.3], fingers: [0, 0, 0, 0, 0] },
      right: { xy: [0, 0.7], fingers: [2, 2, 1, 1, 1] }
    },
    {
      time : 600,
      left: { xy: [0, 0.3], fingers: [0, 0, 0, 0, 0] },
      right: { xy: [0, 0.7], fingers: [2, 2, 0, 1, 0] }
    },
    {
      time : 600,
      left: { xy: [0, 0.3], fingers: [0, 0, 0, 0, 0] },
      right: { xy: [0, 0.7], fingers: [2, 2, 1, 1, 1] }
    },
    {
      time : 600,
      left: { xy: [0, 0.3], fingers: [0, 0, 0, 0, 0] },
      right: { xy: [0, 0.7], fingers: [2, 2, 0, 1, 0] }
    }
  },
  "me": {
    right: { xy: [0, 0.5], fingers: [2, 1, 2, 2, 2] }
  },
  "name": {
    left: { xy: [0, 0.6], fingers: [2, 0, 0, 2, 2] },
    right: { xy: [0, 0.4], fingers: [2, 0, 0, 2, 2] }
  },
  
  "store": {
    left: { xy: [-0.5, 0], fingers: [1, 1, 1, 1, 1] },
    right: { xy: [0.5, 0], fingers: [1, 1, 1, 1, 1] }
  },
  "go": {
    left: { xy: [-0.5, 0.5], fingers: [2, 0, 2, 2, 2] },
    right: { xy: [0.5, 0.5], fingers: [2, 0, 2, 2, 2] }
  },
  "time": {
    left: { xy: [0, 0.4], fingers: [2, 2, 2, 2, 2] },
    right: { xy: [0, 0.6], fingers: [2, 0, 2, 2, 2] }
  },
  "cold": {
    left: { xy: [-0.5, 0.5], fingers: [2, 2, 2, 2, 2] },
    right: { xy: [0.5, 0.5], fingers: [2, 2, 2, 2, 2] }
  },
  
  "no": {
    right: { xy: [0.5, 1], fingers: [0, 1, 2, 2, 2] }
  },
  
  "null":{
    left: { xy: [-0.5, 0], fingers: [0, 0, 0, 0, 0] },
    left: { xy: [0.5, 0], fingers: [0, 0, 0, 0, 0] },
  },
  
  "A": {
    right: { xy: [0.5, 1], fingers: [1, 2, 2, 2, 2] }
  },
  
  "C": {
    right: { xy: [0.5, 1], fingers: [0, 1, 1, 1, 1] }
  },
  "L": {
    right: { xy: [0.5, 1], fingers: [0, 0, 2, 2, 2] }
  },
  "I": {
    right: { xy: [0.5, 1], fingers: [2, 2, 2, 2, 0] }
  },
  "V": {
    right: { xy: [0.5, 1], fingers: [2, 0, 0, 2, 2] }
  },
  "E": {
    right: { xy: [0.5, 1], fingers: [2, 2, 2, 2, 2] }
  },
  
  "S": {
    right: { xy: [0.5, 1], fingers: [2, 1, 1, 1, 1] }
  },
  "G": {
    right: { xy: [0.5, 1], fingers: [2, 0, 2, 2, 2] }
  },
  "N": {
    right: { xy: [0.5, 1], fingers: [2, 1, 1, 2, 2] }
  },
  "B": {
    right: { xy: [0.5, 1], fingers: [1, 0, 0, 0, 0] }
  },
  "O": {
    right: { xy: [0.5, 1], fingers: [1, 1, 1, 1, 1] }
  },
  "T": {
    right: { xy: [0.5, 1], fingers: [2, 1, 2, 2, 2] }
  },
};

const keys = Object.keys(samples);

function distance(v1, v2){
  let total = 0;
  for(let i = 0; i < v1.length; i++)
    total += (v1[i] - v2[i])*(v1[i] - v2[i]);
  return total;
}

function getAllFingers(datum){
  let a1, a2;
  if(datum.left) a1 = datum.left.fingers;
  else a1 = new Array(5).fill(0);
  if(datum.right) a2 = datum.right.fingers;
  else a2 = new Array(5).fill(0);
  return a1.concat(a2);
}

module.exports = {
  samples: samples,
  getAllFingers: getAllFingers,
  getMatch: function(data){
    const threshold = 5;
    let match = null;
    keys.forEach(function(key){
      if(data.left && !data.right && samples[key].left && !samples[key].right){
        let dist = distance(data.left.fingers, samples[key].left.fingers);
        if(dist < threshold)
          if(!match || dist < distance(data.left.fingers, samples[match].left.fingers))
            match = key;
      }
      else if(!data.left && data.right && samples[key].right && !samples[key].left){
        let dist = distance(data.right.fingers, samples[key].right.fingers);
        if(dist < threshold)
          if(!match || dist < distance(data.right.fingers, samples[match].right.fingers))
            match = key;
      }
      else if(data.left && data.right){
        let dist = distance(data.left.fingers, samples[key].left.fingers)
          + distance(data.right.fingers, samples[key].right.fingers);
        let f = getAllFingers(samples[key]);
        if(dist < threshold)
          if(!match || dist < distance(getAllFingers(match), f))
            match = key;
      }
    });
    return match;
  }
};
