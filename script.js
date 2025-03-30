const logoBtn = document.querySelector(`#logo`)
console.log(logoBtn);

const copyIpBtn = document.querySelector(`#copyIp`)
console.log(copyIpBtn);

const themeBtn = document.querySelector(`#theme`)
console.log(themeBtn);

const othernewsBtn = document.querySelector(`#othernews`)
console.log(othernewsBtn);

const hMainBtn = document.querySelector(`#hMain`)
console.log(hMainBtn);

const hPeculiaritiesBtn = document.querySelector(`#hPeculiarities`)
console.log(hPeculiaritiesBtn);

const hRulesBtn = document.querySelectorAll(`#hRules`)
console.log(hRulesBtn);

const hDonateBtn = document.querySelector(`#hDonate`)
console.log(hDonateBtn);

const hTgBtn = document.querySelector(`#hTg`)
console.log(hTgBtn);

const hDiscordBtn = document.querySelector(`#hDiscord`)
console.log(hDiscordBtn);

logoBtn.addEventListener(`click`,(event)=>{
    location.reload();
})

copyIpBtn.addEventListener(`click`,(event)=>{
    navigator.clipboard.writeText(`p1.qwer-host.xyz:25230`)
    copyIpBtn.innerText = `Скопировано`
    setTimeout(()=>{
        copyIpBtn.innerText = `Скопировать IP`
    },500)
})

themeBtn.addEventListener(`click`,(event)=>{
    alert(`Изменения темы пока в разработке!`)
})

othernewsBtn.addEventListener(`click`,(event)=>{
    alertBtn(event)
})
hMainBtn.addEventListener(`click`,(event)=>{
    alertBtn(event)
})
hPeculiaritiesBtn.addEventListener(`click`,(event)=>{
    alertBtn(event)
})
hRulesBtn.forEach(btn =>{
    btn.addEventListener(`click`,(event)=>{
        alertBtn(event)
    })
})
hDonateBtn.addEventListener(`click`,(event)=>{
    alertBtn(event)
})
function alertBtn(event) {
    alert(`${event.currentTarget.innerText} пока в разработке!`)
}