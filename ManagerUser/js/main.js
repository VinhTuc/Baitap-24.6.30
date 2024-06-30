// let memberList = [
//     {
//         fullname: "Nguyen Van A",
//         gender: "男性",
//         group: "A",
//         mail: "nguyenvana@gmail.com",
//         telnumber: "0807",
//         japanlevel: "N3",
//         marks: "120",
//     }
// ]
// localStorage.setItem("memberList", JSON.stringify(memberList));

let memberList = JSON.parse(localStorage.getItem("memberList")) || []

function renderData() {
    let templateStr = ``;
    for (let i = 0; i < memberList.length; i++) {
        templateStr += `
        <tr>
                <td scope="row">${i + 1}</td>
                <td>${memberList[i].fullname}</td>
                <td>${memberList[i].gender}</td>
                <td>${memberList[i].group}</td>
                <td>${memberList[i].mail}</td>
                <td>${memberList[i].telnumber}</td>
                <td>${memberList[i].japanlevel}</td>
                <td>${memberList[i].marks}</td>
                <td><button>Edit</button></td>
            </tr>
        `
    }
    document.querySelector("tbody").innerHTML = templateStr;
}
renderData()

function addMember() {
    let newMember = {
        fullname: document.getElementById("fullname").value,
        gender: document.querySelector(`input[name="gender"]:checked`).value,
        group: document.getElementById("group").value,
        mail: document.getElementById("mail").value,
        telnumber: document.getElementById("telnumber").value,
        japanlevel: document.getElementById("japanlevel").value,
        marks: document.getElementById("marks").value,
    };
    memberList.push(newMember);
    localStorage.setItem("memberList", JSON.stringify(memberList))


    renderData()
}