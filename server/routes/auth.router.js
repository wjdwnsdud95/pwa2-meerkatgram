/**
 * @file routes/auth.router.js
 * @description 인증 관련 라우터
 * 251119 v1.0.0 jun 초기 생성
 */

import express from 'express';
import authController from '../app/controllers/auth.controller.js';
import loginValidator from '../app/middlewares/validations/validators/auth/login.validator.js';
import validationHandler from '../app/middlewares/validations/validationHandler.js';

const authRouter = express.Router();

// 혹시 모를 후속 동작 방지를 위해 return을 추가
authRouter.post('/login', loginValidator, validationHandler, authController.login);
authRouter.post('/reissue', authController.reissue);

export default authRouter;