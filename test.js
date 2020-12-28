function printName() {
    var lastName = "seo";
    this.firstName = "jeong kuk"
    console.log(this.lastName + " " + this.firstName)
}
var lastName = "kim";
printName();               // kim jeong kuk
var o = new printName();   // undefined jeong kuk