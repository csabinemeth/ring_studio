
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
            path: '/penzugy',
            name: 'Penzugy',
            component: Penzugy
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
        }
    ]

    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

    export default router

