//if we have a sorted array then we don't need to do linear search, we can instead use binary search
//
export const states: string[] = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

function binarySearch(sortedArray: string[], key): number {
    let start = 0;
    let finish = sortedArray.length;
    let middle = Math.ceil((start + finish) / 2);
    while (start <= finish && key !== sortedArray[middle]) {
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
// binarySearch(states, 'South Dakota');
binarySearch(states, 'Cairo');