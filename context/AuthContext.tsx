import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL } from '@/config/index';

interface UserInterface {
  username: string;
  email: string;
  password: string;
}

const AuthContext = createContext();

// Provider
export const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const router = useRouter();

  // Register the user
  const register = async (user: UserInterface) => {
    console.log(user);
  };
  // Login the user
  const login = async ({
    email: identifier,
    password,
  }: {
    email: string;
    identifier: string;
    password: string;
  }) => {
    const res = await fetch(`${NEXT_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push('/account/dashboard');
    } else {
      setError(data.message);
      setError(null);
    }
  };

  // Logout the user
  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/auth/logout`, {
      method: 'POST',
    });

    if (res.ok) {
      router.push('/');
      setUser(null);
    }
  };

  // Check if the user is already logged in
  const checkUserLoggedIn = async () => {
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
