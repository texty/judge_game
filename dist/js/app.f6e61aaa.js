(function(e){function t(t){for(var a,o,s=t[0],i=t[1],p=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);c&&c(t);while(d.length)d.shift()();return u.push.apply(u,p||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],a=!0,o=1;o<r.length;o++){var s=r[o];0!==n[s]&&(a=!1)}a&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},o={app:0},n={app:0},u=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-3466d96d":"dc936acb","chunk-826a24ee":"fa7a8c5b"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-826a24ee":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var a="css/"+({}[e]||e)+"."+{"chunk-3466d96d":"31d6cfe0","chunk-826a24ee":"cacb04d0"}[e]+".css",n=i.p+a,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var p=u[s],l=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(l===a||l===n))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){p=d[s],l=p.getAttribute("data-href");if(l===a||l===n)return t()}var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onload=t,c.onerror=function(t){var a=t&&t.target&&t.target.src||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete o[e],c.parentNode.removeChild(c),r(u)},c.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(c)})).then((function(){o[e]=0})));var a=n[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=u);var p,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;p=function(t){l.onerror=l.onload=null,clearTimeout(c);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,r[1](d)}n[e]=void 0}};var c=setTimeout((function(){p({type:"timeout",target:l})}),12e4);l.onerror=l.onload=p,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],l=p.push.bind(p);p.push=t,p=p.slice();for(var d=0;d<p.length;d++)t(p[d]);var c=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2f68":function(e,t,r){"use strict";r("de46")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("a630"),r("3ca3"),r("d3b7"),r("ddb0");var a=r("7a23");function o(e,t){var r=Object(a["x"])("router-view");return Object(a["s"])(),Object(a["e"])(r)}r("2f68");var n=r("6b0d"),u=r.n(n);const s={},i=u()(s,[["render",o]]);var p=i,l=r("6c02"),d=r("c93f"),c=r.n(d),f={class:"home"},h=Object(a["h"])("div",{id:"robe-wrapper"},[Object(a["h"])("img",{class:"",id:"judge-robe",alt:"Vue logo",src:c.a})],-1),v=Object(a["i"])("Зірвати"),m=Object(a["h"])("br",null,null,-1),b=Object(a["i"])("мантію"),g=[v,m,b];function y(e,t,r,o,n,u){return Object(a["s"])(),Object(a["g"])("div",f,[Object(a["h"])("div",null,[h,Object(a["j"])(a["b"],{name:"slide"},{default:Object(a["C"])((function(){return[Object(a["h"])("button",{onClick:t[0]||(t[0]=function(e){return u.letPlay()}),id:"game-title",class:"uppercase"},g)]})),_:1})])])}r("77ed");var w={name:"Home",components:{},methods:{letPlay:function(){var e=this;document.getElementById("robe-wrapper").classList.add("play"),document.getElementById("game-title").classList.add("fade-button"),setTimeout((function(){e.$router.push("/let_play")}),1e3)}}};const q=u()(w,[["render",y]]);var k=q,_=[{path:"/",name:"Home",component:k},{path:"/let_play",name:"pageOne",component:function(){return r.e("chunk-826a24ee").then(r.bind(null,"b8d2"))},props:!0},{path:"/result",name:"pageTwo",component:function(){return r.e("chunk-3466d96d").then(r.bind(null,"1944"))},props:!0}],j=Object(l["a"])({history:Object(l["b"])(),routes:_,scrollBehavior:function(){document.getElementById("app").scrollIntoView()}}),z=j,O=r("5a5d"),x=Object(a["d"])(p);x.use(z).mount("#app"),x.config.globalProperties.data=O,x.config.globalProperties.$index={array:Array.from(Array(O.length).keys()),old:0,new:0},x.config.globalProperties.$result={value:"false"}},"5a5d":function(e){e.exports=JSON.parse('[{"id":0,"name":"Світлана Шелест","foto":"/foto/shelest.jpg","hint":"Квартира в Липській вежі від матері-пенсіонерки","description":"<p>Знайомтесь, суддя Київського апеляційного адміністративного суду Світлана Шелест.</p><p>У 2015 році суддя <a href=\'https://bihus.info/suddya-kiyivskogo-apelyacijnogo-sudu-distala-v-podarunok-vip-apartamenti-na-miljon-dolariv/\'>отримала</a> в подарунок квартиру на 148 квадратних метрів в самісінькому центрі Києва — елітному житловому комплексі &ldquo;Липська вежа&rdquo; на вулиці Інститутській. Додатком до квартири йшов іще гараж. Вартість цієї елітної нерухомості — понад 2 мільйони гривень, а якщо точно, то 2 370 163 гривень.</p><p>Найцікавіше, що дарувальницею виявилась .... матір судді! Працюючи лікаркою, вона змогла заощадити понад 2 мільйони гривень, аби зробити такий коштовний подарунок доньці. Більше того, за інформацією журналістів, вартість квартири, яку Світлана Шелест вказала в декларації, може бути заниженою, адже ринкові ціни на квартири в &ldquo;Липській вежі&rdquo; в рази вищі — за трикімнатну квартиру, як у судді, треба було б викласти від 20 до 50 мільйонів гривень.</p>","quiz_question":"Чи повірили в пояснення судді члени Вищої кваліфкомісії суддів, які проводили атестацію судді?","quiz_test":[{"letter":"A","variant":"Треба бути дурнем, аби в це повірити! Члени комісії одноголосно рекомендували звільнити суддю","result":"false"},{"letter":"B","variant":"Члени Комісії звернулись до НАБУ, аби пояснення судді перевірили там","result":"false"},{"letter":"C","variant":"Члени Комісії успішно переатестували суддю Шелест, адже мають такі самі проблеми з майном, а тому зайвих питань не ставили","result":"true"},{"letter":"D","variant":"Члени Комісії відправили суддю Шелест на навчання до Школи суддів, аби вона навчилась пояснювати свої статки переконливіше","result":"false"}],"full_text":"<p>Звісно ж, члени Вищої кваліфкомісії суддів не побачили жодних проблем з такими коштовними подарунками. Вони успішно переатестували Світлану Шелест попри сумнівні статки та шлейф сумнівних рішень. Приміром, саме Світлана Шелест розглядала скаргу на рішення скандального судді Окружного адміністративного суду Києва Євгена Аблова. В грудні 2013 року Аблов своїм рішенням фактично зобов&rsquo;язав беркут розігнати протестувальників, а Шелест <a href=\'http://reyestr.court.gov.ua/Review/40201861\'>відмовилась</a> розглядати скаргу на рішення Аблова.&nbsp;</p><p>А у 2018 році Шелест сама почала вершити суддівські долі. З&rsquo;їзд суддів делегував її до Вищої ради правосуддя, наймогутнішого органу в судовій системі. Але і тут не обійшлось без скандалу: кандидати до Вищої ради правосуддя були наперед узгоджені суддівськими кланами та погоджені Банковою. Про це <a href=\'https://blogs.pravda.com.ua/authors/butko/5c18d4b7e3c68/\'>написала</a> за день до суддівського голосування активістка Автомайдану Катерина Бутко. Втім, навіть розголос не допоміг &mdash; судді все одно проголосували за Шелест.&nbsp;</p>","read_more_link":"<p><a href=\'http://blog.prosud.info/shelest_svitlana_bogdanivna.html\'>Дізнатися більше</a></p>"},{"id":1,"name":"Олег Прудивус","foto":"/foto/prudivus.jpg","hint":"Поїздки до Москви на Новий Рік","description":"<p>Знайомтесь, суддя Запорізького окружного адміністративного суду <strong>Олег Прудивус</strong>.</p><p>Він є одним із &ldquo;суддів Майдану&rdquo; - тих, які ухвалювали рішення проти учасників Революції Гідності. Так, у січні 2014 року Прудивус <a href=\'http://reyestr.court.gov.ua/Review/36706193\'>заборонив </a>проводити мирні зібрання в Запоріжжі. Втім, йому вдалось уникнути звільнення.</p><p>А ще, схоже, суддя Прудивус дуже любить державу-агресора, адже <a href=\'https://www.facebook.com/roman.maselko/posts/10211102841241412\'>щороку</a> святкує Новий рік у Москві та відпочиває там влітку.</p>","quiz_question":"Як гадаєте, чи покарали суддю за поїздки до держави-агресора?","quiz_test":[{"letter":"A","variant":"Та де там! Його успішно переатестували,  а потім ще й у Вищу раду правосуддя призначили","result":"true"},{"letter":"B","variant":"Служба безпеки України затримала суддю під час чергової поїздки до Москви і наразі проводить розслідування у справі про державну зраду","result":"false"},{"letter":"C","variant":"Вища кваліфкомісія суддів запропонувала звільнити суддю, однак Вища рада правосуддя відмовила у звільненні","result":"false"},{"letter":"D","variant":"Вища рада правосуддя відкрила дисциплінарну справу щодо судді, однак він поспішно вийшов у відставку, аби уникнути відповідальності","result":"false"}],"full_text":"<p>Суддівська карʼєра Олега Прудивуса склалась якнайкраще. У грудні 2018 року він успішно пройшов кваліфікаційне оцінювання - у Вищої кваліфкомісії суддів не було жодних питань про поїздки до Москви та рішення проти Майдану. Тоді ж таки з&rsquo;їзд суддів обрав Прудивуса до Вищої ради правосуддя - найвищого органу судової влади.</p> <p>Примітно, що Прудивус <a href=\'https://blogs.pravda.com.ua/authors/butko/5c18d4b7e3c68/\'>входив</a> до четвірки наперед узгоджених кандидатів. Про це за день до голосування написала активістка Автомайдану Катерина Бутко. Втім, розголос не допоміг завадити обранню сумнівного судді до Вищої ради правосуддя, всі четверо узгоджених кандидатів таки пройшли.</p><p>А вже у 2019 році прізвище Прудивуса з&rsquo;явилось на &ldquo;<a href=\'https://nabu.gov.ua/novyny/zlovzhyvannya-v-oask-zvyazky-z-vrp-rozshyfrovka-video\'>плівках Вовка</a>&rdquo; — записах Національного антикорупційного бюра з кабінету голови скандального Окружного адміністративного суду Павла Вовка. НАБУ підозрює суддів ОАСК у вчиненні тяжких злочинів проти правосуддя та намаганні захопити дежравну владу. Судді, зокрема, інкримінують втручання в роботу Вищої ради правосуддя. Як ми дізнались із плівок НАБУ, Олег Прудивус (або особа із голосом, дуже схожим на голос Прудивуса) часто спілкується з головою ОАСК та узгоджує із ним свої дії. На жаль, попри всі ці факти Прудивуса не відсторонили і він досі виконує повноваження члена Вищої ради правосуддя.</p>","read_more_link":"<p><a href=\'https://www.pravda.com.ua/cdn/graphics/2019/hto-e-hto-u-vishhij-radi-pravosuddja/#prudivus\'>Дізнатися більше</a></p"},{"id":2,"name":"Богдан Санін","foto":"/foto/sanin.jpg","hint":"Суддя, який заборонив Майдан","description":"<p>Знайомтесь, суддя скандального Окружного адміністративного суду міста Києва Богдан Санін.</p><p>За кілька хвилин до півночі 30 листопада 2013 року цей суддя ухвалив рішення, яким заборонив проводити мирні зібрання у центрі Києва. Так, суддя заборонив будь-кому збиратись на Майдані Незалежності, Хрещатику, Європейській площі, вулицях Банковій, Грушевського, Богомольця з 1 грудня 2013 року аж по 7 січня 2014-го.</p><p>Вже за кілька годин після ухвалення цього рішення група озброєних співробітників беркуту напала на мирних протестувальників, переважно студентів, які залишалися під Монументом Незалежності, та звіряче побила їх. Фактично, Санін своїм рішенням санкціонував цей розгін.</p><p>Богдан Санін є одним із найвідоміших суддів, яких умовно називають &laquo;суддями Майдану&raquo;.</p>","quiz_question":"Як гадаєте, чи звільнили суддю після Революції Гідності та втечі Януковича?","quiz_test":[{"letter":"A","variant":"Саніну вдалось уникнути відповідальності завдяки “амністії суддям Майдану”, проголосованій у Верховній Раді","result":"false"},{"letter":"B","variant":"Якби ж то! Вища рада правосуддя відмазала його від покарання, і він спокійно собі носить мантію далі ","result":"true"},{"letter":"C","variant":"Вища рада правосуддя рекомендувала звільнити суддю за рішення проти Майдану, однак не вистачило голосів за звільнення у Верховній Раді","result":"false"},{"letter":"D","variant":"Після втечі Януковича Санін втік до Росії, а зараз працює суддею в окупованому Криму","result":"false"}],"full_text":"<p>На жаль, Богдан Санін досі працює суддею та отримує зарплату з наших податків. А все завдяки членам Вищої ради правосуддя, які відмовились звільняти його.</p><p>Ще у вересні 2014 року Тимчасова спеціальна комісія з перевірки суддів, незалежний орган, спеціально створений для перевірки рішень суддів Майдану, <a href=\'http://www.vru.gov.ua/content/file/4_tsk_24.09_.2014_.doc\'>рекомендувала </a>звільнити Саніна за його свавільне рішення. Втім, Вища рада правосуддя відмовилась звільняти суддю. Члени ВРП у своєму <a href=\'http://www.vru.gov.ua/act/5868\'>рішенні</a> буквально сказали: так, рішення було незаконним, але ж суддя ухвалив його неумисно. Лише трьом членам Вищої ради правосуддя не забракло сміливості назвати речі своїми іменами, і вони написали окрему думку, в якій наполягали на тому, що Саніна таки треба було звільнити. Однак на рішення більшості це не вплинуло</p> <p>А у квітні 2018 року Санін прийшов на співбесіду до Вищої кваліфікаційної комісії суддів, яка мала вирішити, чи гідний він, аби працювати в суді далі. І ви не повірите, але члени комісії не змогли закрити очі на &ldquo;послужний список&rdquo; судді і таки <a href=\'https://www.radiosvoboda.org/a/news/29191349.html\'>рекомендували</a> його звільнити.</p>     <p>Рекомендація про звільнення Саніна надійшла до Вищої ради правосуддя і тут знов таки <a href=\'https://antac.org.ua/news/vrp-vidmovylasia-zvil-nyty-suddiu-maydanu-sanina-i-prosyt-sbu-rozsliduvaty-dii-shabunina/\'>стали</a> на бік негідного судді. Таким чином, Саніна вже двічі відмазала від звільнення Вища рада правосуддя.</p><p>Саме такі дії Вищої ради правосуддя посилюють почуття суддівської безкорності. У 2019 році Національне бюро прийшло з обшуками в ОАСК і повідомило про підозру кільком суддям цього суду, зокрема, і <a href=\'https://suspilne.media/124639-antikorupcijnij-sud-obrav-zapobiznij-zahid-suddi-oask-saninu/\'>Богдану Саніну</a>. В 2020 відбулись нові обшуки та нові підозри. Саніну та його колегам <a href=\'https://nabu.gov.ua/novyny/zlovzhyvannya-v-oask-zvyazky-z-vrp-rozshyfrovka-video\'>інкримінують</a> втручання в роботу судових органів та намагання захопити державну владу.</p><p>Вища рада правосуддя стала в нагоді Саніну і цього разу. У вересні 2020 року члени ВРП одноосібно <a href=\'https://vrpfails.dejure.foundation/vrp-ne-vidstoronyla-pidozriuvanykh-suddiv-oask\'>відмовились</a> тимчасово відсторонити Саніна від роботи на час проведення слідства. Провадження у кримінальній справі наразі триває.</p>","read_more_link":"<p>Про статки і родинні зв&rsquo;язки Саніна можна дізнатись <a href=\'https://blog.prosud.info/sanin_bogdan_volodimirovich.html\'>тут</a>.</p>"},{"id":3,"name":"Дмитро Запорожан","foto":"/foto/no_photo.png","hint":"«Цар і бог»","description":"<p>Знайомтесь, Дмитро Запорожан &mdash; ще донедавна суддя П&rsquo;ятого апеляційного адміністративного суду (Одеса).</p><p>У січні 2019 року суддя на незадекларованому Mercedes ML250 врізався у іншу автівку, припаркувану у дворі, та втік з місця події. Втім, його зафіксували камери спостереження. Поліцейські кілька разів викликали суддю, однак він ігнорував повідомлення. Тоді вони прийшли поспілкуватись з ним особисто.</p><p>Під час розмови з поліцейськими суддя неодноразово вдавався до нецензурної лайки та заявив, що він &laquo;цар і бог&raquo;. Відео розмови судді з поліцейськими було <a href=\'https://www.facebook.com/roman.maselko/videos/pcb.10212369820195094/10212369775073966/?type=3&amp;theater\'>оприлюднено</a> в мережі. Згодом представники об&rsquo;єднання &laquo;Автомайдан&raquo; звернулись із скаргою на Запорожана до Вищої ради правосуддя</p>","quiz_question":"Як гадаєте, що вирішила Вища рада правосуддя?","quiz_test":[{"letter":"A","variant":"Нічого, Вища рада правосуддя досі не розглянула скаргу, суддя спокійно працює далі","result":"false"},{"letter":"B","variant":"Вища рада правосуддя перевела Запорожана на роботу в Окружний адміністративний суд Києва","result":"false"},{"letter":"C","variant":"Вища рада правосуддя звільнила суддю","result":"true"},{"letter":"D","variant":"Вища рада правосуддя звільнила суддю, але Верховний Суд поновив його на посаді","result":"false"}],"full_text":"<p>Не повірите, але в цій історії Вища рада правосуддя не змогла відмазати суддю і таки мусила його звільнити.</p><p>Хоча Приморський райсуд Одеси <a href=\'http://reyestr.court.gov.ua/Review/82713778\'>відмовився</a> карати Дмитра Запорожана за наїзд, мотивувавши це спливом строків (стандартна суддівська відмазка), члени Вищої ради правосуддя не знайшли аргументів, аби зберегти суддю на посаді та рішенням від 25 лютого 2021 року <a href=\'https://hcj.gov.ua/doc/doc/6200\'>звільнила</a> суддю.</p> <p>Щоправда, як <a href=\'https://www.facebook.com/ProsudInfo/posts/2885540371721688\'>повідомляв </a>Автомайдан, Вища рада правосуддя очевидно не поспішала карати суддю й всіляко затягувала справу: 9 місяців члери ради розглядали скаргу в Дисциплінарній палаті, а потім ще 9 місяців &mdash; усім складом ради.</p><p>Примітно, що один член ВРП не голосував за звільнення Запорожана. Процедура голосування таємна, тому, на жаль, хто був проти звільнення &laquo;царя і бога&raquo;, ми не дізнаємось.</p>"},{"id":4,"name":"Євген Аблов","foto":"/foto/ablov.jpg","hint":"Зобов’язав беркут розігнати Майдан","description":"<p>Знайомтесь, Євген Аблов &mdash; суддя Окружного адміністративного суду Києва.</p><p>9 грудня 2013 року до ОАСК надійшов позов від громадянина, якому нібито заважали гуляти барикади на Майдані, а тому ві просив зобов&rsquo;язати МВС розблокувати вулиці в центрі Києва.</p><p>Усього за півтори години суддя Євген Аблов розглянув справу і <a href=\'http://www.reyestr.court.gov.ua/Review/35971677\'>заборонив</a><em> &ldquo;будь-яким особам вчиняти дії щодо блокування будь-яким способом&rdquo;</em> усіх вулиць, де відбувалися акції протесту. Після цієї ухвали судді Аблова в ніч з 10 на 11 грудня &ldquo;беркутівці&rdquo; пішли штурмом на Майдан.</p><p>У квітні 2014 року Верховна Рада ухвалила закон, який передбачав перевірку і звільнення суддів, що ухвалювали свавільні рішення проти учасників подій Євромайдану та Революції Гідності. Відповідальною перевірку суддів була Вища рада правосуддя.</p>","quiz_question":"Вгадайте, як склалася подальша суддівська кар’єра судді Аблова?","quiz_test":[{"letter":"A","variant":"Вища рада правосуддя звільнила Аблова з посади судді за порушення присяги","result":"false"},{"letter":"B","variant":"Суддя Аблов втратив посаду, оскільки Верховна Рада ліквідувала Окружний адмінсуд Києва, де працював Аблов.","result":"false"},{"letter":"C","variant":"Аблов подав заяву на звільнення, в якій покаявся за винесення несправедливого рішення, попросив вибачення у постраждалих від беркутівців у ніч з 10 на 11 грудня.","result":"false"},{"letter":"D","variant":"Звісно ж, Аблова не звільнили. Навіть навпаки - нагородили його службовим житлом у столиці а навпаки","result":"true"}],"full_text":"<p>За рішення проти Майдану суддя Євген Аблов майже одразу отримав &ldquo;нагороду&rdquo;. Ще у грудні 2013 року він отримав в користування службову <a href=\'https://bihus.info/sudda-z-dvoma-kvartirami-budinkom-ta-porse-otrimav-sluzbovu-kvartiru-na-140-kvadrativ/\'>квартиру</a> у Києва на 140 кв. м. Цю квартиру суддя згодом приватизував та продав за понад 9 мільйонів гривень! Це протизаконно, адже службове житло суддя, які його потребують, лише в користування. На момент отримання від держави службової квартири Аблова важко було назвати безхатченком, бо на матір судді в Одесі була записана квартира (144 кв.м.) і будинок (275 кв. м.). А ще у суддівської родини було шикарне авто &mdash; дружина судді задекларувала PORSCHE PANAMERA 4 та швидкісний катер EAGLE 645 L.</p><p>На жаль, Аблову вдалось уникнути покарання як за махінації зі службовим житлом, так і за рішення проти Майдану. У 2017 році Вища рада правосуддя нарешті розглянула скаргу на рішення Аблова, і навіть погодилась, що воно було незаконним, але <a href=\'https://vrpfails.dejure.foundation/page11316353.html\'>звільняти не стала</a>&mdash; бо сплинули строки притягнення судді до відповідальності. Загалом у Вищі радф правосуддя часто користувались цієї схемою, коли закрити очі на порушення судді було неможливо, але звільняти такого суддю також не хотілось.</p><p>А вже у 2019 році Аблову разом з іншими суддями Окружного адмінсуду прокурори вручили підозру у <a href=\'https://youtu.be/bWWfx8wg9yg\'>справі</a> про втручання в роботу державних органів. Детективи НАБУ оприлюднили <a href=\'https://www.youtube.com/watch?v=bWWfx8wg9yg\'>записи розмов</a> в кабінеті голови ОАСК Павла Вовка, в одному із фрагментів Євген Аблов говорить фразу, яка стала мемом у соцмережах &ldquo;Шеф, давай что-нибудь учудим&rdquo;. Далі у розмові Аблов і Вовк говорять про те, як і хто має подати позови до їхнього ж суду, аби зупинити повноваження членів Вищої кваліфікаційної комісії суддів, яка мала проводити оцінювання Аблова і всіх суддів ОАСК.</p><p>13 квітня 2021 Президент Володимир Зеленський вніс до Верховної Ради як невідкладний <a href=\'https://www.president.gov.ua/news/prezident-iniciyuvav-nevidkladnu-likvidaciyu-okruzhnogo-admi-67961\'>законопроєкт </a>про ліквідацію скандального Окружного адміністративного суду Києва, де працює суддя Аблов. Однак швидко проголосувати законопроєкт народні депутати не змогли. 18 жовтня 2021 року президент Володимир Зеленський в <a href=\'https://www.youtube.com/watch?v=mjOvQJWwuuU\'>інтерв&rsquo;ю</a> каналу ICTV сказав, що розгляд законопроєкту про ліквідацію ОАСК, &laquo;відкладали впливові люди&raquo;. Хто ці люди і як надовго вони заблокували голосування за ліквідацію ОАСК, Володимир Зеленський не сказав.</p><p>Тим часом Євген Аблов продовжує розглядати справи в ОАСК і множити свої статки. В 2016 році дружина Аблова за 4 мільйони гривень придбала квартиру в Одесі площею 196 м кв, син Матвій, якому тоді було лише сім років, став власником квартири в Одесі площею 144 м кв за 2 мільйони 700 тисяч грн, а ще один син в 2017 році придбав Toyota Land Cruiser за 1 мільйон 800 тисяч грн, хоча того року спромігся заробити як ФОП лише 300 тисяч грн, а в попередні 4 роки заробляв лише декілька сотень доларів за увесь рік.</p>"},{"id":5,"name":"Андрій Горяйнов","foto":"/foto/Горяйнов.jpg","hint":"Живе у віллі, оформленій на колишню тещу","description":"<p>Знайомтесь, Андрій Горяйнов &mdash; суддя Шостого апеляційного адміністративного суду.</p><p>У 2016 році суддя Горяйнов проходив оцінювання у Вищій кваліфікаційній комісії суддів. Там перевіряли його знання та доброчесність, зокрема, чи відповідає стиль життя судді його офіційним доходам. Примітно, що столичний суддя і у 2015, і у 2020 році офіційно декларує, що живе у невеликій квартирі площею 39 квадратних метрів.</p><p>Тоді, у 2016 році, Національне антикорупційне бюро звернуло увагу на те, що крім квартири суддя має у у користуванні ще триповерхову віллу у центрі Києва, оформлену на його колишню тещу. Під час співбесіди суддя заявив, що з тещею стосунків не підтримує, а до її будинка не має жодного стосунку, і звісно ж, ним не користується. Втім, журналісти програми &ldquo;Схеми&rdquo; <a href=\'https://www.radiosvoboda.org/a/27788455.html\'>довели</a> протилежне &mdash; вони зафіксували, як суддя після роботи прямує не до маленької квартири, яку вказує в своїх деклараціях, а додому до колишньої тещі.</p>","quiz_question":"Як гадаєте, чим закінчилась перевірка судді?","quiz_test":[{"letter":"A","variant":"Вища кваліфкомісія не повірила в пояснення судді та рекомендувала звільнити його.","result":"false"},{"letter":"B","variant":"Суддю відсторонили від роботи, оскільки НАБУ почало розслідувати справу про приховування майна від декларування.","result":"false"},{"letter":"C","variant":"Вища кваліфкомісія відправила суддю до Школи суддів, аби він навчився пояснювати переконливіше, а потім успішно переатестувала його.","result":"true"},{"letter":"D","variant":"Суддя звільнився, бо злякався подальших перевірок та розслідування НАБУ","result":"false"}],"full_text":"<p>Члени Вищої кваліфкомісії суддів не знайшли нічого іншого, як відправити Андрія Горяйнова на піврічне навчання до Національної школи суддів. А після цього тихенько переатестували його. Таким чином, суддя отримав пожиттєву індульгенцію.</p><p>Примітно, що Андрій Горяйнов очолює столичний Шостий апеляційний адміністративний суд. Саме цей суд розглядає скарги на рішення скандального Окружного адміністративного суду міста Києва, часто залишаючи їх у силі. У березні 2019 року Андрій Горяйнов <a href=\'https://www.slidstvo.info/articles/den-narodzhennya-ablova-polityky-skandalni-suddi-ta-holovnyj-vijskovyj-prokuror/\'>прийшов</a> на день народження заступника голови ОАСК Євгена Аблова. А кількома місяцями пізніше детективи НАБУ оприлюднили <a href=\'https://nabu.gov.ua/novyny/rozyasnennya-shchodo-obshukiv-v-okruzhnomu-adminsudi-kyyeva\'>аудіозаписи</a> з кабінету Голови ОАСК Павла Вовка, з яких стало відомо, що там часто &ldquo;вирішують питання&rdquo; в апеляційному суді.</p>","read_more_link":"<p>Детальніше про суддю та його статки у <a href=\'https://blog.prosud.info/goryajnov_andrij_mikolajovich.html\'>розслідуванні</a> Prosud.</p>"},{"id":6,"name":"Вікторія Жовноватюк","foto":"/foto/Жовноватюк.jpg","hint":"Вилетіла з конкурсу до Антикорсуду","description":"<p>Знайомтесь, суддя Солом&rsquo;янського районного суду міста Києва Вікторія Жовноватюк.</p><p>У 2018 році Вікторія Жовноватюк подала документи на конкурс до Вищого антикорупційного суду. Для оцінки професійних навичок та доброчесності кандидатів спеціально залучили шанованих міжнародних експертів, які увійшли до Громадської ради міжнародних експертів.</p><p>Міжнародні експерти викликали Вікторії Жовноватюк на спеціальне інтерв&rsquo;ю, оскільки в них виникли сумніви щодо її попередніх рішень та висловлювань у минулому. Зокрема, суддя ухвалила свавільне рішення щодо розслідування важливої кримінальної справи.</p>","quiz_question":"Як гадаєте, чи вдалось Вікторії Жовноватюк потрапити до Вищого антикорупційного суду?","quiz_test":[{"letter":"A","variant":"Суддя покаялась за свої порушення на співбесіді, і це допомогло їй стати суддею.","result":"false"},{"letter":"B","variant":"Міжнародні експерти були проти призначення Жовноватюк, але згодом Окружний адмінсуд Києва скасував їхнє рішення та ухвалив призначити Жовноватюк до Вищого антикорупційного суду.","result":"false"},{"letter":"C","variant":"Міжнародні експерти були проти призначення судді, але їх голос не був вирішальний, а члени Вищої кваліфкомісії проголосували на її користь.","result":"false"},{"letter":"D","variant":"Міжнародні експерти не повірили у відмовки судді, через що її участь у конкурсі було припинено ","result":"true"}],"full_text":"<p>Вікторії Жовноватюк не вдалось стати суддею Вищого антикорупційного суду, оскільки міжнародні експерти, які мали вирішальний голос, не проголосували на її користь. Таким чином, участь судді у конкурсі було припинено.</p><p>Міжнародні експерти поставили під сумнів доброчесність судді. Під час співбесіди з&rsquo;ясувалось, що Жовноватюк ухвалила свавільне рішення. <a href=\'https://ti-ukraine.org/news/zagalom-uzhe-32-pokynuly-konkurs-do-vas/\'>Йшлося</a> про досудове розслідування у кримінальній справі, яку вело Національне антикорупційне бюро. Вікторія Жовноватюк спочатку погодила доступ детективів до банківських рахунків компанії, яка фігурувала у розслідуванні, а потім раптово передумала: ухвалила нове рішення, яким забрала доступ, і назвала це все &ldquo;виправленням описки&rdquo;.</p><p>Під час співбесіди суддя всіляко намагалась ухилитись від відповідей на питання міжнародних експертів, зокрема, голови Громадської ради міжнародних експертів Сера Ентоні Хупера. Однак Серу Хуперу, який має багаторічний досвід розгляду кримінальних справ у Апеляційному суді Англії та Уельсу, <a href=\'https://www.facebook.com/antac.ua/videos/344395456155609/\'>вдалось</a> вивести суддю на чисту воду та продемонструвати її брехню.</p>"},{"id":7,"name":"Тарас Заєць","foto":"/foto/ТарасЗаєць.jpg","hint":"Cуддя Майдану, що провалився на конкурсі до ВАКС","description":"<p>Знайомтесь, суддя Святошинського районного суду міста Києва Тарас Заєць.</p><p>19 лютого суддя Тарас Заєць вирішив взяти під варту затриманого беркутівцями на Майдані протестувальника Василя Білоуса. Через три дні, після втечі Януковича з країни Заєць відпустив затриманого під домашній арешт, а 24 лютого кримінальну справу проти майданівців закрили взагалі.</p><p>Пізніше суддя приховував, що ухвалював рішення проти Майдану, і йому вдалось уникнути перевірки та звільнення.</p><p>Вже у 2018 році Тарас Заєць подався на конкурс до Вищого антикорупційного суду. Втім, міжнародні експерти заветували суддю через його свавільне рішення та сумнівне походження статків.</p><p>Після цього суддя прийшов на співбесіду до Вищої кваліфкомісії суддів в межах процедури переатестації суддів.</p>","quiz_question":"Як гадаєте, що зробила Вища  кваліфкомісія?","quiz_test":[{"letter":"A","variant":"Члени комісії рекомендували звільнити Зайця, адже в межах конкурсу до Вищого антикорупційного суду його визнали недоброчесним, отже він не може далі залишатись в системі.","result":"false"},{"letter":"B","variant":"Члени комісії відклали співбесіду, аби переатестувати суддю пізніше, коли суспільство забуде, як ганебно він припинив участь в конкурсі.","result":"false"},{"letter":"C","variant":"Члени комісії визнали суддю Зайця доброчесним.","result":"true"},{"letter":"D","variant":"Суддя звільнився сам, не дочекавшись рішення комісії.","result":"false"}],"full_text":"<p>кби це не дивувало, але члени Вищої кваліфкомісії успішно переатестували суддю Тараса Зайця у березні 2019 року, визнавши його доброчесним, попри те, що лише двома місяцями раніше вони разом з міжнародними експертами припинили його участь у конкурсі до Вищого антикорупційного суду через &ldquo;невідповідність критеріям доборчесності&rdquo;.</p><p>Виходить, що для антикорупційного суду Тарасу Зайцю доброчесності забракло, а для роботи у Святошинському районному суді Києва цілком достатньо.</p><p>Члени ВККС повністю проігнорували свавільні дії судді в лютому 2014 року. Примітно, що того дня 19 лютого інші судді ухвалили ще 8 рішень щодо спійманих на вулиці Грушевського протестувальників та кинула усіх за ґрати. Тексти усіх рішень були ідентичні. Так само синхронно судді відпускали затриманих після втечі Януковича.</p><p>Цікаво, що в листопаді 2015 року Вища рада правосуддя ініціювала звільнення колеги Зайця, судді Святошинського райсуду Алли Чалої, яка ухвалювала таке ж рішення.</p><p>Всі факти детально описані у <a href=\'https://grd.gov.ua/wp-content/uploads/2020/06/Zaiets_vysn.pdf\'>висновку</a> Громадської ради доброчесності, який проігнорували члени ВККС.</p><p>Варто згадати і сумнівні статки судді Зайця. У 2011 році він став щасливим власником новенької Audi Q7 за 715 100 грн (на той час орієнтовно 90 000 доларів США). При цьому, попредні чотири роки суддя працював в апараті Київського суду та кілька місяців в юридичній фірмі.</p><p>Під час співбесіди суддя пояснював, що придбати автомобіль йому допомогли батьки, зокрема, його мати, яка працювала суддею Вищого адміністративного суду України. Громадська рада доброчесності з&rsquo;ясувала, що навряд чи офіційних доходів батьків суддів могло вистачити на покупку автомобіля, зважаючи на те, що в той період вони придбали ще квартиру та два інші автомобілі за близько 253 000 доларів США.</p><p>Однак члени Вищої кваліфкомісії суддів вирішили не заморочуватись арифметичними підрахунками та проголосували за те, аби залишити Тараса Зайця в судовій системі.</p>"}]')},c93f:function(e,t,r){e.exports=r.p+"img/02_w.2e8692e9.gif"},de46:function(e,t,r){}});
//# sourceMappingURL=app.f6e61aaa.js.map