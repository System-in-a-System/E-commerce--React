const MyAccountPage = () => {
    
    const loggedInUser = localStorage.getItem("logged");
    const userInfo = JSON.parse(localStorage.getItem(loggedInUser));

    return(
        <div style={{backgroundColor: "white"}}>
            <h1>{userInfo.firstName} {userInfo.lastName}</h1>
            <h4>Orders:</h4>
        </div>
    );
}

export default MyAccountPage;