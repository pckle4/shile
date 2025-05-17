
// Simple authentication service with mock data
import { toast } from "sonner";

// User type definition
export interface User {
  id: string;
  username: string;
  email: string;
  likedProducts: number[];
  watchHistory: number[];
  savedForLater: number[];
  personalInfo: {
    name: string;
    address: string;
    phone: string;
  };
}

// Mock admin user
const adminUser: User = {
  id: "1",
  username: "admin",
  email: "admin@example.com",
  likedProducts: [1, 3, 5, 8],
  watchHistory: [2, 4, 6, 9, 12, 15],
  savedForLater: [7, 10, 11],
  personalInfo: {
    name: "Admin User",
    address: "123 Admin St, City, Country",
    phone: "+1 234 567 8900"
  }
};

// Check if user is logged in
export const isAuthenticated = (): boolean => {
  return localStorage.getItem("user") !== null;
};

// Login function
export const login = (username: string, password: string): boolean => {
  // Simple auth check - in a real app, this would be a server request
  if (username === "admin" && password === "pass") {
    localStorage.setItem("user", JSON.stringify(adminUser));
    toast.success("Login successful");
    return true;
  }
  return false;
};

// Logout function
export const logout = (): void => {
  localStorage.removeItem("user");
  toast.info("You've been logged out");
};

// Get current user
export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem("user");
  if (!userStr) return null;
  try {
    return JSON.parse(userStr) as User;
  } catch (error) {
    localStorage.removeItem("user");
    return null;
  }
};
