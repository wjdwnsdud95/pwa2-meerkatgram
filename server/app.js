/**
 * @file app.js
 * @description Entry Point
 * 251117 v1.0.0 jun
 */

import express from 'express';
import './configs/env.config.js'
import authRouter from './routes/auth.router.js';

const app = express();
app.use(express.json()); // JSON 요청 파싱 처리

// ------------------------
// 라우터 정의
// ------------------------
app.use('/api/auth', authRouter);


// ------------------------
// 해당 Port로 express 실행
// ------------------------
// 불러오는 env가 string이므로 parseInt로 숫자로 변환 시켜서 불러오기
app.listen(parseInt(process.env.APP_PORT));