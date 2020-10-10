import React, {useContext} from 'react';
import styles from '../../styles/components/chatItem.module.scss'
import {AppContext} from "../../contexts/AppContext";
import profile from '../../localDB/profile.json'
import Image from "../_shared/Base/Image";


function ChatItem(props) {
    const data =  props.data;
    const AppContextData = useContext(AppContext);
    const {currentUserInfo} = AppContextData;
    return (
        <>
            {
                (data.sendByMe ? (
                    <div className={styles.chatItemSendMeWrapper}>
                        <span>{data.sendDate + ' - ' + data.sendTime}</span>
                        <p>{data.textContent}</p>
                    </div>

                ): (
                    <div className={styles.chatItemSendOtherWrapper}>
                        <p>{data.textContent}</p>
                        <span>{data.sendDate + ' - ' + data.sendTime}</span>
                    </div>
                ))
            }
        </>
    );
}

export default ChatItem;