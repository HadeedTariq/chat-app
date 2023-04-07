import { useEffect, useState } from 'react'
import '../css/Chat.css'
import { useUser } from '../context/store'
import ChatBar from '../Components/ChatBar'
import MessageBar from '../Components/MessageBar'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
const Chat = () => {
    const [{ user }] = useUser()
    const date = new Date()
    const [input, setInput] = useState('')
    const [name, setName] = useState('')
    const [messages, setMessages] = useState([])
    const getMessage = (e) => {
        setInput(e.target.value)
    }
    const sendMessage = async () => {
        if (input) {
            await setDoc(doc(db, 'users', `${date.getTime()}`), {
                user: `${name}`,
                message: `${input}`,
                id: `${date.getTime()}`,
            })
            setMessages([...messages, {
                user: name,
                message: input
            }])
            setInput('')
        }
    }
    useEffect(() => {
        let data = []
        const messages = async () => {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                data.push(doc.data())
            });
        }
        messages()
        setTimeout(() => {
            setMessages(data)
            setName(user.displayName)
        }, 1500);
    }, [messages])

    return (
        <>
            <div className="chat">
                <MessageBar getMessage={getMessage} input={input} sendMessage={sendMessage} />
                <ChatBar messages={messages} name={name} />
            </div>
        </>
    )
}
export default Chat