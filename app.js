function* generator() {
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}
const str = generator()
str.next()
//'H'
//...

function* numberGen(n = 10) {
    for(let i = 0; i < n; i++) {
        yield i
    }
}

const num = numberGen(7)
num.next()




const iterator = {
    [Symbol.iterator](n = 10) {
        let i = 0
        return {
            next() {
                if (i < n) {
                    return {value: i++, done: false}
                }
                return {value: undefined, done: true}
            }
        }
    }
}

for (let k of 'Hello') {
    console.log(k)
}

for (let q of [1, 2, 3, 5, 8, 13]) {
    console.log(q)
}

for (let i of iterator) {
    console.log(i)
}


function* iter(n = 10) {
for(let i = 0; i < n; i++) {
    yield i
}
}

for (let i of iter) {
    console.log(i)
}