<template>
  <div class="text-left">
    <div class="float-right" style="padding: 5px">
      <button class="btn btn-info" type="button" @click="houseFormVisibility = true">
        New House
      </button>
    </div>
    <hr style="clear: both; margin: 20px; opacity: 0;">
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

      <el-dialog title="Create a New House" :visible.sync="houseFormVisibility">
        <form v-loading="submitting">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="house_name">Name</label>
              <input v-model="house.name" type="text" class="form-control" id="house_name" placeholder="Name of House">
              <small class="form-text text-muted">Name of the house</small>
            </div>
            <div class="form-group col-md-6">
              <label for="house_capacity">Maximim Capacity</label>
              <input type="number" v-model="house.max_capacity" class="form-control" id="house_capacity" placeholder="Maximum Capacity" min="1" value="1">
              <small class="form-text text-muted">What is the maximum number of people this hall can accommodate</small>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <h6>Gender</h6>
              <div class="btn" @click="house.gender = ['f', 'female']" :class="house.gender[0] == 'f'?'btn-primary':'btn-outline-primary'">Female</div>
              <div class="btn" @click="house.gender = ['m', 'male']" :class="house.gender[0] == 'm'?'btn-primary':'btn-outline-primary'">Male</div>
              <small class="form-text text-muted">Preferred Sex of Occupants</small>
            </div>
            <div class="form-group col-md-6">
              <small class="form-text text-muted">Click to create this house when ready</small>
              <button class="btn btn-primary" @click="createHouse()">Create</button>
            </div>
          </div>
          {{house}}
        </form>
      </el-dialog>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {
    houses: {
      get() {
        return this.$store.state.houses;
      },
      set(update) {
        this.$store.commit('setHouses', update);
      }
    }
  },
  data() {
    return {
      houseFormVisibility: false,
      house: {
        name: '',
        gender: [],
        max_capacity: 1
      },
      submitting: false
    };
  },
  created() {
    this.$http
      .get(`${process.env.API}/houses`)
      .then(res => {
        this.houses = res.body;
      })
      .catch(res => {
        console.error(res.body);
      });
  },
  methods: {
    createHouse() {
      this.submitting = true;
      this.$http
        .post(`${process.env.API}/house`, this.house)
        .then(res => {
          this.houses.push(res.body);
          this.$message.success(`Created ${res.body.name}`);
          this.submitting = false;
          this.house = {
            name: '',
            gender: [],
            max_capacity: 1
          };
        })
        .catch(res => {
          this.$message.error('Failed to create this house, please try later');
          this.submitting = false;
        });
    }
  }
};
</script>
