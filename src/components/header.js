const Header = props => {
    const menuUrl = props.user ? props.logout : props.login;
    const menuText = props.user ? 'logout' : 'login';

    const userDetail = () => {
        const {user} = props;

        if (user) {
            return (
                <p>{user.email}</p>
            );
        }

        return (<></>);
    }

    return (
        <>
            {userDetail()}
            <a href={menuUrl}>{menuText}</a>
        </>
    );
};

export default Header;
