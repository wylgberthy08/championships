import React, { ReactNode, createContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  children: ReactNode;
}

interface UserProps {
  uid: string;
  name: string;
  email: string | null;
}

interface ResponseContext {
  signed: boolean;
  loading: boolean;
  user: UserProps | null;
  loadingAuth: boolean;
  signOut: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  setUser: () => void;
  storageUser: () => void;
}
export const AuthContext = createContext<ResponseContext>(
  {} as ResponseContext
);

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem("@devapp");
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }
    loadStorage();
  }, []);

  async function signUp(email: string, password: string, name: string) {
    setLoadingAuth(true);
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        await firestore()
          .collection("users")
          .doc(uid)
          .set({
            name: name,
            createAt: new Date(),
          })
          .then(() => {
            let data = {
              uid: uid,
              name: name,
              email: value.user.email,
            };

            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
          });
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          return console.log("Endereço de e-mail inválido");
        }
        if (error.code === "auth/email-already-in-use") {
          return console.log("Endereço de e-mail já existe");
        } else {
          console.log(error);
          setLoadingAuth(false);
        }
        setLoadingAuth(false);
      });
  }
  async function signIn(email: string, password: string) {
    setLoadingAuth(true);
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        const userProfile = await firestore()
          .collection("users")
          .doc(uid)
          .get();

        let data = {
          uid: uid,
          name: userProfile.data().name,
          email: value.user.email,
        };
        setUser(data);
        storageUser(data);
      })
      .catch((err) => {})
      .finally(() => {
        setLoadingAuth(false);
      });
  }

  async function signOut() {
    await auth().signOut();
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }
  async function storageUser(data: UserProps) {
    await AsyncStorage.setItem("@devapp", JSON.stringify(data));
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        signUp,
        signIn,
        signOut,
        loadingAuth,
        loading,
        user,
        setUser,
        storageUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
