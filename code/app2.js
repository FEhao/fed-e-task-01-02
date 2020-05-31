const fp = require('lodash/fp')
const { Maybe, Container } = require('./support')

let maybe = Maybe.of([5, 6, 1])
let ex1 = num => maybe.map(fp.map(fp.add(num)))._value

let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
let ex2 = () => xs.map(fp.first)._value


let safeProp = fp.curry(function (x, o) {
  return Maybe.of(o[x])
})
let user = { id: 2, name: 'Albert' }
let ex3 = user => safeProp('name')(user).map(fp.first)._value


let ex4 = function (n) {
  if (n) {
    return parseInt(n)
  }
}

let ex42 = function (n) {
  return Maybe.of(n).map(parseInt)._value || undefined
}
