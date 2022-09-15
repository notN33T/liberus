import { Routes, Route } from 'react-router-dom'
import ConnectWallet from '../pages/connect-wallet/connect-wallet'

export default function useRouter() {
  return(
    <Routes>
      <Route path='/connect-wallet' element={<ConnectWallet/>}/>
    </Routes>
  )
}