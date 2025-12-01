/**
 * @file app/middlewares/validations/validators/posts/show.validator.js
 * @description 게시글 생성 검사기
 * 251201 v1.0.0 jun 초기 생성
 */

import { content, image } from "../../fields/post.field.js";

export default [content, image];