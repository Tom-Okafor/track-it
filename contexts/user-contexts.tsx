import { account } from "@/lib/appwrite";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ID, Models } from "react-native-appwrite";

const UserContext = createContext({});

export function useUserContext() {
  const context = useContext(UserContext);
  return context;
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Models.User | null>(null);
  async function login(email: string, password: string) {
    await account.createEmailPasswordSession({
      email,
      password,
    });
    const loggedIn = await account.get();
    setUser(loggedIn);
  }

  async function logout() {
    await account.deleteSession({ sessionId: "current" });
    setUser(null);
  }

  async function signup(email: string, password: string) {
    try {
      await account.create({
        userId: ID.unique(),
        email: email,
        password: password,
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
    } catch (error) {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider value={{ current: user, login, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
}
