<script></script>

<section>
  <h1 class="contact-title">
    Lets discusss and network all things tech related. I can be reached through
    the simple contact form below.
  </h1>
</section>

<main class="form-wrapper">
  <form id="contact_form">
    <input type="name" placeholder="name" />
    <input type="email" placeholder="email" />
    <input type="phone" placeholder="phone" />
  </form>

  <form id="message_form">
    <input id="message_input" type="main_input" placeholder="message" />
    <a class="submit_btn_wrapper" href="/">
      <button>Submit</button>
    </a>
  </form>
</main>

<style>
  .contact-title{
    text-align: center;
    margin-top: 2rem;
  }
  .form-wrapper {
    max-width: 1100px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  input {
    height: 48px;
    width: 250px;
    border-radius: 5px;
    text-align: center;
  }
  button {
    width: 130px;
    height: 32.5px;
    border-radius: 5px;
    font-size: small;
    background-color: #21367f;
    color: #fff;
  }
  #contact_form {
    width: 80%;
    display: flex;
    justify-content: space-around;
    padding: 2rem;
    background-color: rgb(54, 116, 248);
  }
  #message_form {
    width: 80%;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    height: 25%;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(54, 116, 248);
  }
  #message_input {
    height: 250px;
    width: 50%;
  }
  .bottom {
    padding: 1rem;
  }
</style>
