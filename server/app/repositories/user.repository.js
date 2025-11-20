/**
 * @file app/repositories/user.repository.js
 * @description User Repository
 * 251120 v1.0.0 jun 초기 생성
 */

import db from '../models/index.js';

const { User } = db;

async function findByEmail(t = null, email) {
  return await User.findOne(
    {
      where: {
        email: email
      }
    },
    {
      transaction: t
    }
  );
}

export default {
  findByEmail,
}