const countWords = words => words.reduce((result, word) => {
    return {...result, [word]: words.filter(w => w===word).length}
}, {})

module.exports = countWords
