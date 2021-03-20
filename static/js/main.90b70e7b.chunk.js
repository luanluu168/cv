(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],{16:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),i=s(8),r=s.n(i),l=s(2),n=s(3),o=s(5),j=s(4),d=s(0),b=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(d.jsx)("section",{id:"contact",className:"contact","data-aos":"fade-up",children:Object(d.jsxs)("div",{className:"container","data-aos":"fade-up",children:[Object(d.jsx)("div",{className:"section-title",children:Object(d.jsx)("h2",{children:"Contact"})}),Object(d.jsx)("p",{}),Object(d.jsx)("div",{className:"message-me-container contact-message",children:Object(d.jsx)("a",{className:"btn btn-outline-primary message-me",href:"mailto:luan168cs@gmail.com",text:"\u2709 OPEN EMAIL",children:Object(d.jsxs)("div",{className:"message-me-div-text",children:[Object(d.jsx)("i",{className:"far fa-envelope"})," MESSAGE ME"]})})})]})})}}]),s}(a.a.Component),h=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(d.jsx)("footer",{id:"footer",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"copyright",children:"\xa9 Copyright 2021 Luan Luu. All Rights Reserved"})})})}}]),s}(a.a.Component),x=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isIntro:!0,isPortfolio:!1,isResume:!1,isContact:!1,intro:0,portfolio:0,contact:0},e}return Object(n.a)(s,[{key:"setAllStates",value:function(e,t,s,c){this.setState({isIntro:e,isPortfolio:t,isResume:s,isContact:c})}},{key:"setAllSectionPosition",value:function(){var e=document.getElementById("intro").offsetTop,t=document.getElementById("portfolio").offsetTop,s=document.getElementById("resume").offsetTop,c=document.getElementById("contact").offsetTop;this.setState({intro:e,portfolio:t,resume:s,contact:c})}},{key:"componentDidMount",value:function(){var e=this;this.setAllSectionPosition(),document.addEventListener("scroll",(function(){var t=window.scrollY;t<e.state.portfolio?e.setAllStates(!0,!1,!1,!1):t<e.state.resume?e.setAllStates(!1,!0,!1,!1):t<e.state.contact?e.setAllStates(!1,!1,!0,!1):e.setAllStates(!1,!1,!1,!0)}))}},{key:"render",value:function(){return Object(d.jsx)("header",{id:"header",className:"d-flex flex-column justify-content-center",children:Object(d.jsx)("nav",{className:"nav-menu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:this.state.isIntro?"active":"",children:Object(d.jsxs)("a",{href:"#intro",children:[Object(d.jsx)("i",{className:"bx bx-home"})," ",Object(d.jsx)("span",{children:"Home"})]})}),Object(d.jsx)("li",{className:this.state.isPortfolio?"active":"",children:Object(d.jsxs)("a",{href:"#portfolio",children:[Object(d.jsx)("i",{className:"bx bx-book-content"})," ",Object(d.jsx)("span",{children:"Portfolio"})]})}),Object(d.jsx)("li",{className:this.state.isResume?"active":"",children:Object(d.jsxs)("a",{href:"#resume",children:[Object(d.jsx)("i",{className:"bx bx-file-blank"})," ",Object(d.jsx)("span",{children:"Resume"})]})}),Object(d.jsx)("li",{className:this.state.isContact?"active":"",children:Object(d.jsxs)("a",{href:"#contact",children:[Object(d.jsx)("i",{className:"bx bx-envelope"})," ",Object(d.jsx)("span",{children:"Contact"})]})})]})})})}}]),s}(a.a.Component),m=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("section",{id:"intro",className:"d-flex flex-column justify-content-center",children:[Object(d.jsxs)("div",{className:"container","data-aos":"zoom-in","data-aos-delay":"100",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:Object(d.jsx)("g",{id:"dev-intro-text",className:"intro-text",children:Object(d.jsx)("text",{x:"0",y:"120",children:" Developer "})})}),Object(d.jsxs)("h1",{className:"text-primary",children:["Luan ",Object(d.jsx)("span",{className:"text-white",children:"Luu"})]})]}),Object(d.jsx)("div",{className:"social-box",children:Object(d.jsx)("a",{href:"https://github.com/luanluu168",className:"github social-icon",children:Object(d.jsx)("i",{className:"bx bxl-github fa-2x"})})})]}),Object(d.jsx)("svg",{className:"wave",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:Object(d.jsx)("path",{fill:"#fff",fillOpacity:"1",d:"M0,160L60,149.3C120,139,240,117,360,106.7C480,96,600,96,720,117.3C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"})})]})}}]),s}(a.a.Component),O=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(d.jsx)("button",{type:"button",className:"mobile-nav-toggle d-xl-none",children:Object(d.jsx)("i",{className:"icofont-navigation-menu"})})}}]),s}(a.a.Component),u=s(6),p=s.n(u),f=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(d.jsx)("section",{id:"portfolio",className:"portfolio section-bg","data-aos":"fade-up",children:Object(d.jsxs)("div",{className:"container","data-aos":"fade-up",children:[Object(d.jsx)("div",{className:"section-title",children:Object(d.jsx)("h2",{children:"Portfolio"})}),Object(d.jsxs)("div",{className:"row portfolio-container","data-aos":"fade-up","data-aos-delay":"200",children:[Object(d.jsxs)("div",{className:"col-xl-6 col-lg-6 col-md-6 portfolio-item filter-app",children:[Object(d.jsxs)("div",{className:"portfolio-wrap",children:[Object(d.jsx)("img",{src:"assets/img/portfolio/getchaTodayApp.png",className:"img-fluid",alt:"getchaTodayImg"}),Object(d.jsxs)("div",{className:"portfolio-info",children:[Object(d.jsx)("h2",{children:"Getcha Today"}),Object(d.jsxs)("div",{className:"portfolio-links",children:[Object(d.jsx)("a",{href:"https://github.com/luanluu168/GetchaToday",title:"GetchaToday Github",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"bx bxl-github fa-2x"})}),Object(d.jsx)("a",{href:"https://getchatoday.ml/",title:"GetchaToday Weblink",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"bx bx-link fa-2x"})})]})]})]}),Object(d.jsx)("div",{className:"bg-secondary text-white",children:Object(d.jsxs)("ul",{className:"list-unstyled px-1 py-2",children:[Object(d.jsx)("li",{children:Object(d.jsx)(p.a,{charLimit:52,readMoreText:"Read more \u25bc",readLessText:"Read less \u25b2",readMoreStyle:{whiteSpace:"nowrap",textDecoration:"none",color:"#00b"},readLessStyle:{whiteSpace:"nowrap",textDecoration:"none",color:"#00b"},children:"Description: A web app provides features similar to Craigslist. A teamwork project in a software engineering class"})}),Object(d.jsx)("li",{className:"text-truncate",children:"Framework: PUG (front end), Express (back end)"}),Object(d.jsx)("li",{className:"text-truncate",children:"Database: PostgreSQL"}),Object(d.jsx)("li",{className:"text-truncate",children:"Hosted server: DigitalOcean"})]})})]}),Object(d.jsxs)("div",{className:"col-xl-6 col-lg-6 col-md-6 portfolio-item filter-web",children:[Object(d.jsxs)("div",{className:"portfolio-wrap",children:[Object(d.jsx)("img",{src:"assets/img/portfolio/issueTrackerApp.png",className:"img-fluid",alt:"issueTrackerImg"}),Object(d.jsxs)("div",{className:"portfolio-info",children:[Object(d.jsx)("h2",{children:"Issue-Tracker"}),Object(d.jsxs)("div",{className:"portfolio-links",children:[Object(d.jsx)("a",{href:"https://github.com/luanluu168/issue-tracker",title:"IssueTracker Github",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"bx bxl-github fa-2x"})}),Object(d.jsx)("a",{href:"https://issue-tracker-ex.herokuapp.com/",title:"IssueTracker Weblink",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"bx bx-link fa-2x"})})]})]})]}),Object(d.jsx)("div",{className:"bg-secondary text-white",children:Object(d.jsxs)("ul",{className:"list-unstyled px-1 py-2",children:[Object(d.jsx)("li",{children:Object(d.jsx)(p.a,{charLimit:52,readMoreText:"Read more \u25bc",readLessText:"Read less \u25b2",readMoreStyle:{whiteSpace:"nowrap",textDecoration:"none",color:"#00b"},readLessStyle:{whiteSpace:"nowrap",textDecoration:"none",color:"#00b"},children:"Description: A web app is used to track todos, bugs, and more"})}),Object(d.jsx)("li",{children:Object(d.jsx)(p.a,{charLimit:52,readMoreText:"Read more \u25bc",readLessText:"Read less \u25b2",readMoreStyle:{whiteSpace:"nowrap",textDecoration:"none",color:"#00b"},readLessStyle:{whiteSpace:"nowrap",textDecoration:"none",color:"#00b"},children:"Framework: PUG (front end), Microservices Express (back end: gateway, api server, auth-server, image server, etc), Redis (cache)"})}),Object(d.jsx)("li",{className:"text-truncate",children:"Database: PostgreSQL"}),Object(d.jsx)("li",{className:"text-truncate",children:"Hosted server: Heroku (free-tier)"})]})})]}),Object(d.jsxs)("div",{className:"col-xl-6 col-lg-6 col-md-6 portfolio-item filter-app",children:[Object(d.jsxs)("div",{className:"portfolio-wrap",children:[Object(d.jsx)("img",{src:"assets/img/portfolio/boilingRiverApp.png",className:"img-fluid",alt:"boilingRiverImg"}),Object(d.jsxs)("div",{className:"portfolio-info",children:[Object(d.jsx)("h2",{children:"Boiling River"}),Object(d.jsxs)("div",{className:"portfolio-links",children:[Object(d.jsx)("a",{href:"https://github.com/luanluu168/boilingRiver",title:"BoilingRiver Github",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"bx bxl-github fa-2x"})}),Object(d.jsx)("a",{href:"https://boiling-river-76816.herokuapp.com/Landing",title:"BoilingRiver Weblink",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"bx bx-link fa-2x"})})]})]})]}),Object(d.jsx)("div",{className:"bg-secondary text-white",children:Object(d.jsxs)("ul",{className:"list-unstyled px-1 py-2",children:[Object(d.jsx)("li",{children:Object(d.jsx)(p.a,{charLimit:52,readMoreText:"Read more \u25bc",readLessText:"Read less \u25b2",readMoreStyle:{whiteSpace:"nowrap",textDecoration:"none",color:"#00b"},readLessStyle:{whiteSpace:"nowrap",textDecoration:"none",color:"#00b"},children:"Description: A web app for buying clothing"})}),Object(d.jsx)("li",{children:Object(d.jsx)(p.a,{charLimit:52,readMoreText:"Read more \u25bc",readLessText:"Read less \u25b2",readMoreStyle:{whiteSpace:"nowrap",textDecoration:"none",color:"#00b"},readLessStyle:{whiteSpace:"nowrap",textDecoration:"none",color:"#00b"},children:"Framework: React, Redux (front end), Express (back end), Stripe (payment)"})}),Object(d.jsx)("li",{className:"text-truncate",children:"Database: PostgreSQL"}),Object(d.jsx)("li",{className:"text-truncate",children:"Hosted server: Heroku (free-tier)"})]})})]}),Object(d.jsxs)("div",{className:"col-xl-6 col-lg-6 col-md-6 portfolio-item filter-card",children:[Object(d.jsxs)("div",{className:"portfolio-wrap",children:[Object(d.jsx)("img",{src:"assets/img/portfolio/pathfindingApp.png",className:"img-fluid",alt:"pathfindingImg"}),Object(d.jsxs)("div",{className:"portfolio-info",children:[Object(d.jsx)("h2",{children:"Search"}),Object(d.jsxs)("div",{className:"portfolio-links",children:[Object(d.jsx)("a",{href:"https://github.com/luanluu168/search",title:"Search Github",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"bx bxl-github fa-2x"})}),Object(d.jsx)("a",{href:"https://graphsearch.herokuapp.com/",title:"Search Weblink",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"bx bx-link fa-2x"})})]})]})]}),Object(d.jsx)("div",{className:"bg-secondary text-white",children:Object(d.jsxs)("ul",{className:"list-unstyled px-1 py-2",children:[Object(d.jsx)("li",{children:Object(d.jsx)(p.a,{charLimit:52,readMoreText:"Read more \u25bc",readLessText:"Read less \u25b2",readMoreStyle:{whiteSpace:"nowrap",textDecoration:"none",color:"#00b"},readLessStyle:{whiteSpace:"nowrap",textDecoration:"none",color:"#00b"},children:"Description: A web app finds and displays the searched path between two points by using Depth First Search, Breath First Search, A*, Djkstra, and Best First Search"})}),Object(d.jsx)("li",{className:"text-truncate",children:"Framework: Express (back end)"}),Object(d.jsx)("li",{className:"text-truncate",children:"Database: none"}),Object(d.jsx)("li",{className:"text-truncate",children:"Hosted server: Heroku (free-tier)"})]})})]})]})]})})}}]),s}(a.a.Component),g=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(d.jsx)("section",{id:"resume",className:"resume","data-aos":"fade-up",children:Object(d.jsxs)("div",{className:"container","data-aos":"fade-up",children:[Object(d.jsx)("div",{className:"section-title",children:Object(d.jsx)("h2",{children:"Resume"})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-lg-6",children:[Object(d.jsx)("h3",{className:"resume-title",children:"BASIC INFORMATION"}),Object(d.jsxs)("div",{className:"resume-item pb-0",children:[Object(d.jsx)("h4",{children:"Luan Luu"}),Object(d.jsxs)("ul",{className:"list-unstyled",children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("i",{className:"icofont-google-map"})," San Francisco, CA ",Object(d.jsx)("span",{className:"counter",children:"94132"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("i",{className:"icofont-phone"})," +1 (415)-205-8393"]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("i",{className:"icofont-envelope"})," luan168cs@gmail.com"]}),Object(d.jsxs)("li",{className:"d-flex flex-row align-items-center",children:[Object(d.jsx)("i",{className:"bx bxl-github"}),Object(d.jsx)("a",{href:"https://github.com/luanluu168/",className:"ml-1",children:"https://github.com/luanluu168/"})]})]})]}),Object(d.jsx)("h3",{className:"resume-title",children:"TECHNICAL STRENGTHS"}),Object(d.jsxs)("div",{className:"resume-item pb-0",children:[Object(d.jsx)("h4",{children:"Programmimg Languages and tools"}),Object(d.jsxs)("ul",{className:"dev-icons text-secondary",children:[Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsxs)("figure",{children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)("i",{className:"fab fa-html5",title:"HTML 5"})}),Object(d.jsx)("figcaption",{children:"HTML-5"})]})}),Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsxs)("figure",{children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)("i",{className:"fab fa-css3-alt",title:"CSS 3"})}),Object(d.jsx)("figcaption",{children:"CSS-3"})]})}),Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsxs)("figure",{children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)("i",{className:"fab fa-js-square",title:"Javascript"})}),Object(d.jsx)("figcaption",{children:"Javascript"})]})}),Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsxs)("figure",{children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)("i",{className:"fab fa-node-js",title:"Node js"})}),Object(d.jsx)("figcaption",{children:"Node-js"})]})}),Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsxs)("figure",{children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-database",title:"Postgresql"})}),Object(d.jsx)("figcaption",{children:"PostgreSQL"})]})}),Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsxs)("figure",{children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)("i",{className:"fab fa-react",title:"React"})}),Object(d.jsx)("figcaption",{children:"React"})]})}),Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsxs)("figure",{children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)("i",{className:"fab fa-java",title:"Java"})}),Object(d.jsx)("figcaption",{children:"Java"})]})}),Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsxs)("figure",{children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)("i",{className:"fab fa-python",title:"Python"})}),Object(d.jsx)("figcaption",{children:"Python"})]})})]})]}),Object(d.jsx)("h3",{className:"resume-title",children:"OBJECTIVE SUMMARY"}),Object(d.jsx)("div",{className:"resume-item",children:Object(d.jsx)("p",{children:Object(d.jsx)("em",{children:"I\u2019m passionate about coding. Hard-working and always interested in learning new things as well as getting more challenges to become a professional computer scientist."})})})]}),Object(d.jsxs)("div",{className:"col-lg-6",children:[Object(d.jsx)("h3",{className:"resume-title",children:"EDUCATION AND HONORS"}),Object(d.jsxs)("div",{className:"resume-item",children:[Object(d.jsx)("h4",{children:"San Francisco State University"}),Object(d.jsx)("p",{className:"small text-secondary",children:"2019 - 2020"}),Object(d.jsx)("p",{children:Object(d.jsx)("em",{children:"Bachelor\u2019s Degree \xb7 Computer Science \xb7 GPA 3.94 / 4.0 \xb7 Dean\u2019s List"})}),Object(d.jsx)("p",{className:"text-secondary",children:"Some Courseworks: Software-engineering, human-computer interaction, artificial intelligent, operating system principle, system administration, advanced software lab (client side and server side programming), etc"})]}),Object(d.jsxs)("div",{className:"resume-item",children:[Object(d.jsx)("h4",{children:"City College of San Francisco"}),Object(d.jsx)("p",{className:"small text-secondary",children:"2012 - 2018"}),Object(d.jsx)("p",{children:Object(d.jsx)("em",{children:"Associate\u2019s Degree \xb7 Computer Science \xb7 GPA 3.67 / 4.0 \xb7 Dean\u2019s List"})})]})]})]})]})})}}]),s}(a.a.Component),N=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("a",{href:"#intro",className:"back-to-top",children:Object(d.jsx)("i",{className:"bx bx-up-arrow-alt"})}),Object(d.jsx)("div",{id:"preloader"})]})}}]),s}(a.a.Component);var v=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(O,{}),Object(d.jsx)(x,{}),Object(d.jsx)(m,{}),Object(d.jsx)(f,{}),Object(d.jsx)(g,{}),Object(d.jsx)(b,{}),Object(d.jsx)(h,{}),Object(d.jsx)(N,{})]})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.90b70e7b.chunk.js.map