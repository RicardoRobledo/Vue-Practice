<script retup>
export default {
  name: 'HelloWorld',
  methods:{
      no(){
      },
      enviar(){
        var numc = document.getElementById("numc").value
        var nomc = document.getElementById("nomc").value
        var ed = document.getElementById("ed").value
        var sem = document.getElementById("sem").value
        var ca = document.getElementById("ca").value
        var matagr = document.getElementById("matagr").value
        var matesp = document.getElementById("matesp").value
        var actext = document.getElementById("actexp").value

        if(numc=="" ||  nomc=="" || ed=="" || sem=="" || ca=="" ||  matagr=="" || matesp=="" || actext==""){
          alert("ERROR!, debes asegurarte de hacer puesto informacion en todos los campos")
        }else{
          this.$store.commit("enviarNumc", numc)
          this.$store.commit("enviarNomc", nomc)
          this.$store.commit("enviarEd", ed)
          this.$store.commit("enviarSem", sem)
          this.$store.commit("enviarCa", ca)
          this.$store.commit("enviarMatagr", matagr)
          this.$store.commit("enviarMatesp", matesp)
          this.$store.commit("enviarActexp", actext)
        }
      }
  }

}
</script>

<template>
  <form @submit.prevent="no">
    <div class="container">
  <div class="row">
    <div class="col-sm-12">

      <label for="exampleInputEmail1" class="form-label" >Numero de control</label>
      <input type="" class="form-control" id="numc">
      <label for="exampleInputPassword1" class="form-label">Nombre completo</label>
      <input type="" class="form-control" id="nomc">
      <label for="exampleInputPassword1" class="form-label">Edad</label>
      <input type="" class="form-control" id="ed">
      <label for="exampleInputPassword1" class="form-label">Semestre</label>
      <input type="" class="form-control" id="sem">

    </div>
    <div class="col-sm">

      <label for="exampleInputPassword1" class="form-label">Carrera</label>
      <input type="" class="form-control" id="ca">
      <label for="exampleInputPassword1" class="form-label">Materias agregadas</label>
      <input type="" class="form-control" id="matagr">
      <label for="exampleInputPassword1" class="form-label">Materias de especialidad</label>
      <input type="" class="form-control" id="matesp">
      <label for="exampleInputPassword1" class="form-label">Actividades extraescolares</label>
      <input type="" class="form-control" id="actexp">

    </div>

  </div>
</div>

    <button @click="enviar">Enviar</button>
</form>

 <!--
    Numero de control, nombre completo, edad semestre y carrera
    Materias agregadas
    Materias de especialidad
    Actividades extraescolares
    PUEDEN AGREGAR MAS INFORMACION QUE CONSIDEREN RELEVANTE ALMACENAR
          -->
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
