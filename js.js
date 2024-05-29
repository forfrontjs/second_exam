let show = document.querySelector('.show')
let alphabet = document.querySelector('.alphabet')
let sort = document.querySelector('.sort')
let titles = document.querySelector('.titles')

let arr = [
    'Министерство неджентльменских дел',
    'Артур, ты король',
    'Онегин',
    'Дюна: Часть вторая',
    'Территория зла',
    'Из глубины',
]
let showFilms = ()=>{
    show.addEventListener('click', ()=>{
        titles.innerHTML = ''
        arr.forEach((el)=>{
            titles.innerHTML += `
                <li>${el}</li>
            `
        })
        if(show.textContent === 'Показать'){
            show.textContent = 'Скрыть'
        }
        else if(show.textContent === 'Скрыть'){
            titles.innerHTML = ''
            show.textContent = 'Показать'
        }
    })
    alphabet.addEventListener('click', ()=>{
        titles.innerHTML = ''
       arr.sort().forEach((item)=>{
        titles.innerHTML += `
        <li>${item}</li>
        `
       })
    })
    sort.addEventListener('click', ()=>{
        titles.innerHTML = ''
        arr.sort().reverse().forEach((item)=>{
            titles.innerHTML += `
            <li>${item}</li>
            `
        })
    })
}
showFilms()