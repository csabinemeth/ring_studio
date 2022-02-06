<template>
<div id="projectBackGround"> 
<div class="topLine">
<h5 class="projectTitle">BÉ-L101:P-22-03_projekt:<text class="dashboard">Adatlap</text></h5>
 <input class="form-control mr-sm-2" id="searchBar1" type="search" placeholder="Search" aria-label="Search">
 <text class="dateText1">2021.12.23 csütörtök</text>
 <div class="dropdown1">
  <button class="btn btn-secondary " type="button" id="plusButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="fas fa-plus"></i>
  </button>
  <div class="dropdown-menu" id="openedDrowdown" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="dropdownItem" >Új projekt</a>

  </div>
</div>
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
<div class="dataContainer">
<div class="formLine">
<h5>Ügyfél: </h5>
<input class="form-control" id="disabledTextBox" type="text" placeholder="Horváth Ferenc" disabled>
</div>
<div class="formLine">
<h5>Projektkód: </h5>
<input class="form-control" id="disabledTextBox" type="text" placeholder="BÉ-L101" disabled>
</div>
<div class="formLine">
<h5>Projektcím: </h5>
<input class="form-control" id="disabledTextBox" type="text" placeholder="Projekt" disabled>
</div>
<div class="formLine">
<h5>Szállítási cím: </h5>
<input class="form-control" id="disabledTextBox" type="text" placeholder="9082, Nyúl Fő út 1" disabled>
</div>
<div class="formLine">
<h5>Kapcsolattartó: </h5>
<input class="form-control" id="disabledTextBox" type="text" placeholder="Nagy Béla" disabled>
</div>
<div class="formLine">
<h5>Megjegyzés: </h5>
<input class="form-control" id="disabledTextBox" type="text" placeholder="Megjegyzés" disabled>
</div>
<div class="formLine">
<h5>Költésgkeret: </h5>
<input class="form-control" id="disabledTextBox" type="text" placeholder="1 000 000" disabled>
</div>
<div class="formLine">
<h5>Deviza: </h5>
<input class="form-control" id="disabledTextBox" type="text" placeholder="HUF" disabled>
</div>
<div class="formLine">
<h5>ÁFA kulcs: </h5>
<input class="form-control" id="disabledTextBox" type="text" placeholder="27%" disabled>
</div>
<div class="formLine">
<h5>Projektvezető: </h5>
<input class="form-control" id="disabledTextBox" type="text" placeholder="Nagy Tamás" disabled>
</div>
<div class="formLine">
<h5>Minimum árrés: </h5>
<input class="form-control" id="disabledTextBox" type="text" placeholder="100 000 Ft" disabled>
</div>
<div class="formLine">
<h5>Maximum árrés: </h5>
<input class="form-control" id="disabledTextBox" type="text" placeholder="999 999 999 Ft" disabled>
</div>
</div>

 </div>
</template>

<script>



export default {



      name: "Project_adatlap",
      path: "/project_adatlap",

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

.projectTitle{
    position: relative;
    left: 2vw;
    color: white;
    text-decoration: none;
    top: 2vh;
    
    
}

#EditButton{
    position: relative;
    top: 10vh;
    bottom: 10vh;
    background-color: #1e1f21;
    border: 0;
}

.dataContainer{
    color: white;
    position: relative;
    top: 1vh;
    width: 50vw;
    left: 2vw;
    height: 80vh;

}

.formLine{
    display: flex;
    top: 5vh;
    position: relative;
}


#disabledTextBox{
    position: absolute;
    width: 250px;
    float: right;
    left: 20vw;
    background-color: #1e1f21;
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



.dateTextProjectAdatlap{
    color: white;
    position: relative;
    top: 2vh;
    left: 43vw;
    color:#68686a;
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

#projectBackGround{
     height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow-y: scroll;
   overflow-x: hide;

}

</style>