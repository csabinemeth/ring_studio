<template>
  <div class="settingsBackGround">
       <div class="settingsBar">
         <h5 class="projectTitle">
        <text class="beallitasokText"><i class="fa-solid fa-gear"></i> Beállítások</text>
      </h5>
      <button type="button" id="settingButton" class="btn btn-primary" @click="navToMe"><i class="fa-solid fa-scale-balanced"></i> Mennyiségi egységek</button>
      <button type="button" id="settingButton" class="btn btn-primary" @click="navToTk"><i class="fa-solid fa-sink"></i> Termékkategóriák</button>
      <button type="button" id="settingButton" class="btn btn-primary" @click="navToTf"><i class="fa-solid fa-lightbulb"></i>  Termékfajták</button>
      <button type="button" id="settingButton" class="btn btn-primary" @click="navToTs"><i class="fa-solid fa-clipboard-check"></i> Termék státuszok</button>
      <button type="button" id="settingButtonActive" class="btn btn-primary" @click="navToAs"><i class="fa-solid fa-hand-holding-dollar"></i> Ajánlat státuszok</button>
      <button type="button" id="settingButton" class="btn btn-primary" @click="navToBs"><i class="fa-solid fa-truck-ramp-box"></i> Beszerzés státuszok</button>
      <button type="button" id="settingButton" class="btn btn-primary" @click="navToRs"><i class="fa-solid fa-truck-fast"></i> Rendelés státuszok</button>
      <button type="button" id="settingButton" class="btn btn-primary" @click="navToCa"><i class="fa-solid fa-circle-info"></i> Cégadatok</button>
      <button type="button" id="settingButton"  class="btn btn-primary" @click="navToFh"><i class="fa-solid fa-user"></i> Felhasználó</button>
      </div>
      <div class="content">
      <div class="topLineSettings">
 <h5 class="homeTitle"><i class="fa-solid fa-hand-holding-dollar" id="avatarIcon-Partners"></i>&nbsp; Ajánlati státuszok</h5> 
      <button
        class="btn btn-primary"
        type="button"
        data-toggle="collapse"
        id="homeSearchTop"
        data-target="#collapseSearchTop"
        aria-expanded="false"
        aria-controls="collapseSearchTop"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
<div class="dropdown1">
  <button class="btn btn-secondary " type="button" id="plusButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="fas fa-plus"></i>
  </button>
  <div class="dropdown-menu" id="openedDrowdown" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="dropdownItem" > Új ügyfél</a>
    <a class="dropdown-item" id="dropdownItem" @click="navToCreateProject" >Új projekt</a>
    <a class="dropdown-item" id="dropdownItem" @click="navToCreateProduct">Új Termék</a>
    <a class="dropdown-item" id="dropdownItem" >Új Beszállító</a>
  </div>
</div>

    
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


    <table class="table table-dark" id="settingsTable">
      <thead></thead>
      <tbody>
        <tr>
          <td>
            <b>Megnevezés</b>
            <i class="fas fa-plus-square" id="createIcon"></i>
          </td>
        </tr>
        <tr>
          <td>Aktív</td>
        </tr>
        <tr>
          <td>Archív</td>
        </tr>
      </tbody>
    </table>


    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsAs",
  path: "/settingsAs",

  methods:  {
        navToMe(){
            this.$router.push("/settingsMe");    
        },
         navToTk(){
            this.$router.push("/settingsTk");    
        },
         navToTf(){
            this.$router.push("/settingsTf");    
        },
         navToTs(){
            this.$router.push("/settingsTs");    
        },
         navToAs(){
            this.$router.push("/settingsAs");    
        },
         navToBs(){
            this.$router.push("/settingsBs");    
        },
         navToRs(){
            this.$router.push("/settingsRs");    
        },
         navToCa(){
            this.$router.push("/settingsCa");    
        },
         navToFh(){
            this.$router.push("/settingsFh");    
        },
    }
};
</script>

<style>
#settingsTable {
  position: relative;
  top: 4vh;
  width: 60vw;
  left: 2vw;
}

.topLineSettings{
    display: flex;
    position: relative;
    width: 64vw;
}

.settingsBackGround {
  height: 100vh;
  width: 90vw;
  display: flex;
  background-color: #1e1f21;
  overflow-y: scroll;
  overflow-x: hidden;
}

#inputBoxProfile {
  width: 18vw;
  position: absolute;
  left: 5vw;
  height: 5vh;
  background-color: #1e1f21;
}

.formLineProfile {
  display: flex;
  margin-bottom: 10px;
}

.settingsTitle {
  position: relative;
  left: 2vw;
  color: white;
  text-decoration: underline;
  top: 2vh;

}

.content{
  position:relative;
  left: 17vw;
}

.settingsBar{
  width: 17vw;
  height: 100vh;
  background-color: #2a2b2d;
  position: absolute;
  border: 1px solid #1e1f21;
}

.settingsText {
  color: white;
  position: relative;
  left: 2vw;
}

#settingButton{
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  top: 8.5vh;
  margin-bottom: 7.5px;
}

#inputBoxCompany{
  position: relative;
  left: 100px;
    width: 18vw;
  position: absolute;
  height: 5vh;
  background-color: #1e1f21;
}


.profile {
  background-image: url("../assets/avatar1.jpg");
  width: 13vw;
  height: 22.5vh;
  background-size: cover;
  position: relative;
  left: 25px;
  top: 0vh;
}

#createIcon {
  float: right;
  color: white;
}
</style>
