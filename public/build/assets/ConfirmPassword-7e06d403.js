import{W as d,r as l,j as a,a as s,b as p}from"./app-9d9e1855.js";import{G as c}from"./GuestLayout-a6a29b93.js";import{T as u,I as f}from"./TextInput-478c9423.js";import{I as w}from"./InputLabel-57c5e845.js";import{P as h}from"./PrimaryButton-e36b8c5a.js";import"./ApplicationLogo-f7c5511b.js";function I(){const{data:e,setData:t,post:o,processing:i,errors:m,reset:n}=d({password:""});return l.useEffect(()=>()=>{n("password")},[]),a(c,{children:[s(p,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(w,{htmlFor:"password",value:"Password"}),s(u,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>t("password",r.target.value)}),s(f,{message:m.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(h,{className:"ml-4",disabled:i,children:"Confirm"})})]})]})}export{I as default};
