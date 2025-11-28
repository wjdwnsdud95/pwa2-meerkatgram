/**
 * @file app/services/post.repository.js
 * @description Post Repository
 * 251128 v1.0.0 jun 초기 생성
 */

import db from '../models/index.js';
const { sequelize, Post, Comment } = db;

async function pagination(t = null, data) {
  return await Post.findAll(
    {
      order: [
        ['createdAt', 'DESC'],
        ['updatedAt', 'DESC'],
        ['id', 'ASC']
      ],
      limit: data.limit,
      offset: data.offset
    },
    {
      transaction: t,
    }
  );
}

async function findByPk(t = null, id) {
  return await Post.findByPk(
    id,
    {
      include: [
        {
          model: Comment,
          as: 'comments',
          where: {
            replyId: 0
          },
          required: false, // Left Join 설정(디폴트 값이지만 안전하게 한번 더 선언)
        }
      ],
      transaction: t
    }
  );
} 

export default {
  pagination,
  findByPk,
}