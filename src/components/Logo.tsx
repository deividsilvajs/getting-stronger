const Logo = () => {

	return (
		<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 8}}>
        	<h1 style={{fontWeight: 'normal'}}><strong>G</strong>etting</h1>
        	<img src={require('assets/icons/logo.png')} alt='Logo' />
        	<h1 style={{fontWeight: 'normal'}}><strong>S</strong>tronger</h1>
        </div>
	)

}

export default Logo