const URL = "https://fedemoresi.pythonanywhere.com/"

const app = Vue.createApp({
  data() {
    return {
      productos: [],
      mostrarCarrito: false,
      carrito: [],
      total:0
    };
  },
  created() {
    this.obtenerProductos();
  },
  methods: {
    obtenerProductos() {
      fetch(URL + 'productos')
        .then(response => response.json())
        .then(data => {
          this.productos = data;
        })
        .catch(error => {
          console.error(URL + 'productos', error);
          alert('Error al obtener los productos.');
        });
    },
    agregarAlCarrito(producto) {
      fetch(URL + 'carrito', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          codigo: producto.codigo,
          cantidad: 1, // Agregamos una unidad al carrito
        }),
      })
        .then(response => response.json())
        .then(data => {
          window.location.href = "carrito.html";
        })
        .catch(error => {
          console.error('Error al agregar el producto al carrito:', error);
          alert('Error al agregar el producto al carrito.');
        });
    },
    restarDelCarrito(producto) {
      fetch(URL + 'carrito', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          codigo: producto.codigo,
          cantidad: 1, // Restamos una unidad del carrito
        }),
      })
        .then(response => response.json())
        .then(data => {
          window.location.href = "carrito.html";
        })
        .catch(error => {
          console.error('Error al restar el producto del carrito:', error);
          alert('Error al restar el producto del carrito.');
        });
    },
    obtenerCarrito() {

      fetch(URL + 'carrito')
        .then(response => response.json())
        .then(data => {
          this.carrito = data;
          this.mostrarCarrito = true;
        })
        .catch(error => {
          console.error('Error al obtener el carrito:', error);
          alert('Error al obtener el carrito.');
        });
    },
  },
  mounted() {
    this.obtenerCarrito();
  }
});

app.mount('#app');