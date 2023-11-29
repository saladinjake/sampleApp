import { Route, Routes } from 'react-router-dom'
import UserManageMentHome from '../modules/SampleModule'

function UserManagement() {
    return (
        <Routes>
            <Route index element={<UserManageMentHome />} />
            {/*   <Route path="create" element={<User />} />
      <Route path="manage/:userId" element={<User />} />
      <Route path="edit/:userId" element={<User />} />
      <Route path="/:userId" element={<User />} />*/}
        </Routes>
    )
}
export default UserManagement
