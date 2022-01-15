<template>
  <div class="createBackgroundProject">
     <div class="topLine">
      <h5 class="projectTitle">
        P-22-03_projekt:<text class="dashboard"> Új projekt</text>
      </h5>
      <input
        class="form-control mr-sm-2"
        id="searchBarKoltseg"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <text class="dateTextKoltseg">2021.12.23 csütörtök</text>
      <div class="dropdown1">
  <button class="btn btn-secondary " type="button" id="plusButtonProject" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="fas fa-plus"></i>
  </button>
  <div class="dropdown-menu" id="openedDrowdown" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="dropdownItem" > Új ügyfél</a>
  </div>
</div>
    </div>
    <div class="formStuff">
      <div class="formLine">
        <text>Ügyfél:</text>
        <input class="form-control" id="inputBox" placeholder="Ügyfél" />
      </div>
      
      <div class="formLine">
        <text>Projekt kód:</text>
        <input class="form-control" id="inputBox" placeholder="Projekt kód" />
      </div>
      <div class="formLine">
        <text>Projekt név:</text>
        <input class="form-control" id="inputBox" placeholder="Projekt név" />
      </div>
       <div class="formLine">
        <text>Számlázási cím: irányítószám:</text>
        <input class="form-control" id="inputBox" placeholder="Számlázási cím: irányítószám" />
      </div>
       <div class="formLine">
        <text>Település:</text>
        <input class="form-control" id="inputBox" placeholder="Település" />
      </div>
      <div class="formLine">
        <text>Utca:</text>
        <input class="form-control" id="inputBox" placeholder="Utca" />
      </div>
      <div class="formLine">
        <text>Házszám:</text>
        <input class="form-control" id="inputBox" placeholder="Házszám" />
      </div>
       <div class="formLine">
        <text>Adószám:</text>
        <input class="form-control" id="inputBox" placeholder="Megjegyzés" />
      </div>
      
     
      <div class="formLine">
        <text>Email:</text>
        <input class="form-control" id="inputBox" placeholder="Email" />
      </div>
       <div class="formLine">
        <text>Telefon 1:</text>
        <input class="form-control" id="inputBox" placeholder="Telefon 1" />
      </div>
      <div class="formLine">
        <text>Telefon 2:</text>
        <input class="form-control" id="inputBox" placeholder="Telefon 2" />
      </div>
      <div class="formLine">
        <text>Telefon 3:</text>
        <input class="form-control" id="inputBox" placeholder="Telefon 3" />
      </div>
      <div class="formLine">
        <text>ÁFA:</text>
        <input class="form-control" id="inputBox" placeholder="ÁFA" />
      </div>
      <div class="formLine">
        <text>Szállítási cím: irányítószám:</text>
        <input class="form-control" id="inputBox" placeholder="Számlázási cím: irányítószám" />
      </div>
       <div class="formLine">
        <text>Település:</text>
        <input class="form-control" id="inputBox" placeholder="Település" />
      </div>
      <div class="formLine">
        <text>Utca:</text>
        <input class="form-control" id="inputBox" placeholder="Utca" />
      </div>
      <div class="formLine">
        <text>Házszám:</text>
        <input class="form-control" id="inputBox" placeholder="Házszám" />
      </div>
       <div class="formLine">
        <text>Telefon 1:</text>
        <input class="form-control" id="inputBox" placeholder="Telefon 1" />
      </div>
      <div class="formLine">
        <text>Telefon 2:</text>
        <input class="form-control" id="inputBox" placeholder="Telefon 2" />
      </div>
      <div class="formLine">
        <text>Telefon 3:</text>
        <input class="form-control" id="inputBox" placeholder="Telefon 3" />
      </div>
      <div class="formLine">
        <text>Költségkeret:</text>
        <input class="form-control" id="inputBox" placeholder="Költségkeret" />
      </div>
       <div class="formLine">
        <text>Kapcsolattartó:</text>
        <input class="form-control" id="inputBox" placeholder="Megjegyzés" />
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
        Létrehozás
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
  name: "CreateProject",
  path: "/createproject",

  methods: {
    create() {
      this.$router.push("/project");
    },

    back() {
      this.$router.push("/projectList");
    },
  },
};
</script>

<style>
.createBackgroundProject {
  height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow-x: hidden;
  color: white;
  overflow-y: scroll;
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
