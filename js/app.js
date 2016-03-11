var HelloWorld = (function () {
    function HelloWorld(message) {
        this.message = message;
    }
    return HelloWorld;
}());
var hello = new HelloWorld('Hello');
console.log(hello.message);
console.log('Hello World');
//# sourceMappingURL=app.js.map