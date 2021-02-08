/** Count is couting how many times we have to do compare operation, the less, the better, based on the pivot
 * for example, if array is [0,1,3,4,5],we always chose last element as pivot, or the first, it will has worst behavior
 * it will be n-1 + n-2 + ...+ 1 comparison , n^2 big O
 * best secnario is nlogn big O
 */

export function quickSortFirstPivot(array, l, r, count) {

    if (l >= r) { return [array, count]; }
    let p;
    // chose a pivot, rearrange array, less than it move to left, greater than it move to right

    // chose first as pivot , then put it at last
    [p, array, count] = partitionByPivotAtFirst(array, l, r, count);
    [array, count] = quickSortFirstPivot(array, l, p - 1, count);
    [array, count] = quickSortFirstPivot(array, p + 1, r, count);
    return [array, count];

}
export function quickSortLastPivot(array, l, r, count) {

    if (l >= r) { return [array, count]; }
    swap(array, l, r);
    let p;
    [p, array, count] = partitionByPivotAtFirst(array, l, r, count);
    [array, count] = quickSortLastPivot(array, l, p - 1, count);
    [array, count] = quickSortLastPivot(array, p + 1, r, count);

    return [array, count];
}

export function quickSortMedianPivot(array, l, r, count) {
    if (l >= r) { return [array, count]; }
    let p;
    // chose a pivot, rearrange array, less than it move to left, greater than it move to right
    let midIndex = findMedianOfThree(array, l, r);
    swap(array, midIndex, l);
    [p, array, count] = partitionByPivotAtFirst(array, l, r, count);
    [array, count] = quickSortMedianPivot(array, l, p - 1, count);
    [array, count] = quickSortMedianPivot(array, p + 1, r, count);

    return [array, count];
}

function findMedianOfThree(array, l, r) {
    let midIndex = parseInt((r + l) / 2);
    if (array[l] < array[midIndex]) {
        if (array[midIndex] < array[r]) {
            return midIndex;
        } else if (array[l] < array[r]) {
            return r;
        } else {
            return l;
        }
    } else {
        if (array[l] < array[r]) {
            return l;
        } else if (array[midIndex] < array[r]) {
            return r;
        } else {
            return midIndex;
        }
    }
}
/**
 * @param {number[]} array input array for partition
 * @param {number} l start index of array to be partition
 * @param {number} r end index of array to be partition
 * @param {number} pivotIndex index of pivot for partition
 * @param {number} count the count of operation of comparison
 * @returns {[number,number[],number]} [pivotIndex, array, count] , pivotIndex is the index of pivot after partition
 */
function partitionByPivotAtFirst(array, l, r, count) {
    // console.log(`partition at: l: ${l} r : ${r}`);
    let pivot = array[l];
    let i = l + 1;
    for (let j = l + 1; j <= r; j++) {
        if (array[j] < pivot) {
            swap(array, i, j);
            i++;
        }
    }
    swap(array, i - 1, l);
    count = count + r - l;
    return [i - 1, array, count];
}

function swap(array, leftIndex, rightIndex) {
    [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];
}