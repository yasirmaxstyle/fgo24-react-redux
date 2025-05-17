import { Route, Routes } from 'react-router'
import App from './App'
import Result from './pages/Result'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/result' element={<Result />} />
    </Routes>
  )
}

export default Router