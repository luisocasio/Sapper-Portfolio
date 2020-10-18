<svelte:head>
  <title>About</title>
</svelte:head>

<section class="about-wrapper">
  <div class="section-1">
    <div class="content-section">
      <h1 class="welcome-title">Welcome,</h1>
      <p class="welcome-paragraph">
        I am a full stack web developer from Pennsylvania.
      </p>
      <img src="assets/photos/littleguy.svg" alt="a child reading" />
    </div>

    <section class="text-section">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maiores
        quo voluptatum natus, ab nostrum quas quisquam? Minus dolor tempore
        omnis alias expedita. Nesciunt nisi nostrum illum tenetur dignissimos
        blanditiis!
      </p>
    </section>
  </div>

  <div class="section-2">
    <section class="text-section">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maiores
        quo voluptatum natus, ab nostrum quas quisquam? Minus dolor tempore
        omnis alias expedita. Nesciunt nisi nostrum illum tenetur dignissimos
        blanditiis!
      </p>
    </section>

    <div class="image-section">
      <img src="assets/photos/kai.svg" alt="german shepherd puppy" />
    </div>
  </div>
</section>

<style>
  .about-wrapper {
    height: 100vh;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  img {
    width: 50%;
  }
  .section-1 {
    display: flex;
    justify-content: space-between;
  }
  .welcome-title {
    margin: 1.5rem;
    font-weight: 400;
  }
  .welcome-paragraph {
    margin: 1rem;
  }
  .content-section {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text-section {
    display: flex;
    align-items: center;
    padding: 1rem;
  }
  .section-2 {
    display: flex;
  }
  .image-section {
    width: 50%;
    display: flex;
    justify-content: center;
  }
  .text-section {
    width: 50%;
  }
</style>
