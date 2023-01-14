import React from 'react'
import styles from './Header.module.scss'

import userImg from '../../images/header/auth.svg'
import hamburger from '../../images/header/hamburger.svg'

const Header = () => {
	return (
		<header className={styles.header}>
			<button type='button'>
				<img src={userImg} alt='Authentication' />
			</button>
			<button type='button'>
				<img src={hamburger} alt='Authentication' />
			</button>
		</header>
	)
}

export default Header
