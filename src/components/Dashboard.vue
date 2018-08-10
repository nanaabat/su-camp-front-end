<template>
  <div class="text-left">
    <div class="row">

      <div class="col-md-6" v-for="house in houses" :houses="houses" :key="house._id">
        <div class="card">
          <div class="card-body">
            <router-link class="card-link" :to="'/house/'+house._id">
              <h5 class="card-title card-link">
                {{house.name}}
              </h5>
            </router-link>
            <p class="card-text">{{house.gender[0]}}</p>
            <div class="card-footer text-right">{{house.occupants.length}}/{{house.max_capacity}}</div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {
    houses() {
      return this.$store.state.houses;
    }
  },
  created() {
    this.$http
      .get('http://localhost:3000/houses')
      .then(res => {
        this.$store.commit('setHouses', res.body);
      })
      .catch(res => {
        console.error(res.body);
      });
  }
};
</script>
