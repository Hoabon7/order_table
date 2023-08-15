import { createStore } from 'vuex'
import custorerModule from './modules/customer';
import menuModule from './modules/menu';
import orderModule from './modules/order';
export default createStore({
  modules: {
    custorerModule,
    menuModule,
    orderModule
  },
})
