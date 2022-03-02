<template>
  <div class="createBackground">
   <div class="topLine">
      <h5 class="projectTitle"><div class="projectAvatar1"></div>&ensp;
        P-22-03_projekt:<text class="dashboard"> Új divizió</text>
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
        <text>Divizió neve:</text>
        <input class="form-control" id="inputBox" placeholder="Lista neve" />
      </div>
      <div class="formLine">
        <text>Divizió leírása:</text>
        <input class="form-control" id="inputBox" placeholder="Lista leírása" />
      </div>
         <div class="formLine">
        <text>Típus:</text>
        <select class="form-control" id="FormControlSelect" >
          <option>Lista</option>
          <option>Szám</option>
          <option>Szöveg</option>
        </select>
      </div>
      <div class="formLine">
        <text>Értékek:</text>
        <input class="form-control" id="inputBox" placeholder="Értékek" />
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
  name: "CreateDivizio",
  path: "/createdivizio",

  methods: {
    create() {
      this.$router.push("/diviziok");
    },

    back() {
      this.$router.push("/diviziok");
    },
  },
};
</script>

<style>
.createBackground {
  height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow: scroll;
  color: white;
}

.telText {
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

#fileUpload {
  width: 400px;
  height: 40px;
  margin-left: 10px;
  position: absolute;
  left: 25vw;
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
}





#plusButtonUjDivizio{
  background-color: #9ec520;
  border: 0;
  top: 1vh;
  position: relative;
  left: 44vw;
}



.dateTextUjDivizio {
  color: white;
  position: relative;
  top: 2vh;
  left: 43.5vw;
  color: #68686a;
}
</style>
