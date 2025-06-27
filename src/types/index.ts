// src/types/index.ts
export type UserType = 'student' | 'teacher' | 'admin';

export interface LoginFormData {
  id: string;
  password: string;
}

export interface FindIdFormData {
  name: string;
  email: string;
  verificationCode: string;
}

export interface FindPasswordFormData {
  id: string;
}

export interface RegisterFormData {
  name: string;
  id: string;
  password: string;
  email: string;
  birthDate: string;
  phone: string;
  schoolCode: string;
}

export interface SchoolRegisterFormData {
  schoolName: string;
  schoolAddress: string;
  schoolPhone: string;
  adminName: string;
  adminPhone: string;
  adminEmail: string;
  adminBirthDate: string;
}

export interface UserTypeButtonProps {
  type: UserType;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

// API 응답 타입들
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    type: UserType;
    schoolCode: string;
  };
}

export interface VerificationResponse {
  verificationId: string;
  expiresAt: string;
}

// 폼 에러 타입
export interface FormErrors {
  [key: string]: string;
}