<template>
  <div class="createBackground">
    <h5 class="createTitle">Új divízio</h5>
    <div class="formStuff">
      <div class="formLine">
        <text>Lista neve:</text>
        <input class="form-control" id="inputBox" placeholder="Lista neve" />
      </div>
      <div class="formLine">
        <text>Lista leírása:</text>
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
</style>
