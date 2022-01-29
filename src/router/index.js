
import Project from '../Views/Project'
import Home from '../Views/Home'
import Favourites from '../Views/Favourites'
import Help from '../Views/Help'
import Partners from '../Views/Partners'
import Riports from '../Views/Riports'
import Settings from '../Views/Settings'
import Project_koltsegvetes from '../Views/Project_koltsegvetes'
import Suppliers from '../Views/Suppliers'
import CreateProject from '../Views/CreateProject'
import ProjectList from '../Views/ProjectList'
import Project_adatlap from '../Views/Project_adatlap'
import CreateProduct from '../Views/CreateProduct' 
import Ajanlat from '../Views/Ajanlat'
import Beszerzes from '../Views/Beszerzes'
import Eladas from '../Views/Eladas'
import Diviziok from '../Views/Diviziok'
import CreateAjanlat from '../Views/CreateAjanlat'
import CreateBeszerzes from '../Views/CreateBeszerzes'
import CreateDivizio from '../Views/CreateDivizio'
import CreateFizetes from '../Views/CreateFizetes'
import Penzugy from '../Views/Penzugy'
import Docs from '../Views/Dokumentumok'
import CreateRendeles from '../Views/CreateRendeles'
import Termekkiadas from '../Views/TermekKiadas'
import CreateKiadas from '../Views/CreateKiadas'
import BeszerzesBeerkeztetes from '../Views/BeszerzesBeerkeztetes'
import BeszerzesSzamla from '../Views/BeszerzesSzamla'
import UgyfelSzamla from '../Views/UgyfelSzamla'
import Katalogus from '../Views/Katalogus'
import Penzugy_beszerzes from '../Views/Penzugy_beszerzes'
import Penzugy_eladas from '../Views/Penzugy_eladas'
import Home_light from '../Views/Home_light'
import Project_light from '../Views/Project_light'
import ProjectList_light from '../Views/ProjectList_light'
import Project_koltsegvetes_light from '../Views/project_koltsegvetes_light'

import Ajanlat_print from '../Views/prints/Ajanlat_print'
import AjanlatFedlap_print from '../Views/prints/AjanlatFedlap_print'
import AjanlatSum_print from '../Views/prints/AjanlatSum_print'

import Ajanlatkero_print from '../Views/prints/Ajanlatkero_print'
import AjanlatkeroCover_print from '../Views/prints/AjanlatkeroCover_print'
import AjanlatkeroSum_print from '../Views/prints/AjanlatkeroSum_print'

import Becsles_print from '../Views/prints/Becsles_print'
import BecslesCover_print from '../Views/prints/BecslesCover_print'
import BecslesSum_print from '../Views/prints/BecslesSum_print'

import Beszerzes_print from '../Views/prints/Beszerzes_print'
import BeszerzesCover_print from '../Views/prints/BeszerzesCover_print'
import BeszerzesSum_print from '../Views/prints/BeszerzesSum_print'

import RendelesVissza_print from '../Views/prints/RendelesVissza_print'
import RendelesVisszaCover_print from '../Views/prints/RendelesVisszaCover_print'
import RendelesVisszaSum_print from '../Views/prints/RendelesVisszaSum_print'

import TermekBeerkez_print from '../Views/prints/TermekBeerkez_print'
import TermekBeerkezCover_print from '../Views/prints/TermekBeerkezCover_print'
import TermekBeerkezSum_print from '../Views/prints/TermekBeerkezSum_print'

import TermekKiadas_print from '../Views/prints/TermekKiadas_print'
import TermekKiadasCover_print from '../Views/prints/TermekKiadasCover_print'
import TermekKiadasSum_print from '../Views/prints/TermekKiadasSum_print'

import Szamla_print from '../Views/prints/Szamla_print'
import SzamlaCover_print from '../Views/prints/SzamlaCover_print'
import SzamlaSum_print from '../Views/prints/SzamlaSum_print'

