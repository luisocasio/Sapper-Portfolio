<svelte:head>
  <title>Fullstack Web Developer</title>
</svelte:head>

<script>
  import Carousel from '../components/Carousel.svelte'
  import TechIcons from '../components/TechIcons.svelte'
</script>

<main class="wrapper">

    <img
      class="banner"
      alt="art work"
      src="/assets/banner/denverBanner.png"
    />


  <TechIcons/>
  <Carousel/>
</main>

<style>
  .wrapper{
    max-width: 1100px;
    overflow-x:hidden;
    margin: auto;
  }
  .banner {
    width: 100%;
    height: 650px;
  }
</style>
