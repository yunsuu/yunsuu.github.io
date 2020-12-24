const b = {
    name: '하하',
    bb(){
        return this.name;
    },
    a: x=>{
        return this.name
    }
}

console.log(b.bb())
var name = '윤수'
console.log(b.a())