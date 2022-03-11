import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase"

const usersRef = collection(db, "users");

export async function doesUsernameExist(username) {
    const q = query(usersRef, where("username", "==", username));
    const result = await getDocs(q);
    
    return result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUserId(userId) {
    const q = query(usersRef, where("userId", "==", userId));
    const result = await getDocs(q);

    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
    
    return user;
}