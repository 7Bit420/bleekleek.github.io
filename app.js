const answers = ['yonn', 'isobo', 'skinyo', 'yosonn', 'boobs', 'yobins', 'iboson', 'boob', 'noyiso', 'nokoin', 'snonyi', 'ononi', 'skobi', 'yinoos', 'oibyon', 'kiynos', 'siboo', 'biso', 'oinoby', 'nnibyo', 'bonisn', 'sonin', 'isonob', 'inooby', 'osobyi', 'sokib', 'booob', 'koisnn', 'okoi', 'nyosob', 'yosko', 'nyokib', 'nnosyi', 'yoski', 'yikon', 'boisko', 'kisonn', 'byonni', 'nyis', 'syooki', 'sokyon', 'bonois', 'noonyi', 'ninyos', 'soobik', 'bokois', 'nonob', 'byobi', 'bokiny', 'kisno', 'nikyos', 'inosok', 'yibook', 'onisn', 'osyibo', 'noisy', 'snok', 'kinono', 'booob', 'yosnni', 'yoosib', 'snnyob', 'bisoob', 'yokis', 'nosoy', 'boniso', 'osik', 'iboy', 'yibo', 'skyino', 'noonis', 'sonnyi', 'onnoyi', 'okinob', 'oosik', 'osnon', 'nokin', 'nyosko', 'biskon', 'byonni', 'soky', 'sobin', 'kibo', 'inonyo', 'nnobos', 'noikyo', 'sikoy', 'nyonob', 'onibos', 'isooky', 'nnosib', 'osnnyi', 'soyoib', 'okosn', 'osok', 'osobin', 'oskon', 'noonib', 'koyob', 'noisyo', 'soibok', 'byonib', 'bosnny', 'isyono', 'koosnn', 'binoos', 'osonn', 'byison', 'oosiky', 'iboos', 'byosok', 'yokob', 'obisnn', 'nisob', 'yonnis', 'sonoy', 'ibyon', 'boonin', 'oiskon', 'yiboso', 'nonois', 'onoyik', 'osik', 'nyobin', 'nnoib', 'boko', 'bosnik', 'soyiko', 'kosnn', 'boniny', 'nnobos', 'soboib', 'bobisy', 'snok', 'oyosi', 'konyob', 'ibonny', 'oyinon', 'oskyin', 'snoky', 'ooskin', 'syoino', 'ikyob', 'konnoy', 'yobos', 'nnibob', 'biby', 'iboyos', 'bonnyi', 'boinob', 'nobois', 'byosin', 'oosiky', 'nnyiko', 'nnyois', 'oson', 'yoski', 'oyokib', 'nnyoob', 'kinoon', 'yisnno', 'booob', 'sinny', 'kobyob', 'oskiny', 'osoyi', 'oskiby', 'binook', 'yisno', 'ibonob', 'yonino', 'nokyos', 'byook', 'snnoky', 'ibyoo', 'osnnib', 'okibob', 'kyoiso', 'inosob', 'konon', 'onib', 'obison', 'boyos', 'bonoi', 'nook', 'sibyok', 'sokib', 'nosoik', 'oyosnn', 'onnyi', 'binoyo', 'okibyo', 'oisnyo', 'onosn', 'ibyoos', 'osyobi', 'snook', 'yooki', 'nnoiby', 'noson', 'osonib', 'bikos', 'sonoin', 'binoy', 'byibok', 'noniby', 'bosoik', 'ibony', 'inoyon', 'nnik', 'biboko', 'ikoony', 'oonyi', 'kibooy', 'oobisk', 'oboyi', 'bonibo', 'yoib', 'booobs', 'ninyoo', 'bikoy', 'okyinn', 'nyoosi', 'snoyi', 'oinob', 'oyinok', 'nibob', 'oiskon', 'nobiky', 'bokiny', 'sonnoi', 'biboo', 'oinony', 'obonin', 'kyonno', 'nyibos', 'isyo', 'sokob', 'onosny', 'bonis', 'nnyos', 'yonino', 'snoyo', 'onokin', 'yokin', 'syokon', 'nisooy', 'nikoon', 'okisn', 'nokiso', 'inosko', 'boob', 'kinyon', 'onnoki', 'kinoo', 'noonyi', 'nosib', 'obonib', 'nyonis', 'sonobi', 'kobiny', 'noyoni', 'osnnoi', 'boobs', 'nnikoo', 'ikoso', 'oobik', 'obinos', 'onino', 'yisook', 'nnyiko', 'nosko', 'sonni', 'kosyin', 'nyoiso', 'obiso', 'syikon', 'ibyoo', 'kyino', 'snyino', 'boisko', 'noski', 'konibo', 'bikob', 'kisoon', 'iskoo', 'noobib', 'niko', 'niky', 'ooniby', 'ikyon', 'noskib', 'kosno', 'kisnny', 'osoky', 'nosob', 'noiby', 'syonno', 'osonib', 'sobyon', 'noiny', 'nyobib', 'iskoyo', 'nokib', 'sikob', 'nisnob', 'snoyin', 'ikoy', 'okisno', 'onnobi', 'okib', 'onnoyi', 'snoyob', 'bokisn', 'kosiny', 'obikoy', 'bisoky', 'oiskoy', 'byokon', 'oonik', 'noisoy', 'okonyi', 'onokib', 'nobos', 'nyoisk', 'syino', 'nobo', 'onon', 'kooy', 'yikobo', 'nnisky', 'noisok', 'oobin', 'inoyo', 'inonob', 'booobs', 'snokoy', 'inyobo', 'isyobo', 'isnyon', 'ikyoo', 'boboi', 'booob', 'oobinn', 'snnoko', 'obosnn', 'boinny', 'bobin', 'yobok', 'onis', 'bokon', 'sobyoi', 'yibok', 'oyobin', 'sokoi', 'kisono', 'oosny', 'oinon', 'onnoby', 'osnyob', 'nyosko', 'obisok', 'boyonn', 'skibob', 'nyokin', 'yobonn', 'okibo', 'koyobi', 'nyobi', 'bobonn', 'boyino', 'bonyin', 'kobisn', 'kobonn', 'kyobi', 'noinyo', 'boiny', 'syokib', 'bokos', 'kyonoi', 'byos', 'kobyo', 'yibok', 'ibonyo', 'yook', 'obosyi', 'skyin', 'yoni', 'biboy', 'snoiny', 'kyoson', 'bono', 'ibosk', 'yoosni', 'onoyib', 'onisyo', 'ninobo', 'inonok', 'siky', 'osikon', 'nnisy', 'bokoni', 'nyinok', 'skonyo', 'yoskob', 'skyo', 'nnisoo', 'yobin', 'nnyoo', 'bibosy', 'oyibo', 'skobib', 'konnoi', 'obonin', 'ooniby', 'koyis', 'nokyob', 'isyono', 'isyobo', 'syiboo', 'bosok', 'oyoisk', 'boino', 'boyisn', 'inoosk', 'kobis', 'yoisko', 'noino', 'nnoiky', 'onisy', 'innobo', 'koonyi', 'soboby', 'osnni', 'onyok', 'ninoyo', 'bokosy', 'onoi', 'oonisk', 'obiny', 'bonosk', 'nosin', 'oskib', 'oiskoy', 'oobisy', 'iskon', 'yokib', 'osnnoy', 'bosnin', 'booby', 'oskyoi', 'sibono', 'konoin', 'bisnno', 'bobyik', 'yokon', 'snyoko', 'sobi', 'nibyo', 'oosnyi', 'nobyos', 'sokiny', 'bikonn', 'sinoob', 'onoy', 'nnyoi', 'byibos', 'ookiny', 'osonib', 'yoikos', 'onnosi', 'sinyoo', 'oyoisk', 'nosnoy', 'kinyon', 'ooskin', 'snyibo', 'iboso', 'nnibob', 'konni', 'skoyon', 'ikyobo', 'ikoson', 'snonob', 'yosn', 'booyik', 'yinnob', 'nokyob', 'okoby', 'yoisno', 'osnyo', 'okoib', 'kiso', 'skib', 'konnis', 'boskyo', 'oisnob', 'boyoi', 'ookiny', 'obiboy', 'noski', 'bokiso', 'bosi', 'onyisk', 'bisoo', 'okosni', 'oyonib', 'inobo', 'inook', 'snyono', 'koniso', 'niboko', 'boinyo', 'onniby', 'yonoki', 'snoki', 'ononyi', 'ikonos', 'ikyobo', 'onon', 'oskoby', 'osnoik', 'koyoni', 'soyon', 'yonisk', 'bisoon', 'osnino', 'kinono', 'skoin', 'nokosn', 'onniso', 'okisn', 'okony', 'boso', 'sonni', 'yisnon', 'obob', 'snyob', 'onyo', 'noiby', 'snoik', 'iboy', 'snoky', 'bisyok', 'nnokib', 'kyisoo', 'nnyois', 'ibob', 'nibyob', 'binoob', 'snnyo', 'koyoib', 'nosyoi', 'onosin', 'sonoin', 'boony', 'isonon', 'osnoni', 'bobyi', 'onnyos', 'nnik', 'isnok', 'onyob', 'skoibo', 'booobs', 'syibok', 'boniny', 'byonok', 'syoi', 'osnyib', 'onyois', 'yonnib', 'konni', 'kosobi', 'ooyisn', 'booob', 'boisky', 'snonyi', 'oikoy', 'bokoni', 'sobinn', 'oibyos', 'yobinn', 'soobyi', 'koyonn', 'nyonok', 'kooyib', 'onoby', 'byobon', 'oinoky', 'obisko', 'kobyob', 'snyoik', 'sikon', 'inosy', 'byoik', 'skoon', 'bokyib', 'oyoi', 'boinoy', 'bonosk', 'skibob', 'sokyon', 'obonib', 'sinyoo', 'bisk', 'boisob', 'syinok', 'osiboy', 'bonony', 'biby', 'inno', 'nyok', 'oobyis', 'innosy', 'yiso', 'boikob', 'nnyoi', 'kosnob', 'syobi', 'nyisok', 'bosony', 'bobinn', 'boob', 'byisok', 'nobyis', 'obyois', 'soyob', 'nyobis', 'okoyis', 'soiko', 'okyoni', 'skinn', 'koyo', 'osikyo', 'booby', 'iboon', 'boyo', 'soboy', 'ninosk', 'yoko', 'sinoy', 'sibonn', 'oboin', 'nyook', 'bikos', 'osnnyi', 'kyisoo', 'inoy', 'okonib', 'yosni', 'bookin', 'bosiny', 'okiby', 'skyoib', 'skooby', 'konnis', 'kinoby', 'isooy', 'nono', 'nosnok', 'okoby', 'nibono', 'kosnob', 'snokyo', 'nyosoi', 'snobik', 'noosik', 'boniky', 'kosnno', 'bibosn', 'soobik', 'osinyo', 'skyinn', 'nobiko', 'binnos', 'onoin', 'boob', 'byos', 'bonyok', 'yook', 'sikonn', 'okibon', 'sokyob', 'nyikoo', 'kosiny', 'snoyik', 'noisok', 'oosiny', 'bosyoi', 'yinos', 'syokob', 'konyo', 'snnob', 'skobi', 'oinosk', 'osibok', 'nooy', 'onoyib', 'bonnis', 'bonok', 'syik', 'okinyo', 'oyobis', 'snobok', 'okobis', 'yikobo', 'nyisn', 'yobon', 'nyoibo', 'oniso', 'bokibo', 'nibony', 'onnisy', 'bikooy', 'noobi', 'kibyoo', 'oyisob', 'isnnyo', 'kosino', 'sokyob', 'nnoiby', 'oibob', 'osnny', 'kyoino', 'yonos', 'boinn', 'yiboon', 'booob', 'sinoy', 'konib', 'osyibo', 'oyoin', 'sniny', 'nosoni', 'niby', 'snoik', 'onosni', 'oinosn', 'nibyo', 'yokois', 'nosnoy', 'kobin', 'bikono', 'boino', 'onyos', 'nyisk', 'sninob', 'boiny', 'noyobi', 'konos', 'bosyoi', 'sobyin', 'onnoik', 'noiby', 'yoobik', 'obonyi', 'innok', 'koosnn', 'nobyin', 'nikosy', 'syokob', 'bokosy', 'ibonn', 'inyob', 'inno', 'byoiko', 'innoky', 'bosnoy', 'konib', 'inokon', 'konisy', 'kinoy', 'nyooki', 'innoky', 'okyiso', 'noisky', 'sokony', 'syobik', 'obyonn', 'snnoki', 'osnnoy', 'bosib', 'nyinos', 'syobin', 'osoik', 'oyonik', 'syinoo', 'bisoo', 'yobonn', 'koosyi', 'iboyok', 'nibooy', 'ikoy', 'yikoob', 'soonik', 'bosnik', 'bokiso', 'kobyib', 'oboiby', 'binoby', 'osnobi', 'ooyis', 'iskon', 'okyin', 'koyonn', 'noyosi', 'oikyos', 'nyonoi', 'sobony', 'obosni', 'byosib', 'boskoy', 'kinooy', 'sibyo', 'nnobyi', 'bisoby', 'okibyo', 'nobisy', 'sookib', 'inyono', 'snikoo', 'syoobi', 'nibyo', 'isnnob', 'boyosn', 'snyoo', 'yonin', 'yonnoi', 'oskyo', 'nobyoi', 'bokibo', 'nyoino', 'nyikoo', 'yoibob', 'nonoy', 'isnyon', 'onikoy', 'nnobos', 'obyib', 'osnnyo', 'koyib', 'kyoos', 'byonok', 'soobib', 'nisnyo', 'snyoo', 'inoko', 'nokob', 'oninoy', 'koibo', 'yoisn', 'ibok', 'yosino', 'ikoos', 'obyosi', 'sobiny', 'yosnoi', 'obyoin', 'konobi', 'snobin', 'bikonn', 'obosik', 'onoisy', 'soyino', 'nisob', 'kosoni', 'boibyo', 'okiby', 'sonoib', 'snib', 'nnoiko', 'onoi', 'onniky', 'oonyik', 'obisny', 'noso', 'boskoi', 'snnyo', 'osonni', 'onoisk', 'nibooy', 'sibok', 'okyois', 'oiboby', 'innoyo', 'syiboo', 'kyonos', 'byinon', 'yisok', 'snoi', 'ooskin', 'sooby', 'obinno', 'oiso', 'nnoki', 'oskob', 'yoobis', 'inosok', 'onnyok', 'onobib', 'boby', 'nosnok', 'bonyin', 'bokyo', 'nyobi', 'ikony', 'snniby', 'niskyo', 'oisnob', 'nyisko', 'bisk', 'bikob', 'oskyib', 'nnobok', 'boskib', 'ookiny', 'noinoy', 'bisyo', 'kyonoi', 'nisnob', 'boboin', 'inoson', 'osobi', 'nonoby', 'nyikos', 'onyib', 'nyoin', 'oskoy', 'yoonik', 'skoboy', 'kyibos', 'ookyis', 'onony', 'inonos', 'nnosoi', 'sobon', 'skib', 'byoiso', 'ikony', 'nyoosn', 'boyoni', 'skoon', 'ibyoob', 'kisyoo', 'byiso', 'noobin', 'syok', 'sonoin', 'onino', 'koibyo', 'konyos', 'oobyik', 'okyobi', 'bonosk', 'snni', 'biboko', 'byonok', 'soboib', 'nookyi', 'onik', 'onosi', 'konon', 'yoibob', 'okosib', 'noiny', 'snoiny', 'sikoby', 'booby', 'kosyi', 'nnoki', 'nokyis', 'nnyoki', 'kooyib', 'obyos', 'konnib', 'niboko', 'inoson', 'inoo', 'oninyo', 'isnyo', 'kosyoi', 'onnyoi', 'sobino', 'bonnis', 'nooy', 'byobis', 'nosnoi', 'bonyi', 'boisok', 'noyisk', 'yookis', 'onoiky', 'soinok', 'nikos', 'ikyoob', 'kobosn', 'oisnob', 'syobik', 'sinoo']

