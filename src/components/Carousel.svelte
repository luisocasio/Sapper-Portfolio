<script>
  import { fly, fade } from "svelte/transition";

  import {
    projects,
    projectURL,
    projectAbout,
    projectStack,
  } from "../../data/data.js";

  let p1 = "assets/projects/jaems.png";
  let p2 = "assets/projects/latte-site.jpg";
  let p3 = "assets/projects/market.png";

  let previousArrow = "/assets/carousel/back.svg";
  let nextArrow = "/assets/carousel/next.svg";

  let index = 0;
  let slide = 0;

  const next = () => {
    index = (index + 1) % projects.length;
    slide = (slide + 1) % projects.length;
  };

  const previous = () => {
    if (index && slide) {
      index = (index - 1) % projects.length;
      slide = (slide - 1) % projects.length;
    }
  };

  $: projectTitle = Object.keys(projects[slide]);
  $: projectSite = Object.values(projects[slide]);
  $: projectRepo = Object.values(projectURL[slide]);
  $: projectDetails = Object.values(projectAbout[slide]);
  $: techIcons = Object.values(projectStack[slide]);

  const projectIMG = [p1, p2, p3];
</script>

<main>
  <div class="carousel-wrapper">
    <div class="carousel">
      <div class="previous-arrow-wrapper">
        <img
          src="{previousArrow}"
          alt="arrow pointing back"
          on:click="{previous}"
        />
      </div>

      <div class="carousel-content">
        <div class="slide">
          <h5 class="slide-title">{projectTitle}</h5>

          {#each [projectIMG[index]] as i (index)} <img class="carousel-image"
          alt="landing page of project" src={i} in:fly={{ x: -50, duration: 2000 }}
          /> {/each}

          <div class="project-buttons">
            <a href="{projectRepo}">
              <button class="code">Code</button>
            </a>
            <a href="{projectSite}">
              <button class="view">View</button>
            </a>
          </div>
        </div>

        <div class="slide-description">
          <div class="section-1">
            <h5 class="section-1-title">Project Role</h5>
            <p class="section_paragraph">{projectDetails}</p>
          </div>

          <div class="section-2">
            <h5 class="section-2-title">Tech Stack</h5>
            <div class="stack-list-wrapper">
              {#each techIcons as stack }
              <ul>
                <li class="stack-item">{stack}</li>
              </ul>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <div class="next-arrow-wrapper">
        <img src="{nextArrow}" alt="arrow pointing back" on:click="{next}" />
      </div>
    </div>
  </div>
</main>

<style>
  .carousel-wrapper {
    width: 100%;
    height: 100%;
  }
  .carousel {
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .previous-arrow-wrapper {
    width: 2.5rem;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .next-arrow-wrapper {
    width: 2.5rem;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .carousel-content {
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .slide-title {
    height: 100%;
  }
  .carousel-image {
    width: 50%;
    height: 100%;
    border-radius: 5px;
  }
  .slide {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .slide-description {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-left: 2px solid #d617bd;
  }
  .section-1-title {
    text-decoration: underline #d617bd;
  }
  .section-1 {
    display: flex;
    flex-direction: column;
    font-size: small;
    height: 100%;
    width: 100%;
    align-items: center;
  }

  .section-2-title {
    text-decoration: underline #d617bd;
  }
  .section-2 {
    display: flex;
    flex-direction: column;
    font-size: small;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }
  .project-buttons {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 100%;
    height: 100%;
  }
  .stack-list-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1rem;
  }
  .stack-item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    margin:0.5rem;
  }
  .code {
    background-color: #21367f;
    color: #fff;
    border: 2px solid #2dfafc;
    width: 5rem;
    height: 2rem;
    text-decoration: none;
    border-radius: 35px;
    font-size: small;
  }
  .view {
    color: #fff;
    border: 2px solid #2dfafc;
    background-color: #21367f;
    width: 5rem;
    height: 2rem;
    text-decoration: none;
    border-radius: 35px;
    font-size: small;
  }
</style>
