<template>
  <table>
    <td v-for="party in parties" v-bind:key="party.type">
      <ul class="w3-ul">
        <li>
          <h2>{{ party.type }}</h2>
        </li>
        <li>{{ party.guestLimit }}&nbsp;guests.</li>
        <li
          v-for="(time, day, index) in parties.availablePartyTimes"
          v-bind:key="index"
        >
          {{ day }}: {{ time }}
        </li>
      </ul>
    </td>
  </table>
</template>

<script>
import rinkData from "@/rinkinformation.js";

export default {
  name: "Parties",
  data() {
    return {
      parties: rinkData.parties
    };
  }
};
</script>
