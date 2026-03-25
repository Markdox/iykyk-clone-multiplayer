const domandeQuiz = [ // --- 10 DOMANDE NORMALI (SITUAZIONI DI GRUPPO) ---
      { q: "Qual è la cosa che mi manda più in bestia tra queste?", a: "Chi mastica rumorosamente", b: "Il visualizzato senza risposta", c: "La gente che cammina lenta", d: "Chi arriva in ritardo" }, { q: "Se potessi scappare dall'Italia domani, dove mi trovereste?", a: "In una metropoli (tipo NY o Tokyo)", b: "Sperduto su un'isola tropicale", c: "In uno chalet in montagna", d: "In una capitale europea a bere birra" }, { q: "Qual è il mio 'guilty pleasure' musicale (quella che ascolto di nascosto)?", a: "Canzoni neomelodiche", b: "Sigle dei cartoni animati", c: "Pop commerciale anni 2000", d: "Trap imbarazzante" }, { q: "Cosa farei come prima cosa se vincessi 10 milioni alla lotteria?", a: "Scomparirei nel nulla", b: "Comprerei una casa gigante per le feste", c: "Viaggerei per tutto il mondo", d: "Licenziarmi/Mollare tutto con una scenata" }, { q: "Qual è stata la mia materia più odiata a scuola?", a: "Matematica/Fisica", b: "Storia/Filosofia", c: "Lingue straniere", d: "Italiano/Letteratura" }, { q: "Qual è il mio stile di 'approccio' quando mi piace qualcuno?", a: "Aspetto che sia l'altro a scrivermi", b: "Faccio il simpatico/la simpatica (e sbaglio tutto)", c: "Faccio finta di nulla (distaccato/a)", d: "Vado diretto al punto" }, { q: "Se fossi un animale, quale sarei secondo voi?", a: "Un leone (protagonista)", b: "Un gatto (faccio i fatti miei)", c: "Un cane (iperattivo e fedele)", d: "Un bradipo (lasciatemi dormire)" }, { q: "Qual è il mio social network preferito (dove perdo più tempo)?", a: "Instagram (le storie degli altri)", b: "TikTok (il loop infinito)", c: "WhatsApp (a spettegolare)", d: "Nessuno, lo uso solo per noia" }, { q: "Qual è la prima cosa che noto in una persona che mi piace?", a: "Il sorriso/i denti", b: "Gli occhi/lo sguardo", c: "Come è vestita", d: "Il modo in cui parla" }, { q: "Qual è l'abitudine che vorrei togliermi ma non ci riesco?", a: "Essere sempre in ritardo", b: "Mangiarsi le unghie/toccare i capelli", c: "Spendere soldi in cavolate", d: "Andare a dormire troppo tardi" }, // --- 40 DOMANDE 18+ (IL SUCCO DEL GIOCO) ---
      { q: "Qual è il posto più 'rischioso' dove l'hai fatto?", a: "In macchina in centro", b: "In un parco pubblico", c: "In spiaggia/mare", d: "In ufficio/scuola" }, { q: "Cosa non deve ASSOLUTAMENTE mancare in una camera da letto 'attrezzata'?", a: "Manette o lacci", b: "Lubrificante", c: "Musica giusta", d: "Specchi ovunque" }, { q: "Qual è il tuo 'dirty talk' preferito?", a: "Sussurri volgari", b: "Ordini diretti", c: "Silenzio assoluto", d: "Complimenti molto spinti" }, { q: "Chi nel gruppo è più probabile che abbia un profilo OnlyFans segreto?", a: "Il più timido/a", b: "L'esibizionista", c: "Quello che va sempre in palestra", d: "Chi non posta mai nulla" }, { q: "Cosa guardi per primo in un video porno?", a: "Le posizioni", b: "La trama (per ridere)", c: "Dettagli fisici specifici", d: "In soggettiva (POV)" }, { q: "Qual è l'accessorio erotico che sogni di provare?", a: "Vibratore tecnologico", b: "Benda sugli occhi", c: "Plug/Giochi anali", d: "Cibi e salse" }, { q: "Hai mai finto un orgasmo con un partner?", a: "Sì, per finire prima", b: "Sì, per non offenderlo/a", c: "Mai, sono sempre onesto/a", d: "Quasi ogni volta" }, { q: "Qual è la durata ideale di un rapporto completo?", a: "Sotto i 10 min (veloce)", b: "Circa 20-30 min", c: "Tutta la notte", d: "Finché le gambe tremano" }, { q: "Cosa pensi onestamente dei 'triangoli'?", a: "Sogno nel cassetto", b: "Già fatto (IYKYK)", c: "Mai nella vita", d: "Solo se sono l'unico uomo/donna" }, { q: "Qual è la parte del corpo che preferisci farti baciare?", a: "Il collo", b: "Dietro le orecchie", c: "La schiena", d: "L'interno coscia" }, { q: "Cosa hai usato come 'giocattolo erotico' improvvisato?", a: "Spazzolino elettrico", b: "Frutta o verdura", c: "Soffione della doccia", d: "Preferisco il silenzio stampa" }, { q: "Cosa ti eccita istantaneamente in una persona?", a: "Un profumo particolare", b: "Uno sguardo intenso", c: "Un morso sul labbro", d: "Un certo modo di vestire" }, { q: "Hai mai inviato un 'nude' alla persona sbagliata?", a: "Sì, un trauma totale", b: "Sì, ma eliminato subito", c: "No, controllo 10 volte", d: "Mandato apposta per sbaglio" }, { q: "Qual è la tua posizione preferita 'salva-serata'?", a: "Missionario", b: "Pecora (Doggy)", c: "Cowgirl", d: "Cucchiaio (Spoon)" }, { q: "Qual è il segnale che il partner sarà un disastro a letto?", a: "Niente preliminari", b: "Troppo egoista", c: "Troppa fretta", d: "Non usa le mani" }, { q: "Cosa pensi dello scambismo di coppia?", a: "Molto interessante", b: "Troppa gelosia in ballo", c: "Solo per coppie annoiate", d: "Massima libertà" }, { q: "L'ultima volta che l'hai fatto davvero?", a: "Meno di 24 ore fa", b: "Settimana scorsa", c: "Non ricordo (astinenza)", d: "Stamattina" }, { q: "Ti piace più essere dominato/a o dominare?", a: "Dominare (Boss)", b: "Essere sottomesso/a", c: "50 e 50", d: "Dipende dalla luna" }, { q: "Hai mai avuto un'avventura di una notte di cui ti sei pentito/a?", a: "Sì, la mattina dopo", b: "No, è stato divertente", c: "Mai fatte avventure", d: "Pentito/a solo per la sua faccia" }, { q: "Cosa ne pensi del sesso anale?", a: "Sì, assolutamente", b: "No, troppo dolore", c: "Solo per occasioni speciali", d: "Mai provato ma vorrei" }, { q: "Qual è il 'fetish' più strano che accetteresti per amore?", a: "Piedi", b: "Divise o uniformi", c: "Cosplay/Personaggi", d: "Spanking (schiaffi)" }, { q: "Dov'è il posto più assurdo dove ti sei masturbato/a?", a: "In un mezzo pubblico", b: "In ufficio/lavoro", c: "A casa di parenti", d: "Al cinema" }, { q: "Hai mai beccato qualcuno (o sei stato beccato) sul fatto?", a: "Sì, trauma infantile", b: "Ho sentito rumori sospetti", c: "No, massima discrezione", d: "Beccato/a io sul più bello" }, { q: "Sesso con luci accese o rigorosamente spente?", a: "Luce piena (esibizionista)", b: "Buio totale", c: "Luce soffusa o candele", d: "Basta che si faccia" }, { q: "Cosa ne pensi dei sex toy durante il sesso col partner?", a: "Indispensabili", b: "Distraggono troppo", c: "Solo ogni tanto", d: "Mai usati" }, { q: "Cosa cerchi in un partner per una sola notte?", a: "Fisico da urlo", b: "Igiene perfetta", c: "Sguardo magnetico", d: "Che non parli troppo" }, { q: "Ti sei mai innamorato/a dopo un solo rapporto sessuale?", a: "Sì, sono un disastro", b: "No, separo i piani", c: "È successo una volta", d: "Scappo prima che accada" }, { q: "Sesso in acqua (mare/piscina): promosso o bocciato?", a: "Promosso (molto sexy)", b: "Bocciato (scomodissimo)", c: "Solo in idromassaggio", d: "Troppo rischioso" }, { q: "Qual è la proposta più indecente che hai mai ricevuto?", a: "Sesso a pagamento", b: "Triangolo/Cosa a quattro", c: "Richiesta di foto piedi", d: "Video amatoriale" }, { q: "Cosa ti piace fare IMMEDIATAMENTE dopo il sesso?", a: "Dormire sodo", b: "Fumare o bere qualcosa", c: "Coccole infinite", d: "Doccia e scappare" }, { q: "Preferiresti farlo con un ex o con uno sconosciuto?", a: "Ex (usato sicuro)", b: "Sconosciuto (brivido)", c: "Nessuno dei due", d: "Entrambi (non insieme!)" }, { q: "Usi le app di incontri esclusivamente per sesso?", a: "Tinder è la mia Bibbia", b: "Provato ma rimosso", c: "No, cerco l'amore", d: "Solo se sono ubriaco/a" }, { q: "Qual è il tuo limite invalicabile a letto?", a: "Cose sporche (scat)", b: "Violenza o dolore vero", c: "Coinvolgere terzi", d: "Non ho limiti, provo tutto" }, { q: "Sesso al primo appuntamento: sì o no?", a: "Perché aspettare?", b: "Solo se c'è chimica rara", c: "No, sono all'antica", d: "Dipende da quanto ho bevuto" }, { q: "Il complimento più bello ricevuto durante l'atto?", a: "Sei il/la migliore", b: "Hai un corpo stupendo", c: "Mai provato nulla di simile", d: "Mi hai distrutto/a (in senso buono)" }, { q: "Preferisci il sesso lento o quello selvaggio?", a: "Selvaggio e animalesco", b: "Lento e passionale", c: "Inizia bene, finisce male", d: "Basta che sia sesso" }, { q: "Ti sei mai spogliato/a integralmente in webcam?", a: "Sì, per il partner", b: "Sì, per sconosciuti", c: "No, troppo pericoloso", d: "Solo per una scommessa" }, { q: "Qual è il tuo record di astinenza?", a: "Una settimana", b: "Un mese", c: "Un anno intero", d: "Ci sono dentro ora" }, { q: "Sesso con la musica in sottofondo: sì o no?", a: "Sì, playlist dedicata", b: "No, mi deconcentra", c: "Sì, ma solo techno", d: "Sì, ma la TV accesa" }, { q: "Qual è l'orario perfetto per farlo?", a: "Appena svegli", b: "Pomeriggio piovoso", c: "Notte fonda post-serata", d: "Pausa pranzo veloce" } ];

