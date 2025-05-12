import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export const getFirebaseServiceAccount = () => {
  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!serviceAccount) {
    throw new Error(
      "FIREBASE_SERVICE_ACCOUNT is not set in environment variables."
    );
  }
  return JSON.parse(serviceAccount);
};

// Initialize Firebase Admin only if it hasn't been initialized
if (getApps().length === 0) {
  const serviceAccount = getFirebaseServiceAccount();
  initializeApp({
    credential: cert(serviceAccount),
  });
  console.log("Firebase Admin initialized.");
}

const firestore = getFirestore();

const run = async () => {
  const user = await firestore.collection("environments").get();
  console.log("Done fetching.");
  console.log(user.docs.map((doc) => doc.data()));
};

run();
