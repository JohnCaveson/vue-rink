<template>
  <form method="post" class="w3-left">
    <div class="w3-row-padding" style="margin: 0 -16px 8px -16px">
      <div class="w3-half">
        <input
          class="w3-input w3-border"
          type="text"
          placeholder="Your Name"
          required
          name="Name"
          id="form-name"
        />
      </div>
      <div class="w3-half">
        <input
          class="w3-input w3-border"
          type="text"
          placeholder="Your Email"
          required
          name="Email"
          id="form-email"
        />
      </div>
    </div>
    <input
      class="w3-input w3-border"
      type="text"
      placeholder=" Your Message"
      required
      name="Body"
      id="form-comment"
    />
    <button
      class="w3-button w3-black w3-left w3-section"
      type="submit"
      id="form-submit"
    >
      <v-icon name="paper-plane" /> SEND MESSAGE
    </button>
  </form>
</template>

<script>
export default {
  name: "Form"
};
</script>
