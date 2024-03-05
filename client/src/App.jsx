import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import TaskPage from './pages/TaskPage';
import TaskFormPages from './pages/TaskFormPages';
import ProfilePage from './pages/ProfilePage';
import HomePAge from './pages/HomePAge';
import ProtectedRoute from './ProtectedRoute';
import { TaskProvider } from './context/TaskContext';


function App() {
  return (
    <>
    <AuthProvider>
      <TaskProvider>
      <BrowserRouter>
          <Routes>
            <Route path= '/' element={<HomePAge /> } />      
            <Route path= '/login' element={<LoginPage /> } />  
            <Route path= '/register' element={<RegisterPage /> } /> 
            
            <Route element={ <ProtectedRoute /> }>
              <Route path= '/tasks' element={<TaskPage />} />  
              <Route path= '/add-task' element={<TaskFormPages />} />  
              <Route path= '/tasks/:id' element={<TaskFormPages /> } />  
              <Route path= '/profile' element={<ProfilePage />} />  
            </Route>                          
          </Routes>
        </BrowserRouter> 
      </TaskProvider>      
    </AuthProvider>     
    </>
  )
}

export default App
