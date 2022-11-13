let citatContain = document.querySelector("#citation")
let auteur = document.querySelector("#auteur")
let newCitations = document.querySelector("#nouveau")

let last = 0;
nbrRandom = 0;
// Array von Anführungszeichen
let citatios = [
  ["Das Leben ist ein Mysterium, das es zu leben gilt, kein Problem, das gelöst werden muss.", "Gandhi"],
  ["Das größte Risiko besteht darin, kein Risiko einzugehen.", "Mark Zuckerberg"],
  ["Verdienen Sie sich jeden Tag Ihren Leader-Status.", "Mickael Jordan"],
  ["Sei die Veränderung, die du in der Welt sehen willst.", "Gandhi"],
  ["Wann immer Sie sich auf der gleichen Seite wie die Mehrheit befinden, ist es an der Zeit, einen Schritt zurückzutreten und nachzudenken.", "Mark Twain"],
  ["Nur wer riskiert, zu weit zu gehen, wird herausfinden, wie weit man gehen kann.", "T.S. Elliot"],
  ["Erfolg ist siebenmal fallen, achtmal aufstehen.", "japanisches Sprichwort"],
  ["In zwanzig Jahren werden Sie mehr enttäuscht sein von den Dingen, die Sie nicht getan haben, als von den Dingen, die Sie getan haben. Also denken Sie über den Tellerrand hinaus. Setzen Sie die Segel. Erkunden Sie. Träumen Sie. Entdecken Sie.", "Mark Twain"] ,
  ["Wenn du mit dem Handeln wartest, wirst du mit der Zeit nur älter.", "Brian Tracy"],
  ["Wenn wir unsere Aufmerksamkeit auf ein einzelnes Projekt richten, schlägt der Verstand ständig Ideen und Verbesserungen vor, die ihm entgehen würden, wenn er mit mehreren Projekten gleichzeitig beschäftigt wäre.", "P.T. Barnum"],
  ["Sich dafür einzusetzen, alles zu tun, was man kann, um anderen zu helfen, das zu bekommen, was sie wollen, ist der Schlüssel zum Erfolg.", "Brian Sher"],
  ["Wenn du denkst, dass du zu klein bist, um etwas zu bewirken, versuche, mit einer Mücke ins Bett zu gehen.", "Anita Roddick"],
  ["Beurteile jeden Tag nicht nach dem, was du erntest, sondern nach den Samen, die du säst.", "Robert Louis Stevenson"],
  ["Handeln ist der grundlegende Schlüssel zu allem Erfolg.", "Pablo Picasso"],
  ["Erfolg ist, von Scheitern zu Scheitern zu gehen und dabei motiviert zu bleiben.", "Winston Churchill"],
  ["Ihre Zukunft wird durch das geschaffen, was Sie heute tun, nicht morgen.", "Robert T. Kiyosaki"],
  ["Lass dich nicht entmutigen, es ist oft der letzte Schlüssel im Bunde, der die Tür öffnet.", "Zig Ziglar"],
  ["Um seinen Lebensunterhalt zu verdienen, lerne in der Schule. Um ein Vermögen zu verdienen, lerne für dich selbst.", "Brian Tracy"],
  ["Gewinner finden Wege, Verlierer finden Ausreden …", "F. D. Roosevelt"],
  ["Du bist nie zu alt, um dir neue Ziele zu setzen oder deine Träume wahr werden zu lassen.", "C.S. Lewis"],
  ["Ein Pessimist sieht in jeder Gelegenheit die Schwierigkeit. Ein Optimist sieht in jeder Schwierigkeit eine Chance.", "Winston Churchill"]
];
function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

newCitations.addEventListener("click", ()=>{
    do{
    nbrRandom = genererNombreEntier(citatios.length)
    }while(nbrRandom == last)

    citation.textContent = citatios[nbrRandom][0];
    auteur.textContent = citatios[nbrRandom][1];
    dernier =nbrRandom;
})