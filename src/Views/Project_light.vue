<template>
  <div class="projectBackGroundLight">
    <div class="topLine">
      <h5 class="projectTitleLight">
        P-22-03_projekt:<text class="dashboard">Dashboard</text>
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
  <button type="button" id="projectButtonLight" class="btn btn-primary" @click="navToDashboard"><i class="fa-solid fa-chart-column"></i> Dashboard</button>
 <button type="button" id="projectButtonLight" class="btn btn-primary" @click="navAdatlap"><i class="fa-solid fa-list"></i> Projektadatlap</button>
 <button type="button" id="projectButtonLight" class="btn btn-primary" @click="navKoltsegvetes"><i class="fa-solid fa-chart-line"></i> Költségvetés</button>
 <button type="button" id="projectButtonLight" class="btn btn-primary" @click="navToAjanlat"><i class="fa-solid fa-hand-holding-dollar"></i> Ajánlat</button>
 <button type="button" id="projectButtonLight" class="btn btn-primary" @click="navToBeszerzes"><i class="fa-solid fa-dolly"></i> Beszerzés</button>
 <button type="button" id="projectButtonLight" class="btn btn-primary" @click="navToEladas"><i class="fa-solid fa-cart-arrow-down"></i> Eladás</button>
 <button type="button" id="projectButtonLight" class="btn btn-primary" @click="navToPenzugy"><i class="fa-solid fa-file-invoice-dollar"></i> Pénzügy</button>
 <button type="button" id="projectButtonLight" class="btn btn-primary" @click="navToDiviziok"><i class="fa-solid fa-layer-group"></i> Divíziok</button>
 <button type="button" id="projectButtonLight" class="btn btn-primary" @click="navToKatalogus"><i class="fa-solid fa-newspaper"></i> Katalógus</button>
 <button type="button" id="projectButtonLight" class="btn btn-primary" @click="navToDocs"><i class="fa-solid fa-file-lines"></i> Dokumentumok</button>
</div>
    <div class="dividerProject"></div>

    <div class="barChartLight">
      <label class="verticalLabelLight1">5000 000 </label>
      <label class="verticalLabelLight2">1000 000 </label>
      <label class="verticalLabelLight3">500 000 </label>
      <label class="verticalLabelLight4">100 000 </label>
      <label class="verticalLabelLight5">50 000 </label>
      <label class="verticalLabelLightFt">Ft</label>

      <label class="horizontalLabelLight1">Becslés</label>
      <label class="horizontalLabelLight2">Költségvetés</label>
      <label class="horizontalLabelLight3">Beszerzés</label>
      <label class="horizontalLabelLight4">Rendelés</label>
      <label class="horizontalLabelLight5">Költség</label>
      <label class="horizontalLabelLight6">Bevétel</label>
      <label class="horizontalLabelLight7">Árrés</label>

      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
      <div class="bar4"></div>
      <div class="bar5"></div>
      <div class="bar6"></div>
      <div class="bar7"></div>
      <div class="verticalYLight"></div>
      <div class="horizontalXLight"></div>
    </div>

    <div class="tableLine">
      <table id="projectFirstTableLight" class="table">
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

      <div class="verticalDividerLight"></div>

      <table id="projectSecondTableLight" class="table">
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
                id="collapsableRowLight"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              > 
                Termék <i class="fas fa-sort-down"></i>
              </button>
              <div class="collapse" id="collapseExample">
                <div class="card card-body" id="expandContainerLight">
                  <table id="expandedTableLight" class="table">
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
                id="collapsableRowLight"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample2"
                aria-expanded="false"
                aria-controls="collapseExample2"
              >
                Ajánlat <i class="fas fa-sort-down"></i>
              </button>
              <div class="collapse" id="collapseExample2">
                <div class="card card-body" id="expandContainerLight">
                  <table id="expandedTableLight" class="table">
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
                id="collapsableRowLight"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample3"
                aria-expanded="false"
                aria-controls="collapseExample3"
              >
                Beszerzés <i class="fas fa-sort-down"></i>
              </button>
              <div class="collapse" id="collapseExample3">
                <div class="card card-body" id="expandContainerLight">
                  <table id="expandedTableLight" class="table">
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
                id="collapsableRowLight"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample4"
                aria-expanded="false"
                aria-controls="collapseExample4"
              >
                Rendelés <i class="fas fa-sort-down"></i>
              </button>
              <div class="collapse" id="collapseExample4">
                <div class="card card-body" id="expandContainerLight">
                  <table id="expandedTableLight" class="table">
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
  name: "Project_light",
  path: "/project_light",

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
#expandedTableLight {
  background-color: #d4d9dd;
  
}

.projectBackGroundLight {
  height: 100vh;
  width: 90vw;
  background-color: white;
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

#collapsableRowLight {
  background-color: #d4d9dd;
  border: 0;
  color: black ;
}

#expandContainerLight {
  background-color: #d4d9dd;

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

.verticalDividerLight {
  width: 1px;
  background-color: black;
  height: auto;
  position: relative;
  left: 7vw;
}

#projectFirstTableLight {
  width: 20vw;
  position: relative;
  left: 3.5vw;
  background-color: #d4d9dd;
}

#projectSecondTableLight {
  width: 52.5vw;
  position: relative;
  left: 10.5vw;
  background-color: #d4d9dd;
}

.verticalLabelLight1 {
  color: black;
  position: absolute;
}

.verticalLabelLight2 {
  color: black;
  position: absolute;
  top: 15vh;
}

.verticalLabelLight3 {
  color: black;
  position: absolute;
  top: 25vh;
}

.verticalLabelLight4 {
  color: black;
  position: absolute;
  top: 35vh;
}

.verticalLabelLight5 {
  color: black;
  position: absolute;
  top: 45vh;
}

.verticalLabelLightFt {
  color: black;
  position: absolute;
  top: 56vh;
  left: 3vw;
}

.horizontalLabelLight1 {
  color: black;
  position: absolute;
  top: 56vh;
  left: 10.5vw;
}

.horizontalLabelLight2 {
  color: black;
  position: absolute;
  top: 56vh;
  left: 19.5vw;
}

.horizontalLabelLight3 {
  color: black;
  position: absolute;
  top: 56vh;
  left: 30vw;
}

.horizontalLabelLight4 {
  color: black;
  position: absolute;
  top: 56vh;
  left: 40vw;
}

.horizontalLabelLight5 {
  color: black;
  position: absolute;
  top: 56vh;
  left: 50.5vw;
}

.horizontalLabelLight6 {
  color: black;
  position: absolute;
  top: 56vh;
  left: 60.5vw;
}

.horizontalLabelLight7 {
  color: black;
  position: absolute;
  top: 56vh;
  left: 71vw;
}

.barChartLight {
  position: relative;
  background-color: white;
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

#plusButtonProjectLight{
  position: relative;
  left: 42vw;
  top: 1vh;
  background-Color: #9fc321;
  border: 0;
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

.verticalYLight {
  background-color: black;
  width: 1px;
  position: relative;
  left: 5vw;
  height: 60vh;
}

.horizontalXLight {
  background-color: black;
  width: 80vw;
  position: relative;
  left: 0vw;
  height: 1px;
  bottom: 5vh;
}

.projectTitleLight {
  position: relative;
  left: 2vw;
  color: black;
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

#projectButtonLight {
  margin-left: 2px;
  background-color: white;
  color: black;
  border: 0;
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
