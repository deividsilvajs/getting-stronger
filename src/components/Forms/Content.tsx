interface ContentProps {
	children: React.ReactNode
}

const Content = ({ children }: ContentProps) => {

	const contentContainer: React.CSSProperties = {
		display: 'flex',
		flexDirection: 'column'
	}

	return (
		<div style={contentContainer}>
			{children}
		</div>
	)

}

export default Content