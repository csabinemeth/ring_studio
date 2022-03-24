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
        Eladás
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
        <a class="dropdown-item" id="dropdownItem"><i class="fas fa-print"></i> Termék kiadás</a>
        
      </div>
      </div>
 <input class="form-control mr-sm-2" id="searchBar1" type="search" placeholder="Search" aria-label="Search">
 <text class="dateText1">2021.12.23 csütörtök</text>
 <div class="dropdown1">
  <button class="btn btn-secondary " type="button" id="plusButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="fas fa-plus"></i>
  </button>
  <div class="dropdown-menu" id="openedDrowdown" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="dropdownItem" >Új Rendelés</a>
    <a class="dropdown-item" id="dropdownItem" >Új Számla</a>
    <a class="dropdown-item" id="dropdownItem" >Új Előleg</a>


  </div>
</div>
</div>
<div class="buttonLine">
  <button type="button" id="projectButton" class="btn btn-primary" @click="navToDashboard"><i class="fa-solid fa-chart-column"></i> Dashboard</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navAdatlap"><i class="fa-solid fa-list"></i> Projektinfo</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navKoltsegvetes"><i class="fa-solid fa-chart-line"></i> Költségvetés</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToAjanlat"><i class="fa-solid fa-hand-holding-dollar"></i> Ajánlat</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToBeszerzes"><i class="fa-solid fa-dolly"></i> Beszerzés</button>
 <button type="button" id="projectButtonActive" class="btn btn-primary" @click="navToEladas"><i class="fa-solid fa-cart-arrow-down"></i> Eladás</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToPenzugy"><i class="fa-solid fa-file-invoice-dollar"></i> Pénzügy</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToDiviziok"><i class="fa-solid fa-layer-group"></i> Divíziok</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToKatalogus"><i class="fa-solid fa-newspaper"></i> Katalógus</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToDocs"><i class="fa-solid fa-file-lines"></i> Dokumentumok</button>
</div>

    <div class="dividerProject"></div>

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
          id="szuroDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Rendelés státusz
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
      <text class="aktivSzuroText">Nyitott</text>
      <text class="aktivSzuroText">Ügyfél 1</text>
      <text class="deleteActive">Szűrők törlése <i class="fas fa-times"></i></text>
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
          <th scope="col" class="rendelesTH">Rendelés száma</th>
          <th scope="col" class="rendelesTH">Rendelés dátuma</th>
          <th scope="col" class="rendelesTH">Ügyfél</th>
          <th scope="col" class="rendelesTH">Rendelés státusza</th>
          <th scope="col" class="rendelesTH">Link</th>
          <th scope="col" class="rendelesTH">Rendelés összege</th>
          <th scope="col" class="rendelesTH">Számlázott összeg</th>
          <th scope="col" class="rendelesTH">Fizetett összeg</th>
          <th scope="col" class="rendelesTH"></th>
          >
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
          <td>101</td>
          <td>2022.01.01</td>
          <td>Horváth Jenő</td>
          <td>Nyitott</td>
          <td>www.rendeles.hu</td>
          <td>76.235 Ft</td>
          <td>76.235 Ft</td>
          <td>76.235 Ft</td>
          <td><i class="fas fa-exclamation"></i></td>
        </tr>
            <tr>
        <th><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></th>
          <td>102</td>
          <td>2022.01.01</td>
          <td>Horváth Jenő</td>
          <td>Nyitott</td>
          <td>www.rendeles.hu</td>
          <td>76.235 Ft</td>
          <td>76.235 Ft</td>
          <td>76.235 Ft</td>
          <td><i class="fas fa-exclamation"></i></td>
        </tr>
        
          <tr>
        <th><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></th>
          <td>103</td>
          <td>2022.01.01</td>
          <td>Horváth Jenő</td>
          <td>Nyitott</td>
          <td>www.rendeles.hu</td>
          <td>76.235 Ft</td>
          <td>76.235 Ft</td>
          <td>76.235 Ft</td>
          <td><i class="fas fa-exclamation"></i></td>
        </tr>
            <tr>
        <th><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></th>
          <td>104</td>
          <td>2022.01.01</td>
          <td>Horváth Jenő</td>
          <td>Nyitott</td>
          <td>www.rendeles.hu</td>
          <td>76.235 Ft</td>
          <td>76.235 Ft</td>
          <td>76.235 Ft</td>
          <td><i class="fas fa-exclamation"></i></td>
        </tr>
             <tr>
        <th>
        Összesítő:
        </th>
          <th></th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>304 940 Ft</td>
          <td>304 940 Ft</td>
          <td>304 940 Ft</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    
  </div>

</template>

<script>



export default {



      name: "Beszerzes",
      path: "/beszerzes",

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

.rendelesTH{
    font-size: 13px;
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

#plusButtonEladas{
  background-color: #2a2b2d;
  border: 0;
  top: 1vh;
  position: relative;
  left: 43.5vw;
}


.dividerProject{
    width: 84vw;
    position: relative;
    left: 2vw;
    height: 1px;
    background-color: #68686e;
    top: 2.5vh;
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

.dateTextEladas{
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

.projectBackGround{
     height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow: hidden;
}

#csoportositasEladas {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 52.5vw;
  margin-left: 5px;
  font-size: 15px;
}

</style>