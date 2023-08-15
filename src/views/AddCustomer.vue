<template>
  <div class="add_customer">
    <form @submit.prevent="insertCustomer()">
      <fieldset class="form-group">
        <input
          type="text"
          class="form-control form-control-lg"
          v-model="name"
          placeholder="Article Title"
        />
      </fieldset>
      <fieldset class="form-group">
        <input
          type="text"
          class="form-control form-control-lg"
          v-model="email"
          placeholder="Article Title"
        />
      </fieldset>
      <button class="btn btn-lg pull-xs-right defaul_button" type="submit">
        insert Customer
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import store from "@/store";
import { ADD_CUSTOMER } from "../store/action.type";

export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
  computed: {
    ...mapGetters(["customers"]),
  },
  methods: {
    insertCustomer() {
      const { name, email } = this; // Object destructuring
      const countCustomer = this.customers;
      const listIdCustomer = countCustomer.map((data) => {
        return data.id;
      });
      const id = Math.max(...listIdCustomer) + 1;
      const dataCustomerNew = {
        id: Number(id),
        name,
        email,
      };

      this.$store
        .dispatch(ADD_CUSTOMER, dataCustomerNew)
        .then(
          this.$router.push({
            name: "home",
            // params: { slug: data.article.slug }
          })
        )
        .catch((error) => {
          console.error("Error adding customer:", error);
        });

      //...listIdCustomer speading array to list element of array and convert to list argument to function math.max
      // listIdCustomer wrong because Math.max expects list argument not 1 array
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
