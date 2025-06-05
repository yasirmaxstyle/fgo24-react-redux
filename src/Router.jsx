import { Route, Routes } from 'react-router'
import { Provider } from 'react-redux'
import App from './App'
import Result from './pages/Result'
// 

import { store } from './redux/store'

function Router() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </Provider>
  )
}

export default Router