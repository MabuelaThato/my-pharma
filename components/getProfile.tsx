import firebaseAdmin from "@/utils/firebaseAdmin";
import { redirect } from "next/navigation";
import { getFirestore } from "firebase-admin/firestore";

export default async function getProfile(token: string | undefined) {
  if (!token) return redirect("/");

  try {
    const session = await firebaseAdmin.auth().verifyIdToken(token);

    if (!session) return redirect("/");

    const db = getFirestore();

    const userRef = db.collection("users").doc(session.uid);
    const userData = await userRef.get();

    const user: any = {
      id: userData?.id,
      ...userData.data(),
    };

    return user;
  } catch (error) {
    return redirect("/");
  }
}