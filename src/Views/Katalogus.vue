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
          Katalógus
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
            ><i class="far fa-copy"></i> Duplikál</a
          >
          <a class="dropdown-item" id="dropdownItem"
            ><i class="far fa-star"></i> Mentés a kedvencek közé</a
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
        id="katalogusFilterTop"
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
          <a class="dropdown-item" id="dropdownItem">Új Termék</a>
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
        id="projectButton"
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
        id="projectButtonActive"
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
    <table class="table table-dark" id="koltsegTable">
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
          <th scope="col">Szállító</th>
          <th scope="col">Gyártó</th>
          <th scope="col">Kategória</th>
          <th scope="col">Termékfajta</th>
          <th scope="col">Kép</th>
          <th scope="col">Szín</th>
          <th scope="col">Méret</th>
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
          <td>Szállító kft.</td>
          <td>Gyártó kft.</td>
          <td>Kategória</td>
          <td>Fajta</td>
          <td><div class="catalogPicture"></div></td>
          <td>Fekete</td>
          <td>20x20</td>
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
          <td>Szállító kft.</td>
          <td>Gyártó kft.</td>
          <td>Kategória</td>
          <td>Fajta</td>
          <td><div class="catalogPicture"></div></td>
          <td>Fekete</td>
          <td>20x20</td>
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
          <td>Szállító kft.</td>
          <td>Gyártó kft.</td>
          <td>Kategória</td>
          <td>Fajta</td>
          <td><div class="catalogPicture"></div></td>
          <td>Fekete</td>
          <td>20x20</td>
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
          <td>Szállító kft.</td>
          <td>Gyártó kft.</td>
          <td>Kategória</td>
          <td>Fajta</td>
          <td><div class="catalogPicture"></div></td>
          <td>Fekete</td>
          <td>20x20</td>
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
          <td>Szállító kft.</td>
          <td>Gyártó kft.</td>
          <td>Kategória</td>
          <td>Fajta</td>
          <td><div class="catalogPicture"></div></td>
          <td>Fekete</td>
          <td>20x20</td>
        </tr>
        <tr>
          <td colspan="8">Hozzáadás <i class="fa-solid fa-plus"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Katalogus",
  path: "/katalogus",

  methods: {
    navKoltsegvetes() {
      this.$router.push("/project_koltsegvetes");
    },

    navAdatlap() {
      this.$router.push("/project_adatlap");
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

#createButtonKatalógus {
  position: relative;
  top: 7vh;
  left: 2vw;
  background-color: #9ec520;
  border: 0;
}

.dashboard {
  text-decoration: underline;
}

.catalogPicture{
     background-image: url("../assets/lamp.png");
  background-size: cover;
  width: 90px;
  height: 60px;
}

#katalogusFilterTop {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 52.3vw;
}


#plusButtonKatalogus {
  background-color: #2a2b2d;
  border: 0;
  top: 1vh;
  position: relative;
  left: 41vw;
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

#ajanlatListDropdown {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  bottom: 29px;
  left: 2vw;
  font-size: 20px;
  text-decoration: underline;
}

.dateTextKatalogus {
  color: white;
  position: relative;
  top: 2vh;
  left: 40.5vw;
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

#csoportositasAjanlat {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 53.5vw;
  margin-left: 5px;
  font-size: 15px;
}
</style>
