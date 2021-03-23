const fakeFetch1 = () => new Promise((resolve) => setTimeout(() => resolve('data1'), 1000))
const fakeFetch2 = () => new Promise((resolve) => setTimeout(() => resolve('data2'), 2000))
const fakeFetch3 = () => new Promise((resolve) => setTimeout(() => resolve('data3'), 3000))

const promiseAll = (promises) => {
    return new Promise((resolve, reject) => {
        let resolvedPromises = 0
        let promisesValues = []

        const onResolveAll = (data) => {
            if (resolvedPromises === 3) {
                resolve(promisesValues)
            }
        }
        const onReject = (error) => {
            reject(error)
        }

        promises.forEach((promise, index) => {
            promise
                .then((data) => {
                    resolvedPromises++
                    promisesValues[index] = data
                    return data
                })
                .then(onResolveAll)
                .catch(onReject)
        })
    })
}

const promise = promiseAll([
    fakeFetch1(),
    fakeFetch2(),
    fakeFetch3(),
])

promise
    .then((data) => console.log('promise all', data))
    .catch((error) => console.log('promise all rejected', error))