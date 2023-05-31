import{a as e,W as f,r as g,j as a,b as h,d as b}from"./app-9d9e1855.js";import{G as x}from"./GuestLayout-a6a29b93.js";import{T as i,I as n}from"./TextInput-478c9423.js";import{I as d}from"./InputLabel-57c5e845.js";import{P as w}from"./PrimaryButton-e36b8c5a.js";import"./ApplicationLogo-f7c5511b.js";function v({className:r="",...t}){return e("input",{...t,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+r})}function F({status:r,canResetPassword:t}){const{data:m,setData:o,post:c,processing:u,errors:l,reset:p}=f({email:"",password:"",remember:!1});return g.useEffect(()=>()=>{p("password")},[]),a(x,{children:[e(h,{title:"Log in"}),r&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:r}),a("form",{onSubmit:s=>{s.preventDefault(),c(route("login"))},children:[a("div",{children:[e(d,{htmlFor:"email",value:"Email"}),e(i,{id:"email",type:"email",name:"email",value:m.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>o("email",s.target.value)}),e(n,{message:l.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(d,{htmlFor:"password",value:"Password"}),e(i,{id:"password",type:"password",name:"password",value:m.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>o("password",s.target.value)}),e(n,{message:l.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:a("label",{className:"flex items-center",children:[e(v,{name:"remember",checked:m.remember,onChange:s=>o("remember",s.target.checked)}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),a("div",{className:"flex items-center justify-end mt-4",children:[t&&e(b,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e(w,{className:"ml-4",disabled:u,children:"Log in"})]})]})]})}export{F as default};
