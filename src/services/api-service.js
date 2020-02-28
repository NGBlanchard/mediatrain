import TokenService from "../services/token-service";
import config from "../config";

const studentId = TokenService.getStudentId();

const ApiService = {
  getUnits() {
    return fetch(`${config.API_ENDPOINT}/units`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getStudents(number) {
    return fetch(`${config.API_ENDPOINT}/students/${number}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getStudentData() {
    return fetch(`${config.API_ENDPOINT}/students/${studentId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postLogin({ email, password }) {
    return fetch(`${config.API_ENDPOINT}/login`, 
    {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ email, password })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
    
  },

  postStudent(student) {
    return fetch(`${config.API_ENDPOINT}/students`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(student)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  
  patchDay(content) {
    return fetch(`${config.API_ENDPOINT}/students/${studentId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(content)
    })
  },
}

export default ApiService;
