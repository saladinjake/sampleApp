import { Route, Routes } from 'react-router-dom'
import UserManageMentHome from '../modules/SampleModule'

function UserManagement() {
    return (
        <Routes>
            <Route index element={<UserManageMentHome />} />
      
        </Routes>
    )
}
export default UserManagement