import TermekLista_print from '../Views/prints/TermekLista_print'
import TermekListaCover_print from '../Views/prints/TermekListaCover_print'
import TermekListaSum_print from '../Views/prints/TermekListaSum_print'

import Katalogus_print from '../Views/prints/Katalogus_print'
import KatalogusCover_print from '../Views/prints/KatalogusCover_print'


import { createRouter, createWebHistory } from  'vue-router';


   const routes= [
        {
            path: '/project',
            name: 'Project',
            component: Project
        },
        {
            path: '/beszerzesBeerkeztetes',
            name: 'BeszerzesBeerkeztetes',
            component: BeszerzesBeerkeztetes,
        },
        {
            path: '/beszerzesSzamla',
            name: 'BeszerzesSzamla',
            component: BeszerzesSzamla
        },
        {
            path: '/termekkiadas',
            name: 'Termekkiadas',
            component: Termekkiadas
        },
        {
            path: '/ugyfelSzamla',
            name: 'UgyfelSzamla',
            component: UgyfelSzamla
        },
        {
            path: '/projectList',
            name: 'ProjectList',
            component: ProjectList
        },
        {
            path: '/projectList_light',
            name: 'ProjectList_light',
            component: ProjectList_light
        },
        {
            path: '/project_light',
            name: 'Project_light',
            component: Project_light

        },
        {
            path: '/createKiadas',
            name: 'CreateKiadas',
            component: CreateKiadas
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/katalogus',
            name: 'Katalogus',
            component: Katalogus
        },
        {
            path: '/diviziok',
            name: 'Diviziok',
            component: Diviziok
        },
        {
            path: '/favourites',
            name: 'Favourites',
            component: Favourites
        },
        {
            path: '/eladas',
            name: 'Eladas',
            component: Eladas
        },
        {
            path: '/help',
            name: 'Help',
            component: Help
        },
        {
            path: '/beszerzes',
            name: 'Beszerzes',
            component: Beszerzes
        },
        {
            path: '/Partners',
            name: 'Partners',
            component: Partners
        },
        {
            path: '/ajanlat',
            name: 'Ajanlat',
            component: Ajanlat
        },
        {
            path: '/riports',
            name: 'Riports',
            component: Riports
        },
        {
            path: '/home_Light',
            name: 'Home_light',
            component: Home_light
        },
        {
            path: '/penzugy',
            name: 'Penzugy',
            component: Penzugy
        },
        {
            path: '/penzugy_beszerzes',
            name: 'Penzugy_beszerzes',
            component: Penzugy_beszerzes
        },
        {
            path: '/penzugy_eladas',
            name: 'Penzugy_eladas',
            component: Penzugy_eladas
        },
        {
            path: '/docs',
            name: 'Docs',
            component: Docs
        },
        {
            path: '/settings',
            name: 'Settings',
            component: Settings
        },
        {
            path: '/suppliers',
            name: 'Suppliers',
            component: Suppliers
        },
        {
            path: '/project_koltsegvetes',
            name: 'Project_koltsegvetes',
            component: Project_koltsegvetes
        },
        {
            path: '/project_koltsegvetes_light',
            name: 'Project_koltsegvetes_light',
            component: Project_koltsegvetes_light
        },
        {
            path: '/createrendeles',
            name: 'CreateRendeles',
            component: CreateRendeles
        },
        {
            path: '/createproject',
            name: 'CreateProject',
            component: CreateProject
        },
        {
            path: '/createajanlat',
            name: 'CreateAjanlat',
            component: CreateAjanlat
        },
        {
            path: '/createbeszerzes',
            name: 'CreateBeszerzes',
            component: CreateBeszerzes
        },
        {
            path: '/createdivizio',
            name: 'CreateDivizio',
            component: CreateDivizio
        },
        {
            path: '/createfizetes',
            name: 'CreateFizetes',
            component: CreateFizetes
        },
        {
            path: '/createproduct',
            name: 'CreateProduct',
            component: CreateProduct
        },
        {
            path: '/project_adatlap',
            name: 'Project_adatlap',
            component: Project_adatlap
        },
        {
            path: '/ajanlat_print',
            name: 'Ajanlat_print',
            component: Ajanlat_print
        },
        {
            path: '/ajanlatFedlap_print',
            name: 'AjanlatFedlap_print',
            component: AjanlatFedlap_print
        },
        {
            path: '/ajanlatSum_print',
            name: 'AjanlatSum_print',
            component: AjanlatSum_print
        },
        {
            path: '/ajanlatkeroSum_print',
            name: 'AjanlatkeroSum_print',
            component: AjanlatkeroSum_print
        },
        {
            path: '/ajanlatkero_print',
            name: 'Ajanlatkero_print',
            component: Ajanlatkero_print
        },
        {
            path: '/ajanlatkeroCover_print',
            name: 'AjanlatkeroCover_print',
            component: AjanlatkeroCover_print
        },
        {
            path: '/becsles_print',
            name: 'Becsles_print',
            component: Becsles_print
        },
        {
            path: '/becslesCover_print',
            name: 'BecslesCover_print',
            component: BecslesCover_print
        },
        {
            path: '/becslesSum_print',
            name: 'BecslesSum_print',
            component: BecslesSum_print
        },
        {
            path: '/beszerzes_print',
            name: 'Beszerzes_print',
            component: Beszerzes_print
        },
        {
            path: '/beszerzesSum_print',
            name: 'BeszerzesSum_print',
            component: BeszerzesSum_print
        },
        {
            path: '/beszerzesCover_print',
            name: 'BeszerzesCover_print',
            component: BeszerzesCover_print
        },
        {
            path: '/rendelesVisszaCover_print',
            name: 'RendelesVisszaCover_print',
            component: RendelesVisszaCover_print
        },
        {
            path: '/rendelesVissza_print',
            name: 'RendelesVissza_print',
            component: RendelesVissza_print
        },
        {
            path: '/rendelesVisszaSum_print',
            name: 'RendelesVisszaSum_print',
            component: RendelesVisszaSum_print
        },
        {
            path: '/termekBeerkez_print',
            name: 'TermekBeerkez_print',
            component: TermekBeerkez_print
        },
        {
            path: '/termekBeerkezSum_print',
            name: 'TermekBeerkezSum_print',
            component: TermekBeerkezSum_print
        },
        {
            path: '/termekBeerkezCover_print',
            name: 'TermekBeerkezCover_print',
            component: TermekBeerkezCover_print
        },
        {
            path: '/termekKiadas_print',
            name: 'TermekKiadas_print',
            component: TermekKiadas_print
        },
        {
            path: '/termekKiadasCover_print',
            name: 'TermekKiadasCover_print',
            component: TermekKiadasCover_print
        },
        {
            path: '/termekKiadasSum_print',
            name: 'TermekKiadasSum_print',
            component: TermekKiadasSum_print
        },
        {
            path: '/szamla_print',
            name: 'Szamla_print',
            component: Szamla_print
        },
        {
            path: '/szamlaSum_print',
            name: 'SzamlaSum_print',
            component: SzamlaSum_print
        },
        {
            path: '/szamlaCover_print',
            name: 'SzamlaCover_print',
            component: SzamlaCover_print
        },
        {
            path: '/termekLista_print',
            name: 'TermekLista_print',
            component: TermekLista_print
        },
        {
            path: '/termekListaSum_print',
            name: 'TermekListaSum_print',
            component: TermekListaSum_print
        },
        {
            path: '/termekListaCover_print',
            name: 'TermekListaCover_print',
            component: TermekListaCover_print
        },
        {
            path: '/katalogus_print',
            name: 'Katalogus_print',
            component: Katalogus_print
        },
        {
            path: '/katalogusCover_print',
            name: 'KatalogusCover_print',
            component: KatalogusCover_print
        },

    ]

    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

    export default router

