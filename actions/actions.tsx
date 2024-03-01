"use server"

import { getFirestore } from 'firebase-admin/firestore';
import { DecodedIdToken } from "firebase-admin/auth";
import { redirect } from "next/navigation";
import firebaseAdmin from "@/utils/firebaseAdmin";
import { cookies } from 'next/headers';
import getProfile from '@/components/getProfile';
import { Values } from 'zod';

const db = getFirestore();

export async function registerUser() {

    const token = cookies().get("token")?.value!;
        if (!token) return redirect("/");

        const session = await firebaseAdmin.auth().verifyIdToken(token);
        
    try {
        await db
          .collection("users")
          .doc(session.uid)
          .set({
            userType: "customer",
            userID: session.uid,
          });
        } catch (error) {
            console.log("ERROR", error);
            return redirect("/");
          }

      
}

export async function redirectUser(){
  const token = cookies().get("token")?.value!;
  if (!token) return redirect("/");

  const user = await getProfile(token);
  if (!user) redirect("/sign-up");

  switch (user.userType) {
    case "admin":
      redirect("/admin");

    default:
      redirect("/user");
    
  }
}

export async function getUser(profile: DecodedIdToken) {
  const userRef = await firebaseAdmin
    .firestore()
    .collection("Accounts")
    .doc(profile.id)
    .get();

  const user: any = {
    ...userRef.data(),
    iD: userRef.id,
  };

  return user;
}

export async function addProduct(form:any){
  const db = getFirestore();

  try {
    await db
      .collection("Products")
      .doc()
      .set({
        ...form,
      });
  }catch(err){
    console.log(err);
  }
};
