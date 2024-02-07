import React from 'react';
import '../App.css';
import io from 'socket.io-client';
import Chat from './Chat';
import { useState } from 'react';

const socket = io.connect('http://localhost:3001');

function Message(props) {
    const { user } = props;
    // console.log('Message User: ', user);

    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('123');
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (username !== '' && room !== '') {
            socket.emit("join_room", room);
            setShowChat(true);
        }
    }

    return (
        <div className="App">
            {!showChat ? (
                <div className="joinChatContainer">
                    <h3>Join A Chat</h3>
                    <input
                        type="text"
                        placeholder='John...'
                        readOnly={false}
                        value={username}
                        onChange={(event) => { setUsername(event.target.value) }}
                    />
                    <input
                        type="text"
                        placeholder='Room ID...'
                        readOnly={true}
                        value={room}
                        onChange={(event) => { setRoom(event.target.value) }}
                    />
                    <button onClick={joinRoom}>Join A Room</button>
                </div>
            ) : (
                <Chat socket={socket} username={username} room={room} />
            )}
        </div>
    );
}

export default Message;
