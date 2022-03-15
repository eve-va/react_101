import { collection, query, where, getDocs, limit, doc, updateDoc } from "firebase/firestore";
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


export async function getSuggestedProfiles(userId) {
    const q = query(usersRef, limit(10));
    const result = await getDocs(q);
    const [{ following }] = await getUserByUserId(userId);
        
    return result.docs
        .map((user) => ({ ...user.data(), docId: user.id }))
        .filter((profile) => profile.userId !== userId && !following.includes(profile.userId));
}


export async function updateUserFollowing(userId, profileId, isFollowingProfile) {
    const [{ following, docId }] = await getUserByUserId(userId);
    const usersRef = doc(db, "users", docId);
    
    return await updateDoc(usersRef, {
        following: isFollowingProfile
            ? following.filter((userId) => userId !== profileId)
            : [...following, profileId]
    });
}


export async function updateFollowedUserFollowers(userId, docId, followingUserId, isFollowingProfile) {
    const usersRef = doc(db, "users", docId);
    const [{ following }] = await getUserByUserId(userId);

    return await updateDoc(usersRef, {
        following: isFollowingProfile
            ? following.filter((userId) => userId !== followingUserId)
            : [...following, followingUserId]
    });
}