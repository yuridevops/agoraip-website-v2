(this["webpackJsonpresponsive-nav"]=this["webpackJsonpresponsive-nav"]||[]).push([[0],{20:function(e,a,n){e.exports=n.p+"static/media/agoraip-logo.b1a540fe.png"},28:function(e,a,n){e.exports=n.p+"static/media/bg-intro-blue.24fb10b8.png"},37:function(e,a,n){e.exports=n(61)},48:function(e,a,n){var t={"./agoraip-logo.png":20,"./bg-intro-blue.png":28,"./bg-intro.jpg":49,"./conferencia.png":50,"./dashboard.png":51,"./devices.png":52,"./duvidas.png":53,"./empresa.jpg":54,"./homem-telefone.png":55,"./ip-telephony.jpg":56,"./ip-telephony.png":57,"./nossa-empresa.png":58,"./pessoas-conversando.png":59,"./proposito.png":60};function o(e){var a=i(e);return n(a)}function i(e){if(!n.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}o.keys=function(){return Object.keys(t)},o.resolve=i,e.exports=o,o.id=48},49:function(e,a,n){e.exports=n.p+"static/media/bg-intro.a43f1711.jpg"},50:function(e,a,n){e.exports=n.p+"static/media/conferencia.68c5650b.png"},51:function(e,a,n){e.exports=n.p+"static/media/dashboard.247452cb.png"},52:function(e,a,n){e.exports=n.p+"static/media/devices.c224bcbd.png"},53:function(e,a,n){e.exports=n.p+"static/media/duvidas.e570b3c7.png"},54:function(e,a,n){e.exports=n.p+"static/media/empresa.df44e211.jpg"},55:function(e,a,n){e.exports=n.p+"static/media/homem-telefone.8d822bc1.png"},56:function(e,a,n){e.exports=n.p+"static/media/ip-telephony.6d9b7a33.jpg"},57:function(e,a,n){e.exports=n.p+"static/media/ip-telephony.d806349a.png"},58:function(e,a,n){e.exports=n.p+"static/media/nossa-empresa.5ac91566.png"},59:function(e,a,n){e.exports=n.p+"static/media/pessoas-conversando.388e82d1.png"},60:function(e,a,n){e.exports=n.p+"static/media/proposito.d575878d.png"},61:function(e,a,n){"use strict";n.r(a);var t=n(1),o=n.n(t),i=n(21),l=n.n(i),c=n(7),r=n(8),d=n(25),m=n(31),u=n(17),s=Object(t.createContext)(),p=function(e){var a=e.children,n=Object(t.useState)(0),i=Object(d.a)(n,2),l=i[0],c=i[1];return o.a.createElement(s.Provider,{value:{selected:l,setSelected:c}},a)};function g(){var e=Object(c.a)(["\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  z-index: 1;\n  \n  li {\n    color: #111;\n    padding: 18px 5px;\n    margin: 10px;\n  }\n\n  a{\n    text-decoration:none;\n  }\n\n  li:hover {\n    color: blue;\n  }\n\n  .button{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: blue;\n    padding: 10px;\n    border: solid 1px blue;\n    border-radius: 2px;\n    color: #fff;\n  }\n\n\n  .button-sup{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 5px;\n    color: #111;\n  }\n\n  .button-sup:hover{\n    color: blue;\n  }\n\n  .button-sup:hover .icon{\n    color: green;\n  }\n\n  .selected {\n    border-bottom: solid 3px blue;\n  }\n\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    background-color: #0D2538;\n    position: fixed;\n    transform: ",";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 50vw;\n    padding-top: 3.5rem;\n    transition: transform 0.3s ease-in-out;\n\n    .button-sup{\n      color: #fff;\n    }\n\n    li{\n      color: #fff;\n    }\n  }\n  \n"]);return g=function(){return e},e}var b=r.a.ul(g(),(function(e){return e.open?"translateX(0)":"translateX(100%)"})),f=function(e){var a=e.open,n=e.handleClick,i=Object(t.useContext)(s).selected;return console.log(a),o.a.createElement(b,{open:a},o.a.createElement(u.b,{to:"/",onClick:function(){a&&n(!a)}},o.a.createElement("li",{className:0===i?"selected":""},o.a.createElement("h4",null,"Inicio"))),o.a.createElement(u.b,{to:"/info",onClick:function(){a&&n(!a)}},o.a.createElement("li",{className:1===i?"selected":""},o.a.createElement("h4",null,"Sobre n\xf3s"))),o.a.createElement(u.b,{to:"/plans",onClick:function(){a&&n(!a)}},o.a.createElement("li",{className:2===i?"selected":""},o.a.createElement("h4",null,"Planos"))),o.a.createElement("a",{href:"http://api.whatsapp.com/send?1=pt_BR&phone=5511952772090",target:"_blank"},o.a.createElement("li",null,o.a.createElement("div",{className:"button-sup"},o.a.createElement("h4",null,"Suporte"),o.a.createElement("h5",null,"(11) 95277-2090 ",o.a.createElement(m.a,{color:"#5afc03",fontSize:16}))))),o.a.createElement("a",{href:"http://api.whatsapp.com/send?1=pt_BR&phone=5541992724349",target:"_blank"},o.a.createElement("li",null,o.a.createElement("div",{className:"button"},o.a.createElement("center",null,o.a.createElement("h4",null,"Entrar em contato")),o.a.createElement("h5",null,"(41) 99272-4349 ",o.a.createElement(m.a,{className:"icon",color:"#fff",fontSize:16}))))))};function y(){var e=Object(c.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n\n    &:nth-child(1) {\n      transform: ",";\n    }\n\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return y=function(){return e},e}var E=r.a.div(y(),(function(e){return e.open?"#ccc":"#333"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),h=function(){var e=Object(t.useState)(!1),a=Object(d.a)(e,2),n=a[0],i=a[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{open:n,onClick:function(){return i(!n)}},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement(f,{open:n,handleClick:i}))},v=n(20),x=n.n(v);function S(){var e=Object(c.a)(["\n  width: 100%;\n  height: 72px;\n  position: fixed;\n  top: 0;\n  border-bottom: 2px solid #f1f1f1;\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-between;\n  background-color: #fff;\n  opacity: 1;\n  border-bottom: solid 0.5px #f2f2f2;\n  box-shadow: 0 0 0.3em #888888;\n  z-index: 1;\n  \n  .logo {\n    display: flex;\n    padding: 15px 0;\n    justify-content: start;\n    align-items: center;\n  }\n\n  .logo img{\n    max-height: 100%;\n  }\n\n  @media (max-width: 768px) {\n    .logo img{\n    max-width: 30%;\n    }\n  }\n"]);return S=function(){return e},e}var N=r.a.nav(S()),w=function(){return o.a.createElement(N,null,o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:x.a,alt:"Logo AgoraIP"})),o.a.createElement(h,null))},j=n(28),C=n.n(j);function O(){var e=Object(c.a)(["\n  .row {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    width: 100%;\n    padding: 30px 0px;\n    text-align: justify;\n    \n  }\n\n  .item {\n    min-width: 300px;\n    max-width: 700px;  \n    padding:30px;\n  }\n\n  .item-image img{\n    max-width: 600px;\n    max-height: 600px;\n  }\n\n  .row-white{\n    background-color: #fff;\n    flex-direction: row-reverse;\n  }\n\n  @media (max-width: 768px) {\n    .item-image img{\n      max-width: 300px;\n      max-height: 600px;\n    }\n  }\n"]);return O=function(){return e},e}var P=r.a.div(O()),z=function(e){var a=e.title,t=e.description,i=e.image,l=e.invert;return o.a.createElement(P,null,o.a.createElement("div",{className:l?"row row-white":"row"},o.a.createElement("div",{className:"item-image"},o.a.createElement("img",{src:n(48)("./".concat(i)),alt:i})),o.a.createElement("div",{className:"item "},o.a.createElement("h2",null,a),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h4",null,t))))},k=n(64),A=n(65),I=n(63),B=n(66),q=n(10);function R(){var e=Object(c.a)(["\n  \n  .map{\n    height: 400px;\n    z-index: 0;\n    overflow: hidden;\n  }\n"]);return R=function(){return e},e}var M=new(n.n(q).a.icon)({iconUrl:"https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png",iconSize:[18,30]}),F=r.a.div(R()),D=function(e){var a=e.mapPoints;return o.a.createElement(F,null,o.a.createElement(k.a,{className:"map",center:[-15.8290576,-61.1140448],zoom:4,zoomControl:!1,scrollWheelZoom:!1,doubleClickZoom:!1,touchZoom:!1,zoomAnimation:!1,dragging:!1,tap:!1},o.a.createElement(A.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),void 0!==a&&a.map((function(e){return o.a.createElement(I.a,{position:[e.latitude,e.longitude],icon:M},o.a.createElement(B.a,null,"".concat(e.city," ")))}))))},X=n(14);function G(){var e=Object(c.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 40px;\n  padding: 100px;\n  background-color: #f6fafb;\n  .card{\n    padding: 50px;\n    display: flex;\n    flex-direction:column;\n    justify-content: space-around;\n    align-items:center;\n    height: 300px;\n    background-color: #fff;\n    font-size: 14px;\n    text-align: center;\n  }\n\n  .card:hover{\n    box-shadow: 0 0 0.3em #888888;\n  }\n\n  .card-header{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    \n  }\n\n  .card-body{\n    display: flex;\n    justify-content: center;\n\n  }\n\n  h4{\n    margin-top: 20px;\n  }\n\n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n    justify-content: center;\n    \n  }\n\n"]);return G=function(){return e},e}var L=r.a.div(G()),T=function(){return o.a.createElement(L,null,o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement(X.d,{size:60,color:"#2b4c80"}),o.a.createElement("h4",null,"Atendentes virtuais")),o.a.createElement("div",{className:"card-body"},"Ofere\xe7a respostas automatizadas e encaminhamento de chamadas sem o aux\xedlio humano.")),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement(X.h,{size:60,color:"#2b4c80"}),o.a.createElement("h4",null,"Videoconfer\xeancia")),o.a.createElement("div",{className:"card-body"},"Fa\xe7a reuni\xf5es com clientes ou colegas de trabalho e poupe custos de viagem.")),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement(X.g,{size:60,color:"#2b4c80"}),o.a.createElement("h4",null,"Aplicativos m\xf3veis")),o.a.createElement("div",{className:"card-body"},"Esteja dispon\xedvel para comunica\xe7\xf5es empresariais em qualquer lugar com seu dispositivo iOS ou Android.")),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement(X.e,{size:60,color:"#2b4c80"}),o.a.createElement("h4",null,"Desvio de chamadas")),o.a.createElement("div",{className:"card-body"},"Encaminhe seu ramal para qualquer celular, telefone fixo ou para um colega de trabalho.")),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement(X.i,{size:60,color:"#2b4c80"}),o.a.createElement("h4",null,"Correio de voz virtual")),o.a.createElement("div",{className:"card-body"},"Ou\xe7a mensagens de voz onde estiver \u2014 na Internet, no celular ou em uma linha externa.")),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement(X.c,{size:60,color:"#2b4c80"}),o.a.createElement("h4",null,"Grupos de chamadas")),o.a.createElement("div",{className:"card-body"},"Fa\xe7a o telefone de um determinado grupo tocar quando um determinado ramal for discado.")),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement(X.f,{size:60,color:"#2b4c80"}),o.a.createElement("h4",null,"Compartilhamento combinado de v\xeddeo e tela")),o.a.createElement("div",{className:"card-body"},"Veja a galeria da webcam, al\xe9m de uma apresenta\xe7\xe3o ou aplicativo compartilhado na mesma tela.")),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement(X.b,{size:60,color:"#2b4c80"}),o.a.createElement("h4",null,"Chamadas VoIP")),o.a.createElement("div",{className:"card-body"},"Todos os colaboradores podem atender a uma chamada, coloc\xe1-la em espera e transferi-la para outra pessoa.")),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement(X.a,{size:60,color:"#2b4c80"}),o.a.createElement("h4",null,"PBX em nuvem")),o.a.createElement("div",{className:"card-body"},"Todos os servi\xe7os ficam hospedados na nuvem, o que reduz os custos e aumenta a redund\xe2ncia.")))};function V(){var e=Object(c.a)(["\n  background-color: #f1f1f1;\n  .container-intro{\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    background-color: #111;\n    background-image: url(",");\n    background-size: cover;\n    color: #fff;\n\n  }\n  .intro-text{\n    margin: 40px;\n    max-width: 600px;\n  }\n\n  .announce-customer{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 20px 20px;\n  }\n\n  iframe{\n    margin: 0 ;\n    border: 0;\n    width: 600px;\n  }\n\n"]);return V=function(){return e},e}var _=r.a.div(V(),C.a),J=function(){var e=Object(t.useContext)(s).setSelected;Object(t.useEffect)((function(){e(0)}),[]);return o.a.createElement(_,null,o.a.createElement("div",{className:"container-intro"},o.a.createElement("div",{className:"intro-text"},o.a.createElement("h1",null,"Bem vindo a AgoraIP!",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",{style:{fontSize:24}},"Aumente a ",o.a.createElement("span",{style:{color:"#5658DD"}},"produtividade")," da sua equipe sem se preocupar com nada, conhe\xe7a a central telef\xf4nica ",o.a.createElement("span",{style:{color:"#5658DD"}},"empresarial")," em nuvem da AgoraIP."))),o.a.createElement("iframe",{src:"https://player.vimeo.com/video/66865270?color=ff0179",width:"1300px",height:"360",rameborder:"0",allow:"autoplay; fullscreen"})),o.a.createElement("div",null,[{title:"Administre seu sistema telef\xf4nico empresarial de qualquer lugar.",description:"Administre todo o seu sistema telef\xf4nico de onde estiver e monitore os relat\xf3rios anal\xedticos de chamadas utilizando os aplicativos personalizados da AgoraIP. Gaste menos tempo fazendo altera\xe7\xf5es simples no seu PABX hospedado e mais tempo com o crescimento sua empresa.",image:"devices.png"},{title:"Colabore cara a cara em tempo real.",description:"Administre todo o seu sistema telef\xf4nico de onde estiver e monitore os relat\xf3rios anal\xedticos de chamadas utilizando os aplicativos personalizados da AgoraIP. Gaste menos tempo fazendo altera\xe7\xf5es simples no seu PABX hospedado e mais tempo com o crescimento sua empresa.",image:"conferencia.png",invert:!0},{title:"Continue sua conversa de qualquer dispositivo.",description:"Acesse suas chamadas, correio de voz e configura\xe7\xf5es do usu\xe1rio de qualquer lugar que voc\xea tenha acesso \xe0 internet. Seja utilizando o app de VoIP M\xf3vel da AgoraIP no seu smartphone ou telefones VoIP de escrit\xf3rio, a AgoraIP adapta voc\xea ao estilo de vida m\xf3vel.",image:"homem-telefone.png"},{title:"Obtenha insights com relat\xf3rios avan\xe7ados de an\xe1lise de chamadas.",description:"Veja o quadro geral quando se trata da sua central de atendimentos, utilizando o painel em tempo real e relat\xf3rios detalhados do AgoraIP PBX. Escolha entre 110 m\xe9tricas poss\xedveis para mensurar o desempenho e responsividade de um agente.",image:"dashboard.png",invert:!0}].map((function(e){return o.a.createElement(z,Object.assign({key:e.title},e))}))),o.a.createElement(T,null),o.a.createElement("div",{className:"announce-customer"},o.a.createElement("h1",null,"Nossos clientes pela Am\xe9rica do Sul"),o.a.createElement("h3",null,"N\xf3s temos clientes espalhados em mais de 90 cidades.")),o.a.createElement(D,{mapPoints:[{city:"Campo bom",company:"Sicoob",latitude:-29.6760083,longitude:-51.0845639},{city:"S\xe3o Paulo",company:"Sicoob",latitude:-23.6815314,longitude:-46.8754974},{city:"Lajeado",company:"Sicoob",latitude:-29.4498076,longitude:-52.065542},{city:"Dourados",company:"Sicoob",latitude:-22.158603,longitude:-55.4217782},{city:"Cachoeira do Sul",company:"Sicoob",latitude:-30.0262357,longitude:-52.9189279},{city:"Santa Maria",company:"Sicoob",latitude:-29.7767196,longitude:-54.103253},{city:"Marechal C\xe2ndido Rondon",company:"Sicoob",latitude:-24.5881677,longitude:-54.301672},{city:"Assis Chateaubriand",company:"Sicoob",latitude:-24.3997629,longitude:-53.5337091},{city:"Formosa do Oeste",company:"Sicoob",latitude:-24.2960757,longitude:-53.3247233},{city:"S\xe3o Jos\xe9 dos Campos",company:"Sicoob",latitude:-23.1891287,longitude:-46.0031001},{city:"Santos",company:"Sicoob",latitude:-23.8638726,longitude:-46.4303169},{city:"Gravata\xed",company:"Sicoob",latitude:-29.8856961,longitude:-51.0586277},{city:"P\xe9rola",company:"Sicoob",latitude:-29.8853614,longitude:-51.0586278},{city:"S\xe3o Caetano do Sul",company:"Sicoob",latitude:-23.6248019,longitude:-46.5999275},{city:"Ponta Por\xe3",company:"Sicoob",latitude:-22.5175704,longitude:-55.7808976},{city:"P\xe9rola do Oeste",company:"Sicoob",latitude:-25.825285,longitude:-53.7602488},{city:"Santo Andr\xe9",company:"Sicoob",latitude:-23.7100986,longitude:-46.562939},{city:"S\xe3o Bernardo do Campo",company:"Sicoob",latitude:-23.8043604,longitude:-46.6718384},{city:"Canoas",company:"Sicoob",latitude:-29.9158509,longitude:-51.2495662},{city:"S\xe3o Carlos",company:"Sicoob",latitude:-22.0183658,longitude:-47.9660983},{city:"Mirand\xf3polis",company:"Sicoob",latitude:-21.1364845,longitude:-51.1205478},{city:"Paranava\xed",company:"Sicoob",latitude:-23.0804189,longitude:-52.4878448},{city:"Presidente Castelo Branco",company:"Sicoob",latitude:-23.278687,longitude:-52.1628077},{city:"Alto Paran\xe1",company:"Sicoob",latitude:-23.1316998,longitude:-52.3281384},{city:"Nova Londrina",company:"Sicoob",latitude:-22.7691385,longitude:-53.0073747},{city:"S\xe3o Carlos do Iva\xed",company:"Sicoob",latitude:-23.3675108,longitude:-52.6401631},{city:"Terra Rica",company:"Sicoob",latitude:-22.728993,longitude:-52.6378763},{city:"Paranava\xed",company:"Sicoob",latitude:-23.0804189,longitude:-52.4878448},{city:"Loanda",company:"Sicoob",latitude:-22.9293445,longitude:-53.1511394},{city:"Rondon",company:"Sicoob",latitude:-23.4162056,longitude:-52.779967},{city:"Hortol\xe2ndia",company:"Sicoob",latitude:-22.8769465,longitude:-47.2440488},{city:"Campinas",company:"Sicoob",latitude:-22.8920565,longitude:-47.2079827},{city:"Marechal C\xe2ndido Rondon",company:"Sicoob",latitude:-24.5881677,longitude:-54.3016727},{city:"Santa Cruz de Monte Castelo",company:"Sicoob",latitude:-22.9546741,longitude:-53.305594},{city:"Londrina",company:"Sicoob",latitude:-23.3211063,longitude:-51.2358039},{city:"Tapejara",company:"Sicoob",latitude:-23.6416244,longitude:-53.0122078},{city:"Barueri",company:"Sicoob",latitude:-23.5105739,longitude:-46.952562},{city:"Macap\xe1",company:"Sicoob",latitude:.022004,longitude:-51.2369502},{city:"Santana",company:"Sicoob",latitude:.009701,longitude:-51.4260503},{city:"Umuarama",company:"Sicoob",latitude:-23.7614198,longitude:-53.3401694},{city:"Cascavel",company:"Sicoob",latitude:-24.9635987,longitude:-53.5423926},{city:"Para\xedso do Norte",company:"Sicoob",latitude:-23.2828725,longitude:-52.6146771},{city:"Nova Santa Rosa",company:"Sicoob",latitude:-24.4485064,longitude:-54.0590914},{city:"Bento Gon\xe7alves",company:"Sicoob",latitude:-29.1498709,longitude:-51.5877516},{city:"Medianeira",company:"Sicoob",latitude:-25.2909241,longitude:-54.1146215},{city:"Arapongas",company:"Sicoob",latitude:-23.4157033,longitude:-51.5111739},{city:"Santa Helena",company:"Sicoob",latitude:-24.8599548,longitude:-54.3548322},{city:"Nova Esperan\xe7a",company:"Sicoob",latitude:-23.1863745,longitude:-52.2179725},{city:"Corumb\xe1",company:"Sicoob",latitude:-19.0283059,longitude:-57.6811603},{city:"Campo Grande",company:"Sicoob",latitude:-20.480722,longitude:-54.7756224},{city:"Caxias do Sul",company:"Sicoob",latitude:-29.1653408,longitude:-51.2437935},{city:"Matel\xe2ndia",company:"Sicoob",latitude:-25.2412963,longitude:-53.9895135},{city:"S\xe3o Miguel do Igua\xe7u",company:"Sicoob",latitude:-25.3446697,longitude:-54.2394821},{city:"Bento Gon\xe7alves",company:"Sicoob",latitude:-29.1498709,longitude:-51.5877516},{city:"Itaipulandia",company:"Sicoob",latitude:-25.1370768,longitude:-54.30937},{city:"Missal",company:"Sicoob",latitude:-25.1071479,longitude:-54.3991427},{city:"Foz do Igua\xe7u",company:"Sicoob",latitude:-25.5171112,longitude:-54.6170044},{city:"Foz do Igua\xe7u",company:"Sicoob",latitude:-25.5171112,longitude:-54.6170044},{city:"Jesu\xedtas",company:"Sicoob",latitude:-24.3792445,longitude:-53.3949743},{city:"Tr\xeas Lagoas",company:"Sicoob",latitude:-20.7833166,longitude:-51.7345539},{city:"Estrela do Oeste",company:"Sicoob",latitude:-20.2885039,longitude:-50.4194402},{city:"Prudent\xf3polis",company:"Sicoob",latitude:-25.2096267,longitude:-50.9994519},{city:"Rebou\xe7as",company:"Sicoob",latitude:-25.6195806,longitude:-50.7101844},{city:"Nova Aurora",company:"Sicoob",latitude:-24.5278127,longitude:-53.2690182},{city:"Imbituva",company:"Sicoob",latitude:-25.2319544,longitude:-50.6244028},{city:"Curitiba",company:"Sicoob",latitude:-25.4947401,longitude:-49.429886},{city:"Tup\xe3ssi",company:"Sicoob",latitude:-24.5858482,longitude:-53.5266451},{city:"Pinhal de S\xe3o Bento",company:"Sicoob",latitude:-26.0328892,longitude:-53.4932231},{city:"Planalto",company:"Sicoob",latitude:-25.7206134,longitude:-53.7730191},{city:"S\xe3o Jorge Do Oeste",company:"Sicoob",latitude:-25.7085736,longitude:-52.9365623},{city:"Boa Esperan\xe7a do Igua\xe7u",company:"Sicoob",latitude:-25.6368452,longitude:-53.2257948},{city:"Nova Prata do Igua\xe7u",company:"Sicoob",latitude:-25.6364994,longitude:-53.3675765},{city:"Santa Izabel do Oeste",company:"Sicoob",latitude:-25.822111,longitude:-53.4894108},{city:"Pranchita",company:"Sicoob",latitude:-26.0203812,longitude:-53.7573268},{city:"Ampere",company:"Sicoob",latitude:-25.9183535,longitude:-53.4955894},{city:"Salto do Lontra",company:"Sicoob",latitude:-25.7865074,longitude:-53.3248997},{city:"Cruzeiro do Igua\xe7u",company:"Sicoob",latitude:-25.6154115,longitude:-53.1389949},{city:"Dois Vizinhos",company:"Sicoob",latitude:-25.750043,longitude:-53.1017204},{city:"Francisco Beltr\xe3o",company:"Sicoob",latitude:-26.0656727,longitude:-53.1234953},{city:"Barrac\xe3o",company:"Sicoob",latitude:-26.2501225,longitude:-53.6029037},{city:"Barrac\xe3o",company:"Sicoob",latitude:-26.2501225,longitude:-53.6029037},{city:"Santo Ant\xf4nio do Sudoeste",company:"Sicoob",latitude:-26.068558,longitude:-53.7414534},{city:"Marmeleiro",company:"Sicoob",latitude:-26.1487428,longitude:-53.0429207},{city:"Realeza",company:"Sicoob",latitude:-25.7733027,longitude:-53.5529509}]}))},U=n(9);function Z(){var e=Object(c.a)(["\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(152, 221, 250);\n  min-height: 25vh;\n  color: #fff;\n  padding: 20px 20px;\n"]);return Z=function(){return e},e}var H=r.a.div(Z()),Q=function(){var e=Object(t.useContext)(s).setSelected;Object(t.useEffect)((function(){e(1)}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(H,null,o.a.createElement("h1",null,"A Agora IP \xe9 uma empresa que pensa sempre \xe0 frente.")),o.a.createElement("div",{className:"container-info"},[{title:"Quem somos",description:"A Agora IP tem in\xedcio de suas atividades no ano de 2000, atuando no mercado de telecomunica\xe7\xf5es com credibilidade e tecnologias inovadoras.Sempre acompanhando a transforma\xe7\xe3o tecnol\xf3gica. Atua em todo territ\xf3rio nacional, diretamente ou atrav\xe9s de parceiros. Conta com uma equipe de profissionais especialistas desenvolvendo solu\xe7\xf5es de acordo com a necessidade de cada empresa",image:"nossa-empresa.png"},{title:"Nosso prop\xf3sito",description:"Temos como dever manter respeito, transpar\xeancia, profissionalismo e \xe9tica junto aos seus colaboradores, clientes e parceiros de neg\xf3cios. E que seja reconhecida como a empresa de desenvolvimento em solu\xe7\xf5es de comunica\xe7\xe3o unificada que entende a necessidade de seus clientes, com modernidade, agilidade e equipe altamente capacitada",image:"proposito.png",invert:!0}].map((function(e){return o.a.createElement(z,Object.assign({key:e.title},e))}))))},W=n(3);function K(){var e=Object(c.a)(['\n  display: grid;\n  grid-auto-rows: 1fr 1fr 1fr;\n  grid-template-areas: "p1 p2 p3";\n  justify-content: space-around;\n  align-items: center;\n\n\n  .card{\n    display: flex;\n    justify-content: center;\n    background-color: #fff;\n    flex-direction: column;\n    width: 350px;\n    height: 450px;\n    margin: 20px 0px;\n    box-shadow: 0 0 0.5em #888888;\n  }\n\n  .card-header{\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    background-color: #444;\n    height: 20vh;\n    width:100%;\n    color: #fff;\n  }\n\n  .card-content {\n    background-color: #f3f3f3;\n    height: 80vh;\n    width:100%;\n    padding-top: 20px;\n  }\n\n  ul{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  li{\n    display: block;\n    margin: 5px 5px 5px 20px;\n  }\n\n  li:hover{\n    font-weight: bold;\n  }\n\n  .p1{\n    grid-area:p1;\n  }\n\n  .p2{\n    grid-area:p2;\n  }\n\n  .p3{\n    grid-area:p3;\n  }\n\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n']);return K=function(){return e},e}var Y=r.a.div(K()),$=function(){var e=Object(t.useContext)(s).setSelected;return Object(t.useEffect)((function(){e(2)}),[]),o.a.createElement("div",null,o.a.createElement("center",null,o.a.createElement("h1",null,"Temos planos para todos os clientes")),o.a.createElement(Y,null,o.a.createElement("div",{className:"p1 card"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h2",null,o.a.createElement(W.a,{color:"#cd7f32"})," Basic")),o.a.createElement("div",{className:"card-content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," 5 Ramais IP"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Grava\xe7\xf5es Online"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Controle de PBX Online"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Siga-me"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Relat\xf3rios de chamadas"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Fila de chamadas com an\xfancio"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Sala de confer\xeancia"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Autoatendimento"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Softphone Incluso")))),o.a.createElement("div",{className:"p2 card"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h2",null,o.a.createElement(W.a,{color:"#aaa9ad"})," Standard"),o.a.createElement("span",null,"(Recomendado)")),o.a.createElement("div",{className:"card-content"},o.a.createElement("ul",{className:"ul-list"},o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," 10 Ramais IP"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Grava\xe7\xf5es Online"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Controle de PBX Online"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Siga-me"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Relat\xf3rios de chamadas"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Fila de chamadas com an\xfancio"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Sala de confer\xeancia"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Autoatendimento"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Softphone Incluso"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," API Click to Call")))),o.a.createElement("div",{className:"p3 card"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h2",null,o.a.createElement(W.a,{color:"#ffd700"})," Premium")),o.a.createElement("div",{className:"card-content"},o.a.createElement("ul",{className:"ul-list"},o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," 20 Ramais IP"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Grava\xe7\xf5es Online"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Controle de PBX Online"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Siga-me"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Relat\xf3rios de chamadas"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Fila de chamadas com an\xfancio"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Sala de confer\xeancia"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Autoatendimento"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," Softphone Incluso"),o.a.createElement("li",null,o.a.createElement(W.b,{color:"blue"})," API Click to Call"))))))};function ee(){var e=Object(c.a)(["\n    \n    background-color: #e2e2e2;\n    border-top: solid 1px rgb(219, 219, 219);\n    height: 100px;\n\n  .footer-container{\n    background-color: rgb(236, 236, 236);\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .footer-container img{\n    width: 150px;  \n    padding-left: 20px; \n  }\n  "]);return ee=function(){return e},e}var ae=function(){var e=r.a.footer(ee());return o.a.createElement(e,null,o.a.createElement("div",{className:"footer-container"},o.a.createElement("div",{className:"footer-itens"},o.a.createElement("img",{src:x.a})),o.a.createElement("div",{className:"footer-itens"},"Redes Sociais"),o.a.createElement("div",{className:"footer-itens"},"Links Externos")))};function ne(){var e=Object(c.a)(["\n  margin-top: 72px;\n  color: #444;\n"]);return ne=function(){return e},e}var te=r.a.ul(ne());var oe=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(u.a,null,o.a.createElement(p,null,o.a.createElement(w,null),o.a.createElement(te,null,o.a.createElement(U.c,null,o.a.createElement(U.a,{exact:!0,path:"/",component:J}),o.a.createElement(U.a,{path:"/info",component:Q}),o.a.createElement(U.a,{path:"/plans",component:$}),o.a.createElement(U.a,{exact:!0,path:"**",component:J}))),o.a.createElement(ae,null))))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(oe,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.a9c1fb87.chunk.js.map