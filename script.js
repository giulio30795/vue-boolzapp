
// La struttura dei dati:
const app = new Vue ({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },	{
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

        activeIndex: 0,
        messageText: '',
        timeNow:'',
        search: '',
        indicechat: -1,
    },

    created(){
        dayjs.extend(dayjs_plugin_relativeTime);
        console.log(this.indicePreview)
    },

    methods: {
        // Aggiornamento data e ora del messaggio 
        genDate(){
            const today = dayjs();
            this.timeNow = today.format('DD/MM/YY hh:mm:ss')
        },
        // indice della chat attiva
        changeIndex(index){
            this.activeIndex = index;
            this.indicechat = ''
        },
        // Invio Messaggio Con creazione Risposta
        newMessage(){
                this.genDate()
            if (!this.messageText == ''){
                this.messaggio = {
                    date: this.timeNow,
                    text: this.messageText,
                    status: 'sent',
                }
                this.contacts[this.activeIndex].messages.push(this.messaggio);
                this.messageText = ''

                setTimeout( () => {
                    this.genDate();
                    this.risposta = {
                        date: this.timeNow,
                        text: 'Ok',
                        status: 'received',
                    },
                    this.contacts[this.activeIndex].messages.push(this.risposta)
                    },1000)
            }
        },

        filterContact(){
           this.contacts.forEach(element => {
            if(!element.name.toLowerCase().includes(this.search.toLowerCase())){
                element.visible = false
            } else {
                element.visible = true
            }
            console.log(element.visible);
           })

        },

        toggleDisplay(index){
            if(this.indicechat === index){
                this.indicechat = -1;
            } else {
                this.indicechat = index
            }
        },
        
        cxlMessage(index){
            this.contacts[this.activeIndex
            ].messages.splice(index,1);
        }
    },
})