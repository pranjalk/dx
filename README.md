[![Code Climate](https://codeclimate.com/repos/57bc5da48a150839490023d0/badges/d68e3891ce9d0c029e25/gpa.svg)](https://codeclimate.com/repos/57bc5da48a150839490023d0/feed) [![Test Coverage](https://codeclimate.com/repos/57bc5da48a150839490023d0/badges/d68e3891ce9d0c029e25/coverage.svg)](https://codeclimate.com/repos/57bc5da48a150839490023d0/coverage) [![Issue Count](https://codeclimate.com/repos/57bc5da48a150839490023d0/badges/d68e3891ce9d0c029e25/issue_count.svg)](https://codeclimate.com/repos/57bc5da48a150839490023d0/feed) [![Build Status](https://travis-ci.org/pranjalk/dx.svg?branch=master)](https://travis-ci.org/pranjalk/dx)

# Diagnostics Order Workflow
Simple workflow for ordering diagnostic tests online
Created for JS Hello World Project

## Tech (MERN Stack)
  - MariaDB v10.1.13 (Stable LTS) - Relational Database Management [![npm version](https://badge.fury.io/js/mysql.svg)](https://badge.fury.io/js/mysql)
  - Express v4.14.0 (Stable) - fast node.js network app framework [![npm version](https://badge.fury.io/js/express.svg)](https://badge.fury.io/js/express)
  - ReactJS v15.3 (Latest) -HTML enhanced for User Interfaces [![npm version](https://badge.fury.io/js/react.svg)](https://badge.fury.io/js/react)
  - Node.js v6.3.1 (Latest) - evented I/O for the backend

## Setting up the environment

### Setting up MariaDB
  - For linux
  
    ```bash
      sudo apt-get install software-properties-common
      sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db
      sudo add-apt-repository 'deb [arch=amd64,i386,ppc64el] http://mirror.fibergrid.in/mariadbrepo/10.1/ubuntu trusty main'
    ```
    ```bash
      sudo apt-get update
      sudo apt-get install mariadb-server
    ```  

### Setting up NPM
  - For Linux

    ```bash
      sudo apt-get install npm
    ```
  - For Mac

  ```bash
    brew install npm
  ```
  
### Cloning the repository
  
  ```bash
    git clone https://github.com/practo/dx.git
  ```
  
### Running the server
  
  ```bash
    npm start
  ```
  
### Contributing
- Please do not use random variable names in the code.
- Variable names should be in snake_case. eg: trial_variable
- Function names should be in camel case. eg: getInformation()
- Class names should start with caps. eg: class Calculator
- Please use associative arrays for improving the readablity
- Please use tags for commits. eg: pranjalk_07082016_revised_readme

> Always create branches and make a  pull request and assign it someone for review.
>
> NEVER EVER PUSH DIRECTLY INTO MASTER!
>
> Please try to write self documenting code as much as possible.
>
> At last, may the force be with you!

### Version
0.0.1
