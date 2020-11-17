import Counter from "./counter"

const cnt = new Counter(10)

console.log(cnt.getCounter())

cnt.increment()
cnt.increment()

console.log(cnt.getCounter())