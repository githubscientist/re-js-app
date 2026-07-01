# Databases

- Databases are collections of data.
- Data can be structured or unstructured.
- structured data is organized in a specific format, such as tables with rows and columns, while unstructured data does not have a predefined format and can include text, images, videos, etc.(example for unstructured can be collection of documents)

## Memory

- Data can be stored in the memory.
- Memory is categorized into two types:
    - Primary Memory: 
        - Primary memory is the main memory of a computer, which is directly accessible by the CPU.
        - It is volatile, meaning that it loses its contents when the power is turned off.
        - Examples include RAM (Random Access Memory) and cache memory.
    - Secondary Memory
        - Secondary memory is non-volatile storage that retains data even when the power is turned off.
        - It is used for long-term storage of data and programs.
        - Examples include hard drives, solid-state drives (SSDs), optical discs, and USB flash drives.
- Applications, Operating Systems uses primary memory to store data temporarily but then they can be stored in secondary memory for long-term storage.
- How to store the data in memory is decided by the database management system (DBMS) which is a software that interacts with the user, applications, and the database itself to capture and analyze the data.

## Database Management System (DBMS)

- A Database Management System (DBMS) is software that allows users to define, create, maintain, and control access to databases.
- It provides an interface for users and applications to interact with the database, enabling them to perform operations such as querying, updating, and managing data.
- Based on whether dbms uses structured or unstructured data, it can be classified into two types:
    - Relational Database Management System (RDBMS): 
        - RDBMS is a type of DBMS that organizes data into tables (relations) with rows and columns.
        - It uses Structured Query Language (SQL) for defining and manipulating the data.
        - Examples include MySQL, PostgreSQL, Oracle Database, and Microsoft SQL Server.
    - Non-Relational Database Management System (NoSQL DBMS):
        - NoSQL DBMS is a type of DBMS that does not use the traditional table-based relational model.
        - It is designed to handle unstructured or semi-structured data and can support various data models such as key-value, document, column-family, and graph.
        - Examples include MongoDB, Cassandra, Redis, and Neo4j.
- We need a language to interact with the database, which is called a query language. The most commonly used query language is SQL (Structured Query Language) for relational databases, while NoSQL databases may have their own query languages or APIs.

## Software Setup

1. Mysql community Server
2. Mysql Workbench