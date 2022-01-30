<template>
<div class="projectBackGround"> 
<div class="topLine">
<h5 class="projectTitle">P-22-03_projekt:</h5> <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="ajanlatListDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Beszerzés
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
 <input class="form-control mr-sm-2" id="searchBarBeszerzes1" type="search" placeholder="Search" aria-label="Search">
 <text class="dateTextBeszerzes1">2021.12.23 csütörtök</text>
 <div class="dropdown1">
  <button class="btn btn-secondary " type="button" id="plusButtonBeszerzes1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="fas fa-plus"></i>
  </button>
  <div class="dropdown-menu" id="openedDrowdown" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="dropdownItem" >Új Beszerzés</a>
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
          Beszállító
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
          Beszerzés státusz
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
      <text class="aktivSzuroText">Beszálító</text>
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
          <th scope="col">Beszerzés száma</th>
          <th scope="col">Beszerzés dátuma</th>
          <th scope="col">Szállító</th>
          <th scope="col">Beszerzés összege</th>
          <th scope="col">Beszerzés státusza</th>
          <th scope="col">Link</th>
          <th scope="col"></th>
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
          <td>76.235 Ft</td>
          <td>Nyitott</td>
          <td>www.ajanlat.hu</td>
          <td><i class="fas fa-exclamation"></i></td>
        </tr>
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
          <td>76.235 Ft</td>
          <td>Nyitott</td>
          <td>www.ajanlat.hu</td>
          <td><i class="fas fa-exclamation"></i></td>
        </tr>
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
          <td>76.235 Ft</td>
          <td>Nyitott</td>
          <td>www.ajanlat.hu</td>
          <td><i class="fas fa-exclamation"></i></td>
        </tr>
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
          <td>76.235 Ft</td>
          <td>Nyitott</td>
          <td>www.ajanlat.hu</td>
          <td><i class="fas fa-exclamation"></i></td>
        </tr>
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
          <td>76.235 Ft</td>
          <td>Nyitott</td>
          <td>www.ajanlat.hu</td>
          <td><i class="fas fa-exclamation"></i></td>
        </tr>
        <tr>
        <td></td>
        <th>Összesítő:</th>
        <td></td>
        <td></td>
        <td>381 175 Ft</td>
        <td></td>
        <td></td>
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

#plusButtonBeszerzes1{
 background-color: #9ec520;
  border: 0;
  top: 1vh;
  position: absolute;
  float: right;
  right: 10px;
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

#searchBarBeszerzes1{
 width: 10vw;
    position: absolute;
    top: 2vh;
    right: 200px;
    height: 4vh;
    background-color: #1e1f21;

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

.dateTextBeszerzes1{
    position: absolute;
     right: 55px;
    top: 2vh;
    color:#68686a;
}


#projectButton:focus{
  box-shadow: none;
  text-decoration: underline;
}

.buttonLine{
  display: flex;
  top: 3vh;
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