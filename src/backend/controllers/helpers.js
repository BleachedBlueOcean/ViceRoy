const helpers = {
    transformCreateUser: (user, uid)=> {
        console.log(user, uid)
        return {
            uid: uid,
            firstName: user.response.firstName,
            lastName: user.response.lastName,
            email: user.response.email,
            availableCash: 500,
            totalAssets: 0,
            coinsOwned: [],
            profilePic: ''

        }
    }
}

export default helpers;