<template>
  <div class="projectBackGroundLight">
    <div class="topLine">
      <h5 class="projectTitleLight">
        P-22-03_projekt:<text class="dashboard">Költségvetés</text>
      </h5>
      <input
        class="form-control mr-sm-2"
        id="searchBar2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <text class="dateText1">2021.12.23 csütörtök</text>
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
    <div class="dividerProject"></div>

    <div class="szures">
      <text class="szuroTextLight">Szűrés:</text>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdownLight"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Ügyfél
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Ügyfél 1</a>
          <a class="dropdown-item" id="szuroDropdownItem">Ügyfél 2</a>
          <a class="dropdown-item" id="szuroDropdownItem">Ügyfél 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdownLight"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Beszállító
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Beszállító 1</a>
          <a class="dropdown-item" id="szuroDropdownItem">Beszállító 2</a>
          <a class="dropdown-item" id="szuroDropdownItem">Beszállító 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdownLight"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Divizió
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Szekció 1</a>
          <a class="dropdown-item" id="szuroDropdownItem">Szekció 2</a>
          <a class="dropdown-item" id="szuroDropdownItem">Szekció 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdownLight"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Beszerzés
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Beszerzés A</a>
          <a class="dropdown-item" id="szuroDropdownItem">Beszerzés B</a>
          <a class="dropdown-item" id="szuroDropdownItem">Beszerzés C</a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdownLight"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Termékkód
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">BÉ-L101</a>
          <a class="dropdown-item" id="szuroDropdownItem">BÉ-L101</a>
          <a class="dropdown-item" id="szuroDropdownItem">BÉ-L101</a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdownLight"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Termék név
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Spot</a>
          <a class="dropdown-item" id="szuroDropdownItem">Spot</a>
          <a class="dropdown-item" id="szuroDropdownItem">Spot</a>
        </div>
      </div>
      <div class="dropdown" id="csoportDiv">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="csoportositas2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Csoportosítás
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Spot</a>
          <a class="dropdown-item" id="szuroDropdownItem">Spot</a>
          <a class="dropdown-item" id="szuroDropdownItem">Spot</a>
        </div>
      </div>
    </div>

    <div class="aktivSzurokLight">
      <text class="aktivSzuroTextLight">BÉ-L101</text>
      <text class="aktivSzuroTextLight">Beszállító 1</text>
      <text class="aktivSzuroTextLight">Szekció 1</text>
      <text class="deleteActiveLight">Szűrők törlése <i class="fas fa-times"></i></text>
    </div>
    <br/>

    <table class="table" id="koltsegTableLight">
      <thead>
        <tr>
                  <th scope="col"><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></th>

          <th scope="col">Termékkód</th>
          <th scope="col">Termék</th>
          <th scope="col">Kép</th>
          <th scope="col">Beszerzési ár</th>
          <th scope="col">Eladási ár</th>
          <th scope="col">Árrés</th>
          <th scope="col">Státusz</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></td>
          <td>BÉ-L101</td>
          <td>Spot</td>
          <td><div class="productImage"></div></td>
          <td>76.235 Ft</td>
          <td>86.235 Ft</td>
          <td>10.000 Ft</td>
          <td>Megrendelve</td>
        </tr>
        <tr>
           <td><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></td>
          <td>BÉ-L101</td>
          <td>Spot</td>
          <td><div class="productImage"></div></td>
          <td>76.235 Ft</td>
          <td>86.235 Ft</td>
          <td>10.000 Ft</td>
          <td>Megrendelve</td>
        </tr>
        <tr>
           <td><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></td>
          <td>BÉ-L101</td>
          <td>Spot</td>
          <td><div class="productImage"></div></td>
          <td>76.235 Ft</td>
          <td>86.235 Ft</td>
          <td>10.000 Ft</td>
          <td>Megrendelve</td>
        </tr>
      </tbody>
    </table>

   

    <table class="table" id="koltsegTableLight">
      <thead>
        <tr>
          <th scope="col"></th>
          <td scope="col">Beszerzési ár</td>
          <td scope="col">Eladási ár</td>
          <td scope="col">Árrés</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Nettó összesítő</th>
          <td>153.513 Ft</td>
          <td>180.513 Ft</td>
          <td>27.000 Ft</td>
        </tr>
        <tr>
          <th>ÁFA mértéke (27%)</th>
          <td>722.081 Ft</td>
          <td>849.041 Ft</td>
          <td>127.000 Ft</td>
        </tr>
        <tr>
          <th>Bruttó összesítő</th>
          <td>722.081 Ft</td>
          <td>849.041 Ft</td>
          <td>127.000 Ft</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Project_koltsegvetes_light",
  path: "/project_koltsegvetes_light",

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

#koltsegTableLight{
  position: relative;
  top: 7vh;
  width: 84vw;
  left: 2vw;
  background-color: #d4d9dd;
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

#szuroDropdownLight {
  background-color: white;
  border: 1px solid black;
  position: relative;
  left: 1vw;
  color: black;

  margin-left: 5px;
  font-size: 15px;
}

.aktivSzurokLight {
  height: 20px;
  width: 84vw;
  border: 1px solid black;
  position: relative;
  top: 7vh;
  left: 2vw;
  display: flex;
}

.aktivSzuroTextLight {
  color: black;
  font-size: 13px;
  position: relative;
  left: 3px;
  margin-right: 2vw;
}

.deleteActiveLight {
  color: grey;
  font-size: 13px;
  position: relative;
  left: 0vw;
}

#szuroDropdown:focus {
  box-shadow: none;
}

.szuroTextLight {
  top: 5.5vh;
  color: black;
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

#csoportositas2 {
  background-color:white;
  border: 0;
  right: 0;
  color: black;
  border: 1px solid black;
  position: absolute;
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
  margin-left: -2px;
  background-color: #1e1f21;
  border: 0;
}



.dateTextKoltseg {
  color: white;
  position: relative;
  top: 2vh;
  left: 41.5vw;
  color: #68686a;
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
</style>
