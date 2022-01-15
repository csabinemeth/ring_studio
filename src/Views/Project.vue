<template>
  <div class="projectBackGround1">
    <div class="topLine">
      <h5 class="projectTitle">
        P-22-03_projekt:<text class="dashboard">Dashboard</text>
      </h5>
      <input
        class="form-control mr-sm-2"
        id="searchBarProject"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <text class="dateTextProject">2021.12.23 csütörtök</text>
      <div class="dropdown1">
  <button class="btn btn-secondary " type="button" id="plusButtonProject" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="fas fa-plus"></i>
  </button>
  <div class="dropdown-menu" id="openedDrowdown" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="dropdownItem" > Új ügyfél</a>
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
            <th>Projektinfo </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>P-22-03 projekt</td>
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
            <td>Kacsalábonforgó</td>
          </tr>
        </tbody>
      </table>

      <div class="verticalDivider"></div>

      <table id="projectSecondTable" class="table table-dark">
        <thead>
          <tr>
            <th>Ellenőrizendő </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
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
                      <tr>
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td><i class="fas fa-check" id="tableIcons"></i><i class="far fa-trash-alt" id="tableIcons"></i></td>
                      </tr>
                      <tr>
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
            <td>
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
                      <tr>
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td><i class="fas fa-check" id="tableIcons"></i><i class="far fa-trash-alt" id="tableIcons"></i></td>
                      </tr>
                      <tr>
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
            <td>
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
                      <tr>
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td><i class="fas fa-check" id="tableIcons"></i><i class="far fa-trash-alt" id="tableIcons"></i></td>
                      </tr>
                      <tr>
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
            <td>
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
                      <tr>
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td>Lölö Lala</td>
                        <td>P-22-03 projekt</td>
                        <td><i class="fas fa-check" id="tableIcons"></i><i class="far fa-trash-alt" id="tableIcons"></i></td>
                      </tr>
                      <tr>
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
  background-color: #202429;
}

.projectBackGround1 {
  height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow-y: scroll;
  overflow-x: hidden;
}

#tableIcons{
  float: right;
  margin-left: 5px;
}

.btn:focus {
  outline: none;
  box-shadow: none;
}

#collapsableRow {
  background-color: #202429;
  border: 0;
}

#expandContainer {
  background-color: #202429;
}

.tableLine {
  position: relative;
  top: 20vh;
  display: flex;
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
  position: relative;
  left: 3.5vw;
}

#projectSecondTable {
  width: 52.5vw;
  position: relative;
  left: 10.5vw;
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
  left: 3.5vw;
  top: 10vh;
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
  background-Color: #9fc321;
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
  left: 2vw;
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
  margin-left: 2px;
  background-color: #1e1f21;
  border: 0;
}

#searchBarProject {
  width: 10vw;
  position: relative;
  left: 41.5vw;
  top: 2vh;
  height: 4vh;
  background-color: #1e1f21;
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
  top: 3vh;
  position: relative;
  left: 1vw;
}
</style>
