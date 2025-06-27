import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoticePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-3xl font-bold text-center mb-8">공지사항</h2>
      
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-blue-700">[중요] 2025학년도 1학기 수강신청 안내</h3>
            <span className="text-sm text-gray-500">2025.03.01</span>
          </div>
          <p className="text-gray-700">
            2025학년도 1학기 수강신청이 3월 15일(토) 오전 9시부터 시작됩니다. 
            사전에 수강하고자 하는 과목을 확인하시고 정해진 시간에 신청해 주시기 바랍니다.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 py-3 bg-green-50">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-green-700">고교학점제 온라인 설명회 개최</h3>
            <span className="text-sm text-gray-500">2025.02.28</span>
          </div>
          <p className="text-gray-700">
            학생 및 학부모를 대상으로 한 고교학점제 온라인 설명회를 3월 5일(수) 오후 7시에 개최합니다. 
            Zoom을 통해 진행되며, 자세한 참여 방법은 추후 공지하겠습니다.
          </p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-purple-700">학교간 공동교육과정 운영 안내</h3>
            <span className="text-sm text-gray-500">2025.02.25</span>
          </div>
          <p className="text-gray-700">
            타 학교와의 공동교육과정을 통해 더욱 다양한 과목을 수강할 수 있습니다. 
            공동교육과정 참여 희망 학생은 담임교사와 상담 후 신청해 주시기 바랍니다.
          </p>
        </div>

        <div className="border-l-4 border-orange-500 pl-4 py-3 bg-orange-50">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-orange-700">진로 맞춤형 과목 신설 안내</h3>
            <span className="text-sm text-gray-500">2025.02.20</span>
          </div>
          <p className="text-gray-700">
            학생들의 다양한 진로 수요를 반영하여 '인공지능 기초', '창업과 경영', '미디어 창작' 등 
            새로운 과목들이 신설되었습니다. 자세한 내용은 교육과정 안내서를 참고해 주세요.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-50">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-red-700">시스템 점검 안내</h3>
            <span className="text-sm text-gray-500">2025.02.15</span>
          </div>
          <p className="text-gray-700">
            수강신청 시스템의 안정성 향상을 위해 3월 10일(월) 오후 11시부터 3월 11일(화) 오전 6시까지 
            시스템 점검을 실시합니다. 해당 시간에는 접속이 불가하니 양해 부탁드립니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoticePage;