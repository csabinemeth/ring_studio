
import Project from '../Views/Project'
import Home from '../Views/Home'
import Favourites from '../Views/Favourites'
import Help from '../Views/Help'
import Partners from '../Views/Partners'
import Riports from '../Views/Riports'
import Settings from '../Views/Settings'
import SettingsMe from '../Views/SettingsMe'
import SettingsTk from '../Views/SettingsTk'
import SettingsTf from '../Views/SettingsTf'
import SettingsTs from '../Views/SettingsTs'
import SettingsAs from '../Views/SettingsAs'
import SettingsBs from '../Views/SettingsBs'
import SettingsRs from '../Views/SettingsRs'
import SettingsCa from '../Views/SettingsCa'
import SettingsFh from '../Views/SettingsFh'
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
import CreateAjanlatCsoportositas from '../Views/CreateAjanlatCsoportositas'
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


import Becsles_print from '../Views/prints/Becsles_print'

import Beszerzes_print from '../Views/prints/Beszerzes_print'

import RendelesVissza_print from '../Views/prints/RendelesVissza_print'

import TermekBeerkez_print from '../Views/prints/TermekBeerkez_print'

import TermekKiadas_print from '../Views/prints/TermekKiadas_print'

import Szamla_print from '../Views/prints/Szamla_print'

import TermekLista_print from '../Views/prints/TermekLista_print'

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
            path: '/settingsMe',
            name: 'SettingsMe',
            component: SettingsMe
        },
        {
            path: '/settingsTk',
            name: 'SettingsTk',
            component: SettingsTk
        },
        {
            path: '/settingsTf',
            name: 'SettingsTf',
            component: SettingsTf
        },
        {
            path: '/settingsTs',
            name: 'SettingsTs',
            component: SettingsTs
        },
        {
            path: '/settingsAs',
            name: 'SettingsAs',
            component: SettingsAs
        },
        {
            path: '/settingsBs',
            name: 'SettingsBs',
            component: SettingsBs
        },
        {
            path: '/settingsRs',
            name: 'SettingsRs',
            component: SettingsRs
        },
        {
            path: '/settingsCa',
            name: 'SettingsCa',
            component: SettingsCa
        },
        {
            path: '/settingsFh',
            name: 'SettingsFh',
            component: SettingsFh
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
            path: '/createajanlatcsoportositas',
            name: 'CreateAjanlatCsoportositas',
            component: CreateAjanlatCsoportositas
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
            path: '/ajanlatkero_print',
            name: 'Ajanlatkero_print',
            component: Ajanlatkero_print
        },
        {
            path: '/becsles_print',
            name: 'Becsles_print',
            component: Becsles_print
        },
        {
            path: '/beszerzes_print',
            name: 'Beszerzes_print',
            component: Beszerzes_print
        },
        {
            path: '/rendelesVissza_print',
            name: 'RendelesVissza_print',
            component: RendelesVissza_print
        },
        {
            path: '/termekBeerkez_print',
            name: 'TermekBeerkez_print',
            component: TermekBeerkez_print
        },
        {
            path: '/termekKiadas_print',
            name: 'TermekKiadas_print',
            component: TermekKiadas_print
        },
        {
            path: '/szamla_print',
            name: 'Szamla_print',
            component: Szamla_print
        },
        {
            path: '/termekLista_print',
            name: 'TermekLista_print',
            component: TermekLista_print
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

