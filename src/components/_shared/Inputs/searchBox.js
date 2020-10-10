import React from 'react';
import styles from '../../../styles/components/inputs.module.scss'
import Icon from "../Base/Icon";
import searchIcon from '../../../assets/icons/serach-icon.svg'

function SearchBox(props) {
    return (
        <div className={props.className}>
            <div className={styles.searchBoxWrapper}>
                <Icon src={searchIcon} className={styles.searchBoxIcon}/>
                <input type="text" name='search' placeholder='Search' className={styles.searchBoxInput}/>
            </div>
        </div>
    );
}

export default SearchBox;