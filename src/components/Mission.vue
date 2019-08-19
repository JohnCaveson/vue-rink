<template>
  <div class="Mission">
    <div class="w3-row-padding w3-padding-64 w3-blue">
      <div class="w3-center">
        <h2>Our Mission</h2>
        <h3>{{ this.missionStatement }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mission",
  props: ["missionStatement"]
};
</script>
