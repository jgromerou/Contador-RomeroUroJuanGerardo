var app = new Vue({
  el: '#app',
  data: {
    click: 0,
    contador: 0,
    potencia: 0,
  },
  methods: {
    sumar() {
      if (this.contador >= 0) {
        this.contador = this.contador + 1;
      }
      this.click = this.click + 1;
    },
    restar() {
      if (this.contador > 0) {
        this.contador = this.contador - 1;
      }
      this.click = this.click + 1;
    },
  },
  computed: {
    numeroalaPotencia: function () {
      return this.contador * this.contador;
    },
  },
});
