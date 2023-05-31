import{r as h,W as C,a as e,F as f,j as a}from"./app-9d9e1855.js";import{A as I}from"./AuthenticatedLayout-88de24b6.js";import{C as w}from"./Card-ecc08001.js";import{C as F}from"./Container-18b55b6b.js";import{T as n,I as c}from"./TextInput-478c9423.js";import{I as l}from"./InputLabel-57c5e845.js";import{P as S}from"./PrimaryButton-e36b8c5a.js";import{t as E}from"./transition-b44afae5.js";import"./ApplicationLogo-f7c5511b.js";function W({auth:p,escala:g}){const v=window.route,m=h.useRef(),d=h.useRef(),{data:r,setData:s,errors:i,patch:x,reset:o,processing:N,recentlySuccessful:y}=C(g),b=t=>{t.preventDefault(),x(v("escala-trabalho.update"),{preserveScroll:!0,onSuccess:()=>o(),onError:u=>{u.nome&&(o("nome"),m.current.focus()),u.inicio&&(o("inicio"),d.current.focus())}})};return e(f,{children:e(I,{user:p.user,header:e(f,{children:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Escala de Trabalho"})}),children:e(F,{children:a(w,{children:[a("section",{className:"",children:[a("header",{children:[e("h2",{className:"text-lg font-medium text-gray-900",children:"Informações da Escala de trabalho."}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Preencha todos as informações da escala."})]}),a("form",{onSubmit:b,className:"mt-6 space-y-6",children:[a("div",{children:[e(l,{htmlFor:"nome",value:"Nome"}),e(n,{id:"nome",ref:m,value:r.nome,onChange:t=>s("nome",t.target.value),type:"text",className:"mt-1 block w-full"}),e(c,{message:i.nome,className:"mt-2"})]}),a("div",{children:[e(l,{htmlFor:"inicio",value:"inicio"}),e(n,{id:"inicio",ref:d,value:r.inicio,onChange:t=>s("inicio",t.target.value),type:"text",className:"mt-1 block w-full"}),e(c,{message:i.inicio,className:"mt-2"})]}),a("div",{children:[e(l,{htmlFor:"fim",value:"fim"}),e(n,{id:"fim",value:r.fim,onChange:t=>s("fim",t.target.value),type:"text",className:"mt-1 block w-full"}),e(c,{message:i.fim,className:"mt-2"})]}),a("div",{className:"flex items-center gap-4",children:[e(S,{disabled:N,children:"Salvar"}),e(E,{show:y,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600",children:"Salvo com sucesso."})})]})]})]})," "]})})})})}export{W as default};
