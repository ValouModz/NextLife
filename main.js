const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/")
var randnum = 0;

bot.on('ready', () =>{
    bot.user.setPresence({ game: { name: 'Next Life RP', type: 0}})
    console.log("Le bot est prêt !");
});

bot.login('NDEwNTA5MDk5NzYwMDkxMTM2.DVuL7g.33U9zyaclbn49ByIU7ejVmLXK7o');

bot.on("guildMemberAdd" , member => {
    let role = member.guild.roles.find("name", "👱🏽DEMANDE DE VISA");
    member.guild.channels.find("name", "bienvenue").send(`:wave: ${member.user.username} Bienvenue sur Next Life RP! Passe du bon temps dans notre ville !`)
    member.addRole(role)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`:wave: ${member.user.username} a traversé la frontière de Rockstar Game RP. Bye bye`)
})

bot.on('message', message => {
    if (message.content === "bonjour"){
        message.reply("Hello!");
        console.log('bonjour Hello!');
    }

    if (message.content === prefix + "NextLife"){
        var help_embed = new Discord.RichEmbed()
         .setColor('#006EFE')
         .addField("Next Life RP", " Une communauté soudée, des histoires plus folles les unes que les autres! Viens te joindre à nous et tente l'expérience avec Next Life RP, entre dans une nouvelle dimension de rôle play!")
         .addField("Le RP* ?", " RP est l’abrégé de Rôle Play, que l’on pourrait traduire en français par jouer un rôle . Jouer RP, comme l’on dit, c'est donner une véritable vie au personnage que l'on joue, c'est-à-dire une histoire, une personnalité, un style, etc. Jouer RP c’est un peu comme jouer dans une pièce de théâtre dont le scénario s'écrit petit à petit et en direct, avec les autres personnes présentes. ")
         .setFooter("*Plusieurs règles basique sont à respecter pour un bon rôleplay!(A voir sur le réglement)")
         message.channel.sendEmbed(help_embed);
        console.log("Commande NLRP demandée !")
    }
    if (message.content === "Hello Next Life !"){
        random();
        if (randnum == 1){
            message.reply("Hello, il fait bien beau aujourd'hui ?");
            console.log(randnum);
        }
        if (randnum == 2){
            message.reply("Oyé Oyé Moussaillon comment vas tu ?");
            console.log(randnum);
        }
        if (randnum == 3){
            message.reply("Bien le bonjour camarade!");
            console.log(randnum);
        }
        if (randnum == 4){
            message.reply("La vie est vraiment simple, mais nous insistons à  la rendre compliqué");
            console.log(randnum)
        }
        if (randnum == 5){
            message.reply("Les roses sont rouges, les violettes sont bleues, votre journée sera merveilleuse !");
            console.log(randnum)
        }
    }
});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(5);
    randnum = Math.floor(Math.random()* (max - min +1) + min);
}


      

