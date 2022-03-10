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
        Pénzügy - Eladás
      </button>
      <div
        class="dropdown-menu"
        id="openedDrowdownProjectList"
        aria-labelledby="dropdownMenuButton"
      >
      <a class="dropdown-item" id="dropdownItem" @click="navToPenzugy">Összesítő</a>
            <a class="dropdown-item" id="dropdownItem" @click="navToPenzugyBeszerzes">Beszerzés</a>

      <div class="dividerPenzugy1"></div>
        <a class="dropdown-item" id="dropdownItem"><i class="far fa-edit"></i> Szerkesztés</a>
        <a class="dropdown-item" id="dropdownItem"><i class="far fa-trash-alt"></i> Törlés</a>
        <a class="dropdown-item" id="dropdownItem"><i class="far fa-share-square"></i> Elküld/megoszt</a>
        <a class="dropdown-item" id="dropdownItem"><i class="fas fa-print"></i> Nyomtatás</a>
        
      </div>
      </div>
 <input class="form-control mr-sm-2" id="searchBar1" type="search" placeholder="Search" aria-label="Search">
 <text class="dateText1">2021.12.23 csütörtök</text>
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
 <button type="button" id="projectButton" class="btn btn-primary" @click="navAdatlap"><i class="fa-solid fa-list"></i> Projektadatlap</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navKoltsegvetes"><i class="fa-solid fa-chart-line"></i> Költségvetés</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToAjanlat"><i class="fa-solid fa-hand-holding-dollar"></i> Ajánlat</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToBeszerzes"><i class="fa-solid fa-dolly"></i> Beszerzés</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToEladas"><i class="fa-solid fa-cart-arrow-down"></i> Eladás</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToPenzugy"><i class="fa-solid fa-file-invoice-dollar"></i> Pénzügy</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToDiviziok"><i class="fa-solid fa-layer-group"></i> Divíziok</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToKatalogus"><i class="fa-solid fa-newspaper"></i> Katalógus</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToDocs"><i class="fa-solid fa-file-lines"></i> Dokumentumok</button>
</div>
<div class="dividerPenzugy"></div>
<div class="szures">
      <text class="szuroText">Szűrés:</text>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Szállító
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
          id="szuroDropdown"
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
          <a class="dropdown-item" id="szuroDropdownItem">Nyitott</a>
          <a class="dropdown-item" id="szuroDropdownItem">Lezárt</a>
          <a class="dropdown-item" id="szuroDropdownItem">Elfogadott</a>
        </div>
      </div>
    
      <div class="dropdown" id="csoportDiv">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="csoportositas1"
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
          <a class="dropdown-item" id="szuroDropdownItem">Csoport1</a>
          <a class="dropdown-item" id="szuroDropdownItem">Csoport2</a>
          <a class="dropdown-item" id="szuroDropdownItem">Csoport3</a>
        </div>
      </div>
    </div>

    <div class="aktivSzurok">
      <text class="aktivSzuroText">Szállító 1</text>
      <text class="aktivSzuroText">Gipsz Jakab</text>
      <text class="deleteActive"><i class="fas fa-times"></i> Szűrők törlése</text>
    </div>

<table class="table table-dark" id="penzugyTable">
  <thead>
    <tr>
      <th scope="col">Dátum</th>
      <th scope="col">Bizonylat</th>
      <th scope="col">Vevő</th>
      <th scope="col">Megrendelés</th>
      <th scope="col">Előleg</th>
      <th scope="col">Számla</th>
      <th scope="col">Fizetés</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2021.12.06</th>
      <td>OC2021-18</td>
      <td>Gipsz Jakab</td>
      <td>1 500 000 Ft</td>
      <td>500 000 Ft</td>
      <td></td>
      <td>500 000 Ft</td>
    </tr>
    <tr>
          <th>2021.12.31</th>
      <td>RING-2021-258</td>
      <td>Gipsz Jakab</td>
      <td></td>
      <td></td>
      <td>1 500 000 Ft</td>
      <td>1 000 000 Ft</td>
    </tr>
    <tr class="transparent">
      <td></td>
      <td colspan="6"></td>
    </tr>
    <tr>
      <th>Összesen:</th>
          <th></th>
      <td></td>
      
      <td>1 500 000 Ft</td>
      <td>500 000 Ft</td>
      <td>1 500 000 Ft</td>
      <td>1 500 000 Ft</td>
    </tr>
    
  </tbody>
</table>
 </div>
</template>

<script>



export default {



      name: "Penzugy_eladas",
      path: "/penzugy_eladas",

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

    navToPenzugyBeszerzes(){
        this.$router.push('/penzugy_beszerzes')
    }






  }
    
};
</script>

<style>

.links{
    color: white;
    position: relative;
    top: 55px;
    left: 2vw;
}

.links:hover{
    color: grey;
    cursor: pointer;

}

#plusButtonPenzugy{
  background-color: #2a2b2d;
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