import * as types from './mutation-types';

export const mutations = {
    [types.SET_CART](state, books_payload){
        //state.cart.push( books_payload );
        state.cart = books_payload;
    },
    [types.REMOVE_CART](state, index){
        state.cart.splice( index, 1 );
    },
    [types.SEARCH_RESULT](state, a){
        state.searchResult =  {
	        items: a[0],
	        status: a[1],
        }
    },
    [types.SIGN_IN](state, user_payload){
        state.user = user_payload
    },
    [types.SIGN_OUT](state){
        state.user = {};
    }
};