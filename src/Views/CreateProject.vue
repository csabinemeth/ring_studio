<template>
  <div class="createBackground">
    <h5 class="createTitle">Új projekt</h5>
    <div class="formStuff">
      <div class="formLine">
        <text>Ügyfél:</text>
        <input class="form-control" id="inputBox" placeholder="Ügyfél" />
      </div>
      <div class="formLine">
        <text>Projekt kód:</text>
        <input class="form-control" id="inputBox" placeholder="Ügyfél" />
      </div>
      <div class="formLine">
        <text>Projekt név:</text>
        <input class="form-control" id="inputBox" placeholder="Ügyfél" />
      </div>
      <div class="formLine">
        <text class="addressText">Számlázási cím:</text> 
        <input class="form-control" id="inputBoxSmall" placeholder="Város" />
        <input class="form-control" id="inputBoxSmall" placeholder="utca" />
        <input class="form-control" id="inputBoxSmall" placeholder="házszám" />
        <input
          class="form-control"
          id="inputBoxSmall"
          placeholder="Irányítószám"
        />
      </div>
      <div class="formLine">
        <text>Email:</text>
        <input class="form-control" id="inputBox" placeholder="Email" />
      </div>
      <div class="formLine">
        <text class="telText">Telefon1:</text>
        <input class="form-control" id="inputBoxSmall" placeholder="Telefon1" />
        <text class="telText">Telefon2:</text>
        <input class="form-control" id="inputBoxSmall" placeholder="Telefon2" />
        <text class="telText">Telefon3:</text>
        <input class="form-control" id="inputBoxSmall" placeholder="Telefon3" />
      </div>
      <div class="formLine">
        <text>ÁFA:</text>
        <input class="form-control" id="inputBox" placeholder="ÁFA" />
      </div>
      <div class="formLine">
        <text class="addressText">Szállítási cím:&emsp;</text> 
        <input class="form-control" id="inputBoxSmall" placeholder="Város" />
     
        <input class="form-control" id="inputBoxSmall" placeholder="utca" />
 
        <input class="form-control" id="inputBoxSmall" placeholder="házszám" />
      
        <input
          class="form-control"
          id="inputBoxSmall"
          placeholder="Irányítószám"
        />
      </div>
      <div class="formLine">
        <text class="telText">Telefon1:</text>
        <input class="form-control" id="inputBoxSmall" placeholder="Telefon" />
        <text class="telText">Telefon2:</text>
        <input class="form-control" id="inputBoxSmall" placeholder="Telefon" />
        <text class="telText">Telefon3:</text>
        <input class="form-control" id="inputBoxSmall" placeholder="Telefon" />
      </div>
      <div class="formLine">
        <text>Költségkeret:</text>
        <input class="form-control" id="inputBox" placeholder="Költségkeret" />
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
