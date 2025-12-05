/**
 * @file app/services/users.service.js
 * @description users Service
 * 251205 jun 초기 생성
 */

import { CONFLICT_ERROR } from "../../configs/responseCode.config.js";
import bcrypt from 'bcrypt';
import myError from "../errors/customs/my.error.js";
import PROVIDER from "../middlewares/auth/configs/provider.enum.js";
import ROLE from "../middlewares/auth/configs/role.enum.js";
import db from "../models/index.js";
import userRepository from "../repositories/user.repository.js"


/**
 * 회원 가입 처리
 * @param {import("./users.service.type.js").userStoreData} data 
 * @returns 
 */
async function store(data) {
  const { email, password, nick, profile } = data;

  return db.sequelize.transaction(async t => {
    // 가입 유저인지 조회
    const user = await userRepository.findByEmail(t, email);

    // 중복 유저 처리
    if(user) {
      throw myError('이메일 중복', CONFLICT_ERROR);
    }

    // 가입 처리
    const createData = {
      email,
      nick,
      password: bcrypt.hashSync(password, 10),
      profile,
      role: ROLE.NORMAL,
      provider: PROVIDER.NONE
    }

    return await userRepository.create(t, createData);
  });
}

export default {
  store,
}