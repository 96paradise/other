import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SchoolRegisterFormData } from '../types';

const SchoolRegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<SchoolRegisterFormData>({
    schoolName: '',
    schoolAddress: '',
    schoolPhone: '',
    adminName: '',
    adminPhone: '',
    adminEmail: '',
    adminBirthDate: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.schoolName.trim()) {
      alert('학교명을 입력해주세요.');
      return false;
    }
    if (!formData.schoolAddress.trim()) {
      alert('학교 주소를 입력해주세요.');
      return false;
    }
    if (!formData.schoolPhone.trim()) {
      alert('학교 연락처를 입력해주세요.');
      return false;
    }
    if (!formData.adminName.trim()) {
      alert('관리자 이름을 입력해주세요.');
      return false;
    }
    if (!formData.adminPhone.trim()) {
      alert('관리자 전화번호를 입력해주세요.');
      return false;
    }
    if (!formData.adminEmail.trim()) {
      alert('관리자 이메일을 입력해주세요.');
      return false;
    }
    if (!formData.adminBirthDate.trim()) {
      alert('관리자 생년월일을 입력해주세요.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      console.log('학교 등록:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('학교 등록 신청이 완료되었습니다. 승인까지 1-3일 소요됩니다.');
      navigate('/login');
    } catch (error) {
      console.error('학교 등록 실패:', error);
      alert('학교 등록 신청에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-6">학교 등록 신청</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="schoolName"
          placeholder="학교 이름"
          value={formData.schoolName}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          disabled={isLoading}
          required
        />
        <input
          type="text"
          name="schoolAddress"
          placeholder="학교 주소"
          value={formData.schoolAddress}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          disabled={isLoading}
          required
        />
        <input
          type="tel"
          name="schoolPhone"
          placeholder="학교 대표 전화번호"
          value={formData.schoolPhone}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          disabled={isLoading}
          required
        />
        <input
          type="text"
          name="adminName"
          placeholder="관리자 이름"
          value={formData.adminName}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          disabled={isLoading}
          required
        />
        <input
          type="tel"
          name="adminPhone"
          placeholder="관리자 전화번호"
          value={formData.adminPhone}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          disabled={isLoading}
          required
        />
        <input
          type="email"
          name="adminEmail"
          placeholder="관리자 이메일"
          value={formData.adminEmail}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          disabled={isLoading}
          required
        />
        <input
          type="text"
          name="adminBirthDate"
          placeholder="관리자 생년월일 (YYYY-MM-DD)"
          value={formData.adminBirthDate}
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
          {isLoading ? '신청 중...' : '신청하기'}
        </button>
      </form>
    </div>
  );
};

export default SchoolRegisterPage;