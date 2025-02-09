import React, { useState } from 'react';
import { db } from '../Firebase';
import { collection, addDoc } from 'firebase/firestore';

function CreateTodo() {
    const [Subject, setSubject] = useState("");
    const [Subject2, setSubject2] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Subject !== "") {
            await addDoc(collection(db, "todos"), {
                Subject,
                completed: false,
            });
            setSubject(""); 
        }
    }

    return (
        <form onSubmit={handleSubmit} className="Todo-container">
            <input 
                type="text" 
                placeholder='Qual produto irá cadastrar?'
                value={Subject}
                onChange={(e) => setSubject(e.target.value)}
                className="add"
            />
            <button type="submit">Cadastrar</button>
        </form>
    );
}
export default CreateTodo;
