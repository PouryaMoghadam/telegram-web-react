import React from 'react';
import ChatListItem from "./chatListItem";
import chatList from '../../localDB/chatList.json'

function ChatListWrapper(props) {
    return (
        <div className={props.className}>
            {
                chatList.map((item,index)=>{
                    return(
                        <ChatListItem data={item} key={index} />
                    )
                })
            }
        </div>
    );
}

export default ChatListWrapper;
