"use strict";
/*  Module 5: Declare and instantiate classes in TypeScript
    Lab End  */
Object.defineProperty(exports, "__esModule", { value: true });
/*  EXERCISE 1 */
class BuildArray {
    // TODO Define the properties
    _items;
    _sortOrder;
    // TODO Define the constructor
    constructor(items, sortOrder) {
        this._items = items;
        this._sortOrder = sortOrder;
    }
    // TODO Define the accessors
    get items() {
        return this._items;
    }
    set items(items) {
        this._items = items;
    }
    get sortOrder() {
        return this._sortOrder;
    }
    set sortOrder(sortOrder) {
        this._sortOrder = sortOrder;
    }
    // TODO Define the methods.
    sortDescending = (a, b) => {
        if (a > b) {
            return -1;
        }
        else if (b > a) {
            return 1;
        }
        else {
            return 0;
        }
    };
    sortAscending = (a, b) => {
        if (a > b) {
            return 1;
        }
        else if (b > a) {
            return -1;
        }
        else {
            return 0;
        }
    };
    buildArray() {
        const randomNumbers = [];
        let nextNumber;
        for (let counter = 0; counter < this.items; counter++) {
            nextNumber = Math.ceil(Math.random() * (100 - 1));
            if (!randomNumbers.includes(nextNumber)) {
                randomNumbers.push(nextNumber);
            }
            else {
                counter--;
            }
        }
        if (this._sortOrder === 'ascending') {
            return randomNumbers.sort(this.sortAscending);
        }
        else {
            return randomNumbers.sort(this.sortDescending);
        }
    }
}
/*  TODO: Instantiate the BuildArray objects. */
const testArray1 = new BuildArray(12, 'ascending');
const testArray2 = new BuildArray(8, 'descending');
console.log(testArray1.buildArray());
console.log(testArray2.buildArray());
