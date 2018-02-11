const steps = Math.abs(process.argv[2] || Math.floor(Math.random()*10));
const width = steps * 10;
const p = '*';
const s = ' ';
const t = '|';
let tree = '';
let j = 1;

// Building one line of the tree
const addLine = (o, n)  => {
  let space = s.repeat((width-n)/2);
  let block = o.repeat(n);
  return space + block + space + '\n';
}

// Building a tree block
const addBlock = (start, nb) => {
  let block = '';
  for (let i=0; i<nb; i++) {
    j = start + i*2;
    block += addLine(p, j);
  }
  return block;
}

// Building a tree trunk
const addTrunk = () => {
  let trunk = '';
  // Always odd to be centered :)
  let trunkWidth = (steps % 2 === 0) ? steps-1 : steps;
  for (let i=0; i<steps; i++) {
    trunk += addLine(t, trunkWidth);
  }
  return trunk;
}

// Building the whole tree
const buildTree = () => {
  let nbLine;
  for (let i=0; i<steps; i++) {
    let startWidth = j-Math.ceil(i/2)*2;
    tree += addBlock(startWidth, i+4);
  }
  tree += addTrunk();
  // Reverse tree ;)
  if (process.argv[2] < 0) tree = tree.split('\n').reverse().join('\n');
  return tree;
}


console.log(buildTree());