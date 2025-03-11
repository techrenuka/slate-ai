"use client";

import React, { FormEvent, useState } from "react";

export default function ContactUs() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let form = {
            firstName,
            lastName,
            companyName,
            email,
            message
        }

        try {
            const rawResponse = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            
            if (!rawResponse.ok) {
                throw new Error('Failed to submit form');
            }
            
            const content = await rawResponse.json();
            alert('Form submitted successfully!');

            // Reset the form fields
            setMessage('');
            setFirstName('');
            setLastName('');
            setCompanyName('');
            setEmail('');
        } catch (error) {
            alert('Error submitting form. Please try again.');
            console.error(error);
        }
    }

    return (
        <div className="min-h-screen mx-auto bg-black w-full overflow-x-hidden">
            <div className="max-w-5xl mx-auto py-16">
                <form className="py-4 space-y-4" onSubmit={handleSubmit}>
                    <div className="flex items-center justify-center">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" name="firstname" id="name" className="shadow-md focus:ring-indigo-500 text-white focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your First Name" />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" name="lastname" id="name" className="shadow-md focus:ring-indigo-500 text-white focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your Last Name" />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input value={companyName} onChange={e => setCompanyName(e.target.value)} type="text" name="companyname" id="name" className="shadow-md focus:ring-indigo-500 text-white focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your Company Name" />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className="shadow-md focus:ring-indigo-500 text-white focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your Email" />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" className="shadow-md focus:ring-indigo-500 text-white focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your Message" />
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white bg-indigo-600">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
