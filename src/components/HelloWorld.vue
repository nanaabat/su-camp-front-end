<template>
  <div class="text-left" style="padding-top: 40px;">
    <div class="row">

      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">House Name</h5>
            <p class="card-text">Gender Class</p>
            <div class="card-footer text-right">occupants/max_capacity</div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">House Name</h5>
            <p class="card-text">Gender Class</p>
            <div class="card-footer text-right">occupants/max_capacity</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'HelloWorld',
  created() {},
  computed: {},
  methods: {
    momentize(date) {
      return moment(date).format('MMM/DD/YYYY [at] HH:mm');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin-top: 30px;
}
</style>
