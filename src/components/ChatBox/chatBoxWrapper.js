import React, {useContext} from 'react';
import styels from '../../styles/components/chatBox.module.scss'
import chats from "../../localDB/chats.json"
import ChatItem from "./chatItem";
import ChatSendMessage from "./chatSendMessage";
import {AppContext} from "../../contexts/AppContext";

function ChatBoxWrapper(props) {
    const AppContextData = useContext(AppContext);
    const {currentUserInfo} = AppContextData;
    const userChat = chats.find(item => item.chatOwner === props.chatId)
    const message = userChat.messages;
    return (
        <div className={styels.chatBoxWrapper}>
            <div className={styels.chatBoxItemWrapper}>
                {
                    message.map((item,index)=>{
                        return (
                            <ChatItem key={index} data={item}/>
                        )
                    })
                }
            </div>
            {
                (currentUserInfo.type === "personal" ? (
                    <ChatSendMessage styles={styels}/>
                ): (
                    <div className={styels.chatBoxMuteButton}>
                        <span>MUTE</span>
                    </div>
                ))
            }
        </div>
    );
}

export default ChatBoxWrapper;