// Sign Language Data
  // to use, `let words = require("../signbot-data/data.js");`

// Spec
  // finger values are listed from thumb to pinky, 0 = extended, 1 = middle, 2 = curled
  // xy values are listed as leftX, leftY, rightX, rightY.
    // y is in the interval [0,1], representing bottom and top of movement range, respectively
    // x is in the interval [-1,1], representing leftmost and rightmost extremes. Left hand typically will start at -0.5, and right hand at 0.5.
const samples = {
  "hello": {
    right: { xy: [0.5, 1], fingers: [0, 0, 0, 0, 0] }
  },
  "how": {
    left: { xy: [0, 0.5], fingers: [0, 1, 1, 1, 1] },
    right: { xy: [0, 0.5], fingers: [0, 1, 1, 1, 1] }
  },
  "you": {
    right: { xy: [0, 0.5], fingers: [2, 0, 2, 2, 2] }
  },
  
  "me": {
    right: { xy: [0, 0.5], fingers: [2, 1, 2, 2, 2] }
  },
  "name": {
    left: { xy: [0, 0.6], fingers: [2, 0, 0, 2, 2] },
    right: { xy: [0, 0.4], fingers: [2, 0, 0, 2, 2] }
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

function getAllFingers(key){
  let a1, a2;
  if(samples[key].left) a1 = samples[key].left.fingers;
  else a1 = new Array(5).fill(0);
  if(samples[key].right) a2 = samples[key].right.fingers;
  else a2 = new Array(5).fill(0);
  return a1.concat(a2);
}

module.exports = {
  getMatch: function(data){
    //data will be 5 left hand, 5 right hand
    
    let hasLeft = false, hasRight = false;
    for(let i = 0; i < 5; i++)
      if(data[i] != 0){
        hasLeft = true;
        break;
      }
    for(let i = 5; i < 10; i++)
      if(data[i] != 0){
        hasRight = true;
        break;
      }
    
    const threshold = 5;
    let match = null;
    keys.forEach(function(key){
      if(hasLeft && !hasRight && samples[key].left && !samples[key].right){
        let dist = distance(data.slice(0,5), samples[key].left.fingers);
        if(dist < threshold)
          if(!match || dist < distance(data.slice(0,5), samples[match].left.fingers))
            match = key;
      }
      else if(!hasLeft && hasRight && samples[key].right && !samples[key].left){
        let dist = distance(data.slice(5,10), samples[key].right.fingers);
        if(dist < threshold)
          if(!match || dist < distance(data.slice(5,10), samples[match].right.fingers))
            match = key;
      }
      else if(hasLeft && hasRight){
        let a1, a2;
        if(samples[key].left) a1 = samples[key].left.fingers;
        else a1 = new Array(5).fill(0);
        if(samples[key].right) a2 = samples[key].right.fingers;
        else a2 = new Array(5).fill(0);
        
        let f = getAllFingers(key);
        let dist = distance(data.slice(5,10), f);
        if(dist < threshold)
          if(!match || dist < distance(getAllFingers(match), f))
            match = key;
      }
    });
    return match;
  }
};
