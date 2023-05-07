Employee Tracker App
This is an employee tracker application that allows users to manage departments, roles, and employees in a company. The app is built using Node.js and MySQL, and it uses Inquirer.js to interact with the user through the command line.

Installation
To install the app, follow these steps:

Clone the repository to your local machine.
bash
Copy code
git clone https://github.com/<your-github-username>/employee-tracker.git
Navigate to the project directory and install the necessary dependencies.
bash
Copy code
cd employee-tracker
npm install
Create a .env file in the root directory and add your MySQL credentials.
makefile
Copy code
DB_HOST=localhost
DB_PORT=3306
DB_USER=<your-mysql-username>
DB_PASSWORD=<your-mysql-password>
DB_NAME=employee_tracker_db
Create the database schema and seed data.
arduino
Copy code
npm run schema
npm run seed
Start the server.
sql
Copy code
npm start
Usage
To use the app, follow these steps:

Open the app in your terminal by navigating to the project directory and running npm start.

Choose an option from the main menu to view or manage departments, roles, or employees.

To view all departments, roles, or employees, select the "View All" option from the corresponding menu.

To add a new department, role, or employee, select the "Add" option from the corresponding menu.

To update an existing department, role, or employee, select the "Update" option from the corresponding menu.

To delete a department, role, or employee, select the "Delete" option from the corresponding menu.

To exit the app, select the "Exit" option from the main menu.

Technologies Used
The app is built using the following technologies:

Node.js
MySQL
Inquirer.js
Credits
This app was built by <your-name>. If you have any questions or suggestions, please feel free to contact me at <your-email>.