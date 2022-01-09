<template>
<div class="settingsBackGround">
 <h5 class="settingsTitle">Beállítások</h5> 
  <div class="formLine">
        <text class="settingsText">Mennyiségi egység:</text>
        <select class="form-control" id="FormControlSelect">
          <option>Megnevezés</option>
          <option>Rövidítés</option>
        </select>
      </div>

 <div class="formLine">
        <text class="settingsText">Termékkategóriák:</text>
        <select class="form-control" id="FormControlSelect">
          <option>Kód</option>
          <option>Megnevezés</option>
        </select>
      </div>
       <div class="formLine">
        <text class="settingsText">Termék fajták:</text>
        <select class="form-control" id="FormControlSelect">
       <option>Kód</option>
          <option>Megnevezés</option>
        </select>
      </div>


      <table class="table table-dark" id="settingsTable">
  <thead>
  </thead>
  <tbody>
    <tr>
      <td><b>Termék státuszok</b> </td>
    </tr>
    <tr >
      <td>Specifikáció</td>
    </tr>
    <tr >
      <td>Jóváhagyásra vár</td>
    </tr>
     <tr >
      <td>Beszerzendő</td>
    </tr>
     <tr >
      <td>Megrendelt</td>
    </tr>
     <tr >
     
      <td>Számlázandó</td>
    </tr>
     <tr >
      <td>Kész</td>
    </tr>
     <tr >
      <td>Lezárt</td>
    </tr>
     <tr >
      <td>Opció</td>
    </tr>
     <tr >
      <td>Arch</td>
    </tr>
  
  </tbody>
</table>


  <table class="table table-dark" id="settingsTable">
  <thead>
  </thead>
  <tbody>
    <tr>
      <td><b>Cégedatok</b> </td>
    </tr>
    <tr >
      <td>
       <div class="logo"></div><br/>
      -Cég neve <br/><br/>
      -Cég címe <br/><br/>
      -Email <br/><br/>
      -Telefon <br/><br/>
      -Weboldal 
     </td>
      
    </tr>
  
  
  </tbody>
</table>

 <table class="table table-dark" id="settingsTable">
  <thead>
  </thead>
  <tbody>
    <tr>
      <td><b>Felhasználó</b> </td>
      <td></td>
    </tr>
    <tr >
      <td>
          <div class="formLineProfile">
        <text>Név:</text>
        <input
          class="form-control"
          id="inputBoxProfile"
          placeholder="Horváth Julianna"
        />
      </div>    <div class="formLineProfile">
        <text>E-mail:</text>
        <input
          class="form-control"
          id="inputBoxProfile"
          placeholder="horvath.juli@gmail.com"
        />
      </div>    <div class="formLineProfile">
        <text>Jelszó:</text>
        <input
          class="form-control"
          id="inputBoxProfile"
          placeholder="**********"
        />
      </div>
     </td>
     <td>  <div class="profile"></div></td>
      
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


#settingsTable{
    position: relative;
    top: 10vh;
    width: 60vw;
    left: 2vw;
}

.settingsBackGround{
       height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow-y: scroll;
  overflow-x: hidden;
}

#inputBoxProfile{
  width: 15vw;
  position: absolute;
  left: 5vw;
  height: 5vh;

}

.formLineProfile{
  display: flex;
  margin-bottom: 10px;
}

.settingsTitle{
      position: relative;
    left: 2vw;
    color: white;
    text-decoration: underline;
    top: 2vh;
}

.settingsText{
    color: white;
    position: relative;
    left: 2vw;
}

.profile{
    background-image: url("../assets/avatar1.jpg");
  width: 10vw;
  height: 18vh;
  background-size: cover;
  position: relative;
  left: 0vw;
  top: 0vh;
}


</style>

