import React, {useContext, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import styles from '../../../styles/_layout/header.module.scss'
import Icon from "../../_shared/Base/Icon";
import MenuIcon from '../../../assets/icons/menu-icon.svg'
import SearchIcon from '../../../assets/icons/serach-icon.svg'
import setting from '../../../localDB/setting.json'
import {AppContext} from "../../../contexts/AppContext";
import Image from "../../_shared/Base/Image";

function Header(props) {
    const AppContextData = useContext(AppContext);
    const {currentChatId, currentUserInfo } = AppContextData;
    const [showDropDown, setShowDropDown] = useState(true);
    return (
        <header className={styles.wrapper}>
            <Row className='reset-around'>
                <Col lg={4} className={styles.menu}>
                    <Icon src={MenuIcon} className={styles.menuIcon}/>
                    <span className={styles.appName}>{setting.general["short-name"]}</span>
                </Col>
                <Col lg={8} className='reset-around'>
                    { currentChatId !== null ? (
                        <div className={styles.userInfoWrapper}>
                            <div className={styles.userInfo}>
                                <span>{currentUserInfo.username}</span>
                                <span>
                                    {(currentUserInfo.type === 'personal' ?
                                        currentUserInfo.lastSeen
                                        :
                                        `${currentUserInfo.subscribers} Subscribers`
                                    )}
                                </span>
                            </div>
                            <div className={styles.userInfoActions} >
                                 <Image src={SearchIcon} />
                            </div>
                        </div>
                    ) : null}
                </Col>
            </Row>
        </header>
    );
}

export default Header;