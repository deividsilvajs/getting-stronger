interface BackButtonProps {
	goBack: () => void
}

const BackButton = ({ goBack }: BackButtonProps) => {

	return (
		<button onClick={() => goBack()} type='button'>
			Voltar
		</button>
	)

}

export default BackButton