import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FindPasswordFormData } from '../types';

const FindPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FindPasswordFormData>({
    id: ''
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.id.trim()) {
      alert('아이디를 입력해주세요.');
      return;
    }

    setIsLoading(true);
    try {
      console.log('비밀번호 찾기:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('비밀번호 재설정 링크가 이메일로 발송되었습니다.');
    } catch (error) {
      console.error('비밀번호 찾기 실패:', error);
      alert('비밀번호 찾기에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-6">비밀번호 찾기</h2>
      <p className="text-center text-gray-600 mb-6">
        비밀번호를 찾고자하는 아이디를 입력해주세요.
      </p>
      
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
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? '처리 중...' : '다음'}
        </button>
      </form>

      <div className="text-center mt-4">
        <span className="text-gray-600">아이디가 기억나지 않는다면? </span>
        <button 
          onClick={() => navigate('/find-id')}
          className="text-blue-500 hover:underline"
        >
          아이디 찾기
        </button>
      </div>
    </div>
  );
};

export default FindPasswordPage;