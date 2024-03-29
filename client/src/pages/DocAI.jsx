import React from "react";
import { useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import axios from 'axios';
import TypingAnimation from "./components/TypingAnimation";
import NavbarLogoUser from "./components/NavbarLogoUser";

const DocAI = () => {
    const [inputValue, setInputValue] = useState('');
    const [chatLog, setChatLog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }])
        sendMessage_chris(inputValue);

        setInputValue('');
    }

    const sendMessage_chris = (message) => {
        const url = 'http://localhost:3001/vitalsign/chatbot';

        axios.post(url, {
            message: message
        })
            .then(response => {
                setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.data.ai }]);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error sending message:', error);
                setIsLoading(false);
            });
    };

    return (
        <>
            <NavbarLogoUser />
            <div className="container mx-auto max-w-[700px]">
                <div className='flex flex-col h-screen bg-gray-900'>
                    <h2 className='bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center py-3 font-bold text-6xl'>
                        VitalSign DocAI
                    </h2>
                    <div className='flex-grow p-6 border rounded-xl'>
                        <div className='flex flex-col space-y-4'>
                            <ScrollToBottom className="message-container">

                                {
                                    chatLog.map((message, index) => (
                                        <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'
                                            }`}>
                                            <div className={`${message.type === 'user' ? 'bg-purple-500' : 'bg-gray-800'
                                                } rounded-lg p-4 text-white max-w-sm`}>
                                                {message.message}
                                            </div>
                                        </div>
                                    ))
                                }
                                {
                                    isLoading &&
                                    <div key={chatLog.length} className='flex justify-start'>
                                        <div className='bg-gray-800 rounded-lg p-4 text-white max-w-sm'>
                                            <TypingAnimation />
                                        </div>
                                    </div>
                                }
                            </ScrollToBottom>

                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className='flex-none p-6'>
                        <div className='flex rounded-lg border border-gray-700 bg-gray-800'>
                            <input type="text" className='flex-grow px-4 py-2 bg-tranparent text-black focus:outline-none' placeholder='Type your message...'
                                value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                            <button type='submit' className='bg-purple-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-color duration-300'>Send</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}

export default DocAI