let currentRoom = "";
let lastTime = 0;
let hasVoted = false;

function joinRoom() {
    const val = document.getElementById('roomInput').value.trim().toUpperCase();
    if (val.length < 3) return alert("Codice stanza troppo corto!");

    currentRoom = val;
    document.getElementById('roomDisplay').innerText = currentRoom;
    document.getElementById('setupScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'flex';

    // ASCOLTO SINCRONIZZATO STANZA
    const roomRef = window.fbProxy.ref(window.fbProxy.db, 'rooms/' + currentRoom);
    window.fbProxy.onValue(roomRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            // Se la domanda è nuova (tempo diverso), resetta voto locale
            if (data.time !== lastTime) {
                lastTime = data.time;
                hasVoted = false;
                resetBars();
            }
            updateUI(data.index);
            if (data.votes) updateVotes(data.votes);
        }
    });
}

function nextQuestion() {
    if (!window.fbProxy.isReady) return;
    const randomIdx = Math.floor(Math.random() * domandeQuiz.length);
    const roomRef = window.fbProxy.ref(window.fbProxy.db, 'rooms/' + currentRoom);
    
    window.fbProxy.set(roomRef, {
        index: randomIdx,
        time: Date.now(),
        votes: { A: 0, B: 0, C: 0, D: 0 }
    });
}

