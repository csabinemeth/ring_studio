<template>
  <div class="ujAjanlatBackGround">
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
          Új ajánlat
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
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="createBeszerzesListDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-print"></i> Nyomtatás
          </button>
          <div
            class="dropdown-menu"
            id="openedDrowdownProjectList"
            aria-labelledby="dropdownMenuButton"
          >
            <a class="dropdown-item" id="dropdownItem"
              ><i class="fas fa-print"></i> Nyomtatás előlappal</a
            >
            <a class="dropdown-item" id="dropdownItem"
              ><i class="fas fa-print"></i> Nyomtatás képpel</a
            >
            <a class="dropdown-item" id="dropdownItem"
              ><i class="fas fa-print"></i> Nyomtatás árakkal</a
            >
            <a class="dropdown-item" id="dropdownItem"
              ><i class="fas fa-print"></i> Nyomtatás összesítővel</a
            >
          </div>
        </div>
      </div>
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
                      id="productFilterTop1"
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
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="searchBarInput">
    <button class="btn btn-success" type="submit" id="searchButtonTop"><i class="fa-solid fa-magnifying-glass"></i></button>
  </div>
  </div>
</div>

<div class="collapse" id="collapseFilterTop">
  <div class="card card-body" id="filterCollapseContent">
    <div class="szures1">
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
          Ajánlat státusz
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Nyitott</a>
          <a class="dropdown-item" id="szuroDropdownItem">Lezárt</a>
          <a class="dropdown-item" id="szuroDropdownItem">Elfogadott</a>
        </div>
      </div>
    
      <div class="dropdown" id="csoportDiv">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="csoportositas1"
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
          <a class="dropdown-item" id="szuroDropdownItem">Csoport1</a>
          <a class="dropdown-item" id="szuroDropdownItem">Csoport2</a>
          <a class="dropdown-item" id="szuroDropdownItem">Csoport3</a>
        </div>
      </div>
    </div>

    <div class="aktivSzurokAjanlatok">
      <text class="aktivSzuroText">Nyitott</text>
      <text class="aktivSzuroText">101</text>
      <text class="deleteActive">Szűrők törlése <i class="fas fa-times"></i></text>
    </div>
  </div>
