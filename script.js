const body = document.body
const headerMenuLi = document.querySelectorAll(`li`)
const logoBtn = document.querySelector(`#logo`)
const copyIpBtn = document.querySelector(`#copyIp`)
const themeBtn = document.querySelector(`#theme`)
const themeIcon = document.querySelector(`#theme > svg`)
// const othernewsBtn = document.querySelector(`#othernews`)
const hMainBtn = document.querySelector(`#hMain`)
const hPeculiaritiesBtn = document.querySelector(`#hPeculiarities`)
const hRulesBtn = document.querySelectorAll(`#hRules`)
const hDonateBtn = document.querySelector(`#hDonate`)
const hTgBtn = document.querySelector(`#hTg`)
const hDiscordBtn = document.querySelector(`#hDiscord`)

if (localStorage.getItem(`theme`)==undefined) {
    localStorage.setItem(`theme`,`light`)
} else {
    localStorage.setItem(`theme`,(localStorage.getItem(`theme`)))
}
function theme() {
    if (localStorage.getItem(`theme`)==`dark`) {
        body.style.background = `url("./files/BackgroundDark.png")`
        body.style.backgroundSize = `cover`
        body.style.color = `white`
        headerMenuLi.forEach(li =>{
            li.style.color = `white`
        })
        themeIcon.style.color = `white`
        themeIcon.innerHTML = `<path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>`
    } else if (localStorage.getItem(`theme`)==`light`) {
        body.style.background = `url("./files/BackgroundLight.jpg")`
        body.style.backgroundSize = `cover`
        body.style.color = `black`
        headerMenuLi.forEach(li =>{
            li.style.color = `black`
        })
        themeIcon.style.color = `black`
        themeIcon.innerHTML = `<path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>`
    }
}
theme()


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
    if (localStorage.getItem(`theme`)==`light`) {
        localStorage.setItem(`theme`,`dark`)
        theme()
    } else if (localStorage.getItem(`theme`)==`dark`) {
        localStorage.setItem(`theme`,`light`)
        theme()
    }
})

// othernewsBtn.addEventListener(`click`,(event)=>{
//     alertBtn(event)
// })
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
