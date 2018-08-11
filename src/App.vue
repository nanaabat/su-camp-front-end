<template>
  <div id="app" class="container" style="padding-top: 0; margin-top:0">
    <!-- <img src="./assets/logo.png"> -->

    <nav class="navbar navbar-expand-lg navbar-dark bg-info" style="margin-bottom: 40px;">
      <router-link class="navbar-brand" to="/">SU Camp</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <!-- <li class="nav-item active">
            <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
          </li> -->
          <li class="nav-item">
            <a class="nav-link" href="#" @click="memberFormVisibility = true">Add Member</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <el-dialog title="Add a new Member" :visible.sync="memberFormVisibility" class="text-left">
      <form v-loading="submitting">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="member_name">Name</label>
            <input v-model="member.name" type="text" class="form-control" id="member_name" placeholder="Name of Member">
            <small class="form-text text-muted">Name of the member</small>
          </div>
          <div class="form-group col-md-6">
            <label for="age">Age</label>
            <input type="number" v-model="member.age" class="form-control" id="age" placeholder="Age" min="1" value="1">
            <small class="form-text text-muted">Age of Member</small>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <h6>Gender</h6>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="m" v-model="member.gender">
              <label class="form-check-label" for="inlineRadio1">Male</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="f" v-model="member.gender">
              <label class="form-check-label" for="inlineRadio2">Female</label>
            </div>
          </div>
          
          <div class="form-group col-md-6">
            <label for="exampleFormControlSelect1">Level of Education</label>
            <select class="form-control" id="exampleFormControlSelect1" v-model="member.education">
              <option value="bs">Basic School</option>
              <option value="lp">Lower Primary</option>
              <option value="up">Upper Primary</option>
              <option value="jhs">JHS</option>
              <option value="shs">SHS</option>
              <option value="coll">College</option>
              <option value="none">none</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <h6>Hobbies</h6>
          <el-tag
            :key="hobby"
            v-for="hobby in member.hobbies"
            closable
            :disable-transitions="false"
            @close="handleClose(hobby)">
            {{hobby}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="mini"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
            id="tagInput"
            style="width:120px;"
            placeholder="New Hobby"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Hobby</el-button>
        </div>
      </form>
    </el-dialog>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      memberFormVisibility: false,
      submitting: false,
      member: {
        name: '',
        age: 1,
        gender: 'f',
        education: 'shs',
        hobbies: []
      },
      inputValue: '',
      inputVisible: false
    };
  },
  methods: {
    handleClose(tag) {
      this.member.hobbies.splice(this.member.hobbies.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.member.hobbies.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  },
  mounted() {}
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
