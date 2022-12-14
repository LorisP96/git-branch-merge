var app = new Vue({
    el: '#my_app',
    data: {
      cities: [],
      apiUrl: "http://localhost:8888/git-branch-merge/server.php"
    },
    
    created(){
      this.getCities();
    },

    methods: {
      getCities() {
          axios.get(this.apiUrl).then((result) => {
              this.cities = result.data;
              // console.log(result.data);
          });
    },

    
    
  }
  })