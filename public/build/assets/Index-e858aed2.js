import{j as r,F as a,a as e,d as o}from"./app-8ecdcb7c.js";import{A as f}from"./AuthenticatedLayout-75b58350.js";import{P as i}from"./PrimaryButton-43e20b07.js";import{D as u}from"./DangerButton-d9ebff5a.js";import{C as h}from"./Container-36ebe74e.js";import{M as p}from"./index-6e0a1b32.js";import"./ApplicationLogo-1b905a10.js";import"./transition-fb8457d1.js";import"./IconButton-a886f3ce.js";function D({auth:l,escalas:n}){const s=n,t=window.route,c={download:!1,print:!1,viewColumns:!1,filter:!1,selectableRows:!1},m=[{name:"id",label:"#",options:{filter:!0,sort:!0}},{name:"nome",label:"Nome",options:{filter:!0,sort:!0}},{name:"inicio",label:"Inicio",options:{filter:!0,sort:!1}},{name:"fim",label:"Fim",options:{filter:!0,sort:!1}},{name:"id",label:"Ações",options:{filter:!0,sort:!1,customBodyRender:d=>r("div",{className:"text-center",children:[e(o,{href:t("escala-trabalho.edit",d),children:e(i,{className:"p-2",variant:"contained",color:"primary",children:"Editar"})}),e(u,{className:"m-2",variant:"contained",color:"primary",onClick:()=>{alert("asd")},children:"Deletar"})]})}}];return r(a,{children:[e(f,{user:l.user,header:r(a,{children:[e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Escala de Trabalho"}),e(o,{href:t("escala-trabalho.create"),children:e(i,{children:" Adicionar "})})]}),children:e(h,{children:e(p,{title:"",data:s,columns:m,options:c})})}),";"]})}export{D as default};