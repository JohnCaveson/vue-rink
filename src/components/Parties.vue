<template>
  <div class="w3-display-container">
    <table class="w3-table ">
      <td
        v-for="party in parties"
        v-bind:key="party.type"
        class="w3-center"
        style="width: 33%"
      >
        <ul class="w3-ul w3-border">
          <li>
            <h2>{{ party.type }}</h2>
          </li>
          <li>{{ party.guestLimit }}&nbsp;guests.</li>
          <li
            v-for="(time, day, index) in party.availablePartyTimes[0]"
            :key="index"
          >
            {{ day }}: {{ time }}
          </li>
          <li>
            <div>
              Full Price(Deposit Included): <b>${{ party.price }}</b>
            </div>
            <div>
              Deposit: <b>${{ party.deposit }}</b>
            </div>
          </li>
        </ul>
      </td>
    </table>
  </div>
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
