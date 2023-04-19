const passIn = document.querySelector(".ip-fld input");
const iconE = document.querySelector(".ip-fld i");
const allRules = document.querySelectorAll(".allRules li")

const rules = [
    { regex: /.{8,}/, index: 0 },
    { regex: /[0-9]/, index: 1 },
    { regex: /[a-z]/, index: 2 },
    { regex: /[A-Z]/, index: 3 },
    { regex: /[^A-Za-z0-9]/, index: 4 },
]

iconE.addEventListener('click', () => {
    passIn.type = passIn.type === "password" ? "text" : "password";

    iconE.className = `fa-solid fa-eye${passIn.type === "password" ? "" : "-slash"}`
});

passIn.addEventListener('keyup', (e) => {
    rules.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const singleRule = allRules[item.index];

        if (isValid) {
            singleRule.firstElementChild.className = 'fa-solid fa-check';
        } else {
            singleRule.firstElementChild.className = 'fa-solid fa-circle';
        }
    })
})