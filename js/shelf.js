"use strict";
var Shelf = (function () {
    function Shelf() {
        this._item = new Array();
    }
    Shelf.prototype.add = function (item) {
        this._item.push(item);
    };
    Shelf.prototype.getFirst = function () {
        return this._item[0];
    };
    Shelf.prototype.find = function (title) {
        return this._item.filter(function (it) { return it.title === title; })[0];
    };
    Shelf.prototype.printTitles = function () {
        this._item.forEach(function (it) { return console.log(it.title); });
    };
    return Shelf;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Shelf;
//# sourceMappingURL=shelf.js.map