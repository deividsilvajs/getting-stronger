import { Link } from 'react-router-dom'

const HomePageButton = () => {

	const style: React.CSSProperties = {
  		borderBottom: '2px solid #010300',
  		padding: '8px',
  		fontSize: '0.8em'
	}

	return (
		<button style={style}>
			<Link to='/'>Página Inicial</Link>
		</button>
	)

}

export default HomePageButton