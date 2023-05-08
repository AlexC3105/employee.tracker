const { prompt, default: inquirer } = require("inquirer");
const db = require("./db");
require("console.table");

init();

function init() {
    const logoText = logo({ name: "Employee Tracker" }).render();

    console.log(logoText);
}

function loadMainPrompts() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to work on today? ",
            choices: [
                {
                    name: "View Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "View Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                }
            ]
        }
    ]).then((res) => {
        if (res.choice === "VIEW_EMPLOYEES") {
            db.findAllEmployees().then(([rows]) => {
                console.table(rows)
                loadMainPrompts();
            })
        } else if (res.choice === "ADD_EMPLOYEE") {
            prompt([
                {
                    type: "input",
                    name: "addFirstName",
                    message: "What is your employees first name? "
                },
                {
                    type: "input",
                    name: "addLastName",
                    message: "What is your employees last name? "
                },
                {
                    type: "input",
                    name: "addRoleId",
                    message: "What is your employees role? "
                },
                {
                    type: "input",
                    name: "addMgrId",
                    message: "What is your employees manager ID (if any)? "
                }
            ]).then((res) => {
                db.addEmployee(res.addFirstName, res.addLastName, res.addRoleId, res.addMgrId || null)
                    .then(([rows]) => {
                        console.table(rows)
                        loadMainPrompts();
                    })
            })
        } else if (res.choice === "VIEW_DEPARTMENTS") {
            db.findAllDepartments().then(([rows]) => {
                console.table(rows)
                loadMainPrompts();
            })
        } else if (res.choice === "ADD_DEPARTMENT") {
            prompt([
                {
                    type: "input",
                    name: "addName",
                    message: "What is the name of the new department? "
                }
            ]).then((res) => {
                db.addDept(res.addname)
                    .then(([rows]) => {
                        console.table(rows)
                        loadMainPrompts();
                    })
            })
        }
    }).catch((err) => {
        console.log(err);
    })
};

loadMainPrompts();