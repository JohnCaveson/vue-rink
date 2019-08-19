<template>
  <div class="home">
    <Header v-bind:name="rinkData.basics.name" />
    <Mission v-bind:missionStatement="rinkData.basics.missionStatement" />
    <div class="w3-row w3-padding-32 w3-section w3-display-container">
      <h3>Contact Us!</h3>
      <p><em>We would love your feedback!</em></p>
      <div class="w3-col m6">
        <div id="googleMap" class="w3-round-large w3-greyscale">
          <GmapMap
            :center="{ lat: 36.310681, lng: -82.359533 }"
            :zoom="17"
            style="width: 40%; height: 30vh; float: right;"
          >
          </GmapMap>
        </div>
      </div>
      <div class="w3-col m6">
        <div class="w3-panel">
          <div class="w3-large w3-margin-bottom w3-left-align">
            <v-icon name="map-marker" />
            {{
              rinkData.basics.location.city +
                ", " +
                rinkData.basics.location.region
            }}<br />
            <v-icon name="phone" /> {{ rinkData.basics.phone }}<br />
            <v-icon name="envelope" /> {{ rinkData.basics.email }} <br />
          </div>
          <Form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Mission from "@/components/Mission.vue";
import Form from "@/components/Form.vue";
import "w3-css/w3.css";
import rinkData from "@/rinkinformation";

export default {
  name: "home",
  components: {
    Header,
    Mission,
    Form
  },
  data() {
    return {
      rinkData
    };
  }
};
</script>

<style>
#googleMap {
  width: "100%";
  height: "400px";
}
</style>
