(this["webpackJsonpkarandeep-portfolio"]=this["webpackJsonpkarandeep-portfolio"]||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){},44:function(e,n,t){},50:function(e,n,t){},51:function(e,n,t){},52:function(e,n,t){},53:function(e,n,t){},54:function(e,n,t){},55:function(e,n,t){var a={"./education.svg":56,"./interests.svg":57,"./programming-skills.svg":58,"./projects.svg":59,"./work-history.svg":60};function s(e){var n=i(e);return t(n)}function i(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=i,e.exports=s,s.id=55},56:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/education.10cfa28a.svg"},57:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/interests.809890a3.svg"},58:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/programming-skills.d19983a9.svg"},59:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/projects.2b352a52.svg"},60:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/work-history.a566475d.svg"},61:function(e,n,t){},66:function(e,n,t){},84:function(e,n,t){},85:function(e,n,t){},86:function(e,n,t){"use strict";t.r(n);var a=t(1),s=t.n(a),i=t(13),c=t.n(i),r=(t(41),t(42),t(18)),l=t(9),o=t(16),d=t(88),j=function e(){var n=this;Object(o.a)(this,e),this.scrollToHireMe=function(){var e=document.getElementById("Contact Me");e&&e.scrollIntoView({behavior:"smooth"})},this.scrollToHome=function(){var e=document.getElementById("Home");e&&e.scrollIntoView({behavior:"smooth"})},this.isElementInView=function(e,n){var t=e.getBoundingClientRect(),a=t.top,s=t.bottom,i=a<window.innerHeight&&s>=0,c=a>=0&&s<=window.innerHeight;switch(n){case"partial":return i;case"complete":return c;default:return!1}},this.checkCurrentScreenUnderViewport=function(t){if(t&&!(Object.keys(t).length<1)){var a,s=Object(l.a)(K);try{for(s.s();!(a=s.n()).done;){var i=a.value,c=document.getElementById(i.screen_name);if(c){var r=n.isElementInView(c,"complete"),o=n.isElementInView(c,"partial");if(r||o){if(o&&!i.alreadyRendered){e.currentScreenFadeIn.next({fadeInScreen:i.screen_name}),i.alreadyRendered=!0;break}if(r){e.currentScreenBroadcaster.next({screenInView:i.screen_name});break}}}}}catch(d){s.e(d)}finally{s.f()}}},window.addEventListener("scroll",this.checkCurrentScreenUnderViewport)};j.scrollHandler=new j,j.currentScreenBroadcaster=new d.a,j.currentScreenFadeIn=new d.a;t(44);var u=t(0);function b(){return Object(u.jsx)("div",{className:"profile-container",children:Object(u.jsxs)("div",{className:"profile-parent",children:[Object(u.jsxs)("div",{className:"profile-details",children:[Object(u.jsx)("div",{className:"colz",children:Object(u.jsxs)("div",{className:"colz-icon",children:[Object(u.jsx)("a",{href:"https://www.linkedin.com/in/karandeepsingh13",children:Object(u.jsx)("i",{className:"fa fa-linkedin fa-lg"})}),Object(u.jsx)("a",{href:"https://github.com/karandeep1390",children:Object(u.jsx)("i",{className:"fa fa-github-square fa-lg"})})]})}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"profile-details-name",children:Object(u.jsxs)("span",{className:"primary-text",children:[" ","Console.log",Object(u.jsx)("span",{className:"highlighted-text",children:"(Hello, I'm Karandeep!);"})]})}),Object(u.jsx)("div",{className:"profile-details-role",children:Object(u.jsxs)("span",{className:"primary-text",children:[" ",Object(u.jsx)("h1",{children:Object(u.jsx)(r.a,{loop:1/0,steps:["SDE-1 @AMAZON ",1e3,"Full Stack Developer ",1e3,"Java/Kotlin Dev ",1e3,"JS & React Dev ",1e3]})}),Object(u.jsx)("span",{className:"profile-role-tagline",children:"Passion for building full-stack applications."})]})}),Object(u.jsxs)("div",{className:"profile-options",children:[Object(u.jsx)("button",{className:"btn primary-btn",onClick:function(){return j.scrollHandler.scrollToHireMe()},children:"Hire Me"}),Object(u.jsx)("a",{href:"Karandeep_Singh_Resume.pdf",download:"Karandeep_Singh_Resume.pdf",children:Object(u.jsx)("button",{className:"btn highlighted-btn",children:"Download Resume"})})]})]}),Object(u.jsx)("div",{className:"profile-picture",children:Object(u.jsx)("div",{className:"profile-picture-background"})})]})})}var m=t(5),h=t(34),p=t(17);t(50);function g(){var e=Object(a.useState)(0),n=Object(m.a)(e,2),t=n[0],s=n[1],i=Object(a.useState)(!1),c=Object(m.a)(i,2),r=c[0],l=c[1],o=j.currentScreenBroadcaster.subscribe((function(e){if(e&&e.screenInView)T(e.screenInView)})),d=function(e){var n="header-option ";return e<K.length-1&&(n+="header-option-separator "),t===e&&(n+="selected-header-option "),n},b=function(e,n){var t=document.getElementById(n.screen_name);t&&(t.scrollIntoView({behavior:"smooth"}),s(e),l(!1))};return Object(a.useEffect)((function(){return function(){o.unsubscribe()}}),[o]),Object(u.jsx)("div",{className:"header-container",onClick:function(){return l(!r)},children:Object(u.jsxs)("div",{className:"header-parent",children:[Object(u.jsx)("div",{className:"header-hamburger",onClick:function(){return l(!r)},children:Object(u.jsx)(p.a,{className:"header-hamburger-bars",icon:h.a})}),Object(u.jsx)("div",{className:"header-logo",children:Object(u.jsx)("span",{children:"Karan"})}),Object(u.jsx)("div",{className:r?"header-options show-hamburger-options":"header-options",children:K.map((function(e,n){return Object(u.jsx)("div",{className:d(n),onClick:function(){return b(n,e)},children:Object(u.jsx)("span",{children:e.screen_name})},e.screen_name)}))})]})})}t(51);t(52);function f(e){return Object(u.jsxs)("div",{className:"heading-container",children:[Object(u.jsx)("div",{className:"screen-heading",children:Object(u.jsx)("span",{children:e.title})}),e.subHeading?Object(u.jsx)("div",{className:"screen-sub-heading",children:Object(u.jsx)("span",{children:e.subHeading})}):Object(u.jsx)("div",{}),Object(u.jsx)("div",{className:"heading-separator",children:Object(u.jsx)("div",{className:"separator-line",children:Object(u.jsx)("div",{className:"separator-blob",children:Object(u.jsx)("div",{})})})})]})}var O=function e(){Object(o.a)(this,e),this.fadeInScreen=function(e){var n=document.getElementById(e);e&&n&&(n.style.opacity="5",n.style.transform="translateY(1px)")}};O.animations=new O;t(53);t(54);var x=function(e){var n=Object(a.useState)(0),s=Object(m.a)(n,2),i=s[0],c=s[1],r=Object(a.useState)({}),l=Object(m.a)(r,2),o=l[0],d=l[1],b=j.currentScreenFadeIn.subscribe((function(n){n.fadeInScreen===e.id&&O.animations.fadeInScreen(e.id)})),h=function(e){return Object(u.jsxs)("div",{className:"resume-heading",children:[Object(u.jsxs)("div",{className:"resume-main-heading",children:[Object(u.jsx)("div",{className:"heading-bullet"}),Object(u.jsx)("span",{children:e.heading?e.heading:""}),e.fromDate&&e.toDate?Object(u.jsx)("div",{className:"heading-date",children:e.fromDate+"-"+e.toDate}):Object(u.jsx)("div",{})]}),Object(u.jsx)("div",{className:"resume-sub-heading",children:Object(u.jsx)("span",{children:e.subHeading?e.subHeading:""})}),Object(u.jsx)("div",{className:"resume-heading-description",children:Object(u.jsx)("span",{children:e.description?e.description:""})}),Object(u.jsx)("div",{className:"resume-sub-heading",children:Object(u.jsx)("span",{children:e.subHeading2?e.subHeading2:""})}),Object(u.jsx)("div",{className:"resume-heading-description",children:Object(u.jsx)("span",{children:e.description2?e.description2:""})})]})},p=[{label:"Education",logoSrc:"education.svg"},{label:"Work History",logoSrc:"work-history.svg"},{label:"Programming Skills",logoSrc:"programming-skills.svg"},{label:"Projects",logoSrc:"projects.svg"},{label:"Achievements",logoSrc:"interests.svg"}],g=[Object(u.jsxs)("div",{className:"resume-screen-container",children:[Object(u.jsx)(h,{heading:"KIET Group of Institutions - Ghaziabad",subHeading:"BACHELOR OF TECHNOLOGY - Computer Science",description:"CGPA: 8.9",fromDate:"2018",toDate:"2022"}),Object(u.jsx)(h,{heading:"St. Mary's Academy - Saharanpur",subHeading:"Senior Secondary - Class 12th",description:"CGPA: 9.6",fromDate:"2017",toDate:"2018"})]},"education"),Object(u.jsxs)("div",{className:"resume-screen-container",children:[Object(u.jsxs)("div",{className:"experience-container",children:[Object(u.jsx)(h,{heading:"Amazon",subHeading:"Software Developer 1",fromDate:"July,2022",toDate:"Present"}),Object(u.jsxs)("div",{className:"experience-description",children:[Object(u.jsx)("span",{className:"resume-description-text",children:"- Working as a full stack developer in problem solve team for distribution center warehouse management system."}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"resume-description-text",children:"- Developed the Problem solve analytics dashboard over realtime data that provides insight on problem solve ticket metrics."}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"resume-description-text",children:"- Developed the quicksight dashboard for transportation of inventories using SQL."})]})]}),Object(u.jsxs)("div",{className:"experience-container",children:[Object(u.jsx)(h,{heading:"naukri.com",subHeading:"Software Engineer",fromDate:"Jan,2022",toDate:"July,2022"}),Object(u.jsx)("div",{className:"experience-description",children:Object(u.jsx)("span",{className:"resume-description-text",children:"- Worked as a android developer in Naukri India Jobseeker Android team , developed the Recommendation Jobs in Naukri India Jobseeker App."})})]})]},"work-experience"),Object(u.jsx)("div",{className:"resume-screen-container programming-skills-container",children:[{skill:"Java",ratingPercentage:85},{skill:"React JS",ratingPercentage:75},{skill:"Kotlin",ratingPercentage:80},{skill:"Javascript",ratingPercentage:75},{skill:"Android",ratingPercentage:75},{skill:"MySQL",ratingPercentage:85},{skill:"AWS",ratingPercentage:75},{skill:"Git Workflow",ratingPercentage:90}].map((function(e,n){return Object(u.jsxs)("div",{className:"skill-parent",children:[Object(u.jsx)("div",{className:"heading-bullet"}),Object(u.jsx)("span",{children:e.skill}),Object(u.jsx)("div",{className:"skill-percentage",children:Object(u.jsx)("div",{style:{width:e.ratingPercentage+"%"},className:"active-percentage-bar"})})]},n)}))},"programming-skills"),Object(u.jsx)("div",{className:"resume-screen-container",children:[{title:"Crime Vigilance App",duration:{fromDate:"2021",toDate:"2022"},description:"Android app which gives the users privilege to report crimes hassle free and bring down the crime rate of India",subHeading:"Technologies Used: Android, Java, Kotlin, Firebase, XML"},{title:"City Guide",duration:{fromDate:"2020",toDate:"2021"},description:"Android app which helps users to find the nearby shops or places in the city where the user resides",subHeading:"Technologies Used: Android, Java, Kotlin, Firebase, XML"},{title:"Space App",duration:{fromDate:"2020",toDate:"2021"},description:"Android app for citizens to contribute to early detection, verification, tracking, visualization, and notification of wildfires.",subHeading:"Technologies Used: Android, Java, Kotlin, Firebase, XML, Air Visual API, Arduino IDE"}].map((function(e,n){return Object(u.jsx)(h,{heading:e.title,subHeading:e.subHeading,description:e.description},n)}))},"projects"),Object(u.jsxs)("div",{className:"resume-screen-container",children:[Object(u.jsx)(h,{heading:"Amazon DCT India Hackathon - Most Innovative Idea Award",description:""}),Object(u.jsx)(h,{heading:"Smart India Hackathon 2020 Finalist",description:""}),Object(u.jsx)(h,{heading:"Finalist at Github Geek Code Hackathon",description:""})]},"interests")];return Object(a.useEffect)((function(){return function(){b.unsubscribe()}}),[b]),Object(u.jsx)("div",{className:"resume-container screen-container fade-in",id:e.id||"",children:Object(u.jsxs)("div",{className:"resume-content",children:[Object(u.jsx)(f,{title:"Resume",subHeading:"My Bio Details"}),Object(u.jsxs)("div",{className:"resume-card",children:[Object(u.jsx)("div",{className:"resume-bullets",children:Object(u.jsxs)("div",{className:"bullet-container",children:[Object(u.jsx)("div",{className:"bullet-icons"}),Object(u.jsx)("div",{className:"bullets",children:p.map((function(e,n){return Object(u.jsxs)("div",{onClick:function(){return function(e){d({style:{transform:"translateY("+360*e*-1+"px)"}}),c(e)}(n)},className:n===i?"bullet selected-bullet":"bullet",children:[Object(u.jsx)("img",{className:"bullet-logo",src:t(55)("./".concat(e.logoSrc)).default,alt:"B"}),Object(u.jsx)("span",{className:"bullet-label",children:e.label})]},n)}))})]})}),Object(u.jsx)("div",{className:"resume-bullet-details",children:Object(u.jsx)("div",{style:o.style,className:"resume-details-carousel",children:g.map((function(e){return e}))})})]})]})})},A=t(22);t(61);function v(e){return Object(u.jsx)("div",{className:"project-card card col",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h1",{className:"header",children:e.title}),Object(u.jsx)("p",{className:"text",children:e.para}),Object(u.jsx)("a",{href:"".concat(e.url2),className:"btn",target:"_blank",rel:"noreferrer",children:"See Code"})]})})}var N=t.p+"static/media/city.06bcb13a.png",w=[{title:"Crime Vigilance App",para:"Our project aims to help Indian citizens with crimes like theft, rapes, murder etc. It is very simple to use where the citizen will login to CITIZEN app and can report any crime and on the other end police personnel will log into POLICE app.",imageSrc:t.p+"static/media/vigilance.545914ce.png",url2:"https://github.com/sanchi0204/NEETRA",id:"1"},{title:"City Guide",para:"Android app which helps users to find the nearby shops or places in the city where the user resides",imageSrc:N,url2:"https://github.com/Karandeep1390/CityGuide",id:"2"},{title:"Aahar",para:"Team Project: The application allows a user to choose their meals for the day, check the menu and report their suggestions and feedback. The details of each user is recorded in the Admin application and food is served as per the orders for efficient management.",imageSrc:t.p+"static/media/fire.27d6eac9.png",url2:"https://github.com/sanchi0204/AAHAR",id:"3"}];var S=t(35),k=t.n(S);t(64),t(65),t(66);var I=t(3),y=t.n(I),B=t(7),M=t.p+"static/media/mailz.d13d5e32.jpeg",H=t(36),D=t.n(H),E=t(23),C=(t(84),t(21));function L(){var e=[{icon:C.b,link:"https://www.linkedin.com/in/karandeepsingh13/"},{icon:C.a,link:"https://github.com/Karandeep1390"}],n=(new Date).getFullYear();return Object(u.jsx)("div",{className:"main-footer-container",children:Object(u.jsxs)("div",{className:"main-footer-content",children:[Object(u.jsx)("div",{className:"main-footer-message",children:Object(u.jsxs)("span",{children:[" All rights reserved \xa9 Karandeep Singh ",n," "]})}),Object(u.jsx)("div",{className:"main-footer-socials",children:e.map((function(e,n){return Object(u.jsx)("a",{rel:"noopener noreferrer",href:e.link,target:"_blank",children:Object(u.jsx)(p.a,{className:"social-icon",icon:e.icon})},n)}))}),Object(u.jsx)("button",{className:"home-button",onClick:function(){return j.scrollHandler.scrollToHome()},children:"Back to Top"})]})})}t(85);var K=[{screen_name:"Home",component:function(e){return Object(u.jsxs)("div",{className:"home-container",id:e.id||"",children:[Object(u.jsx)(g,{}),Object(u.jsx)(b,{})]})}},{screen_name:"About Me",component:function(e){var n=j.currentScreenFadeIn.subscribe((function(n){if(n.fadeInScreen!==e.id)return O.animations.fadeInScreen(e.id)})),t={description:"Adaptable developer with a knowledge in Java, React and Javascript, along with a drive for building innovative web applications. Currently working as SDE - 1 at AMAZON after graduating in Computer Science from KIET Group of Institutions",highlights:{bullets:["Full Stack Web Development","React and Redux","Java and Kotlin","MySQL and relational databases","Android Developer","RESTful API's","Amazon Web Services"],heading:"Here are a few highlights:"}};return Object(a.useEffect)((function(){return function(){n.unsubscribe()}}),[n]),Object(u.jsx)("div",{className:"about-me-container screen-container fade-in",id:e.id||"",children:Object(u.jsxs)("div",{className:"about-me-parent",children:[Object(u.jsx)(f,{title:"About Me",subHeading:"Why Choose Me?"}),Object(u.jsx)("div",{className:"about-me-card",children:Object(u.jsxs)("div",{className:"about-me-details",children:[Object(u.jsx)("span",{className:"about-me-description",children:t.description}),Object(u.jsxs)("div",{className:"about-me-highlights",children:[Object(u.jsx)("div",{className:"highlight-heading",children:Object(u.jsx)("span",{children:t.highlights.heading})}),t.highlights.bullets.map((function(e,n){return Object(u.jsxs)("div",{className:"highlight",children:[Object(u.jsx)("div",{className:"highlight-blob"}),Object(u.jsx)("span",{children:e})]},n)}))]}),Object(u.jsxs)("div",{className:"about-me-options",children:[Object(u.jsx)("button",{className:"btn primary-btn",onClick:function(){return j.scrollHandler.scrollToHireMe()},children:"Hire Me"}),Object(u.jsx)("a",{href:"Karandeep_Singh_Resume.pdf",download:"Karandeep_Singh_Resume.pdf",children:Object(u.jsx)("button",{className:"btn highlighted-btn",children:"Download Resume"})})]})]})})]})})}},{screen_name:"Resume",component:x},{screen_name:"Projects",component:function(e){var n=j.currentScreenFadeIn.subscribe((function(n){n.fadeInScreen===e.id&&O.animations.fadeInScreen(e.id)}));return Object(a.useEffect)((function(){return function(){n.unsubscribe()}}),[n]),Object(u.jsxs)("div",{children:[Object(u.jsx)(f,{title:"Projects",subHeading:"What I've been working on"}),Object(u.jsx)("section",{className:"project-section fade-in",id:e.id||"",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(k.a,Object(A.a)(Object(A.a)({className:"owl-carousel",id:"project-carousel"},{loop:!0,margin:0,nav:!0,animateIn:"bounceInRight",animateOut:"bounceOutRight",dots:!0,autoplay:!0,smartSpeed:1e3,responsive:{0:{items:1},768:{items:1},1e3:{items:3}}}),{},{children:Object(u.jsx)("div",{className:"col-lg-12",children:Object(u.jsx)("div",{className:"project-item",children:Object(u.jsx)("div",{className:"project-comment",children:Object(u.jsx)("div",{className:"work-wrapper",id:"Project-carousel",children:Object(u.jsx)("div",{className:"cards",children:w.map((function(e){return Object(u.jsx)(v,{id:e.id,title:e.title,para:e.para,url1:e.url1,url2:e.url2},e.id)}))})})})})})}))})}),Object(u.jsx)("div",{className:"footer-image",children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAB+CAMAAADyQ/wTAAAAolBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ELnaCAAAANXRSTlMA9CPeCPsE2McMwa7SF6GF6PIzE/jjdlzMuj0uKB9B72w4l4wQtBpoTkbsp2JKepJXnH9xUgP+CQ8AAAxTSURBVHja7N3bTpNBFIDR3QqC+BMxBq1GRJRQSBuO2e//akAIGQ6lBMLscLHWA8ztl5nMzI7DAADK5edxAADFMrcuPgUAUCqvrO8FAFApr41mOwEA1MkbH6YBAJTJWxvOoQGgTDYnBwEAlMg7tqfuQwNAibxn/SgAgP7yvtHMvxwA0F8+tHu+HwBAX/nYcLoSAEBPucjGnwAAOsqFVs9+BwDQTT7h6xevggGgm3zS2l+vggGgk1xiOP0YAEAHudRPH3MAQA+53OrMjAYAeHv5nNE/F6IBoCzAze5/31MCQFmAm63zbwEAFAW42f4uwQBQFuBmMCwYAOoC3EzmEgwAZQFuJlNzkgCgLMDNYBcMAHUBbiY/JBgAygLcTOYOogGgLMDN2nwzAOhrpdkZL7L365HxIpttIRuo9yNfZzjeDwBe7JK9+8xWFAiiAKyAgOQgAiIoIiIKCGLvf2vTOjNncjz6HuF+Oyj/XIvuruLvuAfrIXcfWv2jRP5MEr8Q2J8xFz9gf0YRv0jlT/SPKvdhZd3Z3B1PYRnejzoSwISwSwyoBAD4VcaGVGBRR6peUlftThIpxXyYfUS6YPYwNSlDvNOo3ZKqaQE5LSSgFalI5i4EMCGsjggGgLGjiaSu1+vV7XZrq6pKaGzJPiVQmylFBoEWsqEVKbQymZZIK81oxbTwORL5HQKYMnfWBABgDGjQ2qrKBIEVRVGx3S53u10qSdLpdLrn7IKMES2c1i9Ikrzb6dttHUVxEISqilB+eQBTiyaaAAAM0p5h4rJ027a6h22aeorimOY4o/avmaagKGlKE7lq27KMGXwqfVEAUwu/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",alt:"Phot0 not responding"})})]})}},{screen_name:"Contact Me",component:function(e){var n=j.currentScreenFadeIn.subscribe((function(n){n.fadeInScreen===e.id&&O.animations.fadeInScreen(e.id)})),t=Object(a.useState)(""),s=Object(m.a)(t,2),i=s[0],c=s[1],l=Object(a.useState)(""),o=Object(m.a)(l,2),d=o[0],b=o[1],h=Object(a.useState)(""),p=Object(m.a)(h,2),g=p[0],x=p[1],A=Object(a.useState)(""),v=Object(m.a)(A,2),N=v[0],w=v[1],S=Object(a.useState)(!1),k=Object(m.a)(S,2),I=k[0],H=k[1];Object(a.useEffect)((function(){return function(){n.unsubscribe()}}),[n]);var C=function(){var e=Object(B.a)(y.a.mark((function e(n){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,t={name:i,email:d,message:g},H(!0),e.next=6,D.a.post("/contact",t);case 6:a=e.sent,0===i.length||0===d.length||0===g.length?(w(a.data.msg),E.a.error(a.data.msg),H(!1)):200===a.status&&(w(a.data.msg),E.a.success(a.data.msg),H(!1),c(""),b(""),x("")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"main-container",id:e.id||"",children:[Object(u.jsx)(f,{subHeading:"Let's Keep In Touch",title:e.screenName?e.screenName:""}),Object(u.jsxs)("div",{className:"central-form",children:[Object(u.jsxs)("div",{className:"col",children:[Object(u.jsxs)("h2",{className:"title",children:[" ",Object(u.jsx)(r.a,{loop:1/0,steps:["Get in Touch \ud83d\udce7",1e3]})]}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/karandeepsingh13",children:Object(u.jsx)("i",{className:"fa fa-linkedin"})}),Object(u.jsx)("a",{href:"https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkVRlLTCRTfQXqkwxsmLPftVSSQlTWFFsLcZfcSPkLvnNKtndGnmDdqDpNSBGhtHmGLhpm",children:Object(u.jsx)("i",{className:"fa fa-envelope"})})]}),Object(u.jsxs)("div",{className:"back-form",children:[Object(u.jsxs)("div",{className:"img-back",children:[Object(u.jsx)("h4",{children:"Send Email Here!"}),Object(u.jsx)("img",{src:M,alt:""})]}),Object(u.jsxs)("form",{onSubmit:C,children:[Object(u.jsx)("p",{children:N}),Object(u.jsx)("label",{htmlFor:"name",children:"Name"}),Object(u.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},value:i}),Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{type:"email",onChange:function(e){b(e.target.value)},value:d}),Object(u.jsx)("label",{htmlFor:"message",children:"Message"}),Object(u.jsx)("textarea",{type:"text",onChange:function(e){x(e.target.value)},value:g,name:"message"}),Object(u.jsx)("div",{className:"send-btn",children:Object(u.jsxs)("button",{type:"submit",children:["Send ",Object(u.jsx)("i",{className:"fa fa-paper-plane"}),I?Object(u.jsx)("b",{className:"load",children:Object(u.jsx)("i",{className:"fa fa-spinner fa-pulse"})}):""]})})]})]})]}),Object(u.jsx)(L,{})]})}}],T=function(e){if(!e)return-1;for(var n=0;n<K.length;n++)if(K[n].screen_name===e)return n;return-1};function F(){return Object(u.jsx)("div",{className:"portfolio-container",children:K.map((function(e){return e.component?Object(u.jsx)(e.component,{screenName:e.screen_name,id:e.screen_name},e.screen_name):Object(u.jsx)("div",{},e.screen_name)}))})}var J=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(F,{})})},G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,89)).then((function(n){var t=n.getCLS,a=n.getFID,s=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),a(e),s(e),i(e),c(e)}))};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(J,{})}),document.getElementById("root")),G()}},[[86,1,2]]]);
//# sourceMappingURL=main.56d5bc03.chunk.js.map