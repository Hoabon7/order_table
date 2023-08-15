import {
  FETCH_CUSTOMER,
  ADD_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
} from "../action.type";
import { SET_CUSTOMER } from "../mutation.type";

const state = {
  customer: [
    {
        id: 1,
        name: "hoa",
        email: "hoanv@rikeisoft.com"
    },
    {
        id: 2,
        name: "hoa2",
        email: "hoanv2@rikeisoft.com"
    },
    {
        id: 3,
        name: "hoa3",
        email: "hoanv3@rikeisoft.com"
    },
  ],
  isLoading: true,
  customerCount: 0,
};

const getters = {
  customerCount(state) {
    return state.customerCount;
  },
  customers(state) {
    return state.customer;
  },
  isLoading(state) {
    return state.isLoading;
  },
};

const actions = {
  [FETCH_CUSTOMER](context) {
    context.getters("customers");
  },
  [ADD_CUSTOMER]({ commit }, customer) {
    commit(SET_CUSTOMER, {customer, type: ADD_CUSTOMER});
  },
  [DELETE_CUSTOMER]({ commit }, customerId) {
    commit(DELETE_CUSTOMER, customerId);
  },
  [UPDATE_CUSTOMER]({ commit }, customer) {
    commit(SET_CUSTOMER, {customer, type: UPDATE_CUSTOMER});
  },
};

const mutations = {
  [SET_CUSTOMER](state, { customer, type }) {
    switch (type) {
      case ADD_CUSTOMER:
        state.customer.push(customer);
        break;
      case UPDATE_CUSTOMER:
        state.customer = state.customer.map((data) => {
          if (data.id !== customer.id) {
            return data;
          }
          data.name = customer.name;
          data.email = customer.email;
          return data;
        });
        break;
      default:
        break;
    }
  },

  [DELETE_CUSTOMER](state, customerId) {
    state.customer = state.customer.filter((data) => {
      return data.id != customerId
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
