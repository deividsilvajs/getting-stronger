import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Main from './pages/Main'
import WeightHistory from './pages/WeightHistory'

const App = () => {

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/weight-history' element={<WeightHistory />} />
                </Routes>
            </Router>
        </>
    )

}

export default App