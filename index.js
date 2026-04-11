const button = document.querySelector("button");
button.disabled = true;
const table = document.querySelector("table");

fetch("https://api.siposm.hu/getDevelopers") // then: olyan mint az await, tehat akkor fut le amikor kesz
    .then((r) => r.json())
    .then((developers) => {

        for (const developer of developers) {
            const tr = document.createElement("tr")
            const td_name = document.createElement("td")
            td_name.append(developer.name)

            const td_email = document.createElement("td")
            td_email.append(developer.email)

            const td_age = document.createElement("td")
            td_age.append(developer.age)

            const td_salary = document.createElement("td")
            td_salary.append(developer.salary)

            tr.append(td_name, td_email, td_age, td_salary)
            table.append(tr)
        }

        button.disabled = false; // ha betoltodott az api hivas akkor lesz elerheto a gomb
    });