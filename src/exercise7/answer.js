const reduce = (xs, fn, acc) => {
    let count = 0
    if(xs[0] === undefined){
        return acc
    }
    return reduce(xs.slice(count+1), fn, fn(acc, xs[count], count++, xs))
}

module.exports = reduce
