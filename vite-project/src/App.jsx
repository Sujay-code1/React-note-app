import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import NotesList from './components/NotesList';
import AddNote from './components/AddNote';
import Search from './components/Search';
import Header from './components/Header';

function App() {
 const [notes, setNotes] = useState(() => {
  const savedNotes = localStorage.getItem('react-vite-project-data');
  return savedNotes ? JSON.parse(savedNotes) : [];
});
  

  useEffect(()=>{
    localStorage.setItem('react-vite-project-data',
       JSON.stringify(notes))
  },[notes])

  const[searchText, setSeachText] = useState('');

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(), // ➡️ Don't forget to add id when creating a new note
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className='container'>
      <Header/>
      <Search handleSearchNote = {setSeachText}/>
      <NotesList
        notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
