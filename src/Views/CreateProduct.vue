<template>
  <div class="createBackgroundTermek">
  <div class="topLine">
      <h5 class="projectTitle">
        P-22-03_projekt:<text class="dashboard">Új termék</text>
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
        <text>Státusz:</text>
        <select class="form-control" id="FormControlSelect" >
          <option>Státusz</option>
          <option>Státusz2</option>
          <option>Státusz3</option>
        </select>
      </div>
      <div class="formLine">
        <text>Típus:</text>
        <input class="form-control" id="inputBox" placeholder="Típus" />
      </div>
      <div class="formLine">
        <text>Terménév:</text>
        <input class="form-control" id="inputBox" placeholder="Terméknév" />
      </div>
      <div class="formLine">
        <text class="addressText">Termékkód:</text>
        <input class="form-control" id="inputBox" placeholder="Termékkód" />
      </div>
      <div class="formLine">
        <text>Lista:</text>
        <input class="form-control" id="inputBox" placeholder="Lista" />
      </div>
      <div class="formLine">
        <text class="telText">Termékkategória:</text>
        <input
          class="form-control"
          id="inputBox"
          placeholder="Termékkategória"
        />
      </div>
      <div class="formLine">
        <text>Termékfajta:</text>
        <input class="form-control" id="inputBox" placeholder="Termékfajta" />
      </div>
      <div class="formLine">
        <text class="addressText">Műszaki tartalom:</text>
        <input
          class="form-control"
          id="inputBox"
          placeholder="Műszaki tartalom"
        />
      </div>
      <div class="formLine">
        <text class="telText">Szín:</text>
        <input class="form-control" id="inputBox" placeholder="Szín" />
      </div>
      <div class="formLine">
        <text>Méret:</text>
        <input class="form-control" id="inputBox" placeholder="Méret" />
      </div>
      <div class="formLine">
        <text>Mennyiségi egység:</text>
        <input
          class="form-control"
          id="inputBox"
          placeholder="Mennyiségi egység"
        />
      </div>
      <div class="formLine">
        <text>Mennyiség:</text>
        <input class="form-control" id="inputBox" placeholder="Mennyiség" />
      </div>
      <div class="formLine">
        <text>Megjegyzés:</text>
        <input class="form-control" id="inputBox" placeholder="Megjegyzés" />
      </div>
      <div class="formLine">
        <text>Terméklink:</text>
        <input class="form-control" id="inputBox" placeholder="Terméklink" />
      </div>
      <div class="formLine">
        <text>Szállító:</text>
        <select class="form-control" id="FormControlSelect">
          <option>Szállító</option>
          <option>Szállító2</option>
          <option>Szállító3</option>
        </select>
      </div>
      <div class="formLine">
        <text>Gyártó:</text>
        <select class="form-control" id="FormControlSelect">
          <option>Gyártó</option>
          <option>Gyártó2</option>
          <option>Gyártó3</option>
        </select>
      </div>
      <div class="formLine">
        <text>Gyártó kód:</text>
        <input class="form-control" id="inputBox" placeholder="Gyártó kód" />
      </div>
      <div class="formLine">
        <text>Gyári kedvezmény:</text>
        <input
          class="form-control"
          id="inputBox"
          placeholder="Gyári kedvezmény"
        />
      </div>
      <div class="formLine">
        <text>Haszonkulcs:</text>
        <input class="form-control" id="inputBox" placeholder="Haszonkulcs" />
      </div>
      <div class="formLine">
        <text>Becsült ár:</text>
        <input class="form-control" id="inputBox" placeholder="Becsült ár" />
      </div>
      <div class="formLine">
        <text>Beszerzés EUR/Ft:</text>
        <input
          class="form-control"
          id="inputBox"
          placeholder="Beszerzés EUR/Ft"
        />
      </div>
      <div class="formLine">
        <text>Eladás EUR/Ft:</text>
        <input class="form-control" id="inputBox" placeholder="Eladás EUR/Ft" />
      </div>
      <div class="formLine">
        <text>Listaáras:</text>
        <input class="form-control" id="inputBox" placeholder="Listaáras" />
      </div>
      <div class="formLine">
        <text>Listaár (Ft):</text>
        <input class="form-control" id="inputBox" placeholder="Listaár (Ft)" />
      </div>
      <div class="formLine">
        <text>Listaár (EUR):</text>
        <input class="form-control" id="inputBox" placeholder="Listaár (EUR)" />
      </div>
      <div class="formLine">
        <text>Beszerzési ár (Ft):</text>
        <input
          class="form-control"
          id="inputBox"
          placeholder="Beszerzési ár (Ft)"
        />
      </div>
      <div class="formLine">
        <text>Beszerzési ár (EUR):</text>
        <input
          class="form-control"
          id="inputBox"
          placeholder="Beszerzési ár (EUR)"
        />
      </div>
      <div class="formLine">
        <text>Eladási ár (Ft):</text>
        <input
          class="form-control"
          id="inputBox"
          placeholder="Eladási ár (Ft)"
        />
      </div>
      <div class="formLine">
        <text>Eladási ár (EUR):</text>
        <input
          class="form-control"
          id="inputBox"
          placeholder="Eladási ár (EUR)"
        />
      </div>
      <div class="formLine">
        <text>Kommentek:</text>
        <textarea
          class="form-control"
          id="textArea"
          aria-label="With textarea"
          placeholder="Kommentek"
        ></textarea>
      </div>
      <div class="formLine">
        <text>Kép:</text>
        <input type="file" class="form-control" id="fileUpload" />
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
        id="cancelButton"
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
  name: "CreateProduct",
  path: "/createproduct",

  methods: {
    create() {
      this.$router.push("/favourites");
    },

    back() {
      this.$router.push("/project");
    },
  },
};
</script>

<style>
.createBackgroundTermek {
  height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow: scroll;
  color: white;
  overflow-y: scroll;
  overflow-x: hidden;
}

#cancelButton{
    position: relative;
  top: 8vh;
  margin-right: 10px;
  background-color: red;
  border: 0;
}

#textArea{
  background-color: #1e1f21;
}

.telText {
  margin-right: 18px;
}

#createButton {
  position: relative;
  top: 8vh;
  margin-right: 10px;
  background-color: #9ec520;
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
}

#fileUpload {
  width: 400px;
  height: 40px;
  margin-left: 10px;
  position: absolute;
  left: 25vw;
  background-color: #1e1f21;
}

#fileUpload.button{
  background-color: #1e1f21;
}

#textArea {
  width: 400px;
  height: 40px;
  margin-left: 10px;
  position: absolute;
  left: 25vw;
}

#FormControlSelect {
  width: 400px;
  height: 35px;
  margin-left: 10px;
  position: absolute;
  left: 25vw;
  background-color: #1e1f21;
}
</style>
