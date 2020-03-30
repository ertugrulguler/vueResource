<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="userName">
      </div>
      <button class="btn btn-primary" @click="saveUser">Ekle</button>
      <button class="btn btn-success" @click="getUsers">Verileri Getir</button>
      <hr>
      <ul class="list-group">
        <li class="list-group-item" v-for="user in userList"> 
          <span>{{user.data.userName}}</span> <button class="btn btn-xs btn-danger" @click="deleteUser(user.key)">Sil</button>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return{
      userName:null,
      userList:[]
    }
  },
  methods:{
    saveUser(){
      // this.$http.post('https://vuejs-vueresource-61b27.firebaseio.com/users.json',{userName:this.userName})
      // this.$http.post('users.json',{userName:this.userName})
      this.$resource('users.json').save({},{userName:this.userName})  //birinci parametre varsa options
      .then((response)=> {
        console.log(response);
      });
    },
    getUsers(){
      // this.$http.get('https://vuejs-vueresource-61b27.firebaseio.com/users.json')
      // this.$http.get('users.json')
      this.$resource('users.json').get()
      .then((response) => {
        let data = response.data;
        for(let key in data){
          this.userList.push({
            key:key,
            data:data[key]
          });
        }
      })
    },
    deleteUser(userKey){
      // this.$http.delete('users/'+userKey+'.json')
      this.$resource('users/'+userKey+'.json').delete()
      .then(response =>{
        console.log(response);
      })
    }
  }
}
</script>

<style>
</style>
