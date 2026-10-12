// Bloque de recuperación tras el Corral del Diablo (plan de Runna). No termina en carrera.
(function(){
var F="Ritmo cómodo, de poder hablar. Sigue el ritmo que te marque Runna.";
window.registerRace({
 id:"recuperacion-post-corral",
 name:"Recuperación post-Corral",
 nameHTML:'Recuperación <span class="devil">post-Corral</span>',
 kind:"Bloque", block:true,
 subtitle:"Plan de Runna",
 date:"2026-10-18", time:"",
 planStart:"2026-09-28",
 km:"65,5", totalKm:65.5, dist:"65,5 km", gain:"3 semanas",
 readout:"<b>Objetivo:</b> recuperar del Corral del Diablo y volver a coger volumen poco a poco (6 → 24,5 → 35 km). Todo fácil salvo los progresivos del jueves 8. El domingo 11 corriste la 10K Guardia Civil, así que la última semana queda más suave para asimilarla. Después arranca el plan de la San Silvestre.",
 days:[
  {w:"SEMANA 1 · 28 sept - 4 oct · 6 km"},
  {d:28,m:"lun",ent:"Descanso",type:"suave",tip:"Recuperación tras la carrera. Paseo y movilidad suave si te apetece."},
  {d:29,m:"mar",ent:"Descanso",type:"suave"},
  {d:30,m:"mie",ent:"Descanso",type:"suave"},
  {d:1,m:"jue",ent:"Descanso",type:"suave"},
  {d:2,m:"vie",ent:"Descanso",type:"suave"},
  {d:3,m:"sab",ent:"Rodaje fácil 6 km",type:"medio",tip:"Primer rodaje tras la carrera. "+F+" Si notas las piernas cargadas, corta antes."},
  {d:4,m:"dom",ent:"Descanso",type:"suave"},
  {w:"SEMANA 2 · 5 - 11 oct · 24,5 km"},
  {d:5,m:"lun",ent:"Rodaje fácil 7 km",type:"medio",tip:F},
  {d:6,m:"mar",ent:"Descanso",type:"suave"},
  {d:7,m:"mie",ent:"Descanso",type:"suave"},
  {d:8,m:"jue",ent:"Fácil + progresivos 7 km",type:"fuerte",tip:"Rodaje fácil y al final unos progresivos cortos: aceleraciones suaves hasta ritmo rápido, sin llegar a sprint. Recupera andando o trotando entre ellos."},
  {d:9,m:"vie",ent:"Descanso",type:"suave"},
  {d:10,m:"sab",ent:"Descanso",type:"suave"},
  {d:11,m:"dom",ent:"10K Guardia Civil · 10,5 km",type:"carrera",tip:"Carrera: 40:00 en 10,5 km y 14º puesto. Sustituye al rodaje fácil de 7 km que tocaba. El análisis completo está en la carrera, dentro de Carreras."},
  {w:"SEMANA 3 · 12 - 18 oct · 35 km"},
  {d:12,m:"lun",ent:"Descanso",type:"suave",tip:"Día después de la 10K: descanso total."},
  {d:13,m:"mar",ent:"Rodaje muy suave 6 km",type:"medio",tip:"Reajustado (antes 8 km): primer rodaje tras la carrera, solo para soltar piernas. Más lento de lo normal."},
  {d:14,m:"mie",ent:"Descanso",type:"suave"},
  {d:15,m:"jue",ent:"Fácil + progresivos 8 km",type:"fuerte",tip:"Reajustado (antes cambios de ritmo cada 500 m, 9 km): el domingo ya hiciste un esfuerzo a tope, así que basta con un rodaje fácil y 4-6 progresivos cortos al final. La velocidad de verdad empieza con el plan de la San Silvestre."},
  {d:16,m:"vie",ent:"Descanso",type:"suave"},
  {d:17,m:"sab",ent:"Rodaje fácil 7 km",type:"medio",tip:F},
  {d:18,m:"dom",ent:"Tirada larga 14 km",type:"medio",tip:"Todo el rato cómodo, sin mirar el ritmo. Si aún notas la carrera en las piernas, déjala en 12 km. Cierra el bloque de recuperación."}
 ]
});
})();
