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
  export let posts;

  //still need to retrieve dates
  let date = PrismicDOM.Date();

  let formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",

    month: "short",

    day: "2-digit",
  }).format(date);
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

<div class="section-wrapper">
  <section class="blog-post-section">
    <h5>Blog Post's</h5>
    <ul class="blog-post-list">
      {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
      <li class="blog-post-links">
        <a rel="prefetch" href="{linkResolver(post)}">
          <h5>{PrismicDOM.RichText.asText(post.data.title)}</h5>
        </a>
        <p>{formattedDate}</p>
      </li>
      {/each}
    </ul>
  </section>

  <section class="paragraph-section">
    <p class="paragraph-one">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel laudantium,
      atque unde minus et ullam eos tempora obcaecati ipsa amet molestias
      perferendis quasi. Quam incidunt deserunt culpa, fugit minima voluptate.
    </p>

    <p class="paragraph-two">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel laudantium,
      atque unde minus et ullam eos tempora obcaecati ipsa amet molestias
      perferendis quasi. Quam incidunt deserunt culpa, fugit minima voluptate.
    </p>
  </section>
</div>

<style>
  .blog-intro-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }

  .blog-profile-pic {
    border-radius: 50%;
  }

  .section-wrapper {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .paragraph-section {
    width: 50%;
    height: 50%;
    margin-top: 5rem;
  }

  .blog-post-section {
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
  }

  .blog-post-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #fff;
    margin-top: 2.5rem;
    border-radius: 5px;
  }

  .blog-post-links {
    height: 10%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .paragraph-section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .paragraph-one,
  .paragraph-two {
    width: 80%;
  }
</style>
