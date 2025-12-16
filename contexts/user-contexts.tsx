import { account } from "@/lib/appwrite";
import { router } from "expo-router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ID, Models } from "react-native-appwrite";

interface UserContextType {
  current: Models.User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
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
      router.push("/(tabs)");
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    await account.deleteSession({ sessionId: "current" });
    setUser(null);
  }

  async function signup(email: string, password: string, name: string) {
    try {
      await account.create({
        userId: ID.unique(),
        email,
        password,
        name,
      });
      await login(email, password);
    } catch (error) {
      console.log(error);
      setUser(null);
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
