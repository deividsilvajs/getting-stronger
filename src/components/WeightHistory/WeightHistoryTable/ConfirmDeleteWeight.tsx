import Form from 'components/Forms/index'
import BackButton from 'components/BackButton'

interface ConfirmDeleteWeightProps {
	setShowConfirmDeleteWeight: React.Dispatch<React.SetStateAction<boolean>>
}

const ConfirmDeleteWeight = ({ setShowConfirmDeleteWeight }: ConfirmDeleteWeightProps) => {

	return (
		<Form.Container>
			<Form.Content>
				<h2 style={{ marginBottom: 12 }}>Excluir Peso</h2>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<BackButton goBack={() => setShowConfirmDeleteWeight(false)} />
					<button 
						style={{padding: 6, borderRadius: '0 0 6px 0'}}
						className='success-button'
						type='button'
					>
						Excluir
					</button>
				</div>
			</Form.Content>
		</Form.Container>
	)

}

export default ConfirmDeleteWeight