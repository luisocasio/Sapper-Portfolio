<script>
  export let segment;
</script>

<nav>
  <h1 class="main-title">Full Stack Web Developer</h1>

  <ul>
    <li>
      <a sans-serif="{segment === undefined ? 'page' : undefined}" href="."
        >home</a
      >
    </li>
    <li>
      <a sans-serif="{segment === 'about' ? 'page' : undefined}" href="about"
        >about</a
      >
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        sans-serif="{segment === 'blog' ? 'page' : undefined}"
        href="blog"
        >blog</a
      >
    </li>
  </ul>
</nav>

<style>
  .main-title {
    font-weight: 300;
  }
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    display: flex;
    justify-content: space-between;
    height: 5rem;
    display: flex;
    align-items: center;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [sans-serif] {
    position: relative;
    display: inline-block;
  }

  [sans-serif]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #d617bd;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    font-size: 1.25rem;
  }
</style>
