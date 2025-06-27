import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FindIdFormData } from '../types';

const FindIdPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FindIdFormData>({
    name: '',
    email: '',
    verificationCode: ''
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVerificationRequest = async () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('이름과 이메일을 입력해주세요.');
      return;
    }

    setIsLoading(true);
    try {
      console.log('인증번호 발송:', formData.email);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsCodeSent(true);
      alert('인증번호가 발송되었습니다.');
    } catch (error) {
      console.error('인증번호 발송 실패:', error);
      alert('인증번호 발송에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isCodeSent) {
      alert('먼저 인증번호를 요청해주세요.');
      return;
    }

    if (!formData.verificationCode.trim()) {
      alert('인증번호를 입력해주세요.');
      return;
    }

    setIsLoading(true);
    try {
      console.log('아이디 찾기:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('아이디 찾기가 완료되었습니다.');
    } catch (error) {
      console.error('아이디 찾기 실패:', error);
      alert('아이디 찾기에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-6">아이디 찾기</h2>
      <p className="text-center text-gray-600 mb-6">아이디 찾는 방법을 선택해 주세요.</p>
      
      <div className="space-y-4 mb-6">
        <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
          <input type="radio" name="findMethod" value="email" className="mr-3" defaultChecked />
          <span>본인확인 이메일로 인증</span>
        </label>
      </div>

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
          name="verificationCode"
          placeholder="인증번호 6자리 입력"
          value={formData.verificationCode}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          maxLength={6}
          disabled={isLoading || !isCodeSent}
        />
        <button 
          type="button"
          onClick={handleVerificationRequest}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          disabled={isLoading || isCodeSent}
        >
          {isLoading ? '발송 중...' : isCodeSent ? '인증번호 발송됨' : '인증번호 받기'}
        </button>
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          disabled={isLoading || !isCodeSent}
        >
          {isLoading ? '처리 중...' : '아이디 찾기'}
        </button>
      </form>
    </div>
  );
};

export default FindIdPage;