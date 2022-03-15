import { useState } from 'react';
import { Link } from 'react-router-dom';
import { updateUserFollowing, updateFollowedUserFollowers } from '../../services/firebase';

export default function SuggestedProfile({ userDocId, username, profileId, userId }) {
    const [followed, setFollowed] = useState(false);
    
    async function handleFollowUser() {
        setFollowed(true);

        await updateUserFollowing(userId, profileId);
        await updateFollowedUserFollowers(profileId, userDocId, userId);
    }
    
    return !followed ? (
        <div className="flex flex-row items-center align-items justify-between">
            <div className="flex items-center justify-between">
                <img
                    className="rounded-full w-8 flex mr-3"
                    src={`/images/avatars/${username}.jpg`}
                    alt={`Follow ${username}`}
                />
                <Link to={`/p/${username}`}>
                    <p className="font-bold text-sm">{username}</p>
                </Link>
            </div>
            <div className="flex">
                <button
                    className="text-sm font-bold text-blue"
                    type="button"
                    onClick={handleFollowUser}
                >
                    Follow
                </button>
            </div>
        </div>
    ) : null;
}