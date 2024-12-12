import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import FaleConosco from './pages/faleConosco.jsx'
import Sobre from './pages/Sobre.jsx'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade.jsx'
import Pacotes from './pages/Pacotes.jsx'
import Account from './pages/Account.jsx'
import Identificacao from './pages/Identificacao.jsx'
import Orçamento from './pages/Orçamento.jsx'
import Carrinho from './pages/Carrinho.jsx'
import Cadastro from './pages/Cadastrar.jsx'
import {register} from 'swiper/element/bundle'
import Login from './pages/Login.jsx'
register()


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { CartProvider } from './contexts/CartContext.jsx';
import { AccountProvider } from './contexts/AccountContext.jsx';
import LayoutZap from './components/LayoutZap.jsx'
import Modal from 'react-modal';



Modal.setAppElement('#root');

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
      path:"/",
      element:<Home/>,
      }, {
        path:"/fale-conosco/",
        element:<FaleConosco/>
       },{
        path:"/sobre/",
        element:<Sobre/>  
        },
         {
        path:"/Politica-Privacidade/",
        element:<PoliticaPrivacidade/>  
        },
        {
          path:"/Pacotes/",
          element:<Pacotes/>
        },
       
        {
          path:"Orçamento/:title",
          element:<Orçamento/>
        },
        {
          path:"/Identificação/",
          element:<Identificacao/>
        }, 
        {
          path:"/Login",
          element:<Login/>
        },
        {
          path:"/Carrinho/",
          element:<Carrinho/>
        },
        {
          path:"Minha-Conta/",
          element:<Account/>
        }
        ,{
          path:"/Cadastro",
          element:<Cadastro/>
        },
       
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <LayoutZap>
  <AccountProvider>
    <CartProvider> 
        <RouterProvider router={router} /> 
      </CartProvider>
      </AccountProvider>
  </LayoutZap>
  </React.StrictMode>,
)
