import Link from 'next/link'
import Header from '../Header'

const Index = (props) => (
	<div>
		<Header />
		{props.children}
	</div>
)

export default Index