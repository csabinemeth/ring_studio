<template>
<div class="createAjanlatBackGround"> 
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
        Új ajánlat
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
 <input class="form-control mr-sm-2" id="searchBarBeszerzes" type="search" placeholder="Search" aria-label="Search">
 <text class="dateTextBeszerzes">2021.12.23 csütörtök</text>
 <div class="dropdown1">
  <button class="btn btn-secondary " type="button" id="plusButtonBeszerzes" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="fas fa-plus"></i>
  </button>
  <div class="dropdown-menu" id="openedDrowdown" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="dropdownItem" >Új Ajánlat</a>
  </div>
</div>
</div>
<div class="buttonLine">
 <button type="button" id="projectButton" class="btn btn-primary">Dashboard</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navAdatlap">Projektadatlap</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navKoltsegvetes">Költségvetés</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToAjanlat">Ajánlat</button>
 <button type="button" id="projectButton" class="btn btn-primary">Beszerzés</button>
 <button type="button" id="projectButton" class="btn btn-primary">Eladás</button>
 <button type="button" id="projectButton" class="btn btn-primary">Pénzügy</button>
 <button type="button" id="projectButton" class="btn btn-primary">Szekciók</button>
 <button type="button" id="projectButton" class="btn btn-primary">Katalógus</button>
 <button type="button" id="projectButton" class="btn btn-primary">Dokumentumok</button>
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
          Divízió
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
          Kategória
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
       <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Termék státusz
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
          Ajánlat száma
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
          id="csoportositasCreateAjanlat"
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
      <text class="aktivSzuroText">Ügyfél</text>
      <text class="aktivSzuroText">Divízió</text>
      <text class="deleteActive">Szűrők törlése</text>
    </div>
<div class="formLineAjanlat">
        <text>Ajánlat címe:</text>
        <input class="form-control" id="inputBox" placeholder="Ajánlat címe" />
      </div>
<div class="formLineAjanlat">
        <text>Kedvezmény:</text>
        <input class="form-control" id="inputBox" placeholder="Kedvezmény (% / Ft)" />
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
      </tbody>
    </table>

    <div class="icons">
      <i class="fas fa-th-large"></i>&nbsp;<i class="fas fa-check"></i>&nbsp;<i
        class="far fa-trash-alt"
      ></i
      >&nbsp;<i class="fas fa-adjust"></i>&nbsp;<i class="far fa-edit"></i
      >&nbsp;
    </div>

    
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
    }


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

#plusButtonBeszerzes{
  background-color: #2a2b2d;
  border: 0;
  top: 1vh;
  position: relative;
  left: 41.5vw;
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

#searchBarBeszerzes{
    width: 10vw;
    position: relative;
    left: 41vw;
    top: 2vh;
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

.dateTextBeszerzes{
    color: white;
    position: relative;
    top: 2vh;
    left: 41vw;
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

#csoportositasCreateAjanlat {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 29vw;
  margin-left: 5px;
  font-size: 15px;
}

.createAjanlatBackGround {
  height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow: hidden;
}

</style>