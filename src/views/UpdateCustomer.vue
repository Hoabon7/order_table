<template>
  <div class="update_customer">
    <form @submit.prevent="updateCustomer()">
      <fieldset class="form-group">
        <input
          type="text"
          class="form-control form-control-lg"
          v-model="customer.name"
        />
      </fieldset>
      <fieldset class="form-group">
        <input
          type="text"
          class="form-control form-control-lg"
          v-model="customer.email"
        />
      </fieldset>
      <button class="btn btn-lg pull-xs-right defaul_button" type="submit">
        update Customer
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import store from "@/store";
import { UPDATE_CUSTOMER } from "../store/action.type";

export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
  computed: {
    ...mapGetters(["customers"]),
    customer() {
      const id = this.$route.params.id;
      return (
        this.customers.find((data) => data.id == id) || {
          name: "",
          email: "",
        }
      );
    },
  },
  methods: {
    updateCustomer() {
      this.$store.dispatch(UPDATE_CUSTOMER, this.customer).then(() => {
        this.$router.push({ name: "home" });
      }).catch((error) => {
        console.log(error)
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form-group {
  margin: 40px 0 0;
}
input {
  color: #080a09;
  width: 300px;
}
.cl_item {
  background-color: #42b983;
  width: 400px;
  text-align: center;
  color: aliceblue;
}
.defaul_button {
  color: white;
  background-color: #42b983;
  width: auto;
  height: 40px;
}
</style>