const today = new Date()
const time = today.getTime()
const day = Math.floor(time/86400000) - 19172

const alphabet = 'qwertyuiopasdfghjklzxcvbnm'
const bobinsky = 'bobinsky'
let i = 0
let x = 0
let n = 1
const bobword = answers[day]
const len = bobword.length
const bobletters = [];

for (let a = 0; a<len; a++){
    bobletters.push(bobword.charAt(a))
}

let html = ''
while (i < len){
    html += '<div class="letterbox item"></div>'
    i+=1
}
i = 0

document.querySelector('#row1').innerHTML = html
document.querySelector('#row2').innerHTML = html
document.querySelector('#row3').innerHTML = html
document.querySelector('#row4').innerHTML = html
document.querySelector('#row5').innerHTML = html
document.querySelector('#row6').innerHTML = html

let curwordarr = []
let curwordstr = ''
let b = 0
let bobs = []
let boob = true

let qsel = document.querySelectorAll('.letterbox')

const popup = document.querySelector('#pogpop')

document.onkeydown = (e) => {  
    e = e || window.event;
    key = e.key  
    if (key === 'Enter' && popup.style.visibility==='visible'){
        popup.style.visibility='hidden'
    }
    if (key === 'Enter' && n<=6){
        if(qsel[len*n-1].innerText !== ''){
            bobs = []
            for(let z=0; z<len; z+=1){
                bobs.push(bobletters[z])
            }
            b=0
            curwordstr = ''
            curwordarr=[]
            while (b<len){
                curwordarr.push(qsel[len*(n-1)+b].innerText.toLowerCase())
                b+=1
            }
            for (let c=0; c<len; c++){
                curwordstr += curwordarr[c]
            }
            curwordstr = curwordstr.toLowerCase()

            boob = true
            for (let blob = 0; blob<len; blob+=1){
                if (bobinsky.includes(curwordstr.charAt(blob)) === false){
                    boob = false
                }
            }

            if (boob){
                for (let d=0; d<len; d+=1){
                    if (curwordarr[d] === bobs[d]){
                        qsel[len*(n-1)+d].style.background = '#6AAA64'
                        curwordarr[d]=''
                        bobs[d] = null
                    }
                }

                for (let e=0; e<len; e+=1){
                    for (let f=0; f<len; f+=1){
                        if (curwordarr[e] === bobs[f]){
                            qsel[len*(n-1)+e].style.background = '#C9B458'
                            bobs[f]=null
                        }
                    }
                }

                if (curwordstr === bobword){
                    popup.style.visibility = 'visible'
                    document.querySelector('#poggies').innerText = `Congratulations, you won in ${n}`
                    document.querySelector('#poggies2').innerText = `You truly aren't a bobinsky.`
                    popup.classList.add('fade')
                    n=7
                }
                n+=1
                if (n===7){
                    popup.style.visibility = 'visible'
                    document.querySelector('#poggies').innerText = `Looks like you are a bobinsky.`
                    document.querySelector('#poggies2').innerText = `The word was ${bobword.toUpperCase()}.`
                    popup.classList.add('fade')
                }
            } else {
                if (n<=6){
                    document.querySelector('#row'+n).classList.add('wiggle');
                    setTimeout(function(){document.querySelector('#row'+n).classList.remove('wiggle')}, 300)
                }
            }
        } else{
            if (n<=6){
                document.querySelector('#row'+n).classList.add('wiggle');
                setTimeout(function(){document.querySelector('#row'+n).classList.remove('wiggle')}, 300)
            }
        }
    }
    if(alphabet.includes(key) && n<=6){
        i=0
        x=0
        while(i < len*n && x === 0){
            if (qsel[i].innerText == ''){
                qsel[i].innerText = key.toUpperCase()
                x=1
            } else {
                i+=1
            }
        }
    }
    if (key === 'Backspace' && n<=6){
        i=len*n-1
        x=0
        while(i >= len*(n-1) && x===0){
            qsel = document.querySelectorAll('.letterbox')
            if (qsel[i].innerText !== ''){
                qsel[i].innerText = ''  
                x=1
            } else {
                i-=1
            }
        }
    }
}

document.querySelector('.closebut').addEventListener('click', function(e){popup.style.visibility='hidden';})