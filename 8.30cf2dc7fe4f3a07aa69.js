(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{I0yw:function(t,e,n){"use strict";n.r(e),n.d(e,"AboutModule",(function(){return A}));var i=n("ofXK"),o=n("fXoL"),c=n("NlAO"),a=n("zFfM"),s=n("NFeN"),r=n("sYmb");let l=(()=>{class t{constructor(){this.key="about."}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Hb({type:t,selectors:[["app-about-basic"]],decls:18,vars:12,consts:[[1,"row"],[1,"col-md-4"],["wmAnimate","fadeInLeft","speed","faster","aos","","once","",1,"section-title","has-reveal-effect"],[1,"col-md-8"],["wmAnimate","fadeInUp","speed","faster","aos","","once","",1,"lead","has-lighter-color","pj-font-normal"],["wmAnimate","fadeInUp","speed","faster","delay","200ms","aos","","once",""],["href","/assets/docs/Oksana_Muzychenko_CV.pdf","download","",1,"btn","btn-outline-light","btn-lg","pj-btn","mt-2"]],template:function(t,e){1&t&&(o.Tb(0,"div",0),o.Tb(1,"div",1),o.Tb(2,"h3",2),o.Fc(3),o.fc(4,"translate"),o.Sb(),o.Sb(),o.Tb(5,"div",3),o.Tb(6,"p",4),o.Fc(7),o.fc(8,"translate"),o.Sb(),o.Tb(9,"p",5),o.Fc(10),o.fc(11,"translate"),o.Sb(),o.Tb(12,"p",5),o.Tb(13,"a",6),o.Fc(14),o.fc(15,"translate"),o.Tb(16,"mat-icon"),o.Fc(17,"get_app"),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb()),2&t&&(o.Bb(3),o.Hc(" ",o.gc(4,4,e.key+"aboutMeTitle")," "),o.Bb(4),o.Hc(" ",o.gc(8,6,e.key+"aboutIntro")," "),o.Bb(3),o.Hc(" ",o.gc(11,8,e.key+"aboutDescription")," "),o.Bb(4),o.Hc(" ",o.gc(15,10,e.key+"download")," "))},directives:[c.a,s.a],pipes:[r.c],styles:[""]}),t})();const p=t=>{const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)};var b=n("bSt+"),g=n("vFK0");let m=(()=>{class t extends b.a{constructor(t){super(t),this.baseUrl="/assets/configs/skills.json"}}return t.\u0275fac=function(e){return new(e||t)(o.Xb(g.a))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const d=["skillsContainer"];function u(t,e){if(1&t&&(o.Tb(0,"div",5),o.Tb(1,"span",6),o.Fc(2),o.Sb(),o.Tb(3,"div",7),o.Tb(4,"div",8),o.Ob(5,"div",9),o.Tb(6,"span",10),o.Fc(7),o.Sb(),o.Sb(),o.Sb(),o.Sb()),2&t){const t=e.$implicit,n=o.ec();o.Bb(2),o.Gc(t.name),o.Bb(1),o.Fb("done-animate",n.init),o.Bb(2),o.Ac("width",n.init?t.value+"%":0),o.Bb(2),o.Hc("",t.value,"%")}}let f=(()=>{class t{constructor(t){this.skillsService=t,this.key="about.skills."}onScroll(){!this.init&&p(this.skillsContainer.nativeElement)&&(this.init=!0)}ngOnInit(){this.skills$=this.skillsService.getItems()}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(m))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-skills"]],viewQuery:function(t,e){var n;1&t&&o.zc(d,!0),2&t&&o.pc(n=o.bc())&&(e.skillsContainer=n.first)},hostBindings:function(t,e){1&t&&o.ac("scroll",(function(t){return e.onScroll(t)}),!1,o.tc)},decls:8,vars:6,consts:[[1,"skills"],["skillsContainer",""],["wmAnimate","fadeInLeft","speed","faster","delay","1s","aos","","once","",1,"section-title"],[1,"row"],["class","col-lg-4 col-md-6 col-12 mb-4",4,"ngFor","ngForOf"],[1,"col-lg-4","col-md-6","col-12","mb-4"],[1,"skills__name"],[1,"progress-wrap"],[1,"progress",2,"height","6px"],["role","progressbar","data-progress","100",1,"progress-bar"],[1,"progress-value"]],template:function(t,e){1&t&&(o.Tb(0,"div",0,1),o.Tb(2,"h3",2),o.Fc(3),o.fc(4,"translate"),o.Sb(),o.Tb(5,"div",3),o.Dc(6,u,8,6,"div",4),o.fc(7,"async"),o.Sb(),o.Sb()),2&t&&(o.Bb(3),o.Hc(" ",o.gc(4,2,e.key+"title")," "),o.Bb(3),o.jc("ngForOf",o.gc(7,4,e.skills$)))},directives:[c.a,i.j],pipes:[r.c,i.b],styles:[".skills__name[_ngcontent-%COMP%]{display:inline-block;font-weight:600;font-size:12px;letter-spacing:.1em;margin:0 0 .5rem}.skills__progress[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:12px}.skills__progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;margin-left:.4rem}.progress-wrap[_ngcontent-%COMP%]{position:relative;padding-right:50px}.progress-value[_ngcontent-%COMP%]{position:absolute;display:block;width:50px;height:20px;line-height:20px;right:0;top:50%;margin:-10px 0 0;text-align:right;font-size:14px;font-weight:600}"]}),t})();function h(t,e){if(1&t&&(o.Tb(0,"li",6),o.Tb(1,"p",7),o.Fc(2),o.Sb(),o.Tb(3,"p",8),o.Tb(4,"strong"),o.Fc(5),o.Sb(),o.Sb(),o.Ob(6,"p",9),o.Sb()),2&t){const t=e.$implicit;o.Bb(2),o.Gc(t.date),o.Bb(3),o.Gc(t.name),o.Bb(1),o.jc("innerHTML",t.description,o.vc)}}function v(t,e){if(1&t&&(o.Tb(0,"li",6),o.Tb(1,"p",7),o.Fc(2),o.Sb(),o.Tb(3,"p",8),o.Tb(4,"strong"),o.Fc(5),o.Sb(),o.Sb(),o.Ob(6,"p",9),o.Sb()),2&t){const t=e.$implicit;o.Bb(2),o.Gc(t.date),o.Bb(3),o.Gc(t.name),o.Bb(1),o.jc("innerHTML",t.description,o.vc)}}let O=(()=>{class t{constructor(){this.key="about.education."}ngOnInit(){this.getEducation(),this.getExperience()}getEducation(){this.education=[{date:"2015",name:"Ukrainian IT School",description:"Frontend development"},{date:"2013 - 2014",name:"O.M. Beketov National University of Urban Economy",description:"<b>Specialist degree</b> \u201cConstruction Engineer\u201d"},{date:"2009 - 2013",name:"O.M. Beketov National University of Urban Economy",description:"<b>Bachelor degree</b> \u201cConstruction Engineer\u201d"}]}getExperience(){this.experience=[{date:"April 2019 - Present",name:"Requestum",description:"<b>Lead Frontend Software Engineer</b>"},{date:"October 2017 - April 2019",name:"Requestum",description:"<b>Senior Frontend Software Engineer</b>"},{date:"October 2015 - October 2017",name:"IT-HIVE",description:"<b>Frontend Software Engineer</b>"},{date:"January 2014 - August 2015",name:"Rub90",description:"<b>Frontend Software Developer</b>"},{date:"June 2013 - December 2013",name:"Martin",description:"<b>Junior Frontend Developer</b>"}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Hb({type:t,selectors:[["app-education"]],decls:13,vars:8,consts:[[1,"row"],[1,"col-md-6","mb-5","mb-md-0"],["wmAnimate","fadeInLeft","speed","faster","delay","250ms","aos","","once","",1,"section-title"],[1,"experience-list"],["wmAnimate","fadeInUp","speed","faster","delay","250ms","aos","","once","",4,"ngFor","ngForOf"],[1,"col-md-6"],["wmAnimate","fadeInUp","speed","faster","delay","250ms","aos","","once",""],[1,"item-time"],[1,"item-name"],[1,"item-description",3,"innerHTML"]],template:function(t,e){1&t&&(o.Tb(0,"div",0),o.Tb(1,"div",1),o.Tb(2,"h3",2),o.Fc(3),o.fc(4,"translate"),o.Sb(),o.Tb(5,"ul",3),o.Dc(6,h,7,3,"li",4),o.Sb(),o.Sb(),o.Tb(7,"div",5),o.Tb(8,"h3",2),o.Fc(9),o.fc(10,"translate"),o.Sb(),o.Tb(11,"ul",3),o.Dc(12,v,7,3,"li",4),o.Sb(),o.Sb(),o.Sb()),2&t&&(o.Bb(3),o.Hc(" ",o.gc(4,4,e.key+"titleEdu")," "),o.Bb(3),o.jc("ngForOf",e.education),o.Bb(3),o.Hc(" ",o.gc(10,6,e.key+"titleExp")," "),o.Bb(3),o.jc("ngForOf",e.experience))},directives:[c.a,i.j],pipes:[r.c],styles:['.experience-list[_ngcontent-%COMP%]{list-style-type:none;margin:0;padding:0}.experience-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;margin:0!important;padding:2rem 0 2rem 2.5rem!important;position:relative}.experience-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{background-color:#afafaf;opacity:.15}.experience-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"";position:absolute;z-index:2;left:0;top:50%;width:5px;height:5px;border-radius:50%;margin:.2rem 0 0;background-color:#ec1e1b;box-shadow:0 0 0 5px #1e1e1e}.experience-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{padding-top:0!important}.experience-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:before{top:calc(50% - 1rem)}.experience-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{padding-bottom:0!important}.experience-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before{top:calc(50% + 1rem)}.experience-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{content:"";position:absolute;z-index:1;left:2px;top:0;height:100%;width:1px}.experience-list[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{color:#dfdfdf;margin:0 0 .25rem;padding:0}.experience-list[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{letter-spacing:.05em}.experience-list[_ngcontent-%COMP%]   .item-time[_ngcontent-%COMP%]{display:inline-block;margin:0 0 .5rem;padding:.5rem;font-size:13px;line-height:1.05;letter-spacing:.075em;text-transform:uppercase;border-radius:2px;border:1px solid hsla(0,0%,87.5%,.3);color:#dfdfdf}.experience-list[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]{margin:0;padding:0;font-size:14px;letter-spacing:.025em}']}),t})();var C=n("f3AP");let M=(()=>{class t{constructor(t){this.el=t,this.appCountStart=0,this.appCountDuration=1500}ngOnInit(){this.animateCount()}animateCount(){const t=this.appCount-this.appCountStart;let e=Math.abs(Math.floor(200/t));e=Math.max(e,50);const n=(new Date).getTime()+this.appCountDuration;let i;const o=()=>{const e=(new Date).getTime(),o=Math.max((n-e)/this.appCountDuration,0),c=Math.round(this.appCount-o*t);this.el.nativeElement.innerText=c,c>=this.appCount&&clearInterval(i)};i=setInterval(o,e),o()}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(o.l))},t.\u0275dir=o.Ib({type:t,selectors:[["","appCount",""]],inputs:{appCount:"appCount",appCountStart:"appCountStart",appCountDuration:"appCountDuration"}}),t})();const _=["container"];function y(t,e){if(1&t&&(o.Tb(0,"div",6),o.Tb(1,"div",7),o.Tb(2,"span",8),o.Fc(3,"0"),o.Sb(),o.Tb(4,"div",9),o.dc(),o.Tb(5,"svg",10),o.Ob(6,"polygon",11),o.Sb(),o.Sb(),o.Sb(),o.cc(),o.Tb(7,"h6",12),o.Fc(8),o.fc(9,"translate"),o.Sb(),o.Sb()),2&t){const t=e.$implicit,n=o.ec(2);o.Bb(2),o.Fb("counter_more",t.more),o.jc("appCount",t.value),o.Bb(6),o.Gc(o.gc(9,4,n.key+t.name))}}function S(t,e){if(1&t&&(o.Tb(0,"div",3),o.Tb(1,"div",4),o.Dc(2,y,10,6,"div",5),o.Sb(),o.Sb()),2&t){const t=o.ec();o.jc("@fadeInOut",void 0),o.Bb(2),o.jc("ngForOf",t.statistic)}}let x=(()=>{class t{constructor(){this.key="about.projects."}onScroll(){!this.init&&p(this.container.nativeElement)&&(this.init=!0)}ngOnInit(){this.getStatistics()}getStatistics(){this.statistic=[{name:"clients",value:27},{name:"projects",value:49},{name:"hours",more:!0,value:22680},{name:"code",more:!0,value:5e6}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Hb({type:t,selectors:[["app-projects-amount"]],viewQuery:function(t,e){var n;1&t&&o.zc(_,!0),2&t&&o.pc(n=o.bc())&&(e.container=n.first)},hostBindings:function(t,e){1&t&&o.ac("scroll",(function(t){return e.onScroll(t)}),!1,o.tc)},decls:3,vars:1,consts:[[1,"inner-section","has-lighter-bg","mt-5"],["container",""],["class","container",4,"ngIf"],[1,"container"],[1,"row","justify-content-center"],["class","col-md-3 col-12 text-center",4,"ngFor","ngForOf"],[1,"col-md-3","col-12","text-center"],[1,"pj-animated-number-wrap"],[1,"pj-animated-number","counter",3,"appCount"],[1,"pj-zigzag-line"],["version","1.1","viewBox","0 0 36 6","enable-background","new 0 0 36 6",0,"xml","space","preserve"],["points","4.5,4.5 0,0 0,1.208 4.5,5.708 9,1.208 13.5,5.708 18,1.208 22.5,5.708 27,1.208 31.5,5.708 36,1.208 36,0 31.5,4.5 27,0 22.5,4.5 18,0 13.5,4.5 9,0"],[1,"text-center","text-uppercase","mt-0","mb-5","mb-md-3"]],template:function(t,e){1&t&&(o.Tb(0,"div",0,1),o.Dc(2,S,3,2,"div",2),o.Sb()),2&t&&(o.Bb(2),o.jc("ngIf",e.init))},directives:[i.k,i.j,M],pipes:[r.c],styles:['.pj-animated-number-wrap[_ngcontent-%COMP%]{font-size:2.25rem;letter-spacing:-.025em;text-align:center;margin:0 0 1rem;padding:0}.pj-animated-number-wrap[_ngcontent-%COMP%]   .pj-animated-number[_ngcontent-%COMP%]{position:relative;margin:0;padding:0;color:#ec1e1b}.pj-animated-number-wrap[_ngcontent-%COMP%]   .pj-zigzag-line[_ngcontent-%COMP%]{font-size:1rem;margin:0 0 .5rem;padding:0;text-align:center;height:30px;overflow:hidden}.pj-animated-number-wrap[_ngcontent-%COMP%]   .pj-zigzag-line[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:inline-block;width:34px;height:auto;fill:currentColor;opacity:.75}.counter[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.counter_more[_ngcontent-%COMP%]:before{content:"> ";font-size:1.25rem;margin-right:.4rem}'],data:{animation:[C.a]}}),t})();var w=n("nhfI");function P(t,e){if(1&t&&(o.Tb(0,"div",8),o.Tb(1,"figure",9),o.Ob(2,"blockquote",10),o.fc(3,"translate"),o.Ob(4,"img",11),o.Tb(5,"figcaption"),o.Tb(6,"cite"),o.Fc(7),o.fc(8,"translate"),o.Sb(),o.Fc(9),o.fc(10,"translate"),o.Ob(11,"br"),o.Tb(12,"a",12),o.fc(13,"translate"),o.Fc(14),o.fc(15,"translate"),o.Sb(),o.Sb(),o.Sb(),o.Sb()),2&t){const t=e.$implicit,n=o.ec();o.Bb(2),o.jc("innerHTML",o.gc(3,6,n.key+t+".quote"),o.vc),o.Bb(2),o.jc("src","/assets/images/testimonials/"+t+".png",o.wc),o.Bb(3),o.Gc(o.gc(8,8,n.key+t+".name")),o.Bb(2),o.Hc(" ",o.gc(10,10,n.key+t+".position")," "),o.Bb(3),o.lc("href","mailto:",o.gc(13,12,n.key+t+".email"),"",o.wc),o.Bb(2),o.Gc(o.gc(15,14,n.key+t+".email"))}}let T=(()=>{class t{constructor(){this.config={speed:500,navigation:{nextEl:".testimonial-carousel-btn-next",prevEl:".testimonial-carousel-btn-prev"}},this.key="testimonials.",this.quotesKeys=["vincent"]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Hb({type:t,selectors:[["app-testimonials"]],decls:9,vars:2,consts:[["id","testimonials",1,"testimonial-carousel-contain","swiper-container",3,"config"],["class","swiper-slide",4,"ngFor","ngForOf"],[1,"testimonial-carousel-buttons"],[1,"testimonial-carousel-btn-prev"],["viewBox","0 0 20 20",1,"svg-icon"],["d","M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0\n\t\t\t\t\t\t\t\t\t\tL1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109\n\t\t\t\t\t\t\t\t\t\tc0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483\n\t\t\t\t\t\t\t\t\t\tc0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788\n\t\t\t\t\t\t\t\t\t\tS18.707,9.212,18.271,9.212z"],[1,"testimonial-carousel-btn-next"],["d","M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0\n\t\t\t\t\t\t\t\t\t\tl5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109\n\t\t\t\t\t\t\t\t\t\tc-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483\n\t\t\t\t\t\t\t\t\t\tc-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788\n\t\t\t\t\t\t\t\t\t\tS1.293,9.212,1.729,9.212z"],[1,"swiper-slide"],[1,"pj-testimonial"],[3,"innerHTML"],["alt","",1,"testimonial-person",3,"src"],["target","_blank",3,"href"]],template:function(t,e){1&t&&(o.Tb(0,"swiper",0),o.Dc(1,P,16,16,"div",1),o.Sb(),o.Tb(2,"div",2),o.Tb(3,"div",3),o.dc(),o.Tb(4,"svg",4),o.Ob(5,"path",5),o.Sb(),o.Sb(),o.cc(),o.Tb(6,"div",6),o.dc(),o.Tb(7,"svg",4),o.Ob(8,"path",7),o.Sb(),o.Sb(),o.Sb()),2&t&&(o.jc("config",e.config),o.Bb(1),o.jc("ngForOf",e.quotesKeys))},directives:[w.b,i.j],pipes:[r.c],styles:[".pj-testimonial[_ngcontent-%COMP%]{max-width:710px;margin-left:auto;margin-right:auto}.pj-testimonial[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]{font-size:1.15rem;margin-top:0;margin-bottom:50px}.pj-testimonial[_ngcontent-%COMP%]   img.testimonial-person[_ngcontent-%COMP%]{margin-left:70px;margin-bottom:.75rem;width:60px;height:60px;border-radius:50%}.pj-testimonial[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{padding-left:70px;font-size:13px;letter-spacing:.025em}.pj-testimonial[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%]{display:block;font-style:normal;font-weight:700}.testimonial-carousel-buttons[_ngcontent-%COMP%]{max-width:710px;margin-left:auto;margin-right:auto;margin-top:2rem}.testimonial-carousel-buttons[_ngcontent-%COMP%]   .testimonial-carousel-btn-next[_ngcontent-%COMP%], .testimonial-carousel-buttons[_ngcontent-%COMP%]   .testimonial-carousel-btn-prev[_ngcontent-%COMP%]{display:inline-block;width:40px;height:40px;line-height:40px;text-align:center;margin:0 .5rem;padding:0;border-radius:50%;vertical-align:middle;cursor:pointer;outline-width:0}.testimonial-carousel-buttons[_ngcontent-%COMP%]   .testimonial-carousel-btn-next[_ngcontent-%COMP%]:active, .testimonial-carousel-buttons[_ngcontent-%COMP%]   .testimonial-carousel-btn-next[_ngcontent-%COMP%]:focus, .testimonial-carousel-buttons[_ngcontent-%COMP%]   .testimonial-carousel-btn-prev[_ngcontent-%COMP%]:active, .testimonial-carousel-buttons[_ngcontent-%COMP%]   .testimonial-carousel-btn-prev[_ngcontent-%COMP%]:focus{outline-width:0}.testimonial-carousel-buttons[_ngcontent-%COMP%]   .testimonial-carousel-btn-next[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .testimonial-carousel-buttons[_ngcontent-%COMP%]   .testimonial-carousel-btn-prev[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:inline-block;width:16px;transform:translateY(-2px)}.testimonial-carousel-buttons[_ngcontent-%COMP%]   .testimonial-carousel-btn-prev[_ngcontent-%COMP%]{margin-left:70px}.testimonial-carousel-buttons[_ngcontent-%COMP%]   .total-slide[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;font-size:13px;letter-spacing:.025em;margin-left:1rem;margin-right:1rem}.testimonial-carousel-buttons[_ngcontent-%COMP%]   .total-slide[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;margin:0 .5rem}"]}),t})();var k=n("r+JB"),j=n("tyNb");let F=(()=>{class t{constructor(t){this.navService=t,this.key="about."}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(k.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-about-contact"]],decls:13,vars:7,consts:[[1,"inner-section","has-lighter-bg"],[1,"container"],[1,"row"],[1,"col-lg-8","col-md-7"],[1,"my-0"],[1,"col-lg-4","col-md-5","mt-md-0","mt-5","text-md-right","d-md-flex","justify-content-md-end","align-items-md-center"],[1,"btn","btn-outline-light","btn-lg","pj-btn",3,"routerLink"]],template:function(t,e){1&t&&(o.Tb(0,"div",0),o.Tb(1,"div",1),o.Tb(2,"div",2),o.Tb(3,"div",3),o.Tb(4,"h2",4),o.Fc(5),o.fc(6,"translate"),o.Sb(),o.Sb(),o.Tb(7,"div",5),o.Tb(8,"a",6),o.Fc(9),o.fc(10,"translate"),o.Tb(11,"mat-icon"),o.Fc(12,"send"),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb()),2&t&&(o.Bb(5),o.Gc(o.gc(6,3,e.key+"contact")),o.Bb(3),o.jc("routerLink",e.navService.contactLink.route),o.Bb(1),o.Hc(" ",o.gc(10,5,"header."+e.navService.contactLink.name)," "))},directives:[j.c,s.a],pipes:[r.c],styles:[""]}),t})();var B=n("GXNF");let H=(()=>{class t{constructor(){this.key="about."}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Hb({type:t,selectors:[["app-about"]],decls:20,vars:9,consts:[["id","about","wmAnimateView","","top","64",1,"page-section"],[3,"imageUrl","title","subtitle"],[1,"section-content","pb-0"],[1,"container"],[1,"pj-spacer"]],template:function(t,e){1&t&&(o.Tb(0,"section",0),o.Ob(1,"app-section-header",1),o.fc(2,"translate"),o.fc(3,"translate"),o.fc(4,"translate"),o.Tb(5,"div",2),o.Tb(6,"div",3),o.Ob(7,"app-about-basic"),o.Ob(8,"div",4),o.Ob(9,"app-skills"),o.Ob(10,"div",4),o.Ob(11,"app-education"),o.Ob(12,"div",4),o.Sb(),o.Ob(13,"app-projects-amount"),o.Ob(14,"div",4),o.Tb(15,"div",3),o.Ob(16,"app-testimonials"),o.Sb(),o.Ob(17,"div",4),o.Ob(18,"app-about-contact"),o.Sb(),o.Ob(19,"app-footer"),o.Sb()),2&t&&(o.Bb(1),o.jc("imageUrl",o.gc(2,3,e.key+"imageUrl"))("title",o.gc(3,5,e.key+"title"))("subtitle",o.gc(4,7,e.key+"subtitle")))},directives:[c.b,a.a,l,f,O,x,T,F,B.a],pipes:[r.c],styles:[""]}),t})();var I=n("HUga");"undefined"!=typeof window&&window,"undefined"==typeof console||console;let z=(()=>{class t{constructor(){this.animate=!1,this.max=100}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac}),t})(),E=(()=>{class t{static forRoot(){return{ngModule:t,providers:[z]}}}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})(),L=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})();const D=[{path:"",pathMatch:"full",component:H}];let A=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},imports:[[i.c,j.d.forChild(D),I.a,w.c,E,c.c,L]]}),t})()}}]);