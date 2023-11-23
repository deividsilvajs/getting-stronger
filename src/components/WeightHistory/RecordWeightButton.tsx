interface RecordWeightButtonProps {
	setShowRecordWeightForm: React.Dispatch<React.SetStateAction<boolean>>
}

const RecordWeightButton = ({ setShowRecordWeightForm }: RecordWeightButtonProps) => {

	return (
		<button 
			id='record-button'
			className='success-button'
			onClick={() => {
				setShowRecordWeightForm(true)
			}}
		>Salvar</button>
	)

}

export default RecordWeightButton