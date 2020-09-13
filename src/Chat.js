import React, { useEffect, useState } from 'react'
import './style/chat.scss'
import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import AttachFile from '@material-ui/icons/AttachFile'
import MoreVert from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import { useParams } from 'react-router'
import db from './firebase'
import { useStateValue } from './Stateprovider'
import firebase from 'firebase'

function Chat() {
    const [input, setInput] = useState("")
    const [seed, setSeed] = useState("")
    const { roomId } = useParams()
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue()

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).
                onSnapshot((snapshot) => (
                    setRoomName(snapshot.data().name)
                ));
            db.collection('rooms')
                .doc(roomId)
                .collection("messages")
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) => (
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                ))
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >>>", input)

        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .add({
                message: input,
                name: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        setInput("")
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_headerInfo">
                    <h3> {roomName} </h3>
                    <p>
                        {messages.length > 0 ? (
                            "Last Seen on "+
                            new Date(
                                messages[messages.length - 1]?.timestamp?.toDate()
                            ).toUTCString()
                        ) : (
                            ""
                        )}
                    </p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                {messages.map((message, i) => (
                    <p key={i} className={`chat_messages ${message.name === user.displayName && "chat_receiver"}`}>
                        <span className="chat_name">{message.name}</span>
                        {message.message}
                        <span className="chat_timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                    </p>
                ))}
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form action="">
                    <input value={input} placeholder="Type a message" type="text" onChange={(e) => setInput(e.target.value)} />
                    <button onClick={sendMessage} type="submit" >Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
