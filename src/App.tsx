import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import IntroductionPage from './pages/IntroductionPage';
import NoticePage from './pages/NoticePage';
import FindIdPage from './pages/FindIdPage';
import FindPasswordPage from './pages/FindPasswordPage';
import UserTypeSelectPage from './pages/UserTypeSelectPage';
import RegisterPage from './pages/RegisterPage';
import SchoolRegisterPage from './pages/SchoolRegisterPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/teacher-login" element={<LoginPage />} />
          <Route path="/admin-login" element={<LoginPage />} />
          <Route path="/introduction" element={<IntroductionPage />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/find-id" element={<FindIdPage />} />
          <Route path="/find-password" element={<FindPasswordPage />} />
          <Route path="/register/select" element={<UserTypeSelectPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/school-register" element={<SchoolRegisterPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;