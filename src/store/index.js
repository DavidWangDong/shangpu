import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
		currTemp:[],
	},
	mutations:{
		
		setTmp (state,param) {
			state.currTemp.length=0;
			state.currTemp.push(param);
		},
		
	},
	getters : {
		getData (state){
			return state.currTemp;
		}
	}
})

export default store;