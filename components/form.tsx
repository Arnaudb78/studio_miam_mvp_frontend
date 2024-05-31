"use client";

import { FormEvent, useState } from 'react';

export default function Form() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    
    const handleSubmit = async (e: FormEvent) => {
        console.log(name, "= ", mail ,'=');
        e.preventDefault();
    
        const response = await fetch('https://pacific-reaches-55510-1cc818501846.herokuapp.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, mail }),
        });
    
        if (response.ok) {
        alert('Message sent!');
        setName('');
        setMail('');
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className='bg-red-300 w-full flex-col'>
            <label>
                Name
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Email
                <input
                type="mail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                />
            </label>
            <button type="submit">Send</button>
        </form>
    );
    }