interface RecordWeightButtonProps {
	setShowRecordWeightForm: React.Dispatch<React.SetStateAction<boolean>>
}

const RecordWeightButton = ({ setShowRecordWeightForm }: RecordWeightButtonProps) => {

	const style: React.CSSProperties = {
  		fontSize: '1em',
  		padding: '10px',
  		width: '100%',
  		borderRadius: '0 0 6px 6px'
	}

	return (
		<button
			style={style}
			className='success-button'
			onClick={() => {
				setShowRecordWeightForm(true)
			}}
		>Salvar</button>
	)

}

export default RecordWeightButton