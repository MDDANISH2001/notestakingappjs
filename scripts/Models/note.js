// export class Note{  //eport key word is used to make a function publically available. It'll first create an object and then send it.
class Note{
    constructor(noteObject){
        for(let key in noteObject){
            this[key] = noteObject[key];
        }
        this.isMarked = false;
    }
    
    toggleMark(){
        this.isMarked = !this.isMarked;
    }
}

export default Note; //it is used to export the class as it is without making its object. Defualt can be used only once in a file but we can use export many times.
