package com.example.back404.teamproject.repository;

import com.example.back404.teamproject.common.enums.CourseRegistrationStatus;
import com.example.back404.teamproject.entity.CourseRegistration;
import com.example.back404.teamproject.entity.Student;
import com.example.back404.teamproject.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseRegistrationRepository extends JpaRepository<CourseRegistration, Long> {

    // 특정 학생의 상태별 수강 신청 목록
    List<CourseRegistration> findByStudentAndStatus(Student student, CourseRegistrationStatus status);

    // 특정 학생이 해당 강의에 신청했는지 여부
    boolean existsByStudent_IdAndLecture_LectureId(String studentId, Long lectureId);

    // 강의별 총 신청 인원 수
    int countByLecture_LectureId(Long lectureId);

    // 특정 학생의 전체 수강신청 내역
    List<CourseRegistration> findByStudent_Id(String studentId);

    // 학생 ID 기준으로 특정 수강신청 내역 조회
    Optional<CourseRegistration> findByIdAndStudent_Id(Long registrationId, String studentId);

    // 강의 ID + 상태별 수강신청 수
    int countByLecture_LectureIdAndStatus(Long lectureId, CourseRegistrationStatus status);

    // 특정 학생이 특정 강의에 신청한 수강신청 조회
    Optional<CourseRegistration> findByStudent_IdAndLecture_LectureId(String studentId, Long lectureId);
}
