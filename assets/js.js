var a = [1,2,3,6,7,8,9]
var b = [0]

function outPut(a, b) {

    let result = []
    let obj = {}

    for (let i=0; i<a.length; i++){
        let num = a[i]
        obj[num] = ""
    }

    for (let i=0; i<b.length; i++){
        if (b[i] in obj) {
            result.push(b[i])
        }
    }
    return result
}

console.log(outPut(a,b))