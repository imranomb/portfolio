let skola = document.querySelectorAll(".skola");
let hobiji = document.querySelectorAll(".hobi_item")
const projects = [
    {
        ime: "ER Zanat",
        opis:"ER Zanat je projekat rađen za SZR koristeći HTML, CSS, JS I Bootstrap.",
        slika: "public/proj_1.png"
    },
    {
        ime: "NAVBAR Creator",
        opis:"NAVBAR Creator je samostalni projekat čiji je fokus na vanila JavaScriptu.",
        slika: "public/proj_2.png"
    },
    {
        ime: "ARIA Webshop",
        opis:"ARIA Webshop je e-commerc stranica napravljena koristeći WordPress.",
        slika: "public/proj_3.png"
    }
]
let arrows = document.querySelectorAll(".arrows");
const project_info = document.getElementById("project_info")
let br = 0;
skola.forEach(skl => {
    skl.addEventListener("mouseenter", () => {
        document.getElementById("about_section").style.setProperty("--school_color", skl.dataset.color);
    })
})

hobiji.forEach(hobi => {
    hobi_pos(hobi);
    hobi.addEventListener("click", () => {
        location.href = `${hobi.dataset.url}`
    })
})

function hobi_pos(h)
{
    let x = Math.floor(Math.random() * 86) + 4;
    let y = Math.floor(Math.random() * 86) + 4;
    h.style.left = x + "%";
    h.style.top = y + "%";
}

arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
        const img = document.getElementById("project_img");
        let x = document.querySelectorAll(".blur_anim");
        if(x) x.forEach(item => item.classList.toggle("blur_anim"));
        if(arrow.classList.contains("fa-arrow-right")) br++
        else br--;
        if(br > 2 || br < 0) br = 0;
        img.offsetWidth;
        setTimeout(() => {
            project_info.childNodes[1].innerText = `${projects[br].ime}`;
            project_info.childNodes[3].innerText = `${projects[br].opis}`;
            img.src = `${projects[br].slika}`;
        }, 500)
        img.classList.toggle("blur_anim");
        project_info.classList.toggle("blur_anim");
    })
})
