<template>
  <div class="projectBackGround">
    <div class="topLine">
      <h5 class="projectTitle">
        <div class="projectAvatar1"></div>
        &ensp;P-22-03_projekt:
      </h5>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="ajanlatListDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Ajánlat
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdownProjectList"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="dropdownItem"
            ><i class="far fa-edit"></i> Szerkesztés</a
          >
          <a class="dropdown-item" id="dropdownItem"
            ><i class="far fa-trash-alt"></i> Törlés</a
          >
          <a class="dropdown-item" id="dropdownItem"
            ><i class="far fa-share-square"></i> Elküld/megoszt</a
          >
          <a class="dropdown-item" id="dropdownItem"
            ><i class="fas fa-print"></i> Nyomtatás</a
          >
        </div>
      </div>

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
        id="productFilterTop"
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
          <a class="dropdown-item" id="dropdownItem">Új Ajánlat</a>
        </div>
      </div>
    </div>
    <div class="buttonLine">
      <button
        type="button"
        id="projectButton"
        class="btn btn-primary"
        @click="navToDashboard"
      >
        <i class="fa-solid fa-chart-column"></i> Dashboard
      </button>
      <button
        type="button"
        id="projectButton"
        class="btn btn-primary"
        @click="navAdatlap"
      >
        <i class="fa-solid fa-list"></i> Projektinfo
      </button>
      <button
        type="button"
        id="projectButton"
        class="btn btn-primary"
        @click="navKoltsegvetes"
      >
        <i class="fa-solid fa-chart-line"></i> Költségvetés
      </button>
      <button
        type="button"
        id="projectButtonActive"
        class="btn btn-primary"
        @click="navToAjanlat"
      >
        <i class="fa-solid fa-hand-holding-dollar"></i> Ajánlat
      </button>
      <button
        type="button"
        id="projectButton"
        class="btn btn-primary"
        @click="navToBeszerzes"
      >
        <i class="fa-solid fa-dolly"></i> Beszerzés
      </button>
      <button
        type="button"
        id="projectButton"
        class="btn btn-primary"
        @click="navToEladas"
      >
        <i class="fa-solid fa-cart-arrow-down"></i> Eladás
      </button>
      <button
        type="button"
        id="projectButton"
        class="btn btn-primary"
        @click="navToPenzugy"
      >
        <i class="fa-solid fa-file-invoice-dollar"></i> Pénzügy
      </button>
      <button
        type="button"
        id="projectButton"
        class="btn btn-primary"
        @click="navToDiviziok"
      >
        <i class="fa-solid fa-layer-group"></i> Divíziok
      </button>
      <button
        type="button"
        id="projectButton"
        class="btn btn-primary"
        @click="navToKatalogus"
      >
        <i class="fa-solid fa-newspaper"></i> Katalógus
      </button>
      <button
        type="button"
        id="projectButton"
        class="btn btn-primary"
        @click="navToDocs"
      >
        <i class="fa-solid fa-file-lines"></i> Dokumentumok
      </button>
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

    <table class="table table-dark" id="ajanlatokTable">
      <thead>
        <tr>
          <th>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            />
          </th>
          <th scope="col">Ajánlat száma</th>
          <th scope="col">Ajánlat dátuma</th>
          <th scope="col">Vevő</th>
          <th scope="col">Ajánlat összege</th>
          <th scope="col">Ajánlat státusza</th>
          <th scope="col">Link</th>
          <th scope="col">Érvényesség</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            />
          </th>
          <td>101</td>
          <td>2022.01.01</td>
          <td>Horváth Jenő</td>
          <td>76.235 Ft</td>
          <td>Nyitott</td>
          <td>www.ajanlat.hu</td>
          <td>2022.12.31.</td>
        </tr>
        <tr>
          <th>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            />
          </th>
          <td>101</td>
          <td>2022.01.01</td>
          <td>Horváth Jenő</td>
          <td>76.235 Ft</td>
          <td>Nyitott</td>
          <td>www.ajanlat.hu</td>
          <td>2022.12.31.</td>
        </tr>
        <tr>
          <th>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            />
          </th>
          <td>101</td>
          <td>2022.01.01</td>
          <td>Horváth Jenő</td>
          <td>76.235 Ft</td>
          <td>Nyitott</td>
          <td>www.ajanlat.hu</td>
          <td>2022.12.31.</td>
        </tr>
        <tr>
          <th>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            />
          </th>
          <td>101</td>
          <td>2022.01.01</td>
          <td>Horváth Jenő</td>
          <td>76.235 Ft</td>
          <td>Nyitott</td>
          <td>www.ajanlat.hu</td>
          <td>2022.12.31.</td>
        </tr>
        <tr>
          <th>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            />
          </th>
          <td>101</td>
          <td>2022.01.01</td>
          <td>Horváth Jenő</td>
          <td>76.235 Ft</td>
          <td>Nyitott</td>
          <td>www.ajanlat.hu</td>
          <td>2022.12.31.</td>
        </tr>
        <tr @click="navToCreateAjanlat">
          <th colspan="8">Új ajánlat <i class="fa-solid fa-plus"></i></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Ajanlat",
  path: "/ajanlat",

  methods: {
    navKoltsegvetes() {
      this.$router.push("/project_koltsegvetes");
    },

    navAdatlap() {
      this.$router.push("/project_adatlap");
    },

    navNewAjanlat() {
      this.$router.push("/createajanlat");
    },

    navToAjanlat() {
      this.$router.push("/ajanlat");
    },

    navToDashboard() {
      this.$router.push("/project");
    },
    navToBeszerzes() {
      this.$router.push("/beszerzes");
    },

    navToEladas() {
      this.$router.push("/eladas");
    },

    navToPenzugy() {
      this.$router.push("/penzugy");
    },

    navToDiviziok() {
      this.$router.push("/diviziok");
    },

    navToKatalogus() {
      this.$router.push("/katalogus");
    },

    navToDocs() {
      this.$router.push("/docs");
    },

    navToCreateAjanlat() {
      this.$router.push("/createajanlatempty");
    },
  },
};
</script>

