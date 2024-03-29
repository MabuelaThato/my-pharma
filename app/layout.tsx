import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import firebaseAdmin from "@/utils/firebaseAdmin";
import AuthProvider from "@/components/authProvider";
import { getFirestore } from "firebase-admin/firestore";
import { cookies } from "next/headers";
import getProfile from "@/components/getProfile";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyPharma",
  description: "An online pharmacy store",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getLayoutUser = async () => {
    try {
      const token = cookies().get("token")?.value!;
      const session = await firebaseAdmin.auth().verifyIdToken(token);
      const person = await getProfile(token);

      const db = getFirestore();

      const userRef = db.collection("users").doc(person.id);
      const userData = await userRef.get();

      const user = userData.data();

      return user;
    } catch (error) {
      return null;
    }
  };

  const userRes = await getLayoutUser();
  const user = {
    ...userRes,
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
        
            <AuthProvider>
              {children}
              <ToastContainer
                autoClose={3000}
                theme="dark"
                position="bottom-center"
              />
            </AuthProvider>
  
        </main>
      </body>
    </html>
  );
}
