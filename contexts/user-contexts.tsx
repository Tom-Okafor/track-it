import { account } from "@/lib/appwrite";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ID, Models } from "react-native-appwrite";
interface AuthResultType {
  response: Models.User | string;
  success: boolean;
}
interface UserContextType {
  current: Models.User | null;
  login: (email: string, password: string) => Promise<AuthResultType>;
  logout: () => Promise<void>;
  signup: (
    email: string,
    password: string,
    name: string
  ) => Promise<AuthResultType>;
  isLoginIn: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Models.User | null>(null);
  const [isLoginIn, setIsLoginIn] = useState<boolean>(true);
  async function login(email: string, password: string) {
    try {
      await account.createEmailPasswordSession({
        email,
        password,
      });
      const loggedIn = await account.get();
      setUser(loggedIn);
      return { response: loggedIn, success: true };
    } catch (error) {
      if (error instanceof Error)
        return { response: error.message, success: false };
      return { response: "Login Unsuccessful", success: false };
    }
  }

  async function logout() {
    try {
      await account.deleteSession({ sessionId: "current" });
    } finally {
      setUser(null);
    }
  }

  async function signup(email: string, password: string, name: string) {
    try {
      const userSignUp = await account.create({
        userId: ID.unique(),
        email,
        password,
        name,
      });
      const loginResult = await login(email, password);
      if (!loginResult.success) {
        return loginResult;
      }
      return { response: userSignUp, success: true };
    } catch (error) {
      if (error instanceof Error)
        return { response: error.message, success: false };
      return { response: "Login Unsuccessful", success: false };
    }
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
    } catch {
      setUser(null);
    } finally {
      setIsLoginIn(false);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider
      value={{ current: user, login, logout, signup, isLoginIn }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}
