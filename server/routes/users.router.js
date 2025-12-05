/**
 * @file routers/users.router.js
 * @description 유저 관련 라우터
 * 251205 v1.0.0 jun 초기 생성
 */

import express from 'express';
import usersController from '../app/controllers/users.controller.js';
import validationHandler from '../app/middlewares/validations/validationHandler.js';
import storeValidator from '../app/middlewares/validations/validators/users/store.validator.js';

const usersRouter = express.Router();

usersRouter.post('/', storeValidator, validationHandler, usersController.store);

export default usersRouter;