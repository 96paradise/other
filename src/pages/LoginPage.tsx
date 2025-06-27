import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LoginFormData } from '../types';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState<LoginFormData>({
    id: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCurrentTab = (): string => {
    if (location.pathname === '/teacher-login') return 'teacher';
    if (location.pathname === '/admin-login') return 'admin';
    return 'student';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.id.trim() || !formData.password.trim()) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    setIsLoading(true);
    try {
      console.log('로그인 시도:', { ...formData, userType: getCurrentTab() });
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('로그인 성공!');
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const getUserTypeLabel = (): string => {
    const userType = getCurrentTab();
    switch (userType) {
      case 'teacher': return '교사';
      case 'admin': return '관리자';
      default: return '학생';
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-6">
        고교학점제 수강신청 - {getUserTypeLabel()}
      </h2>
      
      <div className="flex mb-6">
        <button 
          className={`flex-1 py-2 px-4 text-center ${
            getCurrentTab() === 'student' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-600'
          } rounded-l-lg`}
          onClick={() => navigate('/login')}
        >
          학생
        </button>
        <button 
          className={`flex-1 py-2 px-4 text-center ${
            getCurrentTab() === 'teacher' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-600'
          }`}
          onClick={() => navigate('/teacher-login')}
        >
          교사
        </button>
        <button 
          className={`flex-1 py-2 px-4 text-center ${
            getCurrentTab() === 'admin' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-600'
          } rounded-r-lg`}
          onClick={() => navigate('/admin-login')}
        >
          관리자
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="id"
          placeholder="아이디"
          value={formData.id}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          disabled={isLoading}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          disabled={isLoading}
          required
        />
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? '로그인 중...' : '로그인'}
        </button>
      </form>

      <div className="flex justify-center space-x-4 mt-4 text-sm flex-wrap">
        <button 
          onClick={() => navigate('/find-id')}
          className="text-blue-500 hover:underline"
        >
          아이디 찾기
        </button>
        <span className="text-gray-400">|</span>
        <button 
          onClick={() => navigate('/find-password')}
          className="text-blue-500 hover:underline"
        >
          비밀번호 찾기
        </button>
        <span className="text-gray-400">|</span>
        <button 
          onClick={() => navigate('/register/select')}
          className="text-blue-500 hover:underline"
        >
          회원가입
        </button>
        <span className="text-gray-400">|</span>
        <button 
          onClick={() => navigate('/school-register')}
          className="text-blue-500 hover:underline"
        >
          학교 등록
        </button>
      </div>
    </div>
  );
};

export default LoginPage;