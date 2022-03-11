import useUser from '../../hooks/use-user';

export default function Sidebar() {
    const user = useUser();
    console.log(user);
    //const { user: { docId, userId, following, username, fullName } = {} } = useUser();
    return (<p>I am the sidebar</p>);
}