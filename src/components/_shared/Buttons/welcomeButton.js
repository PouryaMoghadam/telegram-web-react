import React from 'react';
import styles from '../../../styles/components/buttons.module.scss'

function WelcomeButton(props) {
    return (
        <button className={styles.welcomeButton} onClick={props.onClick}>
            {props.text}
        </button>
    );
}

export default WelcomeButton;