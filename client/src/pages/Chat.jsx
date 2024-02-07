import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import ScrollToBottom from 'react-scroll-to-bottom';

const Chat = ({ socket, username, room }) => {
    const [currentMessage, setCurrentMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours()
                    + ":" +
                    new Date(Date.now()).getMinutes(),
            };
            await socket.emit('send_message', messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage('')

        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log(data);
            setMessageList((list) => [...list, data]);
        })
    }, [socket]);
    return (
        <div className="flex flex-col items-center h-screen">
            <nav className="navbar w-full flex fixed top-0 h-20 bg-blue-500 px-4 items-center justify-between text-white z-50 relative">
                <div className="flex items-center">
                    <h1 className="text-4xl font-extrabold">
                        <Link to='/vitalsign'>VitalSign</Link>
                    </h1>
                </div>
                <div className="links">
                    <div className="flex items-center space-x-4">

                        <Link to="/vitalsign/login" className=" text-white px-4 py-2 rounded-full text-center">
                            {username}
                        </Link>
                    </div>
                </div>
            </nav>
            <div className='chat-window'>
                <div className="chat-header">
                    <p>Live Chat</p>
                </div>
                <div className="chat-body">
                    <ScrollToBottom className='message-container'>
                        {messageList.map((messageContent) => {
                            return (
                                <div className="message" id={username === messageContent.author ? "you" : "other"}>
                                    <div>
                                        <div className="message-content">
                                            <p>{messageContent.message}</p>
                                        </div>
                                        <div className="message-meta">
                                            <p id='time'>{messageContent.time}</p>
                                            <p id='author'>{messageContent.author}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </ScrollToBottom>
                </div>
                <div className="chat-footer">
                    <input type="text"
                        value={currentMessage}
                        placeholder='Hey...'
                        onChange={(event) => { setCurrentMessage(event.target.value) }}
                        onKeyPress={(event) => { event.key === "Enter" && sendMessage() }}
                    />
                    <button onClick={sendMessage}>&#9658;</button>
                </div>
            </div>
        </div>
    );
}

export default Chat;