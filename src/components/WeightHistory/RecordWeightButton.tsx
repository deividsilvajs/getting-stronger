interface RecordWeightButtonProps {
	setShowRecordWeightForm: React.Dispatch<React.SetStateAction<boolean>>
}

const RecordWeightButton = ({ setShowRecordWeightForm }: RecordWeightButtonProps) => {

	const style: React.CSSProperties = {
  		fontSize: '0.8em',
  		padding: 6,
  		borderRadius: '6px',
	}

	return (
		<div style={{ textAlign: 'right' }}>
			<button
				style={style}
				className='success-button'
				onClick={() => {
					setShowRecordWeightForm(true)
				}}
			>
				Salvar
			</button>
		</div>
	)

}

export default RecordWeightButton