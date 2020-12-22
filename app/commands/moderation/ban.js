const Discord = require("discord.js")
const ms = require("ms")

exports.run = async (Client, Message, Args) => {
    console.log(Message.author + " used command `ban`")
    let User = Message.mentions.members.first() || Message.guild.members.cache.get(Args[0])
    let Time = Args[1]
    if (!Message.member.hasPermission("BAN_MEMBERS")) return Message.reply(":persevere: Error! You don't have the permission `BAN_MEMBERS`... :joy: :rofl:")
    if (!User) return Message.reply(":speak_no_evil: Error! Missing argument... You did not tag a user to ban... :man_facepalming: :neutral_face:")
    if (User.roles.highest.position >= Message.member.roles.highest.position) return Message.reply(":persevere: Error! You cannot ban users with a role higher than yourself... :neutral_face: :man_facepalming:")
    if (!User.bannable) return Message.reply(":persevere: Error! I cannot ban this user because they have higher permissions than me... :neutral_face: :man_facepalming:")
    if (!ms(Time)) { Time = null }
    
    let Tag = User.tag || User.user.tag
    let Reason = ""
    
    if (Time == null) { Reason = Message.content.split(" ").slice(2).join(" ") } else { Reason = Message.content.split(" ").slice(3).join(" ") }
    if (!Reason | Reason == "") { Reason = "N/A" }
    
    try {
        await User.send(`You were banned for \`${Reason}\``).then(_ => {
            User.ban({ days: 0, reason: `${Reason} - ${Message.author.tag}` }).then(_ => {
                
                if (!Time == null && ms(Time)) {
                    Message.channel.send(`:wave: Cya later \`${Tag}\`! (Banned for \`${Reason}\` with duration of \`${Time}\`) :clown: :joy:`)
                    setTimeout(function() {
                        Message.guild.members.unban(User.id, "Automatic unban")
                    }, ms(Time))
                    
                } else {
                    Message.channel.send(`:wave: Cya later \`${Tag}\`! (Banned for \`${Reason}\`) :clown: :joy:`)
                }
            })
        })
        
    } catch (Error) {
        User.ban({ days: 0, reason: `${Reason} - ${Message.author.tag}` }).then(_ => {
            
            if (!Time == null && ms(Time)) {
                Message.channel.send(`:wave: Cya later \`${Tag}\`! (Banned for \`${Reason}\` with duration of \`${Time}\`) :clown: :joy:`)
                setTimeout(function() {
                    Message.guild.members.unban(User.id, "Automatic unban")
                }, ms(Time))
                
            } else {
                Message.channel.send(`:wave: Cya later \`${Tag}\`! (Banned for \`${Reason}\) :clown: :joy:`)
            }
        })
    }
}

exports.config = {
    name: "ban",
    aliases: [""],
}
