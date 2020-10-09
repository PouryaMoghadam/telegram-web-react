import React, {useContext} from 'react';
import MainLayout from "../components/_layout/mainLayout";
import styles from '../styles/pages/welcome.module.scss'
import Image from "../components/_shared/Base/Image";
import digikalaLogo from '../assets/images/digikala.svg'
import me from '../assets/images/me.jpeg'
import WelcomeButton from "../components/_shared/Buttons/welcomeButton";
import {AppContext} from "../contexts/AppContext";

function Welcome(props) {
    const AppContextData = useContext(AppContext);
    const {takeALook} = AppContextData;
    return (
        <MainLayout>
             <div className={styles.contentWrapper}>
                 <Image src={digikalaLogo} />
                 <Image src={me} className={styles.profileImage}/>
                 <h4 className={styles.myName}>Pourya Moghadam</h4>
                 <p className={styles.myText}>
                     <span>Hello</span>
                      everyone <br />
                     This is a small project to test my skills at
                     <a href="https://www.digikala.com/" target='_blank' rel="noopener noreferrer">DigiKala</a> <br />
                     I hope you can all work in big companies one day
                 </p>
                 <WelcomeButton text={'Take A Look !'} onClick={takeALook}/>
             </div>
        </MainLayout>
    );
}

export default Welcome;