import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase"

const usersRef = collection(db, "users");
const photosRef = collection(db, "photos");

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

export async function getUserFollowedPhotos(userId, followingUserIds) {
    const q = query(photosRef, where("userId", "in", followingUserIds));
    const result = await getDocs(q);
        
    const userFollowedPhotos = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
    
    const photosWithUserDetails = await Promise.all(
        userFollowedPhotos.map(async (photo) => {
            let userLikedPhoto = false;
            if (photo.likes.includes(userId)) {
                userLikedPhoto = true;
            }
            const user = await getUserByUserId(photo.userId);
            const username = user[0].username;
            return { username, ...photo, userLikedPhoto };
        })
    );

    return photosWithUserDetails;
}
