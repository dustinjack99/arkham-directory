(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],[,function(e){e.exports=JSON.parse('{"results":[{"user":"harleyquin890","name":{"first":"Harley","last":"Quinzel"},"department":{"title":"Psychiatrist","name":"Ward II"},"incarcerated":true},{"user":"dr-chill","name":{"first":"Victor","last":"Fries"},"department":{"title":"Cryogentic Scientist","name":"Ward III"},"incarcerated":true},{"user":"waddlefeet","name":{"first":"Oswald","last":"Cobblepot"},"department":{"title":"Night Club Owner","name":"Ward III"},"incarcerated":true},{"user":"PoIsOnEd","name":{"first":"Pamela","last":"Isley"},"department":{"title":"Biochemist","name":"Ward III"},"incarcerated":true},{"user":"headofthedemon","name":{"first":"Ra\'s","last":"al Ghul"},"department":{"title":"???","name":"Ward I"},"incarcerated":false},{"user":"bornonamundie","name":{"first":"Solomon","last":"Grundy"},"department":{"title":"Merchant","name":"Ward I"},"incarcerated":true},{"user":"B00","name":{"first":"Jonathon","last":"Crane"},"department":{"title":"Professor","name":"Ward II"},"incarcerated":true},{"user":"r1ddl3m3th15","name":{"first":"Edward","last":"Nigma"},"department":{"title":"Inventor","name":"Ward II"},"incarcerated":true},{"user":"2-faced","name":{"first":"Harvey","last":"Dent"},"department":{"title":"Attorney","name":"Ward I"},"incarcerated":true},{"user":"haHAhaHAhaHAha","name":{"first":"???","last":"???"},"department":{"title":"Clown","name":"Ward I"},"incarcerated":false},{"user":"iKnowWhoYouAre","name":{"first":"Hugo","last":"Strange"},"department":{"title":"Psychologist","name":"Ward II"},"incarcerated":true},{"user":"sculpture-walk","name":{"first":"Cassius","last":"Payne"},"department":{"title":"Actor","name":"Ward I"},"incarcerated":true},{"user":"HereKittyKitty","name":{"first":"Selina","last":"Kyle"},"department":{"title":"Jewelry Thief","name":"Ward II"},"incarcerated":false},{"user":"bat_chiropractor","name":{"first":"???","last":"???"},"department":{"title":"Venom Addict","name":"Ward I"},"incarcerated":true},{"user":"shhh","name":{"first":"Thomas","last":"Elliot"},"department":{"title":"Surgeon","name":"Ward III"},"incarcerated":true}]}')},,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),s=a.n(l),c=(a(14),a(4)),m=a(5),i=a(6),u=a(8),o=a(7),d=function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,e.results.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.user),r.a.createElement("td",null,e.name.first),r.a.createElement("td",null,e.name.last),r.a.createElement("td",null,e.department.title),r.a.createElement("td",null,e.department.name),r.a.createElement("td",null,e.incarcerated&&"Imprisoned"))})))},h=function(e){return console.log(e),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"table","data-text":"Username"},"Username"),r.a.createElement("th",{className:"table","data-text":"First Name"},"First Name"),r.a.createElement("th",{className:"table","data-text":"Last Name"},"Last Name"),r.a.createElement("th",{className:"table","data-text":"Profession"},"Profession"),r.a.createElement("th",{className:"table","data-text":"Ward"},"Ward"),r.a.createElement("th",{className:"table","data-text":"Incarcerated"},"Incarcerated"))),r.a.createElement("tbody",null,r.a.createElement(d,{results:e.results})))},I=function(e){return r.a.createElement("div",{className:"buttonBox"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"inc"},"Find Inmate by: "),r.a.createElement("button",{onClick:e.handleInputChange,name:"search",value:"Incarceration"},"Incarceration")),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"ward"},"Find Inmate by: "),r.a.createElement("button",{onClick:e.handleInputChange,name:"search",value:"Ward"},"Ward I"),r.a.createElement("button",{onClick:e.handleInputChange,name:"search",value:"Ward"},"Ward II"),r.a.createElement("button",{onClick:e.handleInputChange,name:"search",value:"Ward"},"Ward III")),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"all"},"Find Inmate by: "),r.a.createElement("button",{onClick:e.handleInputChange,name:"search",value:"All Inmates"},"All Inmates")))},f=a(1),p=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={results:f.results,search:"All Inmates"},e.getInmatesAll=function(){e.setState({results:f.results},(function(){}))},e.getInmatesWard=function(t){for(var a=[],n=0;n<f.results.length;n++)if(t===f.results[n].department.name){var r=f.results[n];a.push(r)}e.setState({results:a},(function(){}))},e.getInmatesInc=function(){for(var t=[],a=0;a<f.results.length;a++)if(f.results[a].incarcerated){var n=f.results[a];t.push(n)}e.setState({results:t},(function(){}))},e.handleFormSubmit=function(t,a){"All Inmates"===t?(e.setState({results:"All Inmates"}),e.getInmatesAll(e.state.search)):"Incarceration"===t?(e.setState({results:"Incarceration"}),e.getInmatesInc(e.state.search)):"Ward"===t&&(e.setState({results:"Ward"}),e.getInmatesWard(a))},e.handleInputChange=function(t){var a=t.target,n=a.name,r=a.value,l=t.target.textContent;e.setState(Object(c.a)({},n,r)),e.handleFormSubmit(r,l)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{results:this.state.results}),r.a.createElement(I,{value:this.state.search,handleInputChange:this.handleInputChange}))}}]),a}(n.Component);a(15);var E=function(){return r.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.c7dd4e1d.chunk.js.map