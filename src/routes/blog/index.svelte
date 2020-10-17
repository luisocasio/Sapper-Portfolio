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
      Prismic.Predicates.at("document.type", "post"),
      { orderings: "[my.post.publication_date desc]" }
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
  <title>Welcome to my blog.</title>
</svelte:head>

<section class="blog-intro-section">
  <h1>{PrismicDOM.RichText.asText(document.data.headline)}</h1>
  <img
    class="blog-profile-pic"
    src="{document.data.image.url}"
    alt="headshot of man"
  />
  <p>{PrismicDOM.RichText.asText(document.data.description)}</p>
</section>

<section class="blog-post-section">
  <h5>Blog Post's</h5>
  <ul class="blog-post-list">
    {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
    <p class="blog-post-links">
      <a rel="prefetch" href="{linkResolver(post)}">
        {PrismicDOM.RichText.asText(post.data.title)}
      </a>
    </p>
    {/each}
  </ul>
</section>

<style>
  .blog-intro-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .blog-profile-pic {
    border-radius: 50%;
  }

  .blog-post-section {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .blog-post-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