</div>

    <div class="formStuff">
      <div class="inputsBSZ">
     <div class="formLine">
        <input class="form-control" id="inputBoxProductAjanlat1" placeholder="Ajánlat címe" /> <div class="verticalSplit"></div>
      </div>
       <div class="formLine">
        <input class="form-control" id="inputBoxProductAjanlat1" placeholder="Kedvezmény(%)" /> <div class="verticalSplit"></div>
      </div>
       <div class="formLine">
        <input class="form-control" id="inputBoxProductAjanlat1" placeholder="Kedvezmény(Ft)" /> <div class="verticalSplit"></div>
      </div>
      <div class="formLine">
        <input class="form-control" id="inputBoxProductAjanlat1" placeholder="Ajánlat érvényessége" /> <div class="verticalSplit"></div>
      </div>
      <div class="formLine">
        <input class="form-control" id="inputBoxProductAjanlat1" placeholder="Ajánlat száma" /> <div class="verticalSplit"></div>
      </div>
      <div class="formLine">
        <input class="form-control" id="inputBoxProductAjanlat1" placeholder="Megjegyzés" /> 
      </div>
     
      </div>
    </div>
    <table class="table table-dark" id="koltsegTable">
      <thead>
        <tr>
          <th scope="col">
            <button
              type="button"
              class="btn btn-primary"
              id="productsModalButton"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Termékek hozzáadása <i class="fa-solid fa-plus"></i>
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content" id="productsModalContent">
                  <div class="modal-header">
                    <h5 class="modal-title" id="productsLabel">
                      Termékek hozzáadása
                    </h5>

                    <button
                      class="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      id="productSearch"
                      data-target="#collapseExampleSearch"
                      aria-expanded="false"
                      aria-controls="collapseExampleSearch"
                    >
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </button>

                    <button
                      class="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      id="productFilter"
                      data-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i class="fa-solid fa-filter"></i>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="collapse" id="collapseExample">
                      <div class="card card-body" id="collapseContent">
                        <div class="szuresAjanlat">
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
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Ügyfél 1</a
                              >
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Ügyfél 2</a
                              >
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Ügyfél 3</a
                              >
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
                              Divízió
                            </button>
                            <div
                              class="dropdown-menu"
                              id="openedDrowdown"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Ügyfél 1</a
                              >
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Ügyfél 2</a
                              >
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Ügyfél 3</a
                              >
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
                              Kategória
                            </button>
                            <div
                              class="dropdown-menu"
                              id="openedDrowdown"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Nyitott</a
                              >
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Lezárt</a
                              >
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Elfogadott</a
                              >
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
                              Termék státusz
                            </button>
                            <div
                              class="dropdown-menu"
                              id="openedDrowdown"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Ügyfél 1</a
                              >
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Ügyfél 2</a
                              >
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Ügyfél 3</a
                              >
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
                              Ajánlat száma
                            </button>
                            <div
                              class="dropdown-menu"
                              id="openedDrowdown"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Ügyfél 1</a
                              >
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Ügyfél 2</a
                              >
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Ügyfél 3</a
                              >
                            </div>
                          </div>

                          <div class="dropdown" id="csoportDiv">
                            <button
                              class="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="csoportositas1"
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
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Csoport1</a
                              >
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Csoport2</a
                              >
                              <a class="dropdown-item" id="szuroDropdownItem"
                                >Csoport3</a
                              >
                            </div>
                          </div>
                        </div>

                        <div class="aktivSzurokAjanlat">
                          <text class="aktivSzuroText">Ügyfél</text>
                          <text class="aktivSzuroText">Divízió</text>
                          <text class="deleteActive">Szűrők törlése</text>
                        </div>
                      </div>
                    </div>

                     <div class="collapse" id="collapseExampleSearch">
                      <div class="card card-body" id="collapseContent">
                        <div class="searchLine">
                        <input class="form-control mr-sm-2" type="search" id="addProductSearch" placeholder="Search" aria-label="Search"> <button class="btn btn-success" id="searchApply" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    </div>
                    </div>
                    <table class="table table-dark" id="ajanlatTable">
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
                          <th scope="col">Termékkód</th>
                          <th scope="col">Termék</th>
                          <th scope="col">Kép</th>
                          <th scope="col">Beszerzési ár</th>
                          <th scope="col">Kalkulált ár</th>
                          <th scope="col">Ajánlati ár</th>
                          <th scope="col">Árrés</th>
                          <th scope="col">Státusz</th>
                          <th></th>
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
                          <td>BÉ-L101</td>
                          <td>Spot</td>
                          <td><div class="productImage"></div></td>
                          <td>76.235 Ft</td>
                          <td>86.235 Ft</td>
                          <td>86.235 Ft</td>
                          <td>10 000 Ft</td>
                          <td>Megrendelve</td>
                          <td><i class="fas fa-minus"></i></td>
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
                          <td>BÉ-L101</td>
                          <td>Spot</td>
                          <td><div class="productImage"></div></td>
                          <td>76.235 Ft</td>
                          <td>86.235 Ft</td>
                          <td>86.235 Ft</td>
                          <td>10 000 Ft</td>
                          <td>Megrendelve</td>
                          <td><i class="fas fa-minus"></i></td>
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
                          <td>BÉ-L101</td>
                          <td>Spot</td>
                          <td><div class="productImage"></div></td>
                          <td>76.235 Ft</td>
                          <td>86.235 Ft</td>
                          <td>86.235 Ft</td>
                          <td>10 000 Ft</td>
                          <td>Megrendelve</td>
                          <td><i class="fas fa-minus"></i></td>
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
                          <td>BÉ-L101</td>
                          <td>Spot</td>
                          <td><div class="productImage"></div></td>
                          <td>76.235 Ft</td>
                          <td>86.235 Ft</td>
                          <td>86.235 Ft</td>
                          <td>10 000 Ft</td>
                          <td>Megrendelve</td>
                          <td><i class="fas fa-minus"></i></td>
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
                          <td>BÉ-L101</td>
                          <td>Spot</td>
                          <td><div class="productImage"></div></td>
                          <td>76.235 Ft</td>
                          <td>86.235 Ft</td>
                          <td>86.235 Ft</td>
                          <td>10 000 Ft</td>
                          <td>Megrendelve</td>
                          <td><i class="fas fa-minus"></i></td>
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
                          <td>BÉ-L101</td>
                          <td>Spot</td>
                          <td><div class="productImage"></div></td>
                          <td>76.235 Ft</td>
                          <td>86.235 Ft</td>
                          <td>86.235 Ft</td>
                          <td>10 000 Ft</td>
                          <td>Megrendelve</td>
                          <td><i class="fas fa-minus"></i></td>
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
                          <td>BÉ-L101</td>
                          <td>Spot</td>
                          <td><div class="productImage"></div></td>
                          <td>76.235 Ft</td>
                          <td>86.235 Ft</td>
                          <td>86.235 Ft</td>
                          <td>10 000 Ft</td>
                          <td>Megrendelve</td>
                          <td><i class="fas fa-minus"></i></td>
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
                          <td>BÉ-L101</td>
                          <td>Spot</td>
                          <td><div class="productImage"></div></td>
                          <td>76.235 Ft</td>
                          <td>86.235 Ft</td>
                          <td>86.235 Ft</td>
                          <td>10 000 Ft</td>
                          <td>Megrendelve</td>
                          <td><i class="fas fa-minus"></i></td>
                        </tr>
                        <tr class="transparent">
                          <td></td>
                          <td colspan="9"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Mégsem
                    </button>
                    <button
                      type="button"
                      class="btn btn-dark"
                      data-dismiss="modal"
                      @click="navToAjanlat"
                    >
                      Hozzáadás
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: "createajanlatempty",
  path: "/createajanlatempty",

  methods: {
    navKoltsegvetes() {
      this.$router.push("/project_koltsegvetes");
    },

    navAdatlap() {
      this.$router.push("/project_adatlap");
    },

    navToAjanlat() {
      this.$router.push("/createajanlat");
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

    navToAjanlat_print() {
      this.$router.push("/ajanlat_print");
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

#collapseContent {
  background-color: #1e1f21;
  display: flex;
}

.aktivSzurokAjanlat {
  height: 20px;
  width: 72vw;
  border: 1px solid white;
  position: relative;
  top: 0vh;
  left: 1vw;
  display: flex;
}

#productsModalContent {
  background-color: #1e1f21;
  width: 85vw;
  position: relative;
  left: -22vw;
  height: auto;
}

#inputBoxProductAjanlat1{
  background-color: #1e1f21;
  margin-left: 10px;
    top: -40px;
    border: 0;

  width: 140px;
  position: relative;
  left: 2vw;
}
#productFilter {
  background-color: #1e1f21;
  border: 0;
}

