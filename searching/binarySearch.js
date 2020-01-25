"use strict";
exports.__esModule = true;
//if we have a sorted array then we don't need to do linear search, we can instead use binary search
//
exports.states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
function binarySearch(sortedArray, key) {
    var start = 0;
    var finish = sortedArray.length;
    var middle = Math.ceil((start + finish) / 2);
    while (start <= finish && key !== sortedArray[middle]) {
        middle = Math.ceil((start + finish) / 2);
        var value = sortedArray[middle];
        if (key > value) {
            start = middle + 1;
        }
        else if (key === value) {
            return middle;
        }
        else {
            finish = middle - 1;
        }
    }
    return -1;
}
binarySearch(states, 'South Dakota');
binarySearch(exports.states, 'Cairo');
