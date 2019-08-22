<template>
  <pdf :src="$attrs.pdfName"></pdf>
</template>

<script>
import pdf from "vue-pdf";

export default {
  components: {
    pdf
  },
  props: ["pdfName"]
};
</script>
