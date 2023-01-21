import React from 'react'
import Header from '../Header/Header'

import styles from './Layout.module.scss'

const Layout = ({ children, bgImg, height = '500px' }) => {
	return (
		<div
			className={styles.wrapper}
			style={{ height, backgroundImage: `url (${bgImg})` }}
		>
			<Header />
			<div>{children}</div>
		</div>
	)
}

export default Layout
