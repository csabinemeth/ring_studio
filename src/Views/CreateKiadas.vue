<template>
  <div class="createBackground">
    <div class="topLine">
      <h5 class="projectTitle">
        <div class="projectAvatar1"></div>&ensp;P-22-03_projekt:<text class="dashboard"> Új kiadás</text>
      </h5>
      <button
        class="btn btn-primary"
        type="button"
        data-toggle="collapse"
        id="productSearchTop"
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
    <div class="formStuff">
      <div class="formLine">
        <text>Számla száma:</text>
        <input class="form-control" id="inputBoxKiadas" placeholder="Számla száma" />
      </div>
      <div class="formLine">
        <text>Számla dátuma:</text>
        <input class="form-control" id="inputBoxKiadas" placeholder="Számla dátuma" />
      </div>
      <div class="formLine">
        <text>Számla típusa:</text>
        <input class="form-control" id="inputBoxKiadas" placeholder="Számla típusa" />
      </div>
     
      <div class="formLine">
        <text>Rendelés szám:</text>
        <input class="form-control" id="inputBoxKiadas" placeholder="Rendelés száma" />
      </div>
      
     <div class="formLine">
        <text>Szállító:</text>
        <input class="form-control" id="inputBoxKiadas" placeholder="Szállító" />
      </div>

<div class="formLine">
        <text>Leírás:</text>
        <input class="form-control" id="inputBoxKiadas" placeholder="Leírás" />
      </div>

      <div class="formLine">
        <text>Megjegyzés:</text>
        <input class="form-control" id="inputBoxKiadas" placeholder="Megjegyzés" />
      </div>

      
      <button
        type="button"
        id="createButton"
        @click="create"
        class="btn btn-success"
      >
        Mentés
      </button>
      <button
        type="button"
        id="createButton"
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
  name: "CreateKiadas",
  path: "/createkidas",

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

#inputBoxKiadas {
  width: 400px;
  height: 28px;
  margin-left: 10px;
  position: absolute;
  background-color: #1e1f21;
  left: 25vw;
}
</style>
