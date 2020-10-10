import React, {useContext, useEffect, useState} from 'react';
import Image from "../_shared/Base/Image";
import profile from '../../localDB/profile.json'
import {AppContext} from "../../contexts/AppContext";
import chats from '../../localDB/chats.json';

function ChatSendMessage(props) {
    const styles = props.styles;
    const AppContextData = useContext(AppContext);
    const {currentUserInfo,currentChatId,setUserInfo} = AppContextData;
    const [message,setMessage] = useState();
    const userChat = chats.find(item => item.chatOwner === currentChatId)
    const sendMessage = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        let currentDate = mm + '/' + dd + '/' + yyyy;
        let currentTime = today.getHours() + ":" + today.getMinutes();
        userChat.messages.push({
            "type": "text",
            "description": "",
            "replayId": "",
            "textContent": message,
            "mediaLink": "",
            "sendByMe": true,
            "sendDate": currentDate,
            "sendTime": currentTime
        })
        setMessage('');
        setUserInfo(currentChatId,currentUserInfo);
    }
    useEffect(()=>{
        setMessage('');
    },[currentChatId])
    return (
        <div className={styles.sendMsgWrapper}>
            <Image src={currentUserInfo.profile} className={styles.sendMsgUserImage}/>
            <div className={styles.sendMsgTextWrapper}>
                <textarea name='message' placeholder='Write a message...' value={message} onChange={(e)=>setMessage(e.target.value)}/>
                <button onClick={(e)=>sendMessage()}>SEND</button>
            </div>
            <Image src={profile.profile} className={styles.sendMsgUserImage}/>
        </div>
    );
}

export default ChatSendMessage;