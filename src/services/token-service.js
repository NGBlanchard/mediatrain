import config from "../config";

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  setStudent(student) {
    window.sessionStorage.setItem(config.CURRENT_STUDENT, student);
  },
  setDate(date) {
    window.sessionStorage.setItem(config.MEMBER_SINCE, date);
  },
  setStudentId(studentId) {
    window.sessionStorage.setItem(config.STUDENT_ID, studentId);
  },
  setStudentData(data) {
    window.localStorage.setItem(config.STUDENT_DATA, data)
  },
  getStudent() {
    return window.sessionStorage.getItem(config.CURRENT_STUDENT);
  },
  getDate() {
    return window.sessionStorage.getItem(config.MEMBER_SINCE);
  },
  getStudentId() {
    return window.sessionStorage.getItem(config.STUDENT_ID);
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(email, password) {
    return window.btoa(`${email}:${password}`);
  }
};

export default TokenService;
