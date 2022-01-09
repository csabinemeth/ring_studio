<template>
  <div class="createBackground">
    <h5 class="createTitle">Új fizetés</h5>
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
