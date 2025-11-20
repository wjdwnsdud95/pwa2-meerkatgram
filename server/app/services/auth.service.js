/**
 * @file app/services/auth.service.js
 * @description auth Service
 * 251120 jun 초기 생성
 */

import bcrypt from 'bcrypt';
import userRepository from "../repositories/user.repository.js";

async function login(body) {
  const { email, password } = body;

  // email로 유저 정보 획득
  const result = await userRepository.findByEmail(null, email);

  // 유저 존재 여부 체크
  if(!result) {
    throw new Error('존재하지 않는 유저입니다.');
  }

  // 비밀번호 체크
  if(!bcrypt.compareSync(password, result.password)) {
    throw new Error('올바르지 않는 비밀번호입니다.');
  }

  return result;
}

export default {
  login,
}