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

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
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
      data?.message ?? `Request failed with status ${response.status}`,
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
  sendMessage(payload) {
    return request(API_ENDPOINTS.CHAT, {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  },
}
