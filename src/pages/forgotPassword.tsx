import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const ForgotPassword = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="bg-white rounded-xl shadow-lg p-8 w-[400px]">
        <h2 className="text-xl font-bold text-center mb-2">
          {t("forgot.title", "Forgot Password")}
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          {t("forgot.subtitle", "Enter your email to reset password")}
        </p>
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder={t("forgot.email", "Email address")}
            className="w-full p-3 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold"
          >
            {t("forgot.button", "Send Reset Link")}
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          {t("forgot.backToLogin", "Remembered your password?")}{" "}
          <a href="/" className="text-blue-500 hover:underline">
            {t("forgot.login", "Login")}
          </a>
        </p>
      </div>
    </div>
  );
};

