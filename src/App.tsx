import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Main from 'pages/Main'
import WeightHistory from 'pages/WeightHistory'

const App = () => {

    const style: React.CSSProperties = {
        maxWidth: '1000px',
        margin: 'auto'
    }

    return (
        <div style={style}>
            <Router>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/weight-history' element={<WeightHistory />} />
                </Routes>
            </Router>
        </div>
    )

}

export default App