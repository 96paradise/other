package com.example.back404.teamproject.controller.registration;

import com.example.back404.teamproject.dto.registration.request.CourseRegistrationRequestDto;
import com.example.back404.teamproject.dto.registration.response.CourseRegistrationResponseDto;
import com.example.back404.teamproject.provider.JwtProvider;
import com.example.back404.teamproject.service.impl.CourseRegistrationService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/course-registrations")
@RequiredArgsConstructor
public class CourseRegistrationController {

    private final CourseRegistrationService courseRegistrationService;
    private final JwtProvider jwtTokenProvider;

    @PostMapping
    public ResponseEntity<String> registerCourse(@RequestBody CourseRegistrationRequestDto requestDto,
                                                 HttpServletRequest request) {
        String email = jwtTokenProvider.getEmailFromRequest(request);
        courseRegistrationService.registerByEmail(email, requestDto);
        return ResponseEntity.ok("수강신청이 완료되었습니다.");
    }

    @GetMapping("/my")
    public ResponseEntity<List<CourseRegistrationResponseDto>> getMyRegistrations(HttpServletRequest request) {
        String email = jwtTokenProvider.getEmailFromRequest(request);
        List<CourseRegistrationResponseDto> registrations = courseRegistrationService.getMyRegistrations(email);
        return ResponseEntity.ok(registrations);
    }

    @GetMapping("/{registrationId}")
    public ResponseEntity<CourseRegistrationResponseDto> getRegistrationDetail(
            @PathVariable Long registrationId,
            HttpServletRequest request) {

        String email = jwtTokenProvider.getEmailFromRequest(request);
        CourseRegistrationResponseDto detail = courseRegistrationService.getRegistrationDetail(email, registrationId);
        return ResponseEntity.ok(detail);
    }

    @PostMapping("/{registrationId}/cancellation")
    public ResponseEntity<String> cancelRegistration(@PathVariable Long registrationId,
                                                     HttpServletRequest request) {
        String email = jwtTokenProvider.getEmailFromRequest(request);
        courseRegistrationService.cancelRegistration(email, registrationId);
        return ResponseEntity.ok("수강신청이 취소되었습니다.");
    }

}
