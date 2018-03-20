function debounce(callback, ms) {
  let result;
  let timer = null;
  let invoke = true;
  return function() {
    if (invoke) {
      result = callback.apply(this, arguments);
      invoke = false;

      timer = setTimeout(function() {
        invoke = true;
        clearTimeout(timer);
      }, ms);
    }
    return result;
  };
}
// Example

let iterator = 0;

function callback() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log("Iterator value ", iterator);
}

var increaseIterator = debounce(callback, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'
