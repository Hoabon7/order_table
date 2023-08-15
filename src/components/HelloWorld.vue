<template>
  <div class="hello">
    <div v-for="item in customers" :key="item.id" class="cl_item">
      <h3>{{item.name}}</h3>
      <h4>{{item.email}}</h4>
      <button class="delete_button" @click.prevent="deleteCustomer(item.id)">DELETE ITEM</button>
      <!-- Use updateCustomer method to navigate to the update_customer route -->
      <button class="update_button" @click.prevent="updateCustomer(item.id)">
        Update Customer
      </button>
    </div>
  </div>
  <div>
    <router-link
      active-class="active"
      exact
      :to="{ name: 'add_customer' }"
    >
      Add Customer
    </router-link>
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { 
  DELETE_CUSTOMER,
} from "../store/action.type";

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(["customers"]),
    id () {
      return this.$route.params.id;
    }
  },
  methods: {
    deleteCustomer(customerId) {
      this.$store.dispatch(DELETE_CUSTOMER, customerId);
    },
    // Add customerId parameter to the updateCustomer method
    updateCustomer(customerId) {
      // Navigate to the update_customer route using the $router.push() method
      this.$router.push({ name: "update_customer", params: { id: customerId } });
    },
   
  }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.nav-link {
  color: white;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.cl_item {
  background-color: #42b983;
  width: 400px;
  text-align: center;
  color: aliceblue;
}
.hello {
  border: 1px solid black;
  width: 400px;
  margin: auto;
}
.defaul_button{
  color: white;
  background-color: #42b983;
  width: auto;
  height: 40px;
}
</style>
