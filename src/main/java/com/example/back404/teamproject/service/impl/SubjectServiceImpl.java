package com.example.back404.teamproject.service.impl;

import com.example.back404.teamproject.common.ResponseDto;
import com.example.back404.teamproject.common.ResponseMessage;
import com.example.back404.teamproject.common.enums.SubjectAffiliation;
import com.example.back404.teamproject.dto.subject.response.SubjectGetResponseDto;
import com.example.back404.teamproject.dto.subject.response.SubjectListGetResponseDto;
import com.example.back404.teamproject.entity.Subject;
import com.example.back404.teamproject.repository.SubjectRepository;
import com.example.back404.teamproject.repository.LectureRepository;
import com.example.back404.teamproject.service.SubjectService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class SubjectServiceImpl implements SubjectService {

    private final SubjectRepository subjectRepository;
    private final LectureRepository lectureRepository;

    @Override
    public ResponseDto<List<SubjectListGetResponseDto>> searchSubjects(String userId, String subjectName, String grade, String semester, SubjectAffiliation affiliation) {
        // 추후 구현 예정
        return null;
    }

    @Override
    public ResponseDto<SubjectGetResponseDto> getSubjectById(String userId, String subjectId) {
        Subject subject = subjectRepository.findById(subjectId)
                .orElseThrow(() -> new EntityNotFoundException(ResponseMessage.NOT_EXISTS_SUBJECT + ": " + subjectId));

        SubjectGetResponseDto responseData = SubjectGetResponseDto.builder()
                .subjectId(subject.getSubjectId())
                .schoolId(subject.getSchool().getSchoolId())
                .subjectName(subject.getSubjectName())
                .grade(subject.getGrade())
                .semester(subject.getSemester())
                .affiliation(subject.getAffiliation())
                .status(subject.getStatus())
                .maxEnrollment(subject.getMaxEnrollment())
                .build();

        return ResponseDto.setSuccess(ResponseMessage.GET_SUBJECT_DETAIL_SUCCESS, responseData);
    }
}
