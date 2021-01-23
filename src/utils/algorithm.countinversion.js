export function countInversion(array) {

    return sortAndCount(array);
}

function sortAndCount(list) {
    if (list.length < 2) {
        const count = 0;
        return [list, count];
    }
    const half = Math.ceil(list.length / 2);
    var firstHalf = list.slice(0, half);
    var secondHalf = list.slice(half, list.length);
    const [firstSortedArray, firstHalfCount] = sortAndCount(firstHalf);
    const [secondSortedArray, secondHalfCount] = sortAndCount(secondHalf);
    const [sortedCombine, reverseCount] = countSplitInvAndSort(firstSortedArray, secondSortedArray, list.length);
    const totalCount = firstHalfCount + secondHalfCount + reverseCount;
    return [sortedCombine, totalCount];

}

function countSplitInvAndSort(firstArray, secondArray, totalNum) {
    var result = [];
    var reverseCount = 0;
    var i = 0;
    var j = 0;

    for (var index = 0; index < totalNum; index++) {
        if (i < firstArray.length && j < secondArray.length) {
            if (firstArray[i] <= secondArray[j]) {
                result.push(firstArray[i]);
                i++;
            } else {
                result.push(secondArray[j]);
                reverseCount += firstArray.length - i;
                j++;
            }
        } else if (i < firstArray.length) {
            // first array not empty
            result.push(firstArray[i]);
            i++;
        } else {
            // second array not empty
            result.push(secondArray[j]);
            j++;
        }

    }
    return [result, reverseCount];
}