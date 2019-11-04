const api = {
    login(username, password) {
        if (username === 'Admin' && password === '123123') {
            return new Promise((res) => {
                setTimeout(() => {
                    res({isAuth: true})
                })
            })
        } else {
            return new Promise((res) => {
                setTimeout(() => {
                    res({isAuth: false, messages: 'Имя пользователя или пароль введены не верно '})
                }, 1000)
            })
        }
    },
    logout() {
        return new Promise((res) => {
            setTimeout(() => {
                res({isAuth: false})
            })
        })
    }
};
export default api