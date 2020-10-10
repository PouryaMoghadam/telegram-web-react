import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom'
import styles from '../../styles/components/chatList.module.scss'
import Image from "../_shared/Base/Image";
import chats from "../../localDB/chats.json"
import contact from "../../localDB/contact.json"
import {AppContext} from "../../contexts/AppContext";

function ChatListItem(props) {
    const history = useHistory();
    const AppContextData = useContext(AppContext);
    const {setUserInfo} = AppContextData;
    const {data} = props;
    const userInfo =  (data.type === "personal" ? contact.find((item => item.userId === data.userId)) : null);
    const user = {
        type: data.type,
        username: (userInfo != null ? userInfo.username : data.username),
        profile: (userInfo != null ? userInfo.profile : data.profile),
        lastSeen: (userInfo.lastSeen !== null ? userInfo.lastSeen : 0),
        subscribers: (data.subscribers !== null ? data.subscribers : 0)
    }
    const itemChat = chats.find(item => item.chatOwner === data.userId);
    const messages = itemChat.messages;
    const setMessageId = (id,user) => {
        setUserInfo(id,user);
        history.push(`/${id}`);
    };
    return (
        <div className={styles.chatListItemWrapper} onClick={(e)=>setMessageId(data.userId,user)}>
            <Image src={user.profile} className={styles.chatListItemImage}/>
            <div className={styles.chatListItemChatInfo}>
                <span>{user.username}</span>
                <span>
                    {(messages[messages.length - 1].type === 'text' ? messages[messages.length - 1].textContent : null)}
                    {(messages[messages.length - 1].type === 'photo' ? 'Photo' : null)}
                    {(messages[messages.length - 1].type === 'video' ? 'Video' : null)}
                </span>
            </div>
            <div className={styles.chatListItemActivityInfo}>
                <span>{data.lastActivity}</span>
                {(data.unreadMsg !== "0" ? (
                    <span>{data.unreadMsg}</span>
                ) : null)}
            </div>
        </div>
    );
}

export default ChatListItem;