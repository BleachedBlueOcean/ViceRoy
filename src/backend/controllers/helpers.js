const helpers = {
    transformCreateUser: (user, uid)=> {
        console.log(user, uid)
        return {
            uid: uid,
            firstName: user.response.firstName,
            lastName: user.response.lastName,
            email: user.response.email,

            profilePic: {},
            totalAssets: 500,
            availableCash: 500,

            coinsOwned: [],
            achievements: [],
            watchList: []
        }
    }
}

export default helpers;