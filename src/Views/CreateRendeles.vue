<template>
<div class="createRendelesBackGround"> 
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
        Új rendelés
      </button>
      <div
        class="dropdown-menu"
        id="openedDrowdownProjectList"
        aria-labelledby="dropdownMenuButton"
      >
        <a class="dropdown-item" id="dropdownItem"><i class="far fa-edit"></i> Szerkesztés</a>
        <a class="dropdown-item" id="dropdownItem"><i class="far fa-trash-alt"></i> Törlés</a>
        <a class="dropdown-item" id="dropdownItem"><i class="far fa-share-square"></i> Elküld/megoszt</a>
        <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="createBeszerzesListDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
       <i class="fas fa-print"></i> Nyomtatás
      </button>
      <div
        class="dropdown-menu"
        id="openedDrowdownProjectList"
        aria-labelledby="dropdownMenuButton"
      >
        <a class="dropdown-item" id="dropdownItem"><i class="fas fa-print"></i> Nyomtatás előlappal</a>
        <a class="dropdown-item" id="dropdownItem"><i class="fas fa-print"></i> Nyomtatás képpel</a>
        <a class="dropdown-item" id="dropdownItem"><i class="fas fa-print"></i> Nyomtatás árakkal</a>
        <a class="dropdown-item" id="dropdownItem"><i class="fas fa-print"></i> Nyomtatás összesítővel</a>
        
      </div>
        
       
        
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
        id="rendelesFilterTop"
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
    <a class="dropdown-item" id="dropdownItem" > Új ügyfél</a>
  </div>
</div>
</div>

<div class="buttonLine">
  <button type="button" id="projectButton" class="btn btn-primary" @click="navToDashboard">Dashboard</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navAdatlap">Projektinfo</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navKoltsegvetes">Költségvetés</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToAjanlat">Ajánlat</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToBeszerzes">Beszerzés</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToEladas">Eladás</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToPenzugy">Pénzügy</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToDiviziok">Divíziok</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToKatalogus">Katalógus</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToDocs">Dokumentumok</button>
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
   <div class="formLinesRendeles">
        <input class="form-control" id="inputBox1" placeholder="Előleg (Ft)" />
        <input class="form-control" id="inputBox1" placeholder="Előleg (%)" />
        <input class="form-control" id="inputBox1" placeholder="Kedvezmény" />
        <input class="form-control" id="inputBox1" placeholder="Rendelésszám" />
        <input class="form-control" id="inputBox1" placeholder="Megjegyzés" />
</div>

    <table class="table table-dark" id="koltsegTable">
      <thead>
        <tr>
        <th><input
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
          <th><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></th>
          <td>BÉ-L101</td>
          <td>Spot</td>
          <td><div class="productImage"></div></td>
          <td>76.235 Ft</td>
          <td>86.235 Ft</td>
          <td>10 000 Ft</td>
          <td>Megrendelve</td>
        </tr>
         <tr>
          <th><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></th>
          <td>BÉ-L101</td>
          <td>Spot</td>
          <td><div class="productImage"></div></td>
          <td>76.235 Ft</td>
          <td>86.235 Ft</td>
          <td>10 000 Ft</td>
          <td>Megrendelve</td>
        </tr>
         <tr>
          <th><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></th>
          <td>BÉ-L101</td>
          <td>Spot</td>
          <td><div class="productImage"></div></td>
          <td>76.235 Ft</td>
          <td>86.235 Ft</td>
          <td>10 000 Ft</td>
          <td>Megrendelve</td>
        </tr>
         <tr>
          <th><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></th>
          <td>BÉ-L101</td>
          <td>Spot</td>
          <td><div class="productImage"></div></td>
          <td>76.235 Ft</td>
          <td>86.235 Ft</td>
          <td>10 000 Ft</td>
          <td>Megrendelve</td>
        </tr>
        <tr class="transparent">
        <td></td>
        <td colspan="7"></td> 
        </tr> 
        <tr>
          <td>Összesítő:</td>
          <th></th>
          <td></td>
          <td></td>
          <td>304 940 Ft</td>
          <td>344 940 Ft</td>
          <td>40 000 Ft</td>
          <td></td>

        </tr>
      </tbody>
    </table>

    

    
  </div>

</template>

<script>



export default {



      name: "createajanlat",
      path: "/createajanlat",

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

#rendelesFilterTop {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 49.8vw;
}

#projectButton{
  margin-left: 2px;
  background-color: #1e1f21;
  border: 0;
}



#beszerzesListDropdown {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  bottom: 29px;
  background-color: #1e1f21;
  left: 2vw;
  font-size: 20px;
  text-decoration: underline;
}

.formLinesRendeles{
  display: flex;
  position: relative;
  bottom: 8vh;
}     

.dateTextRendeles{
    color: white;
    position: relative;
    top: 2vh;
    left: 39vw;
    color:#68686a;
}

.formLineAjanlat {
  display: flex;
  color: white;
  margin-top: 17px;
  margin-bottom: 15px;
  left: 2vw;
  top: 8vh;
  position: relative;
}

.createRendelesBackGround{
   height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow-x:hidden;
  overflow-y: scroll;
}

#plusButtonUjRendeles{
  background-color: #2a2b2d;
  border: 0;
  top: 1vh;
  position: relative;
  left: 39.5vw;
}

#createBeszerzesListDropdown {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  bottom: 29px;
  background-color: #1e1f21;
  left: 0.5vw;
  top: 0.5vh;
  
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



#csoportositasCreateAjanlat {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 29vw;
  margin-left: 5px;
  font-size: 15px;
}

</style>