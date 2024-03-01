// import "server-only";
import admin from "firebase-admin";

var serviceAccount = require("./firebase.json");

const firebaseAdmin = admin.apps.length
  ? admin.app()
  : admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

export default firebaseAdmin;