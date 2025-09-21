// if, else if, else

let marks = 96;

if (marks >= 90) {
    console.log("Grade: A");
}
else if (marks >= 80 && marks < 90) {
    console.log("Garde: B");
}
else if (marks >= 70 && marks < 80) {
    console.log("Grade: C");
}
else if (marks >= 60 && marks < 70) {
    console.log("Grade: D");
}
else {
    console.log("fail");
}

// switch

let choice = 6;

switch (choice) {
    case 1: console.log("Case 1 Executed..");
        break;

    case 2: console.log("Case 2 Executed..");
        break;

    case 3: console.log("Case 3 Executed..");
        break;

    case 4: console.log("Case 4 Executed..");
        break;

    default: console.log("Please Enter Valid Choice");
        break;
}

// for loop

for (let i=0; i<10; i++) {
    console.log(i);
}

// while loop

let state = 1;

while (state) {
    console.log("state is true");
}

// jump statement -> break and continue