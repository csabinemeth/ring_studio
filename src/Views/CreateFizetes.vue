<template>
  <div class="createBackground">
     <div class="topLine">
      <h5 class="projectTitle">
        P-22-03_projekt:<text class="dashboard">Új fizetés</text>
      </h5>
      <input
        class="form-control mr-sm-2"
        id="searchBarUjFizetes"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <text class="dateTextUjFizetes">2021.12.23 csütörtök</text>
      <div class="dropdown1">
  <button class="btn btn-secondary " type="button" id="plusButtonUjFizetes" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="fas fa-plus"></i>
  </button>
  <div class="dropdown-menu" id="openedDrowdown" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="dropdownItem" > Új ügyfél</a>
  </div>
  </div>
</div>
    <div class="formStuff">
      <div class="formLine">
        <text>Számla száma:</text>
        <input class="form-control" id="inputBox" placeholder="Számla száma" />
      </div>
      <div class="formLine">
        <text>Számla dátuma:</text>
        <input class="form-control" id="inputBox" placeholder="Számla dátuma" />
      </div>
      <div class="formLine">
        <text>Számla típusa:</text>
        <input class="form-control" id="inputBox" placeholder="Számla típusa" />
      </div>
     
      <div class="formLine">
        <text>Rendelés szám:</text>
        <input class="form-control" id="inputBox" placeholder="Rendelés száma" />
      </div>
       <div class="formLine">
        <text>Fizetett összeg:</text>
        <input class="form-control" id="inputBox" placeholder="Fizetett összeg" />
      </div>
     
      <div class="formLine">
        <text>Megjegyzés:</text>
        <input class="form-control" id="inputBox" placeholder="Megjegyzés" />
      </div>

      
      <button
        type="button"
        id="createButtonFizetes"
        @click="create"
        class="btn btn-success"
      >
        Létrehozás
      </button>
      <button
        type="button"
        id="createButtonFizetes"
        @click="back"
        class="btn btn-danger"
      >
        Mégsem
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateFizetes",
  path: "/createfizetes",

  methods: {
    create() {
      this.$router.push("/penzugy");
    },

    back() {
      this.$router.push("/penzugy");
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

#createButtonFizetes {
  position: relative;
  top: 8vh;
  margin-right: 10px;
  background-color: #9fc321;
  border: 0;
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
  background-color: #1e1f21;
}

#searchBarUjFizetes {
  width: 10vw;
  position: relative;
  left: 43.5vw;
  top: 2vh;
  height: 4vh;
  background-color: #1e1f21;
}



#plusButtonUjFizetes{
  background-color: #9ec520;
  border: 0;
  top: 1vh;
  position: relative;
  left: 44vw;
}



.dateTextUjFizetes {
  color: white;
  position: relative;
  top: 2vh;
  left: 43.5vw;
  color: #68686a;
}
</style>
