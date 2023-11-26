import { Link } from 'react-router-dom'

import Logo from 'components/Logo'

const Main = () => {

	return (
		<div>
			<Logo />
            <Link to='/weight-history'>Histórico de Peso</Link>
        </div>
	)

}

export default Main