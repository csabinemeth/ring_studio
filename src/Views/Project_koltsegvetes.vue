<template>
  <div class="projectBackGround">
    <div class="topLine">
      <h5 class="projectTitle">
        P-22-03_projekt:<text class="dashboard">Költségvetés</text>
      </h5>
      <input
        class="form-control mr-sm-2"
        id="searchBarKoltseg"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <text class="dateTextKoltseg">2021.12.23 csütörtök</text>
    </div>
    <div class="buttonLine">
      <button
        type="button"
        id="projectButton"
        class="btn btn-primary"
        @click="navDashboard"
      >
        Dashboard
      </button>
      <button
        type="button"
        id="projectButton"
        @click="navAdatlap"
        class="btn btn-primary"
      >
        Projektadatlap
      </button>
      <button type="button" id="projectButton" class="btn btn-primary">
        Költségvetés
      </button>
     <button type="button" id="projectButton" class="btn btn-primary" @click="navToAjanlat">Ajánlat</button>
      <button type="button" id="projectButton" class="btn btn-primary">
        Beszerzés
      </button>
      <button type="button" id="projectButton" class="btn btn-primary">
        Eladás
      </button>
      <button type="button" id="projectButton" class="btn btn-primary">
        Pénzügy
      </button>
      <button type="button" id="projectButton" class="btn btn-primary">
        Szekciók
      </button>
      <button type="button" id="projectButton" class="btn btn-primary">
        Katalógus
      </button>
      <button type="button" id="projectButton" class="btn btn-primary">
        Dokumentumok
      </button>
    </div>
    <div class="dividerProject"></div>

    <div class="szures">
      <text class="szuroText">Szűrés:</text>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Ügyfél
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Ügyfél 1</a>
          <a class="dropdown-item" id="szuroDropdownItem">Ügyfél 2</a>
          <a class="dropdown-item" id="szuroDropdownItem">Ügyfél 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Beszállító
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Beszállító 1</a>
          <a class="dropdown-item" id="szuroDropdownItem">Beszállító 2</a>
          <a class="dropdown-item" id="szuroDropdownItem">Beszállító 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Szekció
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Szekció 1</a>
          <a class="dropdown-item" id="szuroDropdownItem">Szekció 2</a>
          <a class="dropdown-item" id="szuroDropdownItem">Szekció 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Beszerzés
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Beszerzés A</a>
          <a class="dropdown-item" id="szuroDropdownItem">Beszerzés B</a>
          <a class="dropdown-item" id="szuroDropdownItem">Beszerzés C</a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Termékkód
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">BÉ-L101</a>
          <a class="dropdown-item" id="szuroDropdownItem">BÉ-L101</a>
          <a class="dropdown-item" id="szuroDropdownItem">BÉ-L101</a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Termék név
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Spot</a>
          <a class="dropdown-item" id="szuroDropdownItem">Spot</a>
          <a class="dropdown-item" id="szuroDropdownItem">Spot</a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="csoportositas"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Csoportosítás
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Spot</a>
          <a class="dropdown-item" id="szuroDropdownItem">Spot</a>
          <a class="dropdown-item" id="szuroDropdownItem">Spot</a>
        </div>
      </div>
    </div>

    <div class="aktivSzurok">
      <text class="aktivSzuroText">BÉ-L101</text>
      <text class="aktivSzuroText">Beszállító 1</text>
      <text class="aktivSzuroText">Szekció 1</text>
      <text class="deleteActive">Szűrők törlése</text>
    </div>

    <table class="table table-dark" id="koltsegTable">
      <thead>
        <tr>
          <th scope="col">Termékkód</th>
          <th scope="col">Termék</th>
          <th scope="col">Kép</th>
          <th scope="col">Beszerzési ár</th>
          <th scope="col">Eladási ár</th>
          <th scope="col">Árrés</th>
          <th scope="col">Státusz</th>
          >
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BÉ-L101</td>
          <td>Spot</td>
          <td><div class="productImage"></div></td>
          <td>76.235 Ft</td>
          <td>86.235 Ft</td>
          <td>10.000 Ft</td>
          <td>Megrendelve</td>
        </tr>
        <tr>
          <td>BÉ-L101</td>
          <td>Spot</td>
          <td><div class="productImage"></div></td>
          <td>76.235 Ft</td>
          <td>86.235 Ft</td>
          <td>10.000 Ft</td>
          <td>Megrendelve</td>
        </tr>
        <tr>
          <td>BÉ-L101</td>
          <td>Spot</td>
          <td><div class="productImage"></div></td>
          <td>76.235 Ft</td>
          <td>86.235 Ft</td>
          <td>10.000 Ft</td>
          <td>Megrendelve</td>
        </tr>
      </tbody>
    </table>

    <div class="icons">
      <i class="fas fa-th-large"></i>&nbsp;<i class="fas fa-check"></i>&nbsp;<i
        class="far fa-trash-alt"
      ></i
      >&nbsp;<i class="fas fa-adjust"></i>&nbsp;<i class="far fa-edit"></i
      >&nbsp;
    </div>

    <table class="table table-dark" id="overallTable">
      <thead>
        <tr>
          <th scope="col"></th>
          <td scope="col">Beszerzési ár</td>
          <td scope="col">Eladási ár</td>
          <td scope="col">Árrés</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Nettó összesítő</th>
          <td>153.513 Ft</td>
          <td>180.513 Ft</td>
          <td>27.000 Ft</td>
        </tr>
        <tr>
          <th>ÁFA mértéke (27%)</th>
          <td>722.081 Ft</td>
          <td>849.041 Ft</td>
          <td>127.000 Ft</td>
        </tr>
        <tr>
          <th>Bruttó összesítő</th>
          <td>722.081 Ft</td>
          <td>849.041 Ft</td>
          <td>127.000 Ft</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Project",
  path: "/project",

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

#csoportositas {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 24vw;
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

#searchBarKoltseg {
  width: 10vw;
  position: relative;
  left: 45vw;
  top: 2vh;
  height: 4vh;
  background-color: #1e1f21;
}

.dateTextKoltseg {
  color: white;
  position: relative;
  top: 2vh;
  left: 45vw;
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
