<template>
  <div class="createBackgroundProject">
     <div class="topLine">
      <h5 class="projectTitle">
        <div class="projectAvatar1"></div>&ensp;P-22-03_projekt:<text class="dashboard"> Új projekt</text>
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
        <text>Ügyfél:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Ügyfél" />
      </div>
      
      <div class="formLine">
        <text>Projekt kód:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Projekt kód" />
      </div>
      <div class="formLine">
        <text>Projekt név:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Projekt név" />
      </div>
       <div class="formLine">
        <text>Avatar:</text>
        <input type="file" class="form-control" id="fileUpload" />
      </div>
       <div class="formLine">
        <text>Számlázási cím: irányítószám:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Számlázási cím: irányítószám" />
      </div>
       <div class="formLine">
        <text>Település:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Település" />
      </div>
      <div class="formLine">
        <text>Utca:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Utca" />
      </div>
      <div class="formLine">
        <text>Házszám:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Házszám" />
      </div>
       <div class="formLine">
        <text>Adószám:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Megjegyzés" />
      </div>
      
     
      <div class="formLine">
        <text>Email:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Email" />
      </div>
       <div class="formLine">
        <text>Telefon 1:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Telefon 1" />
      </div>
      <div class="formLine">
        <text>Telefon 2:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Telefon 2" />
      </div>
      <div class="formLine">
        <text>Telefon 3:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Telefon 3" />
      </div>
      <div class="formLine">
        <text>ÁFA:</text>
        <input class="form-control" id="inputBoxProject" placeholder="ÁFA" />
      </div>
      <div class="formLine">
        <text>Szállítási cím: irányítószám:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Számlázási cím: irányítószám" />
      </div>
       <div class="formLine">
        <text>Település:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Település" />
      </div>
      <div class="formLine">
        <text>Utca:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Utca" />
      </div>
      <div class="formLine">
        <text>Házszám:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Házszám" />
      </div>
       <div class="formLine">
        <text>Telefon 1:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Telefon 1" />
      </div>
      <div class="formLine">
        <text>Telefon 2:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Telefon 2" />
      </div>
      <div class="formLine">
        <text>Telefon 3:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Telefon 3" />
      </div>
      <div class="formLine">
        <text>Költségkeret:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Költségkeret" />
      </div>
       <div class="formLine">
        <text>Kapcsolattartó:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Megjegyzés" />
      </div>
      <div class="formLine">
        <text>Megjegyzés:</text>
        <input class="form-control" id="inputBoxProject" placeholder="Megjegyzés" />
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

#inputBoxProject {
  width: 400px;
  height: 28px;
  margin-left: 10px;
  position: absolute;
  left: 25vw;
  background-color: #1e1f21;
}
</style>
