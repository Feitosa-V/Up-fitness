<template>
  <div
    id="banner"
    class="jumbotron jumbotron-fluid"
    style="background-image: url(img/gym2.jpg)"
  >
    <div class="container text-center text-md-left">
      <header>
        <div class="row justify-content-between">
          <div class="col-2">
            <!-- <img src="img/logo_up.png" alt="logo"> -->
          </div>
          <div class="col-12 align-self-center text-md-right text-sm-center">
            <a
href="#" class="text-white font-weight-bold lead mr-2"
>Home</a>
            <a
href="#price-table"
class="text-white font-weight-bold lead mr-2">Planos</a>
            <a
href="#contact"
class="text-white font-weight-bold lead">Contato</a>
          </div>
        </div>
      </header>
      <h1
        data-aos="fade"
        data-aos-easing="linear"
        data-aos-duration="1000"
        data-aos-once="true"
        class="display-3 text-white font-weight-bold my-5"
      >
        <span style="font-size: 120px">UP</span><br />
        <span style="color: #fed102">FITNESS</span> <br />
      </h1>
      <p
        data-aos="fade"
        data-aos-easing="linear"
        data-aos-duration="1000"
        data-aos-once="true"
        class="lead font-weight-bold text-white my-4"
      >
        Transforme seu corpo, fortaleça sua mente.
        <br />
        Descubra um novo estilo de vida saudável.
      </p>
      <a
        href="#"
        data-aos="fade"
        data-aos-easing="linear"
        data-aos-duration="1000"
        data-aos-once="true"
        class="btn my-4 font-weight-bold atlas-cta cta-yellow"
        >Comece agora</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'InitialBanner',

  data() {
    return {}
  },
}
</script>
