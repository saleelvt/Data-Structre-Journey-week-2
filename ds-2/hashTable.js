class Map{
    constructor(size){
        this.table=new Array(size)
        this.size=size

    }


    hash(key){
        let sum=0
        for(let i=0;i<key.length;i++){
            sum+= key.charCodeAt(i)

        }
        return  sum%this.size
    }

}