function submitVote(letter) {
    if (hasVoted || !currentRoom) return;
    hasVoted = true;
    
    if (navigator.vibrate) navigator.vibrate(50);

    const voteRef = window.fbProxy.ref(window.fbProxy.db, `rooms/${currentRoom}/votes/${letter}`);
    
    // INCREMENTO SICURO (Transaction)
    window.fbProxy.runTransaction(voteRef, (currentValue) => {
        return (currentValue || 0) + 1;
    });
}

function updateVotes(votes) {
    const total = (votes.A || 0) + (votes.B || 0) + (votes.C || 0) + (votes.D || 0);
    ['A', 'B', 'C', 'D'].forEach(l => {
        const count = votes[l] || 0;
        const perc = total > 0 ? (count / total) * 100 : 0;
        document.getElementById(`bar${l}`).style.width = perc + '%';
        document.getElementById(`count${l}`).innerText = count;
    });
}

function updateUI(idx) {
    const q = domandeQuiz[idx];
    document.getElementById("domanda").innerText = q.q;
    document.getElementById("ansA").innerText = q.a;
    document.getElementById("ansB").innerText = q.b;
    document.getElementById("ansC").innerText = q.c;
    document.getElementById("ansD").innerText = q.d;
}

function resetBars() {
    ['A', 'B', 'C', 'D'].forEach(l => {
        document.getElementById(`bar${l}`).style.width = '0%';
        document.getElementById(`count${l}`).innerText = '0';
    });
}
