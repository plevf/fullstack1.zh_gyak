const tbody = document.querySelector("tbody")
let developers = undefined

fetch("https://api.siposm.hu/getDevelopers")
.then(r => r.json())
.then(data => {
    developers = data
    for (const developer of developers) {
        const tr = document.createElement("tr")

        const name_td = document.createElement("td")
        name_td.append(developer.name)

        const email_td = document.createElement("td")
        email_td.append(developer.email)
        
        const age_td = document.createElement("td")
        if(developer.age>37){
            age_td.classList.add("old")
        }
        age_td.append(developer.age)

        const salary_td = document.createElement("td")
        salary_td.append(developer.salary)

        tr.append(name_td, email_td, age_td, salary_td)
        tbody.appendChild(tr)
    }
})

function lowestEarning(){
    if(!developers?.length){ // ha length pl 3 akkor az true, ezert tagadjuk
        return null
    }

    let min = developers[0];

    for (let index = 1; index < developers.length; index++) {
        const developer = developers[index];
        if(developer.salary<min.salary){
            min = developer
        }
    }
    return min
}

function lowestEarningClick(e){
    const lowestEarningDev = lowestEarning()
    let x = e.target
    e.target.innerHTML = lowestEarningDev.name;
}

// todo: addeventlistener