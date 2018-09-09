 // Initialize Firebase
 const config = {
    apiKey: "AIzaSyBVXb15a0UAlfCLTVSRn0xenqHQSwFPfg0",
    authDomain: "la-cagnotte.firebaseapp.com",
    databaseURL: "https://la-cagnotte.firebaseio.com",
    projectId: "la-cagnotte",
    storageBucket: "la-cagnotte.appspot.com",
    messagingSenderId: "49326586193"
  };
  firebase.initializeApp(config);

 

  var database = firebase.database();


 // Initialization Vue
 let vm = new Vue({
    el: '#app',
    data: {
        brand: 'Méga Cagnotte',
        counter: 0,
        player: [
            {name:'Jonathan', solde:0, gain:0},
            {name:'Romain', solde:0, gain:0},
            {name:'Johann', solde:0, gain:0},

        ]
    },

    methods: {
        reset: function () {
            this.counter = 0;
            this.player[0].gain = 0;
            this.player[1].gain = 0;
            this.player[2].gain = 0;
        },
        
        add1p0: function () {
            this.player[0].gain ++;
            this.counter++;
            
        },
        add2p0: function () {
            this.player[0].gain += 2 ;
            this.counter+=2;
            
        },
        gainp0: function () {
            this.player[0].solde += this.counter - this.player[0].gain;
            this.player[1].solde -= this.player[1].gain
            this.player[2].solde -= this.player[2].gain

           // Vue.set(vm.player, 0, {name:'Jonathan', solde:this.player[0].solde, gain:0});
            
            this.reset()
        },
     
        add1p1: function () {
            this.player[1].gain ++;
            this.counter++;
            
        },
        add2p1: function () {
            this.player[1].gain += 2 ;
            this.counter+=2;
            
        },
        gainp1: function () {
            this.player[1].solde += this.counter - this.player[1].gain;
            this.player[0].solde -= this.player[0].gain
            this.player[2].solde -= this.player[2].gain
            this.reset()
        },
      

        add1p2: function () {
            this.player[2].gain ++;
            this.counter++;
            
        },
        add2p2: function () {
            this.player[2].gain += 2 ;
            this.counter+=2;
            
        },
        gainp2: function () {
            this.player[2].solde += this.counter - this.player[2].gain;
            this.player[0].solde -= this.player[0].gain
            this.player[1].solde -= this.player[1].gain
            this.reset()
        },
   // fonction de mise a jours des objets :
   //Vue.set(vm.player*(nom de la data)*, 1*(index)*, {name:'Jonathan', solde:40, gain:0});

    },

    watch: {
        player: {
          handler() {
            console.log('player changed!');
            localStorage.setItem('player', JSON.stringify(this.player));
            localStorage.setItem('counter', JSON.stringify(this.counter));
          },
          deep: true,
        },
      },

      mounted() {
        console.log('App mounted!');
        if (localStorage.getItem('player')) this.player = JSON.parse(localStorage.getItem('player'));
        if (localStorage.getItem('counter')) this.counter = JSON.parse(localStorage.getItem('counter'));
      },
 })
 


