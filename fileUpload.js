const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./files/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./files/second.txt', 'utf8', (err, secondResult) => {
        if (err) {
            console.log(err)
            return
        }

        writeFile(
            './files/result-async.txt',
            `Here is the result : ${first}, ${secondResult}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})
console.log('starting next task')