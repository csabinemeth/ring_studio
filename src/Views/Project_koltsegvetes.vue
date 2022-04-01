<template>
  <div class="projectBackGround">
   <div class="topLine">
<h5 class="projectTitle"><div class="projectAvatar1"></div>&ensp;P-22-03_projekt:</h5> <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="ajanlatListDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Költségvetés
      </button>
      <div
        class="dropdown-menu"
        id="openedDrowdownProjectList"
        aria-labelledby="dropdownMenuButton"
      >
        <a class="dropdown-item" id="dropdownItem"><i class="far fa-edit"></i> Szerkesztés</a>
        <a class="dropdown-item" id="dropdownItem"><i class="far fa-trash-alt"></i> Törlés</a>
        <a class="dropdown-item" id="dropdownItem"><i class="far fa-share-square"></i> Elküld/megoszt</a>
        <a class="dropdown-item" id="dropdownItem"><i class="fas fa-print"></i> Nyomtatás</a>
        
      </div>
      </div>

   <button
        class="btn btn-primary"
        type="button"
        data-toggle="collapse"
        id="productGroupTop"
        data-target="#collapseGroupTop"
        aria-expanded="false"
        aria-controls="collapseGroupTop"
      >
        <i class="fa-solid fa-layer-group"></i>
      </button>
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

      <button
        class="btn btn-primary"
        type="button"
        data-toggle="collapse"
        id="koltsegFilterTop"
        data-target="#collapseFilterTop"
        aria-expanded="false"
        aria-controls="collapseFilterTop"
      >
        <i class="fa-solid fa-filter"></i>
      </button>

      <div class="dropdown1">
        <button
          class="btn btn-secondary"
          type="button"
          id="plusButton1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fas fa-plus"></i>
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="dropdownItem">Új Ajánlat</a>
        </div>
      </div>
    </div>

