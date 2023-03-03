import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './auth/Auth';
import Category from './pages/Category';
import Demo from './pages/Demo';
import Details from './pages/Details';
import Login from './pages/Login';
import NewPage from './pages/NewPage';
import Not from './pages/Not';
import Problems from './pages/Problems';
import Signup from './pages/Signup';
import Array from './pages/subcategory/Array';
import Dynamic from './pages/subcategory/Dynamic';
import Description from './pages/subpages/Description';
import Notes from './pages/subpages/Notes';
import Solution from './pages/subpages/Solution';
import SubProblems from './pages/SubProblems';
import Profile from './pages/Profile';
import AdminRoute from './components/AdminRoute';
import Home from './pages/Home';

function App() {
  //console.log(supabase); 

  
  return (
    <div className="App">
      <header className="App-header">
      
      <BrowserRouter> 
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/category" element={<Category />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/problems/dynamic-programming" element={<Dynamic />} />
          <Route path="/problems/:link/:subcategory" element={<SubProblems />} />
          <Route path="/problems/array" element={<Array />} />
          {/* <Route path="/dis/:id" element={<Details />} /> */}
          
          <Route path="users/:id" element={<Details />}>
            <Route index element={<Description />} />
            <Route path="solution" element={<Solution />} />
            <Route path="notes" element={<Notes />} />
          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
          {/* <Route path="/admin/v1/create" element={<NewPage />} /> */}


          <Route path="/not" element={<ProtectedRoute><Not /></ProtectedRoute>}></Route>
          <Route path="/dashboard" element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
          
          <Route path="/admin/v1/create" element={<AdminRoute><NewPage /></AdminRoute>}></Route>
          
          <Route path="/demo" element={<Demo />}></Route>
          
          
        </Routes>
        </AuthProvider>
      </BrowserRouter>  
      </header>
    </div>
  );
}

export default App;
