function logout() {
    document.cookie = "customerID=; expires=Thu, 18 Dec 1970 12:00:00 UTC; path=./" // Set Cookie to expire
    window.location.href = "p2.html" // redirect user to p2.html
}

function cookieSet(){
    if(document.cookie.indexOf("customerID=") >= 0){ // indexOf will return -1 if that cookie does not exist.
        return true;
    }
    else{
        return true;
    }
}