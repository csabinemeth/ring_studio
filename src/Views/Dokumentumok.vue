<template>
<div class="projectBackGround"> 
<div class="topLine">
<h5 class="projectTitle">P-22-03_projekt:<text class="dashboard">Dokumentumok</text></h5>
 <input class="form-control mr-sm-2" id="searchBarDocs" type="search" placeholder="Search" aria-label="Search">
 <text class="dateTextDocs">2021.12.23 csütörtök</text>
</div>
<div class="buttonLine">
  <button type="button" id="projectButton" class="btn btn-primary" @click="navToDashboard">Dashboard</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navAdatlap">Projektadatlap</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navKoltsegvetes">Költségvetés</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToAjanlat">Ajánlat</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToBeszerzes">Beszerzés</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToEladas">Eladás</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToPenzugy">Pénzügy</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToDiviziok">Divíziok</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToKatalogus">Katalógus</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToDocs">Dokumentumok</button>
</div>
<div class="dividerProject"></div>

<table class="table table-dark" id="docsTable">
      <thead>
        <tr>
          <th scope="col">Dokumentum címe</th>
          <th scope="col">Dátum</th>
          <th scope="col"></th>
          >
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Teszt dokumentum.doc</td>
          <td>2022.01.01</td>
          <td><i class="fas fa-print"></i>&emsp;<i class="fas fa-download"></i></td>
        </tr>
        <tr>
          <td>Szerződés.doc</td>
          <td>2021.01.01</td>
          <td><i class="fas fa-print"></i>&emsp;<i class="fas fa-download"></i></td>
        </tr>
        <tr>
          <td>Teszt ajánlat.pdf</td>
          <td>2020.01.01</td>
          <td><i class="fas fa-print"></i>&emsp;<i class="fas fa-download"></i></td>
        </tr>
        <tr>
          <td>Teszt ajánlat.pdf</td>
          <td>2020.01.01</td>
          <td><i class="fas fa-print"></i>&emsp;<i class="fas fa-download"></i></td>
        </tr>
        <tr>
          <td>Teszt ajánlat.pdf</td>
          <td>2020.01.01</td>
          <td><i class="fas fa-print"></i>&emsp;<i class="fas fa-download"></i></td>
        </tr>
        <tr>
          <td>Teszt ajánlat.pdf</td>
          <td>2020.01.01</td>
          <td><i class="fas fa-print"></i>&emsp;<i class="fas fa-download"></i></td>
        </tr>
        <tr>
          <td>Teszt ajánlat.pdf</td>
          <td>2020.01.01</td>
          <td><i class="fas fa-print"></i>&emsp;<i class="fas fa-download"></i></td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>



export default {



      name: "Project",
      path: "/project",

  methods: {

     navKoltsegvetes() {
      this.$router.push('/project_koltsegvetes')
    },

    navAdatlap() {
      this.$router.push('/project_adatlap')
    },
    
    navToAjanlat() {
      this.$router.push('/ajanlat')
    },

 navToDashboard(){
      this.$router.push('/project')
    },
       navToBeszerzes(){
      this.$router.push('/beszerzes')
    },

   navToEladas(){
      this.$router.push('/eladas')
    },

   navToPenzugy(){
      this.$router.push('/penzugy')
    },

   navToDiviziok(){
      this.$router.push('/diviziok')
    },

   navToKatalogus(){
      this.$router.push('/katalogus')
    },

   navToDocs(){
      this.$router.push('/docs')
    },



  }
    
};
</script>

<style>


#searchBarDocs {
  width: 10vw;
  position: relative;
  left: 43vw;
  top: 2vh;
  height: 4vh;
  background-color: #1e1f21;
}

.dateTextDocs {
  color: white;
  position: relative;
  top: 2vh;
  left: 43vw;
  color: #68686a;
}

.projectTitle{
    position: relative;
    left: 2vw;
    color: white;
    text-decoration: none;
    top: 2vh;
    
}

.dashboard{
  text-decoration: underline;
}

.dividerProject{
    width: 84vw;
    position: relative;
    left: 2vw;
    height: 1px;
    background-color: #68686e;
    top: 2.5vh;
}

#projectButton{
  margin-left: 2px;
  background-color: #1e1f21;
  border: 0;
}



#projectButton:focus{
  box-shadow: none;
  text-decoration: underline;
}

.buttonLine{
  display: flex;
  top: 3vh;
  position: relative;
  left: 1vw;
}

.projectBackGround{
     height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow: hidden;
}


#docsTable {
  position: relative;
  top: 7vh;
  width: 82.5vw;
  left: 2vw;
  background-color: #2a2b2d;
}


</style>