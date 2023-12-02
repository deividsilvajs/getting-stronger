import Form from 'components/Forms/index'

interface ConfirmDeleteWeightProps {
	setShowConfirmDeleteWeight: React.Dispatch<React.SetStateAction<boolean>>
}

const ConfirmDeleteWeight = ({ setShowConfirmDeleteWeight }: ConfirmDeleteWeightProps) => {

	return (
		<Form.Container>
			<Form.Content>
				<h2>Excluir Peso</h2>
				<div>
					<button onClick={() => setShowConfirmDeleteWeight(false)}>Cancelar</button>
					<button>Excluir</button>
				</div>
			</Form.Content>
		</Form.Container>
	)

}

export default ConfirmDeleteWeight