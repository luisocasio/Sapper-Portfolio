<script context="module">
  import { onMount } from "svelte";
  import PrismicDOM from "prismic-dom";
  import { Client, linkResolver } from "../../../prismic-config.js";

  let document = null;

  export async function preload({ params, query }) {
    const uid = params.uid;
    document = await Client.getByUID("post", uid);

    if (document) {
      const title = PrismicDOM.RichText.asText(document.data.title);
      return { document, title };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>
