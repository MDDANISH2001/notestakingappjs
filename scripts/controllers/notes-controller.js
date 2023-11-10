//Controller (I/O) + Events it talks to the Service.
import db from "../services/firebaseconf"
import {noteOperations} from '../services/note-service.js'
window.addEventListener('load', init);
function init(){
    showCounts();
    bindEvents();
    // disableButton();
    // enableButton();
}
const disableButton=()=>
    document.querySelector('#delete').disabled = true;    
const enableButton=()=>{
    document.querySelector('#delete').disabled = false;    
}
function bindEvents(){
    document.querySelector("#add").addEventListener('click', addNote);
    document.querySelector("#delete").addEventListener('click', deleteMarked);
}
function deleteMarked(){
    noteOperations.remove();
    printNotes(noteOperations.getNotes());
}
function showCounts(){
    noteOperations.markTotal() > 0 ? enableButton() : disableButton();
    document.querySelector('#total').innerText = noteOperations.total();
    document.querySelector('#mark').innerText = noteOperations.markTotal();
    document.querySelector('#unmark').innerText = noteOperations.unmarkTotal();
}
function addNote(){
    //read id, title, description, date of completion, importance
    const fields = ['id', 'title', 'desc', 'cdate', 'importance']
    const noteObject = {}; //Object Literal
    for (let field of fields){
        noteObject[field] = document.querySelector(`#${field}`).value;
    }
    noteOperations.add(noteObject);
    printNote(noteObject);
    showCounts();
    // const id = document.querySelector('#id').value;
    // const title = document.querySelector('#title').value;
}

function printIcon(myClassName = 'trash', fn, id){
    // <i class="fa-solid fa-trash"></i>
    // <i class="fa-solid fa-user-pen"></i>
    const iTag = document.createElement('i'); // <i> .createELement function is used to create a tag in javascript dynamically.
    iTag.setAttribute('note-id', id);
    iTag.className = `fa-solid fa-${myClassName} me-5 hand`;
    iTag.addEventListener('click', fn);
    return iTag;
}

function toggleMark(){
    // console.log('Toggle Mark...........', this);
    const icon = this;
    const id = this.getAttribute('note-id');
    noteOperations.toggleMark(id);
    const tr = icon.parentNode.parentNode;
    tr.classList.toggle('table-danger');
    showCounts();
}
function edit(){
    console.log('Edit......');
}

function printNotes(notes){
    const tbody = document.querySelector('#notes');
    tbody.innerHTML = '';
    notes.forEach(note => printNote(note));
    showCounts();
}
function printNote(noteObject){
    const tbody = document.querySelector('#notes');
    const row = tbody.insertRow(); //<tr>
    for(let key in noteObject){
        if(key != 'isMarked'){
        const td = row.insertCell(); //<td>
        td.innerText = noteObject[key];
        }
    }
    const td = row.insertCell(); //<td>

    td.appendChild(printIcon('trash', toggleMark, noteObject.id));
    
    td.appendChild(printIcon('user-pen', edit, noteObject.id));
}
const value = prompt("Enter ID");
if (value == ""){
    alert("Write Id or task Title");
}
else {
    noteOperations.search(value);
}

// const storeData = (addNote) =>{
function storeData(addNote){
    db.collection("notes").add({noteobj})
    .then((docRef) => {
        console.log("Data saved successfully with ID: ", docRef.id);
    })
    .catch((error) =>{
        console.error("Error saving Data:", error);
    });
}