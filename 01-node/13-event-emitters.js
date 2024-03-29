// get back the class
// if want custom extend from class
// othrewise just for emitting and handling events create instance

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// buit-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data received - ${name} - ${id}`);
});

customEmitter.on('response', () => {
  console.log(`some other logic here`);
});


customEmitter.emit('response', 'john', 34)

