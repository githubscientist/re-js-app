/*
    SQL Queries:

    To list all databases in MySQL, you can use the following SQL query:

    show databases;

    To see the current date and time:

    select now();

    To see the current installed version of MySQL:

    select version();

    SQL: Structured Query Language

    1. DDL: Data Definition Language
        - CREATE: Used to create a new table, database, index, or view.
        - ALTER: Used to modify an existing database object, such as a table.
        - DROP: Used to delete an existing database object, such as a table or view.
    2. DML: Data Manipulation Language
        - INSERT: Used to add new records to a table.
        - UPDATE: Used to modify existing records in a table.
        - DELETE: Used to remove records from a table.
    3. DQL: Data Query Language
        - SELECT: Used to retrieve data from a database.
    4. DCL: Data Control Language
        - GRANT: Used to give users access privileges to the database.
        - REVOKE: Used to remove access privileges from users.
    5. TCL: Transaction Control Language
        - COMMIT: Used to save all changes made during the current transaction.
        - ROLLBACK: Used to undo changes made during the current transaction.
        - SAVEPOINT: Used to set a point within a transaction to which you can later roll back.

    To create a database:

    create database database_name;

    Example: 

    create database fsdcwdeb59;

    To see the currently selected database:

    select database();

    To select a database to use:

    use database_name;

    Example:

    use fsdcwdeb59;

    To show all tables in the currently selected database:

    show tables;

    To Drop a database:

    drop database database_name;

    Example:

    drop database fsdcwdeb59;

    To create a new database again:

    create database eshopdb;

    To select the database to use:

    use eshopdb;

    To list all the tables in the currently selected database:

    show tables;

    To create a new table:

    create table table_name (
        column1_name column1_datatype constraints,
        column2_name column2_datatype constraints,
        ...
    );

    Example:

    create table products (
        product_id int primary key auto_increment,
        product_name varchar(100) not null,
        price decimal(10, 2) not null,
        product_category varchar(50) not null,
        quantity int not null,
        isAvailable boolean not null default true,
        created_at timestamp default current_timestamp,
        updated_at timestamp default current_timestamp on update current_timestamp
    );

    Constraints:

    - Constraints are rules that are applied to the columns of a table to enforce data integrity and consistency.

    NOT NULL: Ensures that a column cannot have a NULL value.
    UNIQUE: Ensures that all values in a column are unique.
    PRIMARY KEY: It's like combining NOT NULL and UNIQUE. It uniquely identifies each record in a table.

    DATA TYPES:

    - INT: Integer data type. Examples: 1, 2, 3, -1, -2, -3
    - CHAR(n): Fixed-length character string. Example: CHAR(10) will always store 10 characters, padding with spaces if necessary.
    - VARCHAR(n): Variable-length character string. Example: VARCHAR(50) can store up to 50 characters.
    - TEXT: Used for large text data. Example: TEXT can store long paragraphs of text.
    - DATE: Stores date values in the format YYYY-MM-DD. Example: '2024-06-15'
    - DATETIME: Stores date and time values in the format YYYY-MM-DD HH:MM:SS. Example: '2024-06-15 14:30:00'
    - TIMESTAMP: Similar to DATETIME but also includes timezone information. Example: '2024-06-15 14:30:00'
    - BOOLEAN: Represents true or false values. Example: TRUE or FALSE

    To see the structure of a table:

    describe table_name;

    To insert data into a table:

    insert into table_name (column1, column2, ...) values (value1, value2, ...);

    Example:

    insert into products (product_name, price, product_category, quantity) values ('Laptop', 999.99, 'Electronics', 10);

    To insert multiple records into a table:
    
    insert into products 
    (product_name, price, product_category, quantity) values 
    ('Smartphone', 499.99, 'Electronics', 20),
    ('Headphones', 79.99, 'Electronics', 50),
    ('Coffee Maker', 39.99, 'Home Appliances', 15),
    ('Blender', 29.99, 'Home Appliances', 25),
    ('Desk Chair', 89.99, 'Furniture', 30),
    ('Bookshelf', 59.99, 'Furniture', 10),
    ('T-shirt', 19.99, 'Clothing', 100),
    ('Jeans', 49.99, 'Clothing', 50),
    ('Sneakers', 79.99, 'Footwear', 40),
    ('Sandals', 29.99, 'Footwear', 60);


    To delete data from a table:

    delete from table_name;

    This will delete all the data from the table but keep the table structure intact.

    To delete the entire table structure along with the data:
    
    drop table table_name;

    To select all the columns from a table:

    select * from table_name;

    Example: 

    select * from products;

    To select specific columns from a table:

    select column1, column2 from table_name;

    Example:

    select product_name, price from products;

    To select specific columns with a condition:

    select column1, column2 from table_name where condition;

    Example:

    select product_name, price from products where price > 50;

    To update data in a table:

    update table_name set column1 = value1, column2 = value2 where condition;
    
    Example:    

    update products set isAvailable = false where quantity<=10;

    To delete a speicific record from a table:

    delete from table_name where condition;

    Example:

    delete from products where product_id=3;

    Create a table for users:

    create table users (
        user_id int primary key auto_increment,
        name varchar(100) not null,
        location varchar(100) not null,
        email varchar(100) not null unique,
        created_at timestamp default current_timestamp,
        updated_at timestamp default current_timestamp on update current_timestamp
    );

    Let's remove email field from the users table:

    alter table users drop column email;

    insert into users (name, location) values ('John Doe', 'New York'),
    ('Jane Smith', 'Los Angeles'),
    ('Alice Johnson', 'Chicago'),
    ('Bob Brown', 'Houston'),
    ('Charlie Davis', 'Phoenix'),
    ('Diana Evans', 'Philadelphia'),
    ('Frank Green', 'San Antonio'),
    ('Grace Harris', 'San Diego'),
    ('Henry Jackson', 'Dallas'),
    ('Ivy King', 'San Jose');

    Lets have an orders table:

    create table orders (
        order_id int primary key auto_increment,
        user_id int not null,
        product_id int not null,
        quantity int not null,
        order_date timestamp default current_timestamp,
        status enum('pending', 'shipped', 'delivered', 'cancelled') default 'pending',
        foreign key (user_id) references users(user_id),
        foreign key (product_id) references products(product_id)
    );

    insert into orders (user_id, product_id, quantity) values
    (1, 1, 1),
    (2, 2, 2),
    (4, 4, 3),
    (5, 5, 1),
    (6, 6, 2),
    (7, 7, 1),
    (8, 8, 4),
    (9, 9, 2),
    (10, 10, 1);
*/
