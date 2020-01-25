//an improved variation of the binary search
//it works with sorted arrays (lists

//skewing the lookedup array a little using delta
//this can work with string or any data , but you need to provide it with methods to compare and calculate the diff
function interpolationSearch(sortedArray: number[], key: number): number {
    let start = 0;
    let finish = sortedArray.length;
    let delta = -1;
    let middle = -1;
    while (start <= finish && key !== sortedArray[middle]) {
        delta = Math.floor((key - sortedArray[start]) / (sortedArray[finish] - sortedArray[start])); // {1}
        middle = start + Math.floor((finish - start) * delta); // {2}
        middle = Math.ceil((start + finish) / 2);
        let value = sortedArray[middle];
        if (key > value) {
            start = middle + 1;
        } else if (key === value) {
            return middle;
        } else {
            finish = middle - 1;
        }
    }
    return -1;
}