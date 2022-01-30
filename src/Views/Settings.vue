<template>
  <div class="settingsBackGround">
    <h5 class="settingsTitle">Beállítások</h5>

    <table class="table table-dark" id="settingsTable">
      <thead></thead>
      <tbody>
        <tr>
          <td colspan="2">
            <b>Mennyiségi egységek</b>
            <i class="fas fa-plus-square" id="createIcon"></i>
          </td>
        </tr>
        <tr>
          <th>Megnevezés</th>
          <th>Rövidítés</th>
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
</template>

<script>
export default {
  name: "Settings",
  path: "/settings",
};
</script>

<style>
#settingsTable {
  position: relative;
  top: 10vh;
  width: 60vw;
  left: 2vw;
}

.settingsBackGround {
  height: 100vh;
  width: 90vw;
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

.settingsText {
  color: white;
  position: relative;
  left: 2vw;
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
  color: #9ec520;
}
</style>
