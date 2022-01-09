<template>
  <div class="projectBackGround">
     <h5 class="projectTitle">
        <text class="dashboard">Új ügyfél számla</text>
      </h5>

     <div class="formLine">
        <text class="bizonylatText">Vevő:</text>
        <input class="form-control" id="inputBoxUS" placeholder="Külső bizonylat száma" />
      </div>
        <div class="formLine">
        <text class="bizonylatText">Számlaszám:</text>
        <input class="form-control" id="inputBoxUS" placeholder="Külső bizonylat száma" />
      </div>
        <div class="formLine">
        <text class="bizonylatText">Fizetési határidő:</text>
        <input class="form-control" id="inputBoxUS" placeholder="Külső bizonylat száma" />
      </div>

    <table class="table table-dark" id="koltsegTable">
      <thead>
        <tr>
          <th scope="col">Termékkód</th>
          <th scope="col">Terméknév</th>
          <th scope="col">DB szám (kiadott)</th>
          <th scope="col">Egységár</th>
          <th scope="col">Összár</th>
          > 
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BÉ-L101</td>
          <td>Spot</td>
          <td>170</td>
          <td>1000 Ft</td>
          <td>170 000 Ft</td>
        </tr>
        <tr>
           <td>BÉ-L101</td>
          <td>Spot</td>
          <td>170</td>
          <td>1000 Ft</td>
          <td>170 000 Ft</td>
        </tr>
        <tr>
           <td>BÉ-L101</td>
          <td>Spot</td>
          <td>170</td>
          <td>1000 Ft</td>
          <td>170 000 Ft</td>
        </tr>
      </tbody>
    </table>

  

     <button
        type="button"
        id="createButtonTK"
        @click="create"
        class="btn btn-success"
      >
        Mentés
      </button>
      <button
        type="button"
        id="createButtonTK"
        @click="back"
        class="btn btn-success"
      >
        Nyomtatás
      </button>

   
  </div>
</template>

<script>
export default {
  name: "ugyfelSzamla",
  path: "/ugyfelSzamla",

  methods: {
    navDashboard() {
      this.$router.push("/project");
    },
    navAdatlap() {
      this.$router.push("/project_adatlap");
    },
    navToAjanlat(){
      this.$router.push("/ajanlat");
    }
  },
};
</script>

<style>
#members {
  display: flex;
}


#inputBoxUS {
  width: 250px;
  height: 28px;
  margin-left: 10px;
  position: absolute;
  left: 15vw;
  top: 2.5vh;
}

.bizonylatText{
    color: white;
    position:relative;
    top: 3vh;
    left: 2vw;
}

#koltsegTable {
  position: relative;
  top: 7vh;
  width: 84vw;
  left: 2vw;
  background-color: #2a2b2d;
}

.icons {
  color: white;
  position: relative;
  top: 6vh;
  left: 2vw;
}

#overallTable {
  position: relative;
  top: 8vh;
  width: 84vw;
  left: 2vw;
  background-color: #2a2b2d;
}

#bizonylatSzam{
    height: 5vh;
    width: 20vw;
    position: relative;
    top : 2.5vh;
    left: 3vw;
}

.productImage {
  width: 50px;
  height: 30px;
  background-image: url("../assets/watch.jpg");
  background-size: cover;
}

.avatar1 {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: green;
  margin-right: 3px;
}

.avatar2 {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: dodgerblue;
  margin-right: 3px;
}

#szuroDropdown {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 1vw;
  margin-left: 5px;
  font-size: 15px;
}

.aktivSzurok {
  height: 20px;
  width: 84vw;
  border: 1px solid white;
  position: relative;
  top: 7vh;
  left: 2vw;
  display: flex;
}

.aktivSzuroText {
  color: white;
  font-size: 13px;
  position: relative;
  left: 3px;
  margin-right: 2vw;
}

.deleteActive {
  color: grey;
  font-size: 13px;
  position: relative;
  right: 3px;
}

#szuroDropdown:focus {
  box-shadow: none;
}

.szuroText {
  top: 5.5vh;
  position: relative;
}

.szures {
  color: white;
  position: relative;
  top: 1vh;
  left: 2vw;
  display: flex;
}

.projectTitle {
  position: relative;
  left: 2vw;
  color: white;
  text-decoration: none;
  top: 2vh;
}

#szuroDropdownItem {
  color: white;
}

#csoportositasBeerkez {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 23.5vw;
  margin-left: 5px;
  font-size: 15px;
}

#szuroDropdownItem:hover {
  background-color: #1e1f21;
  cursor: pointer;
}

.dashboard {
  text-decoration: underline;
}

.dividerProject {
  width: 84vw;
  position: relative;
  left: 2vw;
  height: 1px;
  background-color: #68686e;
  top: 2.5vh;
}

#projectButton {
  margin-left: 2px;
  background-color: #1e1f21;
  border: 0;
}

#searchBeerkeztetes {
  width: 10vw;
  position: relative;
  left: 39vw;
  top: 2vh;
  height: 4vh;
  background-color: #1e1f21;
}

.dateTextBeerkeztetes {
  color: white;
  position: relative;
  top: 2vh;
  left: 39vw;
  color: #68686a;
}

#projectButton:focus {
  box-shadow: none;
  text-decoration: underline;
}

.buttonLine {
  display: flex;
  top: 3vh;
  position: relative;
  left: 1vw;
}

.projectBackGround {
  height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow: hidden;
}
</style>
