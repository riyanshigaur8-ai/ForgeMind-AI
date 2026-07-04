import { API_ENDPOINTS } from '@/utils/constants'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ''

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

async function request(endpoint, options = {}) {
  const { headers, ...rest } = options

  const token = localStorage.getItem('token')

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    ...rest,
  })

  if (!response.ok) {
    let data = null

    try {
      data = await response.json()
    } catch {
      data = null
    }

    throw new ApiError(
      data?.detail ??
      data?.message ??
      `Request failed with status ${response.status}`,
      response.status,
      data,
    )
  }

  if (response.status === 204) {
    return null
  }

  return response.json()
}

export const apiClient = {
  request,

  sendMessage(payload) {
    return request(API_ENDPOINTS.CHAT, {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  },

  register(payload) {
    return request('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  },

  login(payload) {
    return request('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  },
}