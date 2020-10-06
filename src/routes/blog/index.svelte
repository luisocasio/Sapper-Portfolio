<script context="module">
  import { onMount } from "svelte";
  import Prismic from "prismic-javascript";
  import PrismicDOM from "prismic-dom";
  import { Client, linkResolver } from "../../../prismic-config.js";

  let document = null;
  let posts = null;

  export async function preload({ params, query }) {
    document = await Client.getSingle("blog_home");
    const postResponse = await Client.query(
      Prismic.Predicates.at("document.type", "blog_post"),
      { orderings: "[my.blog_post.publication_date desc]" }
    );
    posts = postResponse.results;

    if (document && posts) {
      return { document, posts };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let document;
</script>

<svelte:head>
  <title>Fullstack_ Blog</title>
</svelte:head>

<h1>{PrismicDOM.RichText.asText(document.data.headline)}</h1>
