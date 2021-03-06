var test = require('tape');
var pick = require('../../packages/object-pick');
var compare = require('../../packages/collection-compare');

// var obj = {a: 3, b: 5, c: 9};
// pick(obj, a, c); // {a: 3, c: 9}
//
// var obj = {a: 3, b: 5, c: 9};
// pick(obj, ['a', 'b', 'd']); // {a: 3, b: 5, d: undefined}
//
// var obj = {a: 3, b: 5, c: 9};
// pick(obj, ['a', 'a']); // {a: 3}

test('pick using array', function (t) {
  t.plan(1);
  var obj = {a: 3, b: 5, c: 9};
  t.ok(compare(pick(obj, ['a', 'c']), {a: 3, c: 9}));
  t.end();
});

test('pick using arguments', function (t) {
  t.plan(1);
  var obj = {a: 3, b: 5, c: 9};
  t.ok(compare(pick(obj, 'a', 'c'), {a: 3, c: 9}));
  t.end();
});

test('pick using a non-existent key', function (t) {
  t.plan(1);
  var obj = {a: 3, b: 5, c: 9};
  t.ok(compare(pick(obj, ['a', 'b', 'd']), {a: 3, b: 5, d: undefined}));
  t.end();
});

test('pick using a duplicate key', function (t) {
  t.plan(1);
  var obj = {a: 3, b: 5, c: 9};
  t.ok(compare(pick(obj, ['a', 'a']), {a: 3}));
  t.end();
});
