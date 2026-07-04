import { apiClient } from "./api";

export async function registerUser(data) {
    return apiClient.request("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
    });
}

export async function loginUser(data) {
    return apiClient.request("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
    });
}