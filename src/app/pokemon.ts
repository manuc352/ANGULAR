//import { listenerCount } from "cluster";

export class Pokemon {
    id = '';
    name = '';
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    toString(){
        return '['+this.id +','+this.name+']';
    }
    
    
}
