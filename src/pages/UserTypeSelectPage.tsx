import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, GraduationCap, Shield } from 'lucide-react';
import { UserType, UserTypeButtonProps } from '../types';

const UserTypeButton: React.FC<UserTypeButtonProps> = ({ 
  type, 
  icon: Icon, 
  label, 
  isActive, 
  onClick 
}) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all ${
      isActive 
        ? 'border-blue-500 bg-blue-50 text-blue-600' 
        : 'border-gray-200 hover:border-gray-300 text-gray-600'
    }`}
    type="button"
  >
    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
      isActive ? 'bg-blue-500 text-white' : 'bg-gray-100'
    }`}>
      <Icon size={24} />
    </div>
    <span className="font-medium">{label}</span>
  </button>
);

const UserTypeSelectPage: React.FC = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType>('student');

  const handleNext = () => {
    navigate('/register', { state: { userType } });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-6">회원가입</h2>
      
      <div className="grid grid-cols-1 gap-4 mb-6">
        <UserTypeButton
          type="student"
          icon={User}
          label="학생"
          isActive={userType === 'student'}
          onClick={() => setUserType('student')}
        />
        <UserTypeButton
          type="teacher"
          icon={GraduationCap}
          label="교사"
          isActive={userType === 'teacher'}
          onClick={() => setUserType('teacher')}
        />
        <UserTypeButton
          type="admin"
          icon={Shield}
          label="관리자"
          isActive={userType === 'admin'}
          onClick={() => setUserType('admin')}
        />
      </div>

      <button 
        onClick={handleNext}
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
        type="button"
      >
        다음
      </button>
    </div>
  );
};

export default UserTypeSelectPage;