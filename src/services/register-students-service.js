import { API_ENDPOINT } from "../config";
import { normalizeResponseErrors } from "./utils";

export const registerStudent = student => {
  return fetch(`${API_ENDPOINT}/students`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(student)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
};
