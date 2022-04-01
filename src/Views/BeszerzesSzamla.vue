<template>
  <div class="createBackground">
    <div class="topLine">
      <h5 class="projectTitle">
       <div class="projectAvatar1"></div>&ensp; P-22-03_projekt:<text class="dashboard">Beszerzés számla</text>
      </h5>
      <input
        class="form-control mr-sm-2"
        id="searchBar1"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <text class="dateText1">2021.12.23 csütörtök</text>
      <div class="dropdown1">
  <button class="btn btn-secondary " type="button" id="plusButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="fas fa-plus"></i>
  </button>
  <div class="dropdown-menu" id="openedDrowdown" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="dropdownItem" > Új ügyfél</a>
  </div>
</div>
</div>
    <div class="formStuff">
      <div class="inputsBSZ">
     <div class="formLine">
        <input class="form-control" id="inputBoxProduct1" placeholder="Rendelés" /> <div class="verticalSplit"></div>
      </div>
       <div class="formLine">
        <input class="form-control" id="inputBoxProduct" placeholder="Számlaszám" /> <div class="verticalSplit"></div>
      </div>
       <div class="formLine">
        <input class="form-control" id="inputBoxProduct" placeholder="Számla" /> 
      </div>
     
      </div>

    

<table class="table table-dark" id="bsz-table">
  <thead>
  </thead>
  <tbody>
    <tr>
      <td>Beszállító</td>
      <td><input class="form-control" id="inputBox" placeholder="Beszállító" /></td>
    </tr>
    <tr>
      <td>Számla száma:</td>
      <td>     <input class="form-control" id="inputBox" placeholder="Számla száma" /></td>
    </tr>
    <tr>
      <td>Számla dátuma:</td>
      <td><input class="form-control" id="inputBox" placeholder="Számla dátuma" /></td>
    </tr>
    <tr>
      <td>Számla típusa:</td>
      <td><input class="form-control" id="inputBox" placeholder="Számla típusa" /></td>
    </tr>
    <tr>
      <td>Rendelés száma:</td>
      <td>     <input class="form-control" id="inputBox" placeholder="Rendelés száma" /></td>
    </tr>
    <tr>
      <td>Számla:</td>
      <td>     <input class="form-control" id="inputBox" placeholder="Számla" /></td>
    </tr>
    <tr>
      <td>Melléklet:</td>
      <td>
        <input type="file" class="form-control" id="fileUpload" /></td>
    </tr>
    <tr>
      <td>Megjegyzés:</td>
      <td>     <input class="form-control" id="inputBox" placeholder="Megjegyzés" /></td>
    </tr>
  </tbody>
</table>

  
     
    </div>
  </div>
</template>

<script>
export default {
  name: "BeszerzesSzamla",
  path: "/beszerzesSzamla",

  methods: {
    create() {
      this.$router.push("/beszerzes");
    },

    back() {
      this.$router.push("/beszerzes");
    },
  },
};
</script>

<style>
.createBackground {
  height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow: hidden;
  color: white;
  overflow-y: scroll;
  overflow-x: hidden;
}

.telText{
    margin-right: 18px;
}

#createButton {
  position: relative;
  top: 8vh;
  margin-right: 10px;
}

.szamlatitle{
  color: white;
}

.formStuff {
  position: relative;
  left: 2vw;
  top: 0vh;
  font-size: 20px;
}

.formLine {
  display: flex;
  margin-top: 17px;
}

#inputBoxSmall {
  width: 137px;
  height: 28px;
  margin-left: 10px;
  margin-right: 10px;
}

.inputsBSZ{
  display: flex;
  background-color:  #2a2b2d;
  width: 90vw;
  top: 2px;
  position: relative;
  left: -1.8vw;
} 

#bsz-table{
  background-color: #2a2b2d;
  position: relative;
  left: -1.8vw;
  width: 90vw;
  top: 4px;

}


.createTitle {
  position: relative;
  left: 2vw;
  color: white;
  text-decoration: underline;
  top: 2vh;
}

#inputBox {
  width: 400px;
  height: 28px;
  margin-left: 10px;
  position: absolute;
  left: 25vw;
}
</style>
