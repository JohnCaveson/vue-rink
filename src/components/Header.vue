<template>
  <div class="Header">
    <header id="app-header">
      <div
        class="w3-border w3-border-deep-purple w3-hover-border-teal w3-hover-deep-purple w3-topbar w3-leftbar w3-rightbar w3-bottombar w3-teal"
      >
        <h2 class="w3-margin">{{ this.name }}</h2>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["name"]
};
</script>

<style scoped>
#app-header {
  background-image: url("../assets/skatefloor.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}
</style>
