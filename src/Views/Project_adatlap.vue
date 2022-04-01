<template>
<div id="projectBackGround"> 
<div class="topLine">
<h5 class="projectTitle"> <div class="projectAvatar1"></div>&ensp;BÉ-L101:P-22-03_projekt: <text class="dashboard"> Info</text></h5>
  <button
                      class="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      id="productSearchTop"
                      data-target="#collapseSearchTop"
                      aria-expanded="false"
                      aria-controls="collapseSearchTop"
                    >
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
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
  <button type="button" id="projectButton" class="btn btn-primary" @click="navToDashboard"><i class="fa-solid fa-chart-column"></i> Dashboard</button>
 <button type="button" id="projectButtonActive" class="btn btn-primary" @click="navAdatlap"><i class="fa-solid fa-list"></i> Projektinfo</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navKoltsegvetes"><i class="fa-solid fa-chart-line"></i> Költségvetés</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToAjanlat"><i class="fa-solid fa-hand-holding-dollar"></i> Ajánlat</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToBeszerzes"><i class="fa-solid fa-dolly"></i> Beszerzés</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToEladas"><i class="fa-solid fa-cart-arrow-down"></i> Eladás</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToPenzugy"><i class="fa-solid fa-file-invoice-dollar"></i> Pénzügy</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToDiviziok"><i class="fa-solid fa-layer-group"></i> Divíziok</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToKatalogus"><i class="fa-solid fa-newspaper"></i> Katalógus</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToDocs"><i class="fa-solid fa-file-lines"></i> Dokumentumok</button>
</div>

<div class="collapse" id="collapseSearchTop">
  <div class="card card-body" id="searchBarTop">
    <div class="searchLine">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="searchBarInput">
    <button class="btn btn-success" type="submit" id="searchButtonTop"><i class="fa-solid fa-magnifying-glass"></i></button>
  </div>
  </div>
</div>

<div class="dataContainer">

<table class="table table-dark" id="projectInfoTable">
  <tbody>
    <tr>
      <td>Ügyfél:</td>
      <td><input class="form-control" id="disabledTextBox" type="text" placeholder="Horváth Ferenc"></td>
    </tr>
    <tr>
      <td>Projektkód:</td>
      <td><input class="form-control" id="disabledTextBox" type="text" placeholder="BÉ-L101" disabled>
</td>
    </tr>
    <tr>
      <td>Projektcím:</td>
      <td><input class="form-control" id="disabledTextBox" type="text" placeholder="Projekt" disabled>
</td>
    </tr>
     <tr>
      <td>Szállítási cím:</td>
      <td><input class="form-control" id="disabledTextBox" type="text" placeholder="9082, Nyúl Fő út 1" disabled>
</td>
    </tr>
     <tr>
      <td>Kapcsolattartó:</td>
      <td><input class="form-control" id="disabledTextBox" type="text" placeholder="Nagy Béla" disabled>
</td>
    </tr>
     <tr>
      <td>Megjegyzés:</td>
      <td><input class="form-control" id="disabledTextBox" type="text" placeholder="Megjegyzés" disabled>
</td>
    </tr>
     <tr>
      <td>Költségkeret:</td>
      <td><input class="form-control" id="disabledTextBox" type="text" placeholder="1 000 000" disabled>
</td>
    </tr>
     <tr>
      <td>Deviza:</td>
      <td><input class="form-control" id="disabledTextBox" type="text" placeholder="HUF" disabled>
</td>
    </tr>
     <tr>
      <td>ÁFA kulcs:</td>
      <td><input class="form-control" id="disabledTextBox" type="text" placeholder="27%" disabled>
</td>
    </tr>
     <tr>
      <td>Projektvezető:</td>
      <td><input class="form-control" id="disabledTextBox" type="text" placeholder="Nagy Tamás" disabled>
</td>
    </tr>
     <tr>
      <td>Minimum árrés:</td>
      <td><input class="form-control" id="disabledTextBox" type="text" placeholder="10 000 Ft" disabled>

</td>
    </tr>
     <tr>
       <td>Maximum árrés:</td>
      <td><input class="form-control" id="disabledTextBox" type="text" placeholder="999 999 999 Ft" disabled></td>
    </tr>

    
  </tbody>
</table>

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

#projectInfoTable{
  height: auto;
  background-color: #2a2b2d;
  min-width: 50vw;
  border-radius: 10px;
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
  top: 0vh;
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