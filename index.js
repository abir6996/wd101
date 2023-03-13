let userForm = document.getElementById("user-form");

const retrieveEntries = () => {
    let entries = localStorage.getItem("user-Entries");
    if (entries) {
        entries = JSON.parse(entries);
    } else {
        entries = [];
    }
    return entries;
}
let userEntries = retrieveEntries();

const displayEntries = () => {
    const entries = retrieveEntries();



    const tableEntries = entries.map((entry) => {
        const nameCell = `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailCell = `<td class='border px-4 py-2'>${entry.email}</td>`;
        const dobCell = `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const password = `<td class='border px-4 py-2'>${entry.password}</td>`;
        const acceptTerms = `<td class='border px-4 py-2'>${entry.acceptTerms}</td>`;

        const row = `<tr>${nameCell}${emailCell}${dobCell}${password}${acceptTerms}</tr>`;
        return row;
    }).join("\n");

    const table = `<table class="table-auto w-full"><tr>
    
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Date of Birth</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Accept Terms?</th>
    </tr>${tableEntries} </table>`;

    let details = document.getElementById("user-entries");
    details.innerHTML = table;

        
}
const saveUserForm = (event) => {
    event.preventDefault();
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const password = document.getElementById("password").value;


    const acceppetedTermsAndConditions = document.getElementById ("acceptTerms").checked;

    const entry = {
        name,
        email,
        dob,
        password,
        acceppetedTermsAndConditions

    };

    userEntries.push(entry);

    localStorage.setItem("user-Entries", JSON.stringify(userEntries));
    displayEntries();

}
userForm.addEventListener("submit", saveUserForm);
displayEntries();
