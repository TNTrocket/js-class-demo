/**
 * Created by zzhpp00 on 2017/5/1.
 */
class animal{
    constructor (vice){
        this.sounds=vice
    }
    cry(){
        console.log(this.sounds);
    }
}
class dog extends animal{
    constructor(){
        super("汪汪")
        this.cute = "good"
    }
    food(){
        console.log("bone")
    }
}

new dog().cry()

