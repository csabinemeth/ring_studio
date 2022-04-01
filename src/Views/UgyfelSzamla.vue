<template>
  <div class="usBackGround">
    <div class="topLine">
      <h5 class="projectTitle">
        P-22-03_projekt:<text class="dashboard"> Új ügyfél számla</text>
      </h5>

      <button
        class="btn btn-primary"
        type="button"
        data-toggle="collapse"
        id="productGroupTop"
        data-target="#collapseGroupTop"
        aria-expanded="false"
        aria-controls="collapseGroupTop"
      >
        <i class="fa-solid fa-layer-group"></i>
      </button>
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

      <button
        class="btn btn-primary"
        type="button"
        data-toggle="collapse"
        id="usFilterTop"
        data-target="#collapseFilterTop"
        aria-expanded="false"
        aria-controls="collapseFilterTop"
      >
        <i class="fa-solid fa-filter"></i>
      </button>
      <div class="dropdown1">
        <button
          class="btn btn-secondary"
          type="button"
          id="plusButton1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fas fa-plus"></i>
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="dropdownItem"> Új ügyfél</a>
        </div>
      </div>
    </div>
   <div class="buttonLine">
  <button type="button" id="projectButton" class="btn btn-primary" @click="navToDashboard"><i class="fa-solid fa-chart-column"></i> Dashboard</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navAdatlap"><i class="fa-solid fa-list"></i> Projektinfo</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navKoltsegvetes"><i class="fa-solid fa-chart-line"></i> Költségvetés</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToAjanlat"><i class="fa-solid fa-hand-holding-dollar"></i> Ajánlat</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToBeszerzes"><i class="fa-solid fa-dolly"></i> Beszerzés</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToEladas"><i class="fa-solid fa-cart-arrow-down"></i> Eladás</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToPenzugy"><i class="fa-solid fa-file-invoice-dollar"></i> Pénzügy</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToDiviziok"><i class="fa-solid fa-layer-group"></i> Divíziok</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToKatalogus"><i class="fa-solid fa-newspaper"></i> Katalógus</button>
 <button type="button" id="projectButton" class="btn btn-primary" @click="navToDocs"><i class="fa-solid fa-file-lines"></i> Dokumentumok</button>
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

    <div class="collapse" id="collapseGroupTop">
      <div class="card card-body" id="groupTop">
        Csoportosítás:
        <div class="csoportLine">
          <button type="button" id="csoportButton" class="btn btn-dark">
            Ajánlat száma
          </button>
          <button type="button" id="csoportButton" class="btn btn-dark">
            Dátum
          </button>
          <button type="button" id="csoportButton" class="btn btn-dark">
            Vevő
          </button>
          <button type="button" id="csoportButton" class="btn btn-dark">
            Összeg
          </button>
          <button type="button" id="csoportButton" class="btn btn-dark">
            Státusz
          </button>
          <button type="button" id="csoportButton" class="btn btn-dark">
            Link
          </button>

          <button type="button" id="csoportButton" class="btn btn-dark">
            Érvényesség
          </button>
        </div>
      </div>
    </div>

    <div class="collapse" id="collapseFilterTop">
      <div class="card card-body" id="filterCollapseContent">
        <div class="szuresAjanlat">
          <div class="szuro-oszlop">
            <div class="btn-group dropright">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                id="szuro-drop-right"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Kategória
              </button>
              <div class="dropdown-menu" id="szuro-content">
                <a class="dropdown-item" id="szuro-line" href="#"
                  ><input
                    type="email"
                    class="form-control"
                    id="szuro-input"
                    aria-describedby="emailHelp"
                    placeholder="Kategória"
                /></a>
              </div>
            </div>

            <br />

            <div class="btn-group dropright">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                id="szuro-drop-right"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Szállító
              </button>
              <div class="dropdown-menu" id="szuro-content">
                <a class="dropdown-item" id="szuro-line" href="#"
                  ><input
                    type="email"
                    class="form-control"
                    id="szuro-input"
                    aria-describedby="emailHelp"
                    placeholder="Szállító"
                /></a>
              </div>
            </div>
            <br />
            <div class="btn-group dropright">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                id="szuro-drop-right"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Vevő
              </button>
              <div class="dropdown-menu" id="szuro-content">
                <a class="dropdown-item" id="szuro-line" href="#"
                  ><input
                    type="email"
                    class="form-control"
                    id="szuro-input"
                    aria-describedby="emailHelp"
                    placeholder="Vevő"
                /></a>
              </div>
            </div>
            <br />
            <div class="btn-group dropright">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                id="szuro-drop-right"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Státusz
              </button>
              <div class="dropdown-menu" id="szuro-content">
                <a class="dropdown-item" id="szuro-line" href="#"
                  ><input
                    type="email"
                    class="form-control"
                    id="szuro-input"
                    aria-describedby="emailHelp"
                    placeholder="Státusz"
                /></a>
              </div>
            </div>
            <br />
            <div class="btn-group dropright">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                id="szuro-drop-right"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Fajta
              </button>
              <div class="dropdown-menu" id="szuro-content">
                <a class="dropdown-item" id="szuro-line" href="#"
                  ><input
                    type="email"
                    class="form-control"
                    id="szuro-input"
                    aria-describedby="emailHelp"
                    placeholder="Fajta"
                /></a>
              </div>
            </div>
            <br />
            <div class="btn-group dropright">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                id="szuro-drop-right"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Új szűrő
              </button>
              <div class="dropdown-menu" id="szuro-content">
                <a class="dropdown-item" id="szuro-line" href="#"
                  ><input
                    type="email"
                    class="form-control"
                    id="szuro-input"
                    aria-describedby="emailHelp"
                    placeholder="Mező"
                /></a>

                <a class="dropdown-item" id="szuro-line" href="#"
                  ><input
                    type="email"
                    class="form-control"
                    id="szuro-input"
                    aria-describedby="emailHelp"
                    placeholder="Érték"
                /></a>
              </div>
            </div>
          </div>
        </div>

        <div class="aktivSzurokAjanlatok">
          <text class="aktivSzuroText">Nyitott</text>
          <text class="aktivSzuroText">101</text>
          <text class="deleteActive"
            >Szűrők törlése <i class="fas fa-times"></i
          ></text>
        </div>
      </div>
    </div>

    <div class="formLines">
      <input class="form-control" id="inputBoxUs" placeholder="Vevő" />
      <input class="form-control" id="inputBoxUs" placeholder="Számlaszám" />
      <input
        class="form-control"
        id="inputBoxUs"
        placeholder="Fizetési határidő"
      />
      <input
        class="form-control"
        id="inputBoxUs"
        placeholder="Előleg számlaszáma"
      />
      <input class="form-control" id="inputBoxUs" placeholder="Kedvezmény" />
      <input class="form-control" id="inputBoxUs" placeholder="Előleg összege" />
    </div>

    <table class="table table-dark" id="ugyfelSzamlaTable">
      <thead>
        <tr>
          <th scope="col">Termékkód</th>
          <th scope="col">Terméknév</th>
          <th scope="col">DB szám (kiadott)</th>
          <th scope="col">Egységár</th>
          <th scope="col">Összár</th>
          
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
           <tr class="transparent">
          <td></td>
           <td colspan="4"></td>
        </tr>
        <tr>
          <th>Összár összesítő:</th>
          <td></td>
          <td></td>
          <td></td>
          <td>510 000 Ft</td>
        </tr>
        <tr>
          <th>Előleg:</th>
          <td></td>
          <td></td>
          <td></td>
          <td>-170 000 Ft</td>
        </tr>

        <tr>
          <th>Kedvezmény:</th>
          <td></td>
          <td></td>
          <td></td>
          <td>-50 000 Ft</td>
        </tr>
        <tr>
          <th>Fizetendő összeg:</th>
          <td></td>
          <td></td>
          <td></td>
          <th>290 000 Ft</th>
        </tr>
      </tbody>
    </table>

    <table class="table table-dark" id="ugyfelSzamlaTable">
      <thead></thead>
      <tbody></tbody>
    </table>

    <button
      type="button"
      id="createButtonTK1"
      @click="create"
      class="btn btn-success"
    >
      Mentés
    </button>
    <button
      type="button"
      id="createButtonTK1"
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
    navToAjanlat() {
      this.$router.push("/ajanlat");
    },
  },
};
</script>