<div class="buttonLine">
  <button type="button" id="projectButton" class="btn btn-primary" @click="navToDashboard"><i class="fa-solid fa-chart-column"></i> Dashboard</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navAdatlap"><i class="fa-solid fa-list"></i> Projektinfo</button>
 <button type="button" id="projectButtonActive" class="btn btn-primary" @click="navKoltsegvetes"><i class="fa-solid fa-chart-line"></i> Költségvetés</button>
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

    <div class="collapse" id="collapseGroupTop">
      <div class="card card-body" id="groupTop">
        Csoportosítás:
        <div class="csoportLine">
          <button type="button" id="csoportButton" class="btn btn-dark">
            Ajánlat száma
          </button>
          <button type="button" id="csoportButton" class="btn btn-dark">
            Dátum
          </button>
          <button type="button" id="csoportButton" class="btn btn-dark">
            Vevő
          </button>
          <button type="button" id="csoportButton" class="btn btn-dark">
            Összeg
          </button>
          <button type="button" id="csoportButton" class="btn btn-dark">
            Státusz
          </button>
          <button type="button" id="csoportButton" class="btn btn-dark">
            Link
          </button>

          <button type="button" id="csoportButton" class="btn btn-dark">
            Érvényesség
          </button>
        </div>
      </div>
    </div>

    <div class="collapse" id="collapseFilterTop">
      <div class="card card-body" id="filterCollapseContent">
        <div class="szuresAjanlat">
          <div class="szuro-oszlop">
            <div class="btn-group dropright">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                id="szuro-drop-right"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Kategória
              </button>
              <div class="dropdown-menu" id="szuro-content">
                <a class="dropdown-item" id="szuro-line" href="#"
                  ><input
                    type="email"
                    class="form-control"
                    id="szuro-input"
                    aria-describedby="emailHelp"
                    placeholder="Kategória"
                /></a>
              </div>
            </div>

            <br />

            <div class="btn-group dropright">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                id="szuro-drop-right"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Szállító
              </button>
              <div class="dropdown-menu" id="szuro-content">
                <a class="dropdown-item" id="szuro-line" href="#"
                  ><input
                    type="email"
                    class="form-control"
                    id="szuro-input"
                    aria-describedby="emailHelp"
                    placeholder="Szállító"
                /></a>
              </div>
            </div>
            <br />
            <div class="btn-group dropright">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                id="szuro-drop-right"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Vevő
              </button>
              <div class="dropdown-menu" id="szuro-content">
                <a class="dropdown-item" id="szuro-line" href="#"
                  ><input
                    type="email"
                    class="form-control"
                    id="szuro-input"
                    aria-describedby="emailHelp"
                    placeholder="Vevő"
                /></a>
              </div>
            </div>
            <br />
            <div class="btn-group dropright">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                id="szuro-drop-right"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Státusz
              </button>
              <div class="dropdown-menu" id="szuro-content">
                <a class="dropdown-item" id="szuro-line" href="#"
                  ><input
                    type="email"
                    class="form-control"
                    id="szuro-input"
                    aria-describedby="emailHelp"
                    placeholder="Státusz"
                /></a>
              </div>
            </div>
            <br />
            <div class="btn-group dropright">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                id="szuro-drop-right"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Fajta
              </button>
              <div class="dropdown-menu" id="szuro-content">
                <a class="dropdown-item" id="szuro-line" href="#"
                  ><input
                    type="email"
                    class="form-control"
                    id="szuro-input"
                    aria-describedby="emailHelp"
                    placeholder="Fajta"
                /></a>
              </div>
            </div>
            <br />
            <div class="btn-group dropright">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                id="szuro-drop-right"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Új szűrő
              </button>
              <div class="dropdown-menu" id="szuro-content">
                <a class="dropdown-item" id="szuro-line" href="#"
                  ><input
                    type="email"
                    class="form-control"
                    id="szuro-input"
                    aria-describedby="emailHelp"
                    placeholder="Mező"
                /></a>

                <a class="dropdown-item" id="szuro-line" href="#"
                  ><input
                    type="email"
                    class="form-control"
                    id="szuro-input"
                    aria-describedby="emailHelp"
                    placeholder="Érték"
                /></a>
              </div>
            </div>
          </div>
        </div>

        <div class="aktivSzurokAjanlatok">
          <text class="aktivSzuroText">Nyitott</text>
          <text class="aktivSzuroText">101</text>
          <text class="deleteActive"
            >Szűrők törlése <i class="fas fa-times"></i
          ></text>
        </div>
      </div>
    </div>

 
    <table class="table table-dark" id="koltsegTable">
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
        <th clospan="7" class="plusRow"> Hozzáadás <i class="fa-solid fa-plus"></i> </th>
        <tr class="transparent">
          <td></td>
          <td colspan="8" > </td>
        </tr>
        
          <tr>
                  <th scope="col"></th>

          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">Beszerzési ár</th>
          <th scope="col">Eladási ár</th>
          <th scope="col">Árrés</th>
          <th scope="col"></th>
          
        </tr>
         <tr>
        <td>Nettó összesítő:</td>
          <td></td>
          <td></td>
          <td></td>
          <td>76.235 Ft</td>
          <td>86.235 Ft</td>
          <td>10.000 Ft</td>
          <td></td>
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


  },
};
</script>

<style>
#members {
  display: flex;
}


.plusRow{
  border-top: hidden;
}

#koltsegTable {
  position: relative;
  top: 2vh;
  width: 84vw;
  left: 2vw;
  border-radius: 10px;
  background-color: #2a2b2d;
}


#koltsegFilterTop {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 50.3vw;
}



.icons {
  color: white;
  position: relative;
  top: 6vh;
  left: 2vw;
}

.transparent{
  background-color: #1e1f21;
  height: 20px;
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
  position: absolute;
  left: 0vw;
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

#csoportositas {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 24vw;
  margin-left: 5px;
  font-size: 15px;
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
  margin-left: 1px;
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
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
