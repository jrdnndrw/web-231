/*
============================================
; Title: nishimura-anderson-payroll.js
; Author: Jordan Nishimura-Anderson
; Date: 3/25/2023
; Description: This provides values for the user interface of the payroll program.
;===========================================
*/

// Variables for the unordered list items.
const employeeOneFirstName = 'Ludwig'
const employeeOneLastName = 'Beethoven'
const employeeOneAddress = '505 Main Street'
const employeeOneHireDate = new Date().toLocaleDateString('en-US')
const employeeOnePayRate = 18.901.toFixed(1)
const employeeTwoFirstName = 'Johann'
const employeeTwoLastName = 'Bach'
const employeeTwoAddress = '512 Main Street'
const employeeTwoHireDate = new Date().toLocaleDateString('en-US')
const employeeTwoPayRate = 25.501.toFixed(1)
const employeeThreeFirstName = 'Wolfgang'
const employeeThreeLastName = 'Mozart'
const employeeThreeAddress = '600 Main Street'
const employeeThreeHireDate = new Date().toLocaleDateString('en-US')
const employeeThreePayRate = 50.101.toFixed(1)

// Sets the employee records list items values by tag name.
document.getElementsByTagName('li')[0].innerHTML = employeeOneFirstName
document.getElementsByTagName('li')[1].innerHTML = employeeOneLastName
document.getElementsByTagName('li')[2].innerHTML = employeeOneAddress
document.getElementsByTagName('li')[3].innerHTML = employeeOneHireDate
document.getElementsByTagName('li')[4].innerHTML = employeeOnePayRate
document.getElementsByTagName('li')[5].innerHTML = employeeTwoFirstName
document.getElementsByTagName('li')[6].innerHTML = employeeTwoLastName
document.getElementsByTagName('li')[7].innerHTML = employeeTwoAddress
document.getElementsByTagName('li')[8].innerHTML = employeeTwoHireDate
document.getElementsByTagName('li')[9].innerHTML = employeeTwoPayRate
document.getElementsByTagName('li')[10].innerHTML = employeeThreeFirstName
document.getElementsByTagName('li')[11].innerHTML = employeeThreeLastName
document.getElementsByTagName('li')[12].innerHTML = employeeThreeAddress
document.getElementsByTagName('li')[13].innerHTML = employeeThreeHireDate
document.getElementsByTagName('li')[14].innerHTML = employeeThreePayRate
