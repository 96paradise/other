import React from 'react';
import { useNavigate } from 'react-router-dom';

const IntroductionPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-3xl font-bold text-center mb-8">고교학점제 소개</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-2xl font-bold mb-4 text-blue-600">고교학점제란?</h3>
          <p className="text-gray-700 leading-relaxed">
            고교학점제는 학생이 기초 소양과 기본 학력을 바탕으로 진로·적성에 따라 과목을 선택하여 이수하고, 
            누적 학점이 기준에 도달할 경우 졸업을 인정받는 교육과정 운영 제도입니다.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4 text-blue-600">주요 특징</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">학생 중심 교육과정</h4>
              <p className="text-sm text-gray-600">학생이 자신의 진로와 적성에 맞는 과목을 선택하여 수강할 수 있습니다.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">학점 이수제</h4>
              <p className="text-sm text-gray-600">과목별 학점을 이수하여 졸업 요건을 충족하는 시스템입니다.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">다양한 과목 개설</h4>
              <p className="text-sm text-gray-600">학교 간 공동교육과정, 온라인 수업 등으로 다양한 과목을 제공합니다.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">개별화된 진로 설계</h4>
              <p className="text-sm text-gray-600">학생 개인의 진로 계획에 맞춰 체계적인 학습 경로를 설계할 수 있습니다.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IntroductionPage;