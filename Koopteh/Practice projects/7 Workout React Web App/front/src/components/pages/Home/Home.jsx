import Button from '../../ui/Button/Button'
import Counter from '../../ui/Counter/Counter'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<div className={styles['home-wrapper']}>
			<Button text='New' styles='main' callback={() => {}} />
			<h1>EXERCISES FOR THE SHOULDERS</h1>
			<Counter />
		</div>
	)
}

export default Home
