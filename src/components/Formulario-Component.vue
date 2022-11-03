<template lang="html">

  <section class="formulario-component">
    <div class="jumbotron">
      <h2>Formulario con Vue-Form</h2>
      <hr>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar()">
    
        <!-- ------------------------------------------------------- -->
        <!-- Campo nombre -->
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
            id="nombre"
            class="form-control"
            type="text" 
            v-model.trim="formData.nombre" 
            required 
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            name="nombre"
            autocomplete="off"
            no-espacios
          />
          <!-- cartel de validación -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo debe poseer al menos {{nombreMinLength}} caracteres.
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo debe poseer como maximo {{nombreMaxLength}} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              Este campo no admite espacios intermedios.
            </div>
          </field-messages>
        </validate>
        <br>
        <!-- ------------------------------------------------------- -->    
        <!-- ------------------------------------------------------- -->
        <!-- Campo edad -->
        <validate tag="div">
          <label for="edad">Edad</label>
          <input 
            id="edad"
            class="form-control"
            type="number" 
            v-model.number="formData.edad" 
            required 
            name="edad"
            autocomplete="off"
            :min="edadMin"
            :max="edadMax"
          />
          <!-- cartel de validación -->
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima debe ser {{edadMin}} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima debe ser {{edadMax}} años.
            </div>
          </field-messages>
        </validate>
        <br>
    
        <!-- ------------------------------------------------------- -->
        <!-- Campo email -->
        <validate tag="div">
          <label for="email">Email</label>
          <input 
            id="email"
            class="form-control"
            type="email" 
            v-model="formData.email" 
            required 
            name="email"
            autocomplete="off"
          />
          <!-- cartel de validación -->
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">
              Debe ingresar un email válido
            </div>
          </field-messages>
        </validate>
        <br>

        <!-- ------------------------------------------------------- -->
        <!-- Botón de envío -->
        <button class="btn btn-success my-3" :disabled="formState.$invalid">Enviar</button>
      </vue-form>

      <hr>
      <div class="table-responsive">
              <table class="table table-dark">
                  <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Edad</th>
                      <th>Email</th>
                  </tr>
                  <tr v-for="(usuario, index) in usuarios" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ usuario.nombre }}</td>
                      <td>{{ usuario.edad }}</td>
                      <td>{{ usuario.email}}</td>
                  </tr>
              </table>
          </div>     
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'formulario-component',
    props: [],
    mounted () {

    },
    data () {
      return {
        usuarios: [],
        formState : {},
        formData: this.getInitialData(),
        nombreMinLength: 5,
        nombreMaxLength: 15,
        edadMin: 18,
        edadMax: 120
      }
    },
    methods: {
      getInitialData() {
        return {
          nombre: null,
          edad: null,
          email: null
        }
      },
      enviar() {
        this.usuarios.push(this.formData)

        this.formData = this.getInitialData()
        this.formState._reset()
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color: grey;
    color: white;
  }

  hr {
    background-color: #bbb;
  }

  pre {
    color: white;
  }
</style>
