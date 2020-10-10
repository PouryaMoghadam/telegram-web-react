import React from 'react';
import {useParams} from "react-router-dom";
import styles from '../styles/pages/home.module.scss'
import MainLayout from "../components/_layout/mainLayout";
import {Row, Col} from 'react-bootstrap';
import SearchBox from "../components/_shared/Inputs/searchBox";
import ChatListWrapper from "../components/ChatList/chatListWrapper";

function Home(props) {

    const params = useParams()
    return (
        <MainLayout>
            <Row className='reset-around'>
                <Col lg={4} className={styles.chatListWrapper}>
                    <SearchBox className={styles.searchBoxWrapper}/>
                    <ChatListWrapper className={styles.chatListContentWrapper} />
                </Col>
                <Col lg={8}>
                    {
                        (params.id !== undefined ? (
                            <span>chat</span>
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