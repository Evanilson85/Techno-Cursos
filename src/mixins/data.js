export default {
  data() {
    return {
      data: null,
      load: true
    };
  },
  methods: {
    dataFetch(url) {
      this.load = true
      this.data = null
      fetch(`http://localhost:3000${url}`)
        .then((res) => res.json())
        .then((res) => {
         setTimeout(() => {
           this.data = res;
           this.load = false;
         }, 1000);
        });
    },
  },
};