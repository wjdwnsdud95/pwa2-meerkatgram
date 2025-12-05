/**
 * @file app/middlewares/validations/validators/users/store.validator.js
 * @description 회원가입 검사기
 * 251205 v1.0.0 jun 초기 생성
 */

import userFields from "../../fields/user.field.js";

const { email, password, passwordChk, nick, profile } = userFields;

export default [email, password, passwordChk, nick, profile];