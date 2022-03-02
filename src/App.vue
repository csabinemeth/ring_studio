<template>


<div class="allDiv">


<div class="sidebar">
<div class="logo"> </div>
 <button type="button" id="navButton" @click="navHome" class="btn btn-primary"><i class="fas fa-home"></i><label class="navText"> Home </label></button><br/>
<button
                class="btn btn-primary"
                id="navButton"
                type="button"
                @click="navProjectList"
                data-toggle="collapse"
                data-target="#collapseExampleHome"
                aria-expanded="false"
                aria-controls="collapseExampleHome"
              >
                <i class="fas fa-list"></i> <label class="navText"> Projektek</label>
              </button>
              <div class="collapse" id="collapseExampleHome">
                <div class="card card-body" id="expandContainerHome">
                  <button class="projectnav" @click="navProject"><div class="projectAvatar1"></div> P-22-03_Projekt</button>
                  <button class="projectnav" @click="navProject"><div class="projectAvatar1"> </div> P-22-03_Projekt</button>
                  <button class="projectnav" @click="navProject"><div class="projectAvatar1"> </div> P-22-03_Projekt</button>
                </div>
                </div><br/>
 <button type="button" id="navButton" class="btn btn-primary" @click="navPartners" ><i class="fas fa-user"></i> <label class="navText"> Ügyfelek </label></button><br/>
 <button type="button" id="navButton" class="btn btn-primary" @click="navSuppliers" ><i class="fas fa-truck"></i> <label class="navText"> Beszállítók </label></button><br/>
 <button type="button" id="navButton" class="btn btn-primary" @click="navFavourites" ><i class="fas fa-heart"></i> <label class="navText"> Kedvencek</label></button><br/>
 <button type="button" id="navButton" class="btn btn-primary" @click="navRiports" ><i class="fas fa-flag"></i> <label class="navText"> Riportok </label></button><br/>
 <button type="button" id="navButton" class="btn btn-primary" @click="navHelp" ><i class="fas fa-question"></i> <label class="navText"> Súgó </label></button><br/>
 <button type="button" id="navButton" class="btn btn-primary" @click="navSettings" ><i class="fas fa-cog"></i> <label class="navText"> Beállítások </label></button>
 <button type="button" id="modeChanger" class="btn btn-primary" @click="navToHomeLight"><i class="fas fa-adjust"></i></button>
 <button type="button" id="profileButton" class="btn btn-primary" @click="navToFh"><div class="profileAvatar"> </div>    Horváth Borbála</button>
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

    navToFh(){
            this.$router.push("/settingsFh");    
        },

 navToHomeLight() {
   this.$router.push("/home_light");
 },

  navRiports() {
    console.log("Riports");
         this.$router.push("/riports");

   
  },
  navSettings() {
    console.log("SettingsMe");
         this.$router.push("/settingsMe");

   
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
  z-index: 1;
  box-shadow: 5px 5px 8px 5px rgba(0,0,0,0.20);
}

#navCollapse{
  background-color: #2a2b2d;
  position:relative;
  top:4vh;
    border:0;
}


.profileAvatar{
  background-image: url("assets/avatar1.jpg");
  width: 30px;
  height: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;

}



.projectAvatar1{
  background-image: url("assets/projectAvatar1.png");
  width: 30px;
  height: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;

}



.projectAvatar2{
  background-image: url("assets/avatar1.jpg");
  width: 30px;
  height: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;

}


.projectAvatar2{
  background-image: url("assets/avatar1.jpg");
  width: 30px;
  height: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;

}


#collapseExampleHome{
  background-color: #2a2b2d;
  position: relative;
  top: 3vh;
  border:0;
}


.projectnav{
  background-color: #2a2b2d;
  color: white;
  display: flex;
  border:0;
  width: 150px;
  margin-bottom: 10px;

}

.projectnav:focus{
  border:none;
  outline:none;
}

.projectnav:hover{
  cursor: pointer;
}

#collapsedLinks{
  color: white;
  position: relative;
 
}

#expandContainerHome{
  background-color: #2a2b2d;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100px;
  left: -20px;
  width: 210px;
  margin-bottom: -30px;
}

#modeChanger{
  background-color: #2a2b2d;
  border: 0;
  position: absolute;
  top: 85vh;
  left: 2px;
}

#profileButton{
  background-color: #2a2b2d;
  border: 0;
  position: absolute;
  display: flex;
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
  width: 10vw;
  height: 8vh;
  background-size: cover;
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

@media(max-width: 1250px){

  .navText{
    display: none;
  }

  #navButton{
    left: 3vw;
  }

  #expandContainerHome{
    display: none;
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
