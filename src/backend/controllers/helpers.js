



const helpers = {
    transformCreateUser: (user, uid)=> {
        console.log(user, uid)
        return {
            uid: uid, 
            firstName: user.response.firstName,
            lastName: user.response.lastName,
            email: user.response.email,
            totalAssets: 0,
            coinsOwned: []
        }
    }
}

export default helpers;