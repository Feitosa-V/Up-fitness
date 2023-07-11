<template>
  <div class="flex-fill">
    <div class="text-center mb-4">
      <img
        src="@/assets/img/error_bg.svg"
        class="img-fluid mb-3"
        height="230"
        alt="Erro"
      />
      <h1 class="display-3 fw-semibold lh-1 mb-3">404</h1>
      <h6 class="w-md-25 mx-md-auto">
        O recurso solicitado não foi encontrado
      </h6>
    </div>
    <div class="text-center">
      <router-link
        to="/"
        class="btn btn-primary"
        title="Voltar para página inicial"
      >
        <i class="ph-house me-2"></i>
        Voltar para página inicial
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>
