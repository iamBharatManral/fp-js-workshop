const arrayOfSize = n => new Array(n).fill(0)
const repeat = (operation, run) => {
    arrayOfSize(run).forEach(operation)
}

module.exports = repeat
