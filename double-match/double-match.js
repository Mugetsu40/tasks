function match(arr1, arr2) {
    const array1ElementsCount = {}
    const array2ElementsCount = {}

    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        if (i < arr1.length) {
            if (!array1ElementsCount[arr1[i]]) {
                array1ElementsCount[arr1[i]] = 1
            } else {
                array1ElementsCount[arr1[i]]++
            }
            i++
        }

        if (j < arr2.length) {
            if (!array2ElementsCount[arr2[j]]) {
                array2ElementsCount[arr2[j]] = 1
            } else {
                array2ElementsCount[arr2[j]]++
            }

            j++
        }
    }

    const result = []

    for (const n in array1ElementsCount) {
        if (array1ElementsCount[n] >= 2 && array2ElementsCount[n] >= 2) {
            result.push(n)
        }
    }

    return result
}

const arr1 = [7, 17, 1, 9, 1, 17, 56, 56, 23]
const arr2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]

console.log(match(arr1, arr2));