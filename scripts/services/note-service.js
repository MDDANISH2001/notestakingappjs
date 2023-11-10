// CRUD Operations.

import Note from '../Models/note.js'; //defualt won't be having curly brackets
export const noteOperations = {
    notes:[],
    add(noteObject){
        const note = new Note(noteObject)
        this.notes.push(note);
    },
    SearchById(id){
        return this.notes.find(note=>note.id == id)
    },
    toggleMark(id){
        this.SearchById(id).toggleMark();
        // const noteObject = this.SearchById(id);
        // noteObject.isMarked = !noteObject.isMarked;
    },

    total(){
        return this.notes.length;
    },
    markTotal(){
        return this.notes.filter(note => note.isMarked).length;
    },
    
    unmarkTotal(){
        return this.total() - this.markTotal();
    },
    getNotes(){
        return this.notes;
    },
    remove(){
        this.notes = this.notes.filter(note => !note.isMarked)
    },
    serach(){
        const searchele = this.taskarr.filter((e) => (e.id === taskid));
        const tbody = document. querySelector("#itemstask")
        tbody.innerHTML = '';
        if(!searchele.length == 0){
            for(const key of searchele){
                printNote(key);
            }
        }
    },
    sort(){

    },
    save(){

    },
    update(){

    },
    load(){

    }
}