import { createStore } from 'vuex'
import axios from 'axios'

 const BASE_PROD='https://l-furniture-2.onrender.com'

export default createStore({
  state: {
     products:[]
  },
  getters: {
  }, 
  mutations: {
    setProducts(state,data){
      state.products=data
    }
  },
  actions: {

    async getProducts({commit}) {
      let {data} = await axios.get(BASE_PROD+'/products');
       console.log(data);
      commit("setProducts", data);
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
  }
},
modules: {
}
})