<style>
.projectTitle {
  position: relative;
  left: 2vw;
  color: white;
  text-decoration: none;
  top: 2vh;
}

#ajanlatokTable {
  position: relative;
  top: 2vh;
  width: 84vw;
  left: 1vw;
  border-radius: 10px;
  background-color: #2a2b2d;
}

.dashboard {
  text-decoration: underline;
}

#productGroupTop {
  background-color: #2a2b2d;
  border: 0;
  float: right;
  right: 160px;
  top: 6px;
  position: absolute;
}

#plusButtonAjanlat {
  background-color: #2a2b2d;
  border: 0;
  top: 1vh;
  position: absolute;
  float: right;
  right: 10px;
}

.szuresAjanlat {
  color: white;
  position: relative;

  left: 2vw;
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

#productFilterTop {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 54vw;
}

#filterCollapseContent {
  position: relative;
  top: 25px;
  background-color: #1e1f21;
  color: white;
}

#groupTop {
  background-color: #1e1f21;
  color: white;
}

#csoportButton {
  width: auto;
  margin-right: 10px;
  background-color: #1e1f21;
  border: 1px solid grey;
}

#collapseFilterTop {
  position: relative;
  bottom: 15px;
}

#szuro-drop-right {
  position: relative;
  margin-left: 10px;
  background-color: #1e1f21;

  border: 1px solid grey;
  margin-bottom: 5px;
  top: 20px;
}

#szuro-input:focus {
  outline: none;
  box-shadow: none;
}

#szuro-drop-right:focus {
  outline: none;
  box-shadow: none;
}

#szuro-input {
  background-color: #1e1f21;
  height: 27px;
  position: relative;
  bottom: 8px;
  color: white;
}

#ajanlatListDropdown {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  bottom: 29px;
  left: 2vw;
  font-size: 20px;
  text-decoration: underline;
}

#searchBarInput {
  background-color: #1e1f21;
  width: 40vw;
}

.csoportLine {
  display: flex;
}

#szuro-content {
  background-color: #1e1f21;
  color: white;
  position: relative;
  bottom: 4px;
  height: 20px;
}

#szuro-line {
  background-color: #1e1f21;
  color: white;
  height: 27px;
  margin-bottom: 5px;
}

.aktivSzurokAjanlatok {
  height: 20px;
  width: 83vw;
  border: 1px solid white;
  position: relative;

  left: 1vw;
  display: flex;
}

.dateTextAjanlat {
  position: absolute;
  right: 55px;
  top: 2vh;
  color: #68686a;
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

.projectBackGround {
  height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow: hidden;
}

#csoportositas1 {
  background-color: #2a2b2d;
  border: 0;
  right: 0;
  position: absolute;
}

#searchButtonTop {
  width: 40px;
  border: 0;
  color: white;
  background-color: #1e1f21;
}

#searchBarTop {
  background-color: #1e1f21;
  position: relative;
  color: white;
  top: 10px;
  left: 1vw;
}

#csoportDiv {
  position: absolute;
  right: 35px;
}

@media (max-width: 1200px) {
  .buttonLine {
    overflow-x: scroll;
  }
}
</style>
