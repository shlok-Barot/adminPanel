import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  email: string
  username?: string
}

interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const storedUsers = JSON.parse(localStorage.getItem('mockUsers') || '[]')
      const matchedUser = storedUsers.find(
        (u: any) => u.email === action.payload.email && u.password === action.payload.password
      )
      if (matchedUser) {
        state.isAuthenticated = true
        state.user = { email: matchedUser.email, username: matchedUser.username }
      } else {
        alert('Invalid email or password')
      }
    },
    signup: (state, action: PayloadAction<{ email: string; username: string; password: string }>) => {
      const existingUsers = JSON.parse(localStorage.getItem('mockUsers') || '[]')
      const alreadyExists = existingUsers.find((u: any) => u.email === action.payload.email)
      if (alreadyExists) {
        alert('User already exists')
        return
      }
      const updatedUsers = [
        ...existingUsers,
        {
          email: action.payload.email,
          username: action.payload.username,
          password: action.payload.password,
        },
      ]
      localStorage.setItem('mockUsers', JSON.stringify(updatedUsers))
      state.isAuthenticated = true
      state.user = { email: action.payload.email, username: action.payload.username }
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
    },
  },
})

export const { login, signup, logout } = authSlice.actions
export default authSlice.reducer
