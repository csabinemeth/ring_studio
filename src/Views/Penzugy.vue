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
        Pénzügy - Összesítő
      </button>
      <div
        class="dropdown-menu"
        id="openedDrowdownProjectList"
        aria-labelledby="dropdownMenuButton"
      >
            <a class="dropdown-item" id="dropdownItem" @click="navToPenzugyBeszerzes">Beszerzés</a>
      <a class="dropdown-item" id="dropdownItem" @click="navToPenzugyEladas">Eladás</a>

      <div class="dividerPenzugy1"></div>
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
        id="penzugyFilterTop"
        data-target="#collapseFilterTop"
        aria-expanded="false"
        aria-controls="collapseFilterTop"
      >
        <i class="fa-solid fa-filter"></i>
      </button>

 <div class="dropdown1">
  <button class="btn btn-secondary " type="button" id="plusButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="fas fa-plus"></i>
  </button>
  <div class="dropdown-menu" id="openedDrowdown" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="dropdownItem" >Új szállító kifizetés</a>
        <a class="dropdown-item" id="dropdownItem" >Új vevő kifizetés</a>
    <a class="dropdown-item" id="dropdownItem" >Új kiadás rögzítés</a>

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
 <button type="button" id="projectButtonActive" class="btn btn-primary" @click="navToPenzugy"><i class="fa-solid fa-file-invoice-dollar"></i> Pénzügy</button>
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


<table class="table table-dark" id="penzugyTable">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Költségvetés</th>
      <th scope="col">Beszerzés</th>
      <th scope="col">Beszerzés számla</th>
      <th scope="col">Beszerzés fizetve</th>
      <th scope="col">Eladás</th>
      <th scope="col">Eladás számla</th>
      <th scope="col">Eladás fizetve</th>
      <th scope="col">Árrés</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Szállító 1</th>
      <td>500 000 Ft</td>
      <td>200 000 Ft</td>
      <td>Beszerzés számla</td>
      <td>200 000 Ft</td>
      <td>300 000 Ft</td>
      <td>Beszerzés számla</td>
      <td>300 000 Ft</td>
      <td>100 000 Ft</td>
    </tr>
    <tr>
      <th>Szállító 2</th>
      <td>500 000 Ft</td>
      <td>200 000 Ft</td>
      <td>Beszerzés számla</td>
      <td>200 000 Ft</td>
      <td>300 000 Ft</td>
      <td>Beszerzés számla</td>
      <td>300 000 Ft</td>
      <td>100 000 Ft</td>
    </tr>
    <tr>
          <th>Szállító 3</th>
      <td>500 000 Ft</td>
      <td>200 000 Ft</td>
      <td>Beszerzés számla</td>
      <td>200 000 Ft</td>
      <td>300 000 Ft</td>
      <td>Beszerzés számla</td>
      <td>300 000 Ft</td>
      <td>100 000 Ft</td>
    </tr>
    <tr>
          <th>Szállító 4</th>
     <td>500 000 Ft</td>
      <td>200 000 Ft</td>
      <td>Beszerzés számla</td>
      <td>200 000 Ft</td>
      <td>300 000 Ft</td>
      <td>Beszerzés számla</td>
      <td>300 000 Ft</td>
      <td>100 000 Ft</td>
    </tr>
    <tr>
          <th>Szállító 5</th>
      <td>500 000 Ft</td>
      <td>200 000 Ft</td>
      <td>Beszerzés számla</td>
      <td>200 000 Ft</td>
      <td>300 000 Ft</td>
      <td>Beszerzés számla</td>
      <td>300 000 Ft</td>
      <td>100 000 Ft</td>
    </tr>
    <tr class="transparent">
      <td></td>
      <td colspan="8"></td>
    </tr>
     <tr>
          <th>Összesen:</th>
      <td>2 500 000 Ft</td>
      <td>1 000 000 Ft</td>
      <td></td>
      <td>1 000 000 Ft</td>
      <td>1 500 000 Ft</td>
      <td></td>
      <td>1 500 000 Ft</td>
      <td>500 000 Ft</td>
    </tr>
  </tbody>
</table>

 </div>
</template>

<script>



export default {



      name: "Penzugy",
      path: "/penzugy",

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

    navToPenzugyEladas(){
      this.$router.push('/penzugy_eladas')
    },

    navToPenzugyBeszerzes(){
      this.$router.push('penzugy_beszerzes')
    }






  }
    
};
</script>

<style>

#penzugyTable{
  position: relative;
  top: 2vh;
  left: 2vw;
  width: 84vw;
  background-color: #2a2b2d;
}

.links{
    color: white;
    position: relative;
    top: 55px;
    left: 2vw;
}

#penzugyFilterTop {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 45.5vw;
}

.links:hover{
    color: grey;
    cursor: pointer;

}
#csoportositasPenzugyOsszes{
 background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 57vw;
  margin-left: 5px;
  font-size: 15px;
}

#plusButtonPenzugy{
  background-color: 
  #2a2b2d;
  border: 0;
  top: 1vh;
  position: relative;
  left: 42.5vw;
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

.dividerPenzugy{
    width: 84vw;
    margin-bottom: 4px;
    position: relative;
    left: 2vw;
    height: 1px;
    background-color: #68686e;
    top: 3vh;

}

.dividerPenzugy1{
    width: 20vw;
    margin-bottom: 4px;
    position: relative;
    left: 8px;
    height: 1px;
    background-color: #68686e;
    

}

#projectButton{
  margin-left: 2px;
  background-color: #1e1f21;
  border: 0;
  
}

#projectButtonActive{
  margin-left: 2px;
  background-color: #2a2b2d;
  border: 0;
}


.dateTextPenzugy{
    color: white;
    position: relative;
    top: 2vh;
    left: 42vw;
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

.projectBackGround{
     height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow: hidden;
}

</style>