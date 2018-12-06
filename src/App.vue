<template>
  <div id="app">
    <Header />
      <router-view title="Schedule My Jobs"/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
  .display-flex {
    display: flex;
  }
  .flex-direction-column {
     flex-direction: column;
  }
  .flex-direction-row {
     flex-direction: row;
  }
  .flex-justify-space-around {
    justify-content: space-around;
  }
  .flexbox-center {
    justify-content: center;
    align-items: center;
  }
</style>
