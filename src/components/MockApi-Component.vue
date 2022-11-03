<template lang="html">

  <section class="mock-api-component">
    <h1>Tabla con Datos desde MockApi</h1>
    <button class="btn btn-success mr-2 mb-3" @click="getUsuarios()">GET</button>
    <hr>
    <div class="table-responsive">
      <table class="table table-dark">
          <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
          </tr>
          <tr v-for="(usuario, index) in usuarios" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ usuario.nombre }}</td>
              <td>{{ usuario.email }}</td>
              <td>{{ usuario.telefono}}</td>
          </tr>
      </table>
    </div>    
  </section>

</template>

<script>

  export default  {
    name: 'mock-api-component',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://63643e927b209ece0f4372e0.mockapi.io/usuarios',
        usuarios: []
      }
    },
    methods: {
      async getUsuarios() {
        try {
          let response = await this.axios(this.url)
          let respuesta = response.data
          //console.log(respuesta)
          this.usuarios = respuesta
        }
        catch(error) {
           console.error('ERROR en getUsuarios', error)
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .mock-api-component {

  }
</style>