<style>
#members {
  display: flex;
}

.aktivSzurokUgyfelSzamla {
  height: 20px;
  width: 81.5vw;
  border: 1px solid white;
  position: relative;
  top: 13vh;
  left: 2vw;
  display: flex;
}

#inputBoxUS {
  width: 250px;
  height: 28px;
  margin-left: 10px;
  position: absolute;
  left: 15vw;
  background-color: #1e1f21;
  top: 2.5vh;
}

.bizonylatText {
  color: white;
  position: relative;
  top: 3vh;
  left: 2vw;
}

#csoportositasUgyfelSzamla {
  background-color: #2a2b2d;
  border: 0;
  position: absolute;
  left: 25vw;
  margin-left: 5px;
  font-size: 15px;
}

#inputBoxUs {
   width: 175px;
  height: 28px;
  margin-left: 12px;
  margin-bottom: 10px;
  position: relative;
  left: 2vw;
  top: 2vh;
  background-color: #1e1f21;
}

#ugyfelSzamlaTable {
  position: relative;
  top: 2vh;
  width: 81.5vw;
  left: 2vw;
  background-color: #2a2b2d;
}

.icons {
  color: white;
  position: relative;
  top: 6vh;
  left: 2vw;
}

#createButtonUS {
  margin-right: 10px;
  position: relative;
  top: 10vh;
  left: 2vw;
  background-color: #9fc321;
}

#overallTable {
  position: relative;
  top: 8vh;
  width: 84vw;
  left: 2vw;
  background-color: #2a2b2d;
}

#szuroDropdown {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 1vw;
  margin-left: 5px;
  font-size: 15px;
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

.szuresUgyfelSzamla {
  color: white;
  position: relative;
  top: 6vh;
  left: 2vw;
  display: flex;
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

#projectButton {
  margin-left: 2px;
  background-color: #1e1f21;
  border: 0;
}


#usFilterTop {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 52vw;
}


#projectButton:focus {
  box-shadow: none;
  text-decoration: underline;
}

.buttonLine {
  display: flex;
  top: 0vh;
  position: relative;
  left: 1vw;
}

.usBackGround {
  height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
