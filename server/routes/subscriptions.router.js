/**
 * @file routers/subscriptions.router.js
 * @description subscriptions 관련 라우터
 * 251208 v1.0.0 jun 초기 생성
 */

import express from 'express';
import authMiddleware from '../app/middlewares/auth/auth.middleware.js';
import subscriptionsController from '../app/controllers/subscriptions.controller.js';

const subscriptionsRouter = express.Router();

subscriptionsRouter.post('/', authMiddleware, subscriptionsController.subsribe);

export default subscriptionsRouter;