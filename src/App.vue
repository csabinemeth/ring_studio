<template>
 
<div class="allDiv">

<div class="sidebar">
<div class="logo"> </div>
 <button type="button" id="navButton" @click="navHome" class="btn btn-primary"><i class="fas fa-home"></i><label class="navText"> Home </label></button><br/>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle"  @click="navProjectList" type="button" id="projectsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="fas fa-list"></i> <label class="navText"> Projektek </label>
  </button>
  <div class="dropdown-menu" id="openedDrowdown" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="dropdownItem" @click="navProject" >P-22-03_projekt</a>
    <a class="dropdown-item" id="dropdownItem" @click="navProject"  >P-22-03_projekt</a>
    <a class="dropdown-item" id="dropdownItem" @click="navProject"  >P-22-03_projekt</a>
  </div>
</div>
 <button type="button" id="navButton" class="btn btn-primary" @click="navPartners" ><i class="fas fa-user"></i> <label class="navText"> Ügyfelek </label></button><br/>
 <button type="button" id="navButton" class="btn btn-primary" @click="navSuppliers" ><i class="fas fa-truck"></i> <label class="navText"> Beszállítók </label></button><br/>
 <button type="button" id="navButton" class="btn btn-primary" @click="navFavourites" ><i class="fas fa-heart"></i> <label class="navText"> Kedvencek</label></button><br/>
 <button type="button" id="navButton" class="btn btn-primary" @click="navRiports" ><i class="fas fa-flag"></i> <label class="navText"> Riportok </label></button><br/>
 <button type="button" id="navButton" class="btn btn-primary" @click="navHelp" ><i class="fas fa-question"></i> <label class="navText"> Súgó </label></button><br/>
 <button type="button" id="navButton" class="btn btn-primary" @click="navSettings" ><i class="fas fa-cog"></i> <label class="navText"> Beállítások </label></button>
 <button type="button" id="modeChanger" class="btn btn-primary" ><i class="fas fa-adjust"></i></button>
</div>
<router-view/>
</div>


</template>

<script>
export default {

methods: {

  navHome() {
    console.log("Home");
         this.$router.push("/");

   
  },

   navProject() {
    console.log("Project");
     this.$router.push("/project");
  },
  navFavourites() {
    console.log("Favourites");
         this.$router.push("/favourites");

   
  },
  navHelp() {
    console.log("Help");
         this.$router.push("/help");

   
  },
  navPartners() {
    console.log("Partners");
         this.$router.push("/partners");

   
  },
  navRiports() {
    console.log("Riports");
         this.$router.push("/riports");

   
  },
  navSettings() {
    console.log("Settings");
         this.$router.push("/settings");

   
  },
  navSuppliers() {
    console.log("Suppliers");
         this.$router.push("/suppliers");

   
  },
  navProjectList() {
    this.$router.push("/projectList");
  }


}

  

}
</script>

<style>

.sidebar{
  width: 14vw;
  height: 100vh;
  background-color: #2a2b2d;
}

#modeChanger{
  background-color: #2a2b2d;
  border: 0;
  position: absolute;
  top: 92vh;
  left: 2px;
}

.allDiv{
  display: flex;
}

.dropdown{
  position: relative;
  top: 5vh;
}

#projectLink{
  position: relative;
  left: 50vw;
  color: white;
}

#navButton{
  color: white;
  background-color: #2a2b2d;
  border:0;
  position: relative;
  top: 5vh;

  
}

 #projectsDropdown{
   background-color: #2a2b2d;
   border: 0;
   position:relative;
   
 }

.logo{
  background-image: url("logo.png");
  width: 12vw;
  height: 5vh;
  background-repeat: no-repeat;
  position: relative;
  left: 0.5vw;
  top: 2vh;

}

#navButton:focus{
  box-shadow: none;
}

#projectsDropdown:focus{
  box-shadow: none;
}

#openedDrowdown{
  background-color: #2a2b2d;
  width: 10vw;
}

#dropdownItem{
  color: white;
}
#dropdownItem:hover{
  background-color: #1e1f21;
  cursor: pointer;
}

@media(max-width: 900px){

  .navText{
    display: none;
  }

  #navButton{
    left: 3vw;
  }

  #projectsDropdown{
    left: 3vw;
    width: 10px;
  }

  #modeChanger{
    left: 3vw
  }
  
}


</style>
