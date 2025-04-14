import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { login } from "../redux/authSlice";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = dispatch(login({ email, password }));

    // If login is successful, navigate
    const storedUsers = JSON.parse(localStorage.getItem("mockUsers") || "[]");
    const matchedUser = storedUsers.find(
      (u: any) => u.email === email && u.password === password
    );

    if (matchedUser) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-2 text-gray-700">
          Login to Account
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Please enter your email and password to continue
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email address:"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
          <div className="mb-6">
            <div className="flex justify-between mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600">Remember Password</span>
            </label>
          </div>
          <Button type="submit">Sign In</Button>
          <p className="text-center mt-6 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
