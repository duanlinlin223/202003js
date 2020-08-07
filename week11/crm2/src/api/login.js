import http from "./http.js";

export function login(option) {
    return http.post("/user/login", option).then((data) => {
        return data;
    });
}
