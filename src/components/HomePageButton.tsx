import { Link } from 'react-router-dom'

const HomePageButton = () => {

	return (
		<button style={{ padding: '4px' }}>
			<Link style={{ display: 'flex', alignItems: 'center' }} to='/'>
				<span>Home</span>
				<img width={20} src={require('logo.png')} alt='Página Inicial' />
			</Link>
		</button>
	)

}

export default HomePageButton