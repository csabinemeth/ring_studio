<template>
  <div class="projectBackGround1">
    <div class="topLine">
      <h5 class="projectTitle"><div class="projectAvatar1"></div>&ensp;
       P-22-03_projekt: <text class="dashboard"> Dashboard</text>
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
  <button type="button" id="projectButtonActive" class="btn btn-primary" @click="navToDashboard"><i class="fa-solid fa-chart-column"></i> Dashboard</button>
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
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="searchBarInput">
    <button class="btn btn-success" type="submit" id="searchButtonTop"><i class="fa-solid fa-magnifying-glass"></i></button>
  </div>
  </div>
</div>
    <div class="barChart">
      <label class="verticalLabel1">5000 000 </label>
      <label class="verticalLabel2">1000 000 </label>
      <label class="verticalLabel3">500 000 </label>
      <label class="verticalLabel4">100 000 </label>
      <label class="verticalLabel5">50 000 </label>
      <label class="verticalLabelFt">Ft</label>

      <label class="horizontalLabel1">Becslés</label>
      <label class="horizontalLabel2">Költségvetés</label>
      <label class="horizontalLabel3">Beszerzés</label>
      <label class="horizontalLabel4">Rendelés</label>
      <label class="horizontalLabel5">Költség</label>
      <label class="horizontalLabel6">Bevétel</label>
      <label class="horizontalLabel7">Árrés</label>

      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
      <div class="bar4"></div>
      <div class="bar5"></div>
      <div class="bar6"></div>
      <div class="bar7"></div>
      <div class="verticalY"></div>
      <div class="horizontalX"></div>
    </div>

    <div class="tableLine">
      <table id="projectFirstTable" class="table table-dark">
        <thead>
          <tr>
            <th class="biggerTitle">Projektinfo </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>P-22-03 projekt</td>
          </tr>
          <tr>
            <td>Projekt cím</td>
          </tr>
          <tr>
            <td>Lölö Lala</td>
          </tr>
          <tr>
            <td>+361234567</td>
          </tr>
          <tr>
            <td>info@lolo.hu</td>
          </tr>
          <tr>
            <td>Tagok</td>
          </tr>
          <tr class="memberRow">
            <td class="memberRow"><div class="profileAvatar"> </div>&ensp;<div class="profileAvatar"></div>&ensp;<div class="profileAvatar"></div></td>
          </tr>
        </tbody>
      </table>



      <table id="projectSecondTable" class="table table-dark">
        <thead>
          <tr>
            <th class="biggerTitle">Ellenőrizendő </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="expandRow">
              <button
                class="btn btn-primary"
                id="collapsableRow"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              > 
                Termék <i class="fas fa-sort-down"></i>
              </button>
              <div class="collapse" id="collapseExample">
                <div class="card card-body" id="expandContainer">
                  <table id="expandedTable" class="table table-dark">
                    <thead>
                    </thead>
                    <tbody>
                      <tr class="expandedLine">
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td><i class="fas fa-check" id="tableIcons"></i><i class="far fa-trash-alt" id="tableIcons"></i></td>
                      </tr>
                      <tr class="expandedLine">
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td><i class="fas fa-check" id="tableIcons"></i><i class="far fa-trash-alt" id="tableIcons"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
  
              </div>
              
            </td>
          </tr>
          <tr>
            <td class="expandRow">
              <button
                class="btn btn-primary"
                id="collapsableRow"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample2"
                aria-expanded="false"
                aria-controls="collapseExample2"
              >
                Ajánlat <i class="fas fa-sort-down"></i>
              </button>
              <div class="collapse" id="collapseExample2">
                <div class="card card-body" id="expandContainer">
                  <table id="expandedTable" class="table table-dark">
                    <thead>
                    </thead>
                    <tbody>
                      <tr class="expandedLine">
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td><i class="fas fa-check" id="tableIcons"></i><i class="far fa-trash-alt" id="tableIcons"></i></td>
                      </tr>
                      <tr class="expandedLine">
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td><i class="fas fa-check" id="tableIcons"></i><i class="far fa-trash-alt" id="tableIcons"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="expandRow">
              <button
                class="btn btn-primary"
                id="collapsableRow"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample3"
                aria-expanded="false"
                aria-controls="collapseExample3"
              >
                Beszerzés <i class="fas fa-sort-down"></i>
              </button>
              <div class="collapse" id="collapseExample3">
                <div class="card card-body" id="expandContainer">
                  <table id="expandedTable" class="table table-dark">
                    <thead>
                    </thead>
                    <tbody>
                      <tr class="expandedLine">
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td><i class="fas fa-check" id="tableIcons"></i><i class="far fa-trash-alt" id="tableIcons"></i></td>
                      </tr>
                      <tr class="expandedLine">
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td><i class="fas fa-check" id="tableIcons"></i><i class="far fa-trash-alt" id="tableIcons"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="expandRow">
              <button
                class="btn btn-primary"
                id="collapsableRow"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample4"
                aria-expanded="false"
                aria-controls="collapseExample4"
              >
                Rendelés <i class="fas fa-sort-down"></i>
              </button>
              <div class="collapse" id="collapseExample4">
                <div class="card card-body" id="expandContainer">
                  <table id="expandedTable" class="table table-dark">
                    <thead>
                    </thead>
                    <tbody>
                      <tr class="expandedLine">
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td><i class="fas fa-check" id="tableIcons"></i><i class="far fa-trash-alt" id="tableIcons"></i></td>
                      </tr>
                      <tr class="expandedLine">
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td><i class="fas fa-check" id="tableIcons"></i><i class="far fa-trash-alt" id="tableIcons"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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


  },
};
</script>

