import { Link } from 'react-router-dom'

const HomePageButton = () => {

	return (
		<button style={{ padding: '4px', marginBottom: 20 }}>
			<Link style={{ display: 'flex', alignItems: 'center' }} to='/'>
				<span>Home</span>
				<img width={20} src={require('assets/icons/logo.png')} alt='Página Inicial' />
			</Link>
		</button>
	)

}

export default HomePageButton