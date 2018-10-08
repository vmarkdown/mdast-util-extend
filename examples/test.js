//incremental-dom
const vfile = require('to-vfile');

const unified = require('unified');
const parse = require('remark-parse');
const toString = require('mdast-util-to-string');

const incremental = require('../index');

const processor = unified()
    .use(parse, {});

const md = vfile.readSync('./demo.md');
// const mdast0 = processor.parse('# h1\n## h2\n#### h4');
const mdast0 = processor.parse(md);
// incremental.remove(mdast0, 2);
// console.log(JSON.stringify(mdast0, null, 2));


const mdast1 = processor.parse('## insert');
incremental.insert(mdast0, mdast1, 2);
console.log(JSON.stringify(mdast0, null, 2));



// const mdast1 = processor.parse('## h2=');
// incremental.replace(mdast0, mdast1, 2);
// console.log(JSON.stringify(mdast0, null, 2));


//
// mdast1.children[0].position.start.line = 2;
// mdast1.children[0].position.end.line = 2;


// console.log(JSON.stringify(mdast0, null, 2));
//
// console.log('=============================');
//
// console.log(JSON.stringify(mdast1, null, 2));

// console.log(findRange(mdast0, 2, 2));

// const mdast1 = processor.parse('## h2=');
// var result = incremental.replace(mdast0, 2, mdast1);
// console.log(JSON.stringify(result, null, 2));

// console.log(toString(result));


// var result = removeRange(mdast0, 2, 2);
// console.log(JSON.stringify(result, null, 2));













