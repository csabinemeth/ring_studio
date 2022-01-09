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


</style>

