import { createStore } from 'vuex'
import axios from 'axios'

 const BASE_PROD='https://l-furniture-2.onrender.com'

export default createStore({
  state: {
     products:[],
    users:[],
    singleProd:[]
  },
  getters: {
  }, 
  mutations: {
    setProducts(state,data){
      state.products=data
    },
    setUsers(state,data){
      state.users=data
    },
    setSingleProduct(state,data){
      state.singleProd=data
    }

  },
  actions: {
    async getProducts({commit}) {
      let {data} = await axios.get(BASE_PROD+'/products');
       console.log(data);
      commit("setProducts", data);
    },
    async getProduct({commit},prodID) {
      let {data} = await axios.get(BASE_PROD+'/products'+prodID);
       console.log(data);
      commit("setSingleProduct", data);
    },
    async addProducts({commit},newprod){
      let {data} =await axios.post(BASE_PROD+'/products',newprod);
      console.log(data);
      window.location.reload() 
  }, 
  async deleteProduct({commit}, prodID){
    let {data} =await axios.delete(BASE_PROD+'/products/' +prodID);
    console.log(data);
    window.location.reload() 
  },
  async updateProduct({commit},update){
    await axios.patch(BASE_PROD+'/products/'+update.prodID,update)
    window.location.reload()
  },
  async getUsers({commit}) {
    let {data} = await axios.get(BASE_PROD+'/users');
     console.log(data);
    commit("setUsers", data);
  },
  async addUser({commit},newUser){
    let {data} =await axios.post(BASE_PROD+'/users',newUser);
    console.log(data);
    window.location.reload() 
}, 
async deleteUser({commit}, userID){
  let {data} =await axios.delete(BASE_PROD+'/users/' +userID);
  console.log(data);
  window.location.reload() 
},
async updateUser({commit},update){
  await axios.patch(BASE_PROD+'/users/'+update.userID,update)
  window.location.reload()
},

},
modules: {
}
})
