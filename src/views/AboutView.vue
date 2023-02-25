<template>    
  <form @submit.prevent="no">
  
          <div style="text-align:center;">

            <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.nomc}}</h5>
        <p class="card-text">
          {{$store.state.numc}}<br>
          {{$store.state.ed}}<br>
          {{$store.state.sem}}<br>
          {{$store.state.ca}}<br>
          {{$store.state.matagr}}<br>
          {{$store.state.matesp}}<br>
          {{$store.state.actext}}<br>
        </p>
        <a class="btn btn-primary">Inscribir</a>
      </div>
    </div>
  </div>

  
      </div>
  
      </form>
  
  </template>
  
<script>
export default {
  name: 'AboutView',
}
</script>