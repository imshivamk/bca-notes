---
dg-publish: true
---
- System Requirements for WordPress
- Database − MySQL 5.0 +

- Web Server −
	WAMP (Windows)
	LAMP (Linux)
	XAMP (Multi-platform)
	MAMP (Macintosh)
## Download WordPress and server

1. Download WordPress from the link https://wordpress.org/download/
2. download XAMP or any local web server.
## WordPress Installation

1. Create Store Database
	1. WordPress requires MySQL database
	2. go to http://localhost/phpmyadmin/
	3. create a new empty database with user/password

2. Set Up Wizard

Step (1)
1. Extract the downloaded WordPress folder and upload it into your web server or localhost
2. in case of local host, move the WordPress folder to xampp/htdocs/

Step (2)
1. Open your browser and navigate to your WordPress file path
2. https://localhost/wordpress/
3. you will get the screen of WordPress installer
4. Select your language and click on Continue.

Step (3)
1. you can view the information needed for the database before proceeding with installation.
2. Click on Let's go!

Step (4)
1. Here, you have to enter the information about the MySQL database.
	1. Database Name − Enter the database name which you have created in MySQL database for WordPress.
	2. Username − Enter the user name of your MySQL database.
	3. Password − Enter the password which you had set for MySQL database.
	4. Database Host − Write the host name, by default it will be localhost.
	5. Table Prefix − It is used to add prefix in the database tables which helps to run multiple sites on the same database. (by default -wp)
2. click on Submit button.

Step (5)
1. WordPress checks the database setting and gives you the confirmation screen.
2. Click on Run the install

Step (6)
1. Enter administrative information.
2. It contains the following fields −
	1. Site Title − Enter the name of the site 
	2. Username − Enter the username for login
	3. Password twice − Enter password two times to protect your site.
	4. Your E-mail
	5. indexing Privacy − allows the search engine to index this site after checking the checkbox.

After filling all the information, click on the Install WordPress button.
Step (7)
1. Click on Log In button.
2. After clicking on login, you will get a WordPress Admin Panel as depicted in the following screen
3. Enter the username and password & click on the Log In button.