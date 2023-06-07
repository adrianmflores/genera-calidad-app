
export async function login(user, password) {
    const response = await fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            username: user,
            password: password
        })
    })
    const isSuccessfulLogin = response.status === 200
    return isSuccessfulLogin
}

