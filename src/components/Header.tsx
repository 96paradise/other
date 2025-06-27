import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-blue-500 text-white p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <GraduationCap className="mr-2" size={24} />
          <span className="font-bold text-lg">고교학점제 수강신청</span>
        </div>
        <div className="flex space-x-6">
          <button 
            onClick={() => navigate('/introduction')}
            className="hover:underline cursor-pointer"
          >
            고교학점제 소개
          </button>
          <button 
            onClick={() => navigate('/notice')}
            className="hover:underline cursor-pointer"
          >
            공지사항
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;