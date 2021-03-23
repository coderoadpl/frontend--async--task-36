const fakeFetch1 = () => new Promise((resolve) => setTimeout(() => resolve('data1'), 3000))
const fakeFetch2 = () => new Promise((resolve, reject) => setTimeout(() => reject('data2'), 2000))
const fakeFetch3 = () => new Promise((resolve) => setTimeout(() => resolve('data3'), 1000))

let resolvedPromises = 0
let promisesValues = []

const onResolveAll = (data) => {
    if (resolvedPromises === 3) {
        console.log('all resolved', promisesValues)
    }
}
const onReject = (error) => {
    console.log('all rejected', error)
}

fakeFetch1()
    .then((data) => {
        resolvedPromises++
        promisesValues[0] = data
        return data
    })
    .then(onResolveAll)
    .catch(onReject)

fakeFetch2()
    .then((data) => {
        resolvedPromises++
        promisesValues[1] = data
        return data
    })
    .then(onResolveAll)
    .catch(onReject)

fakeFetch3()
    .then((data) => {
        resolvedPromises++
        promisesValues[2] = data
        return data
    })
    .then(onResolveAll)
    .catch(onReject)
