const logoutHandler = async() => {
    const response = await fetch('/api/user/logout',{
        method: 'POST',
        headers: {'Content-Type': 'appilcation/json'},
    });
    if(response.ok){
        document.location.replace('/');
    }else{
        alert('Failed to log out!')
    }
};
document.querySelector('logout').addEventListener('click', logoutHandler);