<template>
  <div class="row text-left">
    <div class="col-md-12">
      <div class="card" v-if="currentHouse">
        <div class="card-header">
          <h3>
            {{currentHouse.name}}
          </h3>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title" style="padding-bottom: 10px;">Occupants</h5>
        <table class="table col-12">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Sex</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="occupant in currentHouse.occupants" :occupant="occupant" :key="occupant._id">
              <td scope="row">{{occupant.name}}</td>
              <td>{{occupant.gender[0] == ('m' || 'male')?'male':'female'}}</td>
              <td>{{occupant.age}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'House',
  computed: {
    currentHouse() {
      return this.$store.state.currentHouse;
    }
  },
  created() {
    this.$http
      .get(`${process.env.API}/house/?house_id=${this.$route.params.house_id}`)
      .then(res => {
        this.$store.commit('setCurrentHouse', res.body);
      });
  }
};
</script>
