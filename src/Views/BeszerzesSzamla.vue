<template>
  <div class="createBackground">
    <div class="topLine">
      <h5 class="projectTitle">
        P-22-03_projekt:<text class="dashboard">Beszerzés számla</text>
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
      <div class="formLine">
        <text>Beszállító:</text>
        <input class="form-control" id="inputBox" placeholder="Számla száma" />
      </div>
      <div class="formLine">
        <text>Számla száma:</text>
        <input class="form-control" id="inputBox" placeholder="Számla dátuma" />
      </div>
      <div class="formLine">
        <text>Számla dátuma:</text>
        <input class="form-control" id="inputBox" placeholder="Számla típusa" />
      </div>
     
      <div class="formLine">
        <text>Számla típusa:</text>
        <input class="form-control" id="inputBox" placeholder="Rendelés száma" />
      </div>
     
      <div class="formLine">
        <text>Rendelés száma:</text>
        <input class="form-control" id="inputBox" placeholder="Megjegyzés" />
      </div>
       <div class="formLine">
        <text>Számla:</text>
        <input class="form-control" id="inputBox" placeholder="Megjegyzés" />
      </div>
       <div class="formLine">
        <text>Melléklet:</text>
        <input type="file" class="form-control" id="fileUpload" />
      </div>
      <div class="formLine">
        <text>Megjegyzés:</text>
        <input class="form-control" id="inputBox" placeholder="Megjegyzés" />
      </div>

      
      <button
        type="button"
        id="createButton"
        @click="create"
        class="btn btn-success"
      >
        Mentés
      </button>
     
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
}

.telText{
    margin-right: 18px;
}

#createButton {
  position: relative;
  top: 8vh;
  margin-right: 10px;
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