#productSearch {
  background-color: #1e1f21;
  border: 0;
  float: right;
  position: relative;
  left: 28vw;
  }

  #productSearchTop {
  background-color: #2a2b2d;
  border: 0;
  float: right;
  right: 70px;
  top: 5px;
  position: absolute;

  }

.szuresAjanlat {
  color: white;
  position: relative;
  top: -7vh;
  left: 1vw;
  display: flex;
}

#searchApply{
  background-color: #2a2b2d;
  border: 0;
  width:40px;
}

#productsModalButton {
  background-color: #2a2b2d;
  border: 0;
  width: auto;
}

#createButtonAjanlat {
  position: relative;
  top: 8vh;
  float: right;
  margin-right: 10px;
  background-color: #9fc321;
  border: 0;
}

.formLinesAjanlatempty {
  display: flex;
  position: relative;
  bottom: 50px;
}

.dashboard {
  text-decoration: underline;
}

#plusButtonujAjanlat {
  background-color: #2a2b2d;
  border: 0;
  top: 1vh;
  position: relative;
  left: 40vw;
}


#addProductSearch{
  width: 500px;
  color: white;
  background-color: #1e1f21;
}

.searchLine{
  display: flex;
}

#inputBox{
  width: 175px;
  height: 28px;
  margin-left: 12px;
  margin-bottom: 10px;
  position: relative;
  left: 2vw;
  top: 10vh;
  background-color: #1e1f21;
}



#ajanlatTable {
  position: relative;
  width: 84vw;
  left: -0.2vw;
  background-color: #2a2b2d;
}

#productsLabel {
  color: white;
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

#beszerzesListDropdown {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  bottom: 29px;
  background-color: #1e1f21;
  left: 2vw;
  font-size: 20px;
  text-decoration: underline;
}

.dateText1 {
  position: absolute;
  right: 65px;
  top: 2vh;
  color: #68686a;
}

#createBeszerzesListDropdown {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  bottom: 29px;
  background-color: #1e1f21;
  left: 0.5vw;
  top: 0.5vh;
}

#projectButton:focus {
  box-shadow: none;
  text-decoration: underline;
}

.buttonLine {
  display: flex;
  top:0vh;
  position: relative;
  left: 1vw;
}

#csoportositasCAjanlat {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  left: 27.5vw;
  margin-left: 5px;
  font-size: 15px;
}

.ujAjanlatBackGround {
  height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
