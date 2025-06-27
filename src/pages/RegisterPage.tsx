import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { RegisterFormData, UserType } from '../types';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userType, setUserType] = useState<UserType>('student');
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    id: '',
    password: '',
    email: '',
    birthDate: '',
    phone: '',
    schoolCode: ''
  });

  useEffect(() => {
    if (location.state?.userType) {
      setUserType(location.state.userType);
    }
  }, [location.state]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      alert('이름을 입력해주세요.');
      return false;
    }
    if (!formData.id.trim()) {
      alert('아이디를 입력해주세요.');
      return false;
    }
    if (!formData.password.trim()) {
      alert('비밀번호를 입력해주세요.');
      return false;
    }
    if (formData.password.length < 6) {
      alert('비밀번호는 6자리 이상이어야 합니다.');
      return false;
    }
    if (!formData.email.trim()) {
      alert('이메일을 입력해주세요.');
      return false;
    }
    if (!formData.birthDate.trim()) {
      alert('생년월일을 입력해주세요.');
      return false;
    }
    if (formData.birthDate.length !== 8) {
      alert('생년월일은 8자리로 입력해주세요.');
      return false;
    }
    if (!formData.phone.trim()) {
      alert('전화번호를 입력해주세요.');
      return false;
    }
    if (!formData.schoolCode.trim()) {
      alert('학교 코드를 입력해주세요.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const registrationData = { ...formData, userType };
      console.log('회원가입:', registrationData);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('회원가입이 완료되었습니다!');
      navigate('/login');
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const getUserTypeLabel = (): string => {
    switch (userType) {
      case 'student': return '학생';
      case 'teacher': return '교사';
      case 'admin': return '관리자';
      default: return '학생';
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-6">
        {getUserTypeLabel()} 회원가입
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          disabled={isLoading}
          required
        />
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
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 pr-10"
            disabled={isLoading}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          disabled={isLoading}
          required
        />
        <input
          type="text"
          name="birthDate"
          placeholder="생년월일 8자리 (예: 20050915)"
          value={formData.birthDate}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          maxLength={8}
          disabled={isLoading}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="전화번호"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          disabled={isLoading}
          required
        />
        <input
          type="text"
          name="schoolCode"
          placeholder="학교 코드"
          value={formData.schoolCode}
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
          {isLoading ? '가입 중...' : '인증 요청'}
        </button>
      </form>

      <div className="flex justify-center space-x-4 mt-4 text-sm">
        <button 
          onClick={() => navigate('/register/select')}
          className="text-blue-500 hover:underline"
          type="button"
        >
          이전
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;