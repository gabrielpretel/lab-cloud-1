import{u as O,A as se,P as ae,c as U,C as W,a as oe,D as le,E as ie,b as ne,d as re,e as de,f as ce}from"./Dbdwo3jy.js";import{d as j,r as b,a0 as q,i as f,N as J,t as r,v as u,x as t,z as m,J as a,B as F,O as C,P as k,Q as R,R as D,M as y,K as Q,S as ue,y as A,W as g,T as $,A as H,U as me,X as K,Y as pe,Z as L,$ as ke,_ as ve}from"./CAWLArwl.js";const be={"aria-label":"Add this task",class:"add-task-button"},_e={key:1,class:"alert-container",role:"alert","aria-live":"assertive"},fe={class:"alert-info"},ye=j({__name:"TheNewTaskForm",setup(S){const o=b(""),d=b(""),c=b(!1),v=b(!1),w=q(),h=f(()=>w.params.idList),E=O(),I=oe(),x=()=>{const N={id:E.generateId(),name:o.value,description:d.value,completed:!1,bgColor:I.getRandomColor(),editMode:!1};E.addTask(N,h.value),o.value="",d.value="",c.value=!c.value,v.value=!0,setTimeout(()=>{v.value=!1},5e3)},M=()=>{c.value=!c.value},i=()=>{v.value=!1};return(N,n)=>{const V=J("auto-animate");return r(),u(Q,null,[t("button",{"aria-label":"Create a new task",class:C(c.value?"new-task-open":"new-task"),onClick:n[0]||(n[0]=_=>M())},[m(a(se),{class:"new-task-icon"}),n[3]||(n[3]=F(" New task "))],2),k((r(),u("div",null,[c.value?(r(),u("form",{key:0,onSubmit:R(x,["prevent"]),class:"new-task-form","aria-labelledby":"new-task-form-title"},[n[5]||(n[5]=t("h2",{id:"new-task-form-title",class:"sr-only"},"New Task Form",-1)),n[6]||(n[6]=t("label",{for:"task-name",class:"sr-only"},"Task Name",-1)),k(t("input",{id:"task-name",type:"text","onUpdate:modelValue":n[1]||(n[1]=_=>o.value=_),placeholder:"Task name",required:"","aria-label":"Enter the name of the task"},null,512),[[D,o.value]]),n[7]||(n[7]=t("label",{for:"task-description",class:"sr-only"},"Task Description",-1)),k(t("textarea",{id:"task-description","onUpdate:modelValue":n[2]||(n[2]=_=>d.value=_),placeholder:"Write a note...","aria-label":"Enter a description or note for the task"},null,512),[[D,d.value]]),t("button",be,[m(a(ae)),n[4]||(n[4]=t("span",null,"Add task",-1))])],32)):y("",!0),v.value?(r(),u("div",_e,[t("div",fe,[m(a(U),{class:"success-icon","aria-hidden":"true"}),n[8]||(n[8]=t("p",null,"Task added successfully.",-1))]),t("button",{"aria-label":"Close alert",onClick:i,class:"close-button"},[m(a(W),{class:"cross-icon","aria-hidden":"true"})])])):y("",!0)])),[[V]])],64)}}}),Te={xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"};function ge(S,o){return r(),u("svg",Te,o[0]||(o[0]=[t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"m5 19 7-7m0 0 7-7m-7 7L5 5m7 7 7 7"},null,-1)]))}const Ce={render:ge},we=ce(ke),he=["aria-label"],Ee={class:"todo-list-container"},xe={class:"filters-container",role:"group","aria-label":"Filter tasks"},Me={key:0,class:"empty-list empty-list--centered",role:"alert","aria-live":"polite"},Ne={key:0},Le={key:1},$e={key:2},De={class:"task-list",role:"list","aria-label":"Task list"},Se=["aria-label"],Ie={class:"item-readonly"},Ve={class:"task-content"},Be={class:"task-header"},Ae=["aria-label"],Ue={class:"task-buttons",role:"group","aria-label":"Task actions"},Fe=["onClick","aria-label"],Re=["aria-label","onClick"],ze=["aria-label","onClick"],Pe={key:0,tabindex:"0"},He={class:"item-editmode"},Ke=["onSubmit"],Oe={class:"control-buttons"},We=["onClick"],je={class:"save-button",type:"submit","aria-label":"Save task changes"},qe=j({__name:"TheToDoList",setup(S){let o=b("all"),d=b(""),c=b("");const v=f(()=>i.tasks.length===0),w=f(()=>i.tasks.every(l=>!l.completed)),h=f(()=>i.tasks.every(l=>l.completed)),E=q(),I=ue(),x=f(()=>E.params.idList),M=O(),i=M.getTasks(x.value),{beforeEnter:N,enter:n,leave:V}=de(),_=()=>{I.push("/")},z=l=>l.sort((e,T)=>e.completed===T.completed?0:e.completed?1:-1),X=l=>{i.tasks=i.tasks.map(e=>e.id===l.id?{...e,completed:!e.completed}:e),i.tasks=z(i.tasks),l.completed?L.success("Task incompleted."):L.success("Task completed!")},Y=l=>{i.tasks=i.tasks.filter(e=>e.id!==l),L.success("Task deleted.")},Z=l=>{i.tasks=i.tasks.map(e=>e.id===l.id?{...e,name:d.value,description:c.value,editMode:!1}:e),M.taskList[x.value]={...i},L.success("Task saved.")},G=l=>{i.tasks=i.tasks.map(e=>e.id!==l.id?e:{...e,editMode:!e.editMode})},P=l=>{d.value=l.name,c.value=l.description,G(l)},ee=l=>{const e=i.tasks.filter(T=>!l.some(B=>B.id===T.id));i.tasks=z([...l,...e])},te=f(()=>{switch(o.value){case"completed":return i.tasks.filter(l=>l.completed===!0);case"incompleted":return i.tasks.filter(l=>l.completed===!1);default:return i.tasks}});return(l,e)=>{const T=we,B=J("auto-animate");return r(),u(Q,null,[m(T,{position:"top-center",toastOptions:{class:"my-toast"}}),t("button",{onClick:_,class:"back-button"},"< Back to lists"),t("h2",{tabindex:"0","aria-label":"Task list"+a(i).name},A(a(i).name),9,he),t("section",Ee,[t("div",xe,[t("button",{class:C(["button-primary",{active:a(o)==="all"}]),onClick:e[0]||(e[0]=s=>g(o)?o.value="all":o="all"),"aria-label":"Show all tasks"}," All ",2),t("button",{class:C(["button-primary",{active:a(o)==="completed"}]),onClick:e[1]||(e[1]=s=>g(o)?o.value="completed":o="completed"),"aria-label":"Show completed tasks"}," Completed ",2),t("button",{class:C(["button-primary",{active:a(o)==="incompleted"}]),onClick:e[2]||(e[2]=s=>g(o)?o.value="incompleted":o="incompleted"),"aria-label":"Show incompleted tasks"}," Incompleted ",2)]),m(ye),v.value||a(o)==="completed"&&w.value||a(o)==="incompleted"&&h.value?(r(),u("div",Me,[v.value?(r(),u("p",Ne," No tasks available at the moment. Use the button below to create a new note and start organizing your tasks effectively. ")):a(o)==="completed"&&w.value?(r(),u("p",Le," No completed tasks yet. ")):a(o)==="incompleted"&&h.value?(r(),u("p",$e," No incomplete tasks yet. ")):y("",!0)])):y("",!0),t("div",De,[k((r(),$(a(re),{modelValue:a(i).tasks,"onUpdate:modelValue":[e[5]||(e[5]=s=>a(i).tasks=s),ee],group:"tasks",handle:".drag-handle",animation:"200","ghost-class":"dragging","item-key":"id"},{item:H(({element:s})=>[te.value.includes(s)?(r(),u("li",{class:C(["item",{itemEditmode:s.editMode,completed:s.completed&&!s.editMode}]),key:s.id,role:"listitem",style:me({backgroundColor:!s.completed||s.editMode?s.bgColor:"#fafafa"}),"aria-label":s.name},[k(t("div",Ie,[m(a(le),{class:"drag-handle","aria-label":"Drag task"}),t("div",Ve,[t("div",Be,[t("span",{"aria-label":s.completed?"Completed "+s.name:s.name,tabindex:"0"},A(s.name),9,Ae),t("div",Ue,[t("button",{onClick:p=>X(s),"aria-label":s.completed?"Mark task "+s.name+" as incomplete":"Mark task "+s.name+" as complete"},[s.completed?(r(),$(a(Ce),{key:1,class:"icon"})):(r(),$(a(U),{key:0,class:"icon"}))],8,Fe),t("button",{"aria-label":"Edit task "+s.name,onClick:p=>P(s)},[m(a(ie),{class:"icon"})],8,Re),t("button",{"aria-label":"Delete task "+s.name,onClick:p=>Y(s.id)},[m(a(ne),{class:"icon"})],8,ze)])]),s.description!==""?(r(),u("p",Pe,A(s.description),1)):y("",!0)])],512),[[K,!s.editMode]]),m(pe,{onBeforeEnter:a(N),onEnter:a(n),onLeave:a(V)},{default:H(()=>[k(t("div",He,[(r(),u("form",{onSubmit:R(p=>Z(s),["prevent"]),class:"edit-form",key:s.id,"aria-label":"'Edit task ' + element.name"},[e[8]||(e[8]=t("p",null,"Editing task...",-1)),e[9]||(e[9]=t("label",{for:"edit-name-{{ element.id }}",class:"sr-only"},"Task Name",-1)),k(t("input",{id:"edit-name-{{ element.id }}",type:"text","onUpdate:modelValue":e[3]||(e[3]=p=>g(d)?d.value=p:d=p),"aria-label":"Edit task name"},null,512),[[D,a(d)]]),e[10]||(e[10]=t("label",{for:"edit-description-{{ element.id }}",class:"sr-only"},"Task Description",-1)),k(t("textarea",{id:"edit-description-{{ element.id }}","onUpdate:modelValue":e[4]||(e[4]=p=>g(c)?c.value=p:c=p),"aria-label":"Edit task description"},null,512),[[D,a(c)]]),t("div",Oe,[t("button",{class:"cancel-button",onClick:R(p=>P(s),["prevent"]),"aria-label":"Cancel task editing"},[m(a(W)),e[6]||(e[6]=F(" Cancelar "))],8,We),t("button",je,[m(a(U)),e[7]||(e[7]=F(" Save changes "))])])],40,Ke))],512),[[K,s.editMode]])]),_:2},1032,["onBeforeEnter","onEnter","onLeave"])],14,Se)):y("",!0)]),_:1},8,["modelValue"])),[[B]])])])],64)}}}),Je={};function Qe(S,o){const d=qe;return r(),$(d)}const Ze=ve(Je,[["render",Qe]]);export{Ze as default};
