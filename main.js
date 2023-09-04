const data = [
    {icon: "icon-reaction.svg", label: "Reaction", score: 80, bg: "color-red"},
    {icon: "icon-memory.svg", label: "Memory", score: 92, bg: "color-yellow"},
    {icon: "icon-verbal.svg", label: "Verbal", score: 61, bg: "color-gr"},
    {icon: "icon-visual.svg", label: "Visual", score: 72, bg: "color-bl"}
]

const ul = document.querySelector("#result-div ul")
data.forEach(item => {
    const li = document.createElement('li')
    li.innerHTML = `
        <div class="inside">
            <img src="assets/images/${item.icon}">
            <p>${item.label}</p>
        </div>
        <div class="inside-points">
            <p><span>${item.score}</span> /100</p>
        </div>
    `
    li.classList.add(item.bg)
    ul.append(li)
    console.log(item)
})