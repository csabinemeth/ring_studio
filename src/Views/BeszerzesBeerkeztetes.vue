<template>
  <div class="projectBackGround">
    <div class="topLine">
      <h5 class="projectTitle">
        <div class="projectAvatar1"></div>&ensp;P-22-03_projekt: <text class="dashboard">Beszerzés Beérkeztetés</text>
      </h5>

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
    <a class="dropdown-item" id="dropdownItem" > Új ügyfél</a>
  </div>
</div>
    </div>
  <div class="buttonLine">
  <button type="button" id="projectButton" class="btn btn-primary" @click="navToDashboard"><i class="fa-solid fa-chart-column"></i> Dashboard</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navAdatlap"><i class="fa-solid fa-list"></i> Projektinfo</button>
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
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="searchBarInput"
          />
          <button class="btn btn-success" type="submit" id="searchButtonTop">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>

  
<div class="formStuff">
      <div class="inputsBSZ">
     <div class="formLine">
        <input class="form-control" id="inputBoxProductAjanlat1" placeholder="Külső biz. száma " /> <div class="verticalSplit"></div>
      </div>
       <div class="formLine">
        <input type="file" class="form-control" id="beszbe-file" placeholder="Melléklet" />
      </div>
     
     
      </div>
    </div>
    

    <table class="table table-dark" id="koltsegTable">
      <thead>
        <tr>
          <th scope="col">Termékkód</th>
          <th scope="col">Terméknév</th>
          <th scope="col">Szállító cikkszám</th>
          <th scope="col">DB szám</th>
          <th scope="col">Érkezett db</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BÉ-L101</td>
          <td>Spot</td>
          <td>1234567</td>
          <td>100</td>
          <td>100</td>
        </tr>
        <tr>
           <td>BÉ-L101</td>
          <td>Spot</td>
          <td>1234567</td>
          <td>100</td>
          <td>100</td>
          
        </tr>
        <tr>
           <td>BÉ-L101</td>
          <td>Spot</td>
          <td>1234567</td>
          <td>100</td>
          <td>100</td>
        </tr>
      </tbody>
    </table>

  

     <button
        type="button"
        id="createButtonTK"
        @click="create"
        class="btn btn-success"
      >
        Mentés
      </button>
      <button
        type="button"
        id="createButtonTK"
        @click="back"
        class="btn btn-success"
      >
        Nyomtatás
      </button>

   
  </div>
</template>

<script>
export default {
  name: "beszerzesBeerkeztetes",
  path: "/beszerzesBeerkeztetes",

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




  },
};
</script>

<style>
#members {
  display: flex;
}

.bizonylatText{
    color: white;
    position:relative;
    top: 3vh;
    left: 2vw;
}


#beszbe-file {
  width: 400px;
  height: 40px;
  margin-left: 10px;
  position: relative;
  border:0;
  left: 25px;
  bottom: 40px;
  background-color: #1e1f21;
}

#Table {
  position: relative;
  top: 7vh;
  width: 84vw;
  left: 2vw;
  background-color: #2a2b2d;
}

#createButtonTK{
    position: relative;
  top: 8vh;
  margin-right: 10px;
  background-color: #9ec520;
  border: 0;
}

.formLines{
  display: flex;
}

.icons {
  color: white;
  position: relative;
  top: 6vh;
  left: 2vw;
}

#overallTable {
  position: relative;
  top: 8vh;
  width: 84vw;
  left: 2vw;
  background-color: #2a2b2d;
}

#bizonylatSzam{
    height: 5vh;
    width: 20vw;
    position: relative;
    top : 2.5vh;
    background-color: #1e1f21;
    left: 3vw;
}

.formLineFileBB{
  position: relative;
  top: 35px;
  color: white;
  right: 11vw;
}

.formLineFileBBText{
  position: relative;
  top: 35px;
  left: 18vw;
  color: white;
}


.productImage {
  width: 50px;
  height: 30px;
  background-image: url("../assets/watch.jpg");
  background-size: cover;
}

.avatar1 {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: green;
  margin-right: 3px;
}

.avatar2 {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: dodgerblue;
  margin-right: 3px;
}

#szuroDropdown {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 1vw;
  margin-left: 5px;
  font-size: 15px;
}

.aktivSzurok {
  height: 20px;
  width: 84vw;
  border: 1px solid white;
  position: relative;
  top: 7vh;
  left: 2vw;
  display: flex;
}

.aktivSzuroText {
  color: white;
  font-size: 13px;
  position: relative;
  left: 3px;
  margin-right: 2vw;
}

.deleteActive {
  color: grey;
  font-size: 13px;
  position: relative;
  right: 3px;
}

#szuroDropdown:focus {
  box-shadow: none;
}

.szuroText {
  top: 5.5vh;
  position: relative;
}

.szures {
  color: white;
  position: relative;
  top: 1vh;
  left: 2vw;
  display: flex;
}

.projectTitle {
  position: relative;
  left: 2vw;
  color: white;
  text-decoration: none;
  top: 2vh;
}

#szuroDropdownItem {
  color: white;
}

#csoportositas1 {
  background-color: #2a2b2d;
  border: 0;
  right: 0;
  position: absolute;

}

#csoportDiv{
  position: absolute;
  right: 35px;
}

#szuroDropdownItem:hover {
  background-color: #1e1f21;
  cursor: pointer;
}

.dashboard {
  text-decoration: underline;
}

.dividerProject {
  width: 84vw;
  position: relative;
  left: 2vw;
  height: 1px;
  background-color: #68686e;
  top: 2.5vh;
}

#projectButton {
  margin-left: 2px;
  background-color: #1e1f21;
  border: 0;
}


#projectButton:focus {
  box-shadow: none;
  text-decoration: underline;
}

.buttonLine {
  display: flex;
  top: 0vh;
  position: relative;
  left: 1vw;
}

.projectBackGround {
  height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow: hidden;
}

#plusButton1{
  background-color: #2a2b2d;
  border: 0;
  top: 1vh;
  position: absolute;
  float: right;
  right: 20px;
}

 

</style>
