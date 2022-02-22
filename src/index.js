import store from "./redux"
import { changeCount } from "./redux/count"
import { downvoteVideo, setYouTubeTitle, upvoteVideo } from "./redux/youTubeVideo"
import { addFavoriteThing } from "./redux/favoriteThings"

store.dispatch(changeCount(42));
store.dispatch(addFavoriteThing("Chocolate"));
store.dispatch(setYouTubeTitle("New Video"));
store.dispatch(upvoteVideo());
store.dispatch(downvoteVideo());
store.dispatch(upvoteVideo());
