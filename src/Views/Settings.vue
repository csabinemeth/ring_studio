<template>
  <div class="settingsBackGround">
       <div class="settingsBar">
         <h5 class="projectTitle">
        <text class="beallitasokText"><i class="fa-solid fa-gear"></i> Beállítások</text>
      </h5>
      <button type="button" id="settingButton" class="btn btn-primary" @click="navToMe">Mennyiségi egységek</button>
      <button type="button" id="settingButton" class="btn btn-primary" @click="navToTk">Termékkategóriák</button>
      <button type="button" id="settingButton" class="btn btn-primary" @click="navToTf">Termékfajták</button>
      <button type="button" id="settingButton" class="btn btn-primary" @click="navToTs">Termék státuszok</button>
      <button type="button" id="settingButton" class="btn btn-primary" @click="navToAs">Ajánlat státuszok</button>
      <button type="button" id="settingButton" class="btn btn-primary" @click="navToBs">Beszerzés státuszok</button>
      <button type="button" id="settingButton" class="btn btn-primary" @click="navToRs">Rendelés státuszok</button>
      <button type="button" id="settingButton" class="btn btn-primary" @click="navToCa">Cégadatok</button>
      <button type="button" id="settingButton"  class="btn btn-primary" @click="navToFh">Felhasználó</button>
      </div>
      <div class="content">
     <div class="topLine">
 <h5 class="homeTitle"><i class="fas fa-home" id="avatarIcon"></i>&nbsp;Home</h5> 
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

    <table class="table table-dark" id="settingsTable">
      <thead></thead>
      <tbody>
        <tr>
          <th>Megnevezés</th>
          <th>Rövidítés <i class="fas fa-plus-square" id="createIcon"></i></th>
        </tr>
        <tr>
          <td>Darab</td>
          <td>db</td>
        </tr>
        <tr>
          <td>Forint</td>
          <td>Ft</td>
        </tr>
        <tr>
          <td>Euró</td>
          <td>EUR</td>
        </tr>
        <tr>
          <td>Méter</td>
          <td>m</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-dark" id="settingsTable">
      <thead></thead>
      <tbody>
        <tr>
          <td colspan="2">
            <b>Temékkategóriák</b>
            <i class="fas fa-plus-square" id="createIcon"></i>
          </td>
        </tr>
        <tr>
          <th>Kód</th>
          <th>Megnevezés</th>
        </tr>
        <tr>
          <td>001</td>
          <td>Fürdőszoba</td>
        </tr>
        <tr>
          <td>002</td>
          <td>Iroda</td>
        </tr>
        <tr>
          <td>003</td>
          <td>Konyha</td>
        </tr>
        <tr>
          <td>004</td>
          <td>Nappali</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-dark" id="settingsTable">
      <thead></thead>
      <tbody>
        <tr>
          <td colspan="2">
            <b>Temékfajták</b>
            <i class="fas fa-plus-square" id="createIcon"></i>
          </td>
        </tr>
        <tr>
          <th>Kód</th>
          <th>Megnevezés</th>
        </tr>
        <tr>
          <td>T01</td>
          <td>Falikar</td>
        </tr>
        <tr>
          <td>T02</td>
          <td>Függesztett lámpa</td>
        </tr>
        <tr>
          <td>T03</td>
          <td>LED panel</td>
        </tr>
        <tr>
          <td>T04</td>
          <td>Lábazat</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-dark" id="settingsTable">
      <thead></thead>
      <tbody>
        <tr>
          <td>
            <b>Termék státuszok</b>
            <i class="fas fa-plus-square" id="createIcon"></i>
          </td>
        </tr>
        <tr>
          <td>Specifikáció</td>
        </tr>
        <tr>
          <td>Jóváhagyásra vár</td>
        </tr>
        <tr>
          <td>Beszerzendő</td>
        </tr>
        <tr>
          <td>Megrendelt</td>
        </tr>
        <tr>
          <td>Számlázandó</td>
        </tr>
        <tr>
          <td>Kész</td>
        </tr>
        <tr>
          <td>Lezárt</td>
        </tr>
        <tr>
          <td>Opció</td>
        </tr>
        <tr>
          <td>Arch</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-dark" id="settingsTable">
      <thead></thead>
      <tbody>
        <tr>
          <td>
            <b>Ajánlat státuszok</b>
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

    <table class="table table-dark" id="settingsTable">
      <thead></thead>
      <tbody>
        <tr>
          <td>
            <b>Beszerzés státuszok</b>
            <i class="fas fa-plus-square" id="createIcon"></i>
          </td>
        </tr>
        <tr>
          <td>Aktív</td>
        </tr>
        <tr>
          <td>Archív</td>
        </tr>
        <tr>
          <td>Lezárt</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-dark" id="settingsTable">
      <thead></thead>
      <tbody>
        <tr>
          <td>
            <b>Rendelés státuszok</b>
            <i class="fas fa-plus-square" id="createIcon"></i>
          </td>
        </tr>
        <tr>
          <td>Aktív</td>
        </tr>
        <tr>
          <td>Archív</td>
        </tr>
        <tr>
          <td>Lezárt</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-dark" id="settingsTable">
      <thead></thead>
      <tbody>
        <tr>
          <td>
            <b>Cégedatok</b> <i class="fas fa-plus-square" id="createIcon"></i>
          </td>
        </tr>
        <tr>
          <td>
            <div class="logo"></div><br/>
          </td>
        </tr>
        <tr>   
        
          <td> <div class="formLineProfile">
              <text>Név: </text>
              <input
                class="form-control"
                id="inputBoxCompany"
                placeholder="Ring Studio Kft."
              />
            </div>
            </td>
        </tr>
           <tr>   
        
          <td> <div class="formLineProfile">
              <text>Cím: </text>
              <input
                class="form-control"
                id="inputBoxCompany"
                placeholder="9026 Győr, Bercsényi liget 26/b"
              />
            </div>
            </td>
        </tr>
           <tr>   
        
          <td> <div class="formLineProfile">
              <text>E-mail: </text>
              <input
                class="form-control"
                id="inputBoxCompany"
                placeholder="ringstudio@gmail.com"
              />
            </div>
            </td>
        </tr>
              <tr>   
        
          <td> <div class="formLineProfile">
              <text>Telefon: </text>
              <input
                class="form-control"
                id="inputBoxCompany"
                placeholder="+36701122333"
              />
            </div>
            </td>
        </tr>
              <tr>   
        
          <td> <div class="formLineProfile">
              <text>Weboldal: </text>
              <input
                class="form-control"
                id="inputBoxCompany"
                placeholder="www.ringstudio.hu"
              />
            </div>
            </td>
        </tr>
      </tbody>
    </table>

    <table class="table table-dark" id="settingsTable">
      <thead></thead>
      <tbody>
        <tr>
          <td><b>Felhasználó</b></td>
          <td><i class="fas fa-plus-square" id="createIcon"></i></td>
        </tr>
        <tr>
          <td>
            <div class="formLineProfile">
              <text>Név:</text>
              <input
                class="form-control"
                id="inputBoxProfile"
                placeholder="Horváth Julianna"
              />
            </div>
            <br/>
            <div class="formLineProfile">
              <text>E-mail:</text>
              <input
                class="form-control"
                id="inputBoxProfile"
                placeholder="horvath.juli@gmail.com"
              />
            </div>
            <br/>
            <div class="formLineProfile">
              <text>Jelszó:</text>
              <input
                class="form-control"
                id="inputBoxProfile"
                placeholder="**********"
              />
            </div>
          </td>
          <td><div class="profile"></div></td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  path: "/settings",

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

.settingsBackGround {
  height: 100vh;
  width: 90vw;
  display: flex;
  background-color: #1e1f21;
  overflow-y: scroll;
  overflow-x: hidden;
}

.beallitasokText{
  position:relative;
  left: -15px;
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
  width: 15vw;
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