<style>
#expandedTable {
  background-color: #2a2b2d;
}

.projectBackGround1 {
  height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow-y: scroll;
  overflow-x: hidden;
  
}

.biggerTitle{
  font-size: 20px;
}

.expandRow{
  max-height: 20px;
}

.expandedLine{
  
  border: 1px solid grey;
  border-right: 0;
  border-left: 0;
}

#tableIcons{
  float: right;
  margin-left: 5px;
}

#projectAvatar{
  background-color: dodgerblue;
  color: white;
  width: 35px;
  text-align: center;
  height: 35px;
   border-radius: 15%;
}

.btn:focus {
  outline: none;
  box-shadow: none;
}

.memberRow{
  display: flex;
  border: 0;
}

#collapsableRow {
  background-color: #2a2b2d;
  border: 0;
}

#expandContainer {
  background-color: #2a2b2d;
  border: 0;
}

.tableLine {
  display: flex;
  top: 0;
}

@media (max-width: 1300px){
  .projectBackGround1{
    overflow-x: scroll;
    overflow-y: hidden;
  }
}

.verticalDivider {
  width: 1px;
  background-color: white;
  height: auto;
  position: relative;
  left: 7vw;
}

#projectFirstTable {
  width: 20vw;
  position: absolute;
  left: 3.5vw;
  background-color: #2a2b2d;
  border-radius: 10px;
  top: -16vh;
}

#projectSecondTable {
  width: 59.5vw;
  top: -16vh;
  position: absolute;
  border-radius: 10px;
  left: 24vw;
  background-color: #2a2b2d;
}

.verticalLabel1 {
  color: white;
  position: absolute;
}

.verticalLabel2 {
  color: white;
  position: absolute;
  top: 15vh;
}

.verticalLabel3 {
  color: white;
  position: absolute;
  top: 25vh;
}

.verticalLabel4 {
  color: white;
  position: absolute;
  top: 35vh;
}

.verticalLabel5 {
  color: white;
  position: absolute;
  top: 45vh;
}

.verticalLabelFt {
  color: white;
  position: absolute;
  top: 56vh;
  left: 3vw;
}

.horizontalLabel1 {
  color: white;
  position: absolute;
  top: 56vh;
  left: 10.5vw;
}

.horizontalLabel2 {
  color: white;
  position: absolute;
  top: 56vh;
  left: 19.5vw;
}

.horizontalLabel3 {
  color: white;
  position: absolute;
  top: 56vh;
  left: 30vw;
}

.horizontalLabel4 {
  color: white;
  position: absolute;
  top: 56vh;
  left: 40vw;
}

.horizontalLabel5 {
  color: white;
  position: absolute;
  top: 56vh;
  left: 50.5vw;
}

.horizontalLabel6 {
  color: white;
  position: absolute;
  top: 56vh;
  left: 60.5vw;
}

.horizontalLabel7 {
  color: white;
  position: absolute;
  top: 56vh;
  left: 71vw;
}

.barChart {
  position: relative;
  background-color: #2a2b2d;
  height: 60vh;
  width: 80vw;
  border-radius: 10px;
  left: 3.5vw;
  top: 2vh;
}

.bar1 {
  height: 36vh;
  width: 5vw;
  background-color: #9ec520;
  position: absolute;
  left: 10vw;
  bottom: 5vh;
}

.bar2 {
  height: 45vh;
  width: 5vw;
  background-color: #df62d1;
  position: absolute;
  left: 20vw;
  bottom: 5vh;
}

.bar3 {
  height: 34vh;
  width: 5vw;
  background-color: #26d37c;
  position: absolute;
  left: 30vw;
  bottom: 5vh;
}

#plusButtonProject{
  position: relative;
  left: 42vw;
  top: 1vh;
  background-Color: #2a2d2b;
}

.bar4 {
  height: 25vh;
  width: 5vw;
  background-color: #9451ba;
  position: absolute;
  left: 40vw;
  bottom: 5vh;
}

.bar5 {
  height: 30vh;
  width: 5vw;
  background-color: #218338;
  position: absolute;
  left: 50vw;
  bottom: 5vh;
}

.bar6 {
  height: 50vh;
  width: 5vw;
  background-color: #77bae4;
  position: absolute;
  left: 60vw;
  bottom: 5vh;
}

.bar7 {
  height: 30vh;
  width: 5vw;
  background-color: #cde377;
  position: absolute;
  left: 70vw;
  top: 25vh;
}

.verticalY {
  background-color: white;
  width: 1px;
  position: relative;
  left: 5vw;
  height: 60vh;
}

.horizontalX {
  background-color: white;
  width: 80vw;
  position: relative;
  left: 0vw;
  height: 1px;
  bottom: 5vh;
}

.projectTitle {
  position: relative;
  left: 0vw;
  display: flex;
  color: white;
  text-decoration: none;
  top: 2vh;
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
  margin-left: 1px;
  background-color: #1e1f21;
  border: 0;
}

#projectButtonActive {
  background-color: #2a2b2d;
  border: 0;
  height: 33px;
  margin-right: 1px;
}


.dateTextProject {
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
</style>
