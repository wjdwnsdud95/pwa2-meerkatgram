/**
 * @file app/repositories/user.repository.js
 * @description User Repository
 * 251120 v1.0.0 jun 초기 생성
 */

import db from '../models/index.js';

const { User } = db;

/**
 * 이메일로 유저 검색
 * @param {import("sequelize").Transaction} t 
 * @param {string} email 
 * @returns 
 */
async function findByEmail(t = null, email) {
  return await User.findOne(
    {
      where: {
        email: email
      },
      transaction: t
    }
  );
}

/**
 * 유저 모델 인스턴스로 save 처리
 * @param {import("sequelize").Transaction} t 
 * @param {import("../models/index.js").User} user 
 * @returns 
 */
async function save(t = null, user) {
  return await user.save({ transaction: t });
}

/**
 * 유저 id로 유저 정보 조회
 * @param {import("sequelize").Transaction} t 
 * @param {number} id
 * @returns {promise<import("../models/User.js").User>}
 */
async function findByPk(t = null, id) {
  return await User.findByPk(id, { transaction: t });
}

async function create(t = null, data) {
  return await User.create(data, { transaction: t });
}

export default {
  findByEmail,
  save,
  findByPk,
  create,
}