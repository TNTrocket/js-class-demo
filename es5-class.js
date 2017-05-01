
function animal(vice){
    this.sounds=vice
}
animal.prototype={
    constructor:animal,
    cry:function () {
        console.log(this.sounds)
    }
}

function dog() {
    animal.call(this,"汪汪")
}
dog.prototype= new animal();
dog.prototype.cry = function(){
    console.log("woo")
}
var  dogge =  new dog();
dogge.cry()

new animal("ha").cry()
