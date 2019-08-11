export const productGetters = {
    // allId: state => state.products.result,
    // entities: state => state.products.entities,
    allProducts: (state) => {
        return state.products
        // const result = getters.allId
        // const entities = getters.entities
        //
        // return result.map(r => {
        //   const product = entities.products[r]
        //   // if (typeof product.manufacturer === Object) return
        //   console.log(entities.products[r], product.manufacturer)
        //   product.manufacturer = entities.manufacturer[product.manufacturer]
        //   return product
        // })
    },
    productById: (state, getters) => id => {
        if (getters.allProducts.length > 0) {
            return getters.allProducts.filter(p => p._id === id)[0]
        } else {
            return state.product
        }
    },

};
export const usersGetter = {
    allUsers: (state) => {
        return state.users
    },
    addUser: (state) =>{
        return state.users
    },
    userById: (state, getters) => id =>{
        if (getters.allUsers.length > 0){
            return getters.allUsers.filter(p => p._id === id)[0]
        } else {
            return state.user
        }
    }
};

export const registrationGetters = {
    loginAuths: (state)=>{
        return state.auths
    }
};

export const loginGetters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
};

export const manufacturerGetters = {
    allManufacturers: state => state.manufacturers
};
