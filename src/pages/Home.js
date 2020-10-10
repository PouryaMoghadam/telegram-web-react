import React, {useContext} from 'react';
import styles from '../styles/pages/home.module.scss'
import MainLayout from "../components/_layout/mainLayout";
import {Row, Col} from 'react-bootstrap';
import SearchBox from "../components/_shared/Inputs/searchBox";
import ChatListWrapper from "../components/ChatList/chatListWrapper";
import ChatBoxWrapper from "../components/ChatBox/chatBoxWrapper";
import {AppContext} from "../contexts/AppContext";

function Home(props) {
    const AppContextData = useContext(AppContext);
    const {currentChatId} = AppContextData;
    return (
        <MainLayout>
            <Row className='reset-around'>
                <Col lg={4} className={styles.chatListWrapper}>
                    <SearchBox className={styles.searchBoxWrapper}/>
                    <ChatListWrapper className={styles.chatListContentWrapper} />
                </Col>
                <Col lg={8}>
                    {
                        (currentChatId !== null ? (
                            <ChatBoxWrapper chatId={currentChatId}/>
                        ) :
                            <div className={styles.noChatSelect}>
                                Please select a chat to start messaging
                            </div>
                        )
                    }
                </Col>
            </Row>
        </MainLayout>
    );
}

export default Home;