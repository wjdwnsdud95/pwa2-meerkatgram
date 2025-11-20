/**
 * @file app/models/Push_Subscription.js
 * @description push_subscription model
 * 251120 v1.0.0 jun 초기 생성
 */

import { DataTypes } from 'sequelize';

// 테이블명
const modelName = 'Push_Subscription';

// 컬럼 정의
const attributes = {
  id: {
    field: 'id',
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    comment: '푸시구독 PK',
  },
  userId: {
    field: 'user_id',
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    comment: '유저 PK',
  },
  endPoint: {
    field: 'endpoint',
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    comment: '엔드포인트',
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    allowNull: true,
    comment: '작성일',
    get() {
      const val = this.getDataValue('created_at');
      if(!val) {
        return null;
      }
      return dayjs(val).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    allowNull: true,
    comment: '수정일',
    get() {
      const val = this.getDataValue('updatedAt');
      if(!val) {
        return null;
      }
      return dayjs(val).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  deletedAt: {
    field: 'deleted_at',
    type: DataTypes.DATE,
    allowNull: true,
    comment: '삭제일',
    get() {
      const val = this.getDataValue('deletedAt');
      if(!val) {
        return null;
      }
      return dayjs(val).format('YYYY-MM-DD HH:mm:ss');
    }
  },
};

const options = {
  tableName: 'push_subscriptions', // 실제 DB 테이블명
  timestamps: true, // createdAt, updatedAt를 자동 관리
  paranoid: true, // soft delete 설정(deletedAt 자동 관리)
}

const Push_Subscription = {
  init: (sequelize) => {
    const define = sequelize.define(modelName, attributes, options);

    return define;
}}

export default Push_Subscription;