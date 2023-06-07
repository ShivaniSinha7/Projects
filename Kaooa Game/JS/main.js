var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");

let ans = "Game started !\n";

ctx.moveTo(400, 80);
ctx.lineTo(200, 500);
ctx.lineWidth = 3;
ctx.lineCap = 'round';
ctx.strokeStyle = '#FF0000';
ctx.stroke();

ctx.moveTo(400, 80);
ctx.lineTo(600, 500);
ctx.strokeStyle = '#ffffff';
ctx.stroke();

ctx.moveTo(150, 225);
ctx.lineTo(650, 225);
ctx.strokeStyle = '#ffffff';
ctx.stroke();

ctx.moveTo(650, 225);
ctx.lineTo(200, 500);
ctx.strokeStyle = '#ffffff';
ctx.stroke();

ctx.moveTo(150, 225);
ctx.lineTo(600, 500);
ctx.strokeStyle = '#ffffff';
ctx.stroke();

const circleCoordinate = [
    {
        n: 1,
        flag: false,
        bird: "empty",
        x: 400,
        y: 80
    },
    {
        n: 2,
        flag: false,
        bird: "empty",
        x: 200,
        y: 500
    },
    {
        n: 3,
        flag: false,
        bird: "empty",
        x: 600,
        y: 500
    },
    {
        n: 4,
        flag: false,
        bird: "empty",
        x: 150,
        y: 225
    },
    {
        n: 5,
        flag: false,
        bird: "empty",
        x: 650,
        y: 225
    },
    {
        n: 6,
        flag: false,
        bird: "empty",
        x: 335,
        y: 225
    },
    {
        n: 7,
        flag: false,
        bird: "empty",
        x: 470,
        y: 225
    },
    {
        n: 8,
        flag: false,
        bird: "empty",
        x: 510,
        y: 310
    },
    {
        n: 9,
        flag: false,
        bird: "empty",
        x: 400,
        y: 375
    },
    {
        n: 10,
        flag: false,
        bird: "empty",
        x: 290,
        y: 310
    },
]

circleCoordinate.forEach(function (c) {
    ctx.beginPath();
    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
    ctx.strokeStyle = "#CCFFCC";
    ctx.stroke();
    ctx.fillStyle = "#CCFFCC";
    ctx.fill();
});

let turn = 1;           //first turn is for crow and second for vulture
let vulture = 0;
let vultureX = 0;
let vultureY = 0;
let VCircle = 0;
let crow = 0;
let crowX = 0;
let crowY = 0;
let CCircle = 0;
let crowCount = 0;
let entry = 0;


function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    // ans += "Type: mousedown | x: " + x + "y: " + y;

    circleCoordinate.forEach(function (c) {
        // console.log(turn);
        /*************************************** CROW TURN ***************************************************/

        if (turn == 1 && x >= c.x - 25 && x <= c.x + 25 && y >= c.y - 25 && y <= c.y + 25) {

            if (crow < 7 && c.flag == false) {
                ctx.beginPath();
                ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                ctx.fillStyle = '#FF9900'
                ctx.fill();
                ctx.strokeStyle = '#FF9900'
                ctx.stroke();
                c.flag = true;
                c.bird = "crow";
                turn = 2;
                crow = crow + 1;
                document.getElementById("part1a").innerHTML = crow;
                // console.log(crow);
                ans += "Crow placed at " + c.n + "\n";
            }

            else if (crow >= 7 && c.flag == true && entry == 0) {
                // console.log(crow);
                if (c.n == 1) {
                    for (let c1 of circleCoordinate) {
                        if ((c1.n == 6 || c1.n == 7) && c1.flag == false) {
                            CCircle = c.n;
                            crowX = c.x;
                            crowY = c.y;
                            entry = 1;
                            break;
                        }
                    }
                }
                else if (c.n == 2) {
                    for (let c1 of circleCoordinate) {
                        if ((c1.n == 9 || c1.n == 10) && c1.flag == false) {
                            CCircle = c.n;
                            crowX = c.x;
                            crowY = c.y;
                            entry = 1;
                            break;
                        }
                    }
                }
                else if (c.n == 3) {
                    for (let c1 of circleCoordinate) {
                        if ((c1.n == 8 || c1.n == 9) && c1.flag == false) {
                            CCircle = c.n;
                            crowX = c.x;
                            crowY = c.y;
                            entry = 1;
                            break;
                        }
                    }
                }
                else if (c.n == 4) {
                    for (let c1 of circleCoordinate) {
                        if ((c1.n == 6 || c1.n == 10) && c1.flag == false) {
                            CCircle = c.n;
                            crowX = c.x;
                            crowY = c.y;
                            entry = 1;
                            break;
                        }
                    }
                }
                else if (c.n == 5) {
                    for (let c1 of circleCoordinate) {
                        if ((c1.n == 8 || c1.n == 7) && c1.flag == false) {
                            CCircle = c.n;
                            crowX = c.x;
                            crowY = c.y;
                            entry = 1;
                            break;
                        }
                    }
                }
                else if (c.n == 6) {
                    for (let c1 of circleCoordinate) {
                        if ((c1.n == 1 || c1.n == 7 || c1.n == 4 || c1.n == 10) && c1.flag == false) {
                            CCircle = c.n;
                            crowX = c.x;
                            crowY = c.y;
                            entry = 1;
                            break;
                        }
                    }
                }
                else if (c.n == 7) {
                    for (let c1 of circleCoordinate) {
                        if ((c1.n == 1 || c1.n == 6 || c1.n == 5 || c1.n == 8) && c1.flag == false) {
                            CCircle = c.n;
                            crowX = c.x;
                            crowY = c.y;
                            entry = 1;
                            break;
                        }
                    }
                }
                else if (c.n == 8) {
                    for (let c1 of circleCoordinate) {
                        if ((c1.n == 3 || c1.n == 5 || c1.n == 7 || c1.n == 9) && c1.flag == false) {
                            CCircle = c.n;
                            crowX = c.x;
                            crowY = c.y;
                            entry = 1;
                            break;
                        }
                    }
                }
                else if (c.n == 9) {
                    for (let c1 of circleCoordinate) {
                        if ((c1.n == 2 || c1.n == 3 || c1.n == 8 || c1.n == 10) && c1.flag == false) {
                            CCircle = c.n;
                            crowX = c.x;
                            crowY = c.y;
                            entry = 1;
                            break;
                        }
                    }
                }
                else if (c.n == 10) {
                    for (let c1 of circleCoordinate) {
                        if ((c1.n == 2 || c1.n == 6 || c1.n == 4 || c1.n == 9) && c1.flag == false) {
                            CCircle = c.n;
                            crowX = c.x;
                            crowY = c.y;
                            entry = 1;
                            break;
                        }
                    }
                }
            }

            else if (crow >= 7 && entry == 1) {
                // console.log(crow);
                if (CCircle == 1) {
                    if ((c.n == 6 || c.n == 7) && c.flag == false) {

                        // console.log(c.n);
                        ctx.beginPath();
                        ctx.arc(crowX, crowY, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#CCFFCC';
                        ctx.stroke();
                        ctx.fillStyle = '#CCFFCC';
                        ctx.fill();
                        circleCoordinate.forEach(function (c1) {
                            if (crowX == c1.x && crowY == c1.y) {
                                c1.flag = false;
                                c1.bird = "empty";
                            }
                        })
                        ctx.beginPath();
                        ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#FF9900';
                        ctx.stroke();
                        ctx.fillStyle = '#FF9900';
                        ctx.fill();
                        c.bird = "crow";
                        c.flag = true;
                        turn = 2;
                        entry = 0;
                        document.getElementById("part1a").innerHTML = crow;
                        ans += "1st Crow moved to position " + c.n + "\n";
                    }
                }

                else if (CCircle == 2) {
                    if ((c.n == 9 || c.n == 10) && c.flag == false) {
                        // console.log(c.n);
                        ctx.beginPath();
                        ctx.arc(crowX, crowY, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#CCFFCC';
                        ctx.stroke();
                        ctx.fillStyle = '#CCFFCC';
                        ctx.fill();
                        circleCoordinate.forEach(function (c1) {
                            if (crowX == c1.x && crowY == c1.y) {
                                c1.flag = false;
                                c1.bird = "empty";
                            }
                        })
                        ctx.beginPath();
                        ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#FF9900';
                        ctx.stroke();
                        ctx.fillStyle = '#FF9900';
                        ctx.fill();
                        c.bird = "crow";
                        c.flag = true;
                        turn = 2;
                        entry = 0;
                        document.getElementById("part1a").innerHTML = crow;
                        ans += "2nd Crow moved to position " + c.n + "\n";
                    }
                }

                else if (CCircle == 3) {
                    if ((c.n == 9 || c.n == 8) && c.flag == false) {
                        // console.log(c.n);
                        ctx.beginPath();
                        ctx.arc(crowX, crowY, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#CCFFCC';
                        ctx.stroke();
                        ctx.fillStyle = '#CCFFCC';
                        ctx.fill();
                        circleCoordinate.forEach(function (c1) {
                            if (crowX == c1.x && crowY == c1.y) {
                                c1.flag = false;
                                c1.bird = "empty";
                            }
                        })
                        ctx.beginPath();
                        ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#FF9900';
                        ctx.stroke();
                        ctx.fillStyle = '#FF9900';
                        ctx.fill();
                        c.flag = true;
                        c.bird = "crow";
                        turn = 2;
                        entry = 0;
                        document.getElementById("part1a").innerHTML = crow;
                        ans += "3rd Crow moved to position " + c.n + "\n";
                        
                    }
                }

                else if (CCircle == 4) {
                    if ((c.n == 6 || c.n == 10) && c.flag == false) {
                        // console.log(c.n);
                        ctx.beginPath();
                        ctx.arc(crowX, crowY, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#CCFFCC';
                        ctx.stroke();
                        ctx.fillStyle = '#CCFFCC';
                        ctx.fill();
                        circleCoordinate.forEach(function (c1) {
                            if (crowX == c1.x && crowY == c1.y) {
                                c1.flag = false;
                                c1.bird = "empty";
                            }
                        })
                        ctx.beginPath();
                        ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#FF9900';
                        ctx.stroke();
                        ctx.fillStyle = '#FF9900';
                        ctx.fill();
                        c.flag = true;
                        c.bird = "crow";
                        turn = 2;
                        entry = 0;
                        document.getElementById("part1a").innerHTML = crow;
                        ans += "4th Crow moved to position " + c.n + "\n";
                    }
                }

                else if (CCircle == 5) {
                    if ((c.n == 7 || c.n == 8) && c.flag == false) {
                        // console.log(c.n);
                        ctx.beginPath();
                        ctx.arc(crowX, crowY, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#CCFFCC';
                        ctx.stroke();
                        ctx.fillStyle = '#CCFFCC';
                        ctx.fill();
                        circleCoordinate.forEach(function (c1) {
                            if (crowX == c1.x && crowY == c1.y) {
                                c1.flag = false;
                                c1.bird = "empty";
                            }
                        })
                        ctx.beginPath();
                        ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#FF9900';
                        ctx.stroke();
                        ctx.fillStyle = '#FF9900';
                        ctx.fill();
                        c.flag = true;
                        c.bird = "crow";
                        turn = 2;
                        entry = 0;
                        document.getElementById("part1a").innerHTML = crow;
                        ans += "5th Crow moved to position " + c.n + "\n";
                    }
                }

                else if (CCircle == 6) {
                    if ((c.n == 1 || c.n == 4 || c.n == 7 || c.n == 10) && c.flag == false) {
                        ctx.beginPath();
                        ctx.arc(crowX, crowY, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#CCFFCC';
                        ctx.stroke();
                        ctx.fillStyle = '#CCFFCC';
                        ctx.fill();
                        circleCoordinate.forEach(function (c1) {
                            if (crowX == c1.x && crowY == c1.y) {
                                c1.flag = false;
                                c1.bird = "empty";
                            }
                        })
                        ctx.beginPath();
                        ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#FF9900';
                        ctx.stroke();
                        ctx.fillStyle = '#FF9900';
                        ctx.fill();
                        c.flag = true;
                        c.bird = "crow";
                        turn = 2;
                        entry = 0;
                        document.getElementById("part1a").innerHTML = crow;
                        ans += "6th Crow moved to position " + c.n + "\n";
                    }
                }

                else if (CCircle == 7) {
                    if ((c.n == 1 || c.n == 6 || c.n == 8 || c.n == 5) && c.flag == false) {
                        ctx.beginPath();
                        ctx.arc(crowX, crowY, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#CCFFCC';
                        ctx.stroke();
                        ctx.fillStyle = '#CCFFCC';
                        ctx.fill();
                        circleCoordinate.forEach(function (c1) {
                            if (crowX == c1.x && crowY == c1.y) {
                                c1.flag = false;
                                c1.bird = "empty";
                            }
                        })
                        ctx.beginPath();
                        ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#FF9900';
                        ctx.stroke();
                        ctx.fillStyle = '#FF9900';
                        ctx.fill();
                        c.flag = true;
                        c.bird = "crow";
                        turn = 2;
                        entry = 0;
                        document.getElementById("part1a").innerHTML = crow;
                        ans += "7th Crow moved to position " + c.n + "\n";
                    }
                }

                else if (CCircle == 8) {
                    if ((c.n == 3 || c.n == 5 || c.n == 7 || c.n == 9) && c.flag == false) {
                        ctx.beginPath();
                        ctx.arc(crowX, crowY, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#CCFFCC';
                        ctx.stroke();
                        ctx.fillStyle = '#CCFFCC';
                        ctx.fill();
                        circleCoordinate.forEach(function (c1) {
                            if (crowX == c1.x && crowY == c1.y) {
                                c1.flag = false;
                                c1.bird = "empty";
                            }
                        })
                        ctx.beginPath();
                        ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#FF9900';
                        ctx.stroke();
                        ctx.fillStyle = '#FF9900';
                        ctx.fill();
                        c.flag = true;
                        c.bird = "bird";
                        turn = 2;
                        entry = 0;
                        document.getElementById("part1a").innerHTML = crow;
                        ans += "8th Crow moved to position " + c.n + "\n";
                    }
                }

                else if (CCircle == 9) {
                    if ((c.n == 2 || c.n == 3 || c.n == 8 || c.n == 10) && c.flag == false) {
                        ctx.beginPath();
                        ctx.arc(crowX, crowY, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#CCFFCC';
                        ctx.stroke();
                        ctx.fillStyle = '#CCFFCC';
                        ctx.fill();
                        circleCoordinate.forEach(function (c1) {
                            if (crowX == c1.x && crowY == c1.y) {
                                c1.flag = false;
                                c1.bird = "empty";
                            }
                        })
                        ctx.beginPath();
                        ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#FF9900';
                        ctx.stroke();
                        ctx.fillStyle = '#FF9900';
                        ctx.fill();
                        c.flag = true;
                        c.bird = "crow";
                        turn = 2;
                        entry = 0;
                        document.getElementById("part1a").innerHTML = crow;
                        ans += "9th Crow moved to position " + c.n + "\n";
                    }
                }

                else if (CCircle == 10) {
                    if ((c.n == 2 || c.n == 4 || c.n == 6 || c.n == 9) && c.flag == false) {
                        ctx.beginPath();
                        ctx.arc(crowX, crowY, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#CCFFCC';
                        ctx.stroke();
                        ctx.fillStyle = '#CCFFCC';
                        ctx.fill();
                        circleCoordinate.forEach(function (c1) {
                            if (crowX == c1.x && crowY == c1.y) {
                                c1.flag = false;
                                c1.bird = "empty";
                            }
                        })
                        ctx.beginPath();
                        ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#FF9900';
                        ctx.stroke();
                        ctx.fillStyle = '#FF9900';
                        ctx.fill();
                        c.flag = true;
                        c.bird = "crow";
                        turn = 2;
                        entry = 0;
                        document.getElementById("part1a").innerHTML = crow;
                        ans += "10th Crow moved to position " + c.n + "\n";
                    }
                }

            }
        }

        /*************************************** VULTURE TURN ***************************************************/

        else if (turn == 2 && x >= c.x - 25 && x <= c.x + 25 && y >= c.y - 25 && y <= c.y + 25 && c.flag == false) {

            if (vulture == 0) {
                ctx.beginPath();
                ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                ctx.fillStyle = '#00CC99'
                ctx.fill();
                ctx.strokeStyle = '#00CC99'
                ctx.stroke();
                vulture = vulture + 1;
                vultureX = c.x;
                vultureY = c.y;
                VCircle = c.n;
                turn = 1;
                c.flag = true;
                c.bird = "vulture";
                ans += "Vulture moved to position " + c.n + "\n";
            }

            else {
                /******************************* if vulture is in 1st circle ***********************************************/
                if (VCircle == 1) {
                    let attack = 0;
                    circleCoordinate.forEach(function(c1)
                    {
                        if(c1.n == 10 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 6 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                        else if(c1.n == 8 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 7 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                    });
                    
                    if(attack == 0){
                        //check its adajacent circle
                        if ((c.n == 6 || c.n == 7 ) && c.flag == false) {
                            ctx.beginPath();
                            ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                            ctx.strokeStyle = "#CCFFCC";
                            ctx.stroke();
                            ctx.fillStyle = "#CCFFCC";
                            ctx.fill();

                            //make previous vulture back to empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.x == vultureX && c1.y == vultureY) {
                                    c1.flag = false;
                                }
                            })
                            ctx.beginPath();
                            ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                            ctx.fillStyle = '#00CC99'
                            ctx.fill();
                            ctx.strokeStyle = '#00CC99'
                            ctx.stroke();
                            vultureX = c.x;
                            vultureY = c.y;
                            VCircle = c.n;
                            turn = 1;
                            c.flag = true;
                            c.bird = "vulture";
                            ans += "Vulture moved from position 1 to position " + c.n + "\n";
                        }
                    }
                    else if (attack == 1){
                        if (c.n == 10 && c.flag == false) {
                            //check whether there is crow on 6 or not and make it empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 6 && c1.flag == true) {

                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })

                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;
                                    turn = 1;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";
        
                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;
                                    ans += "Vulture moved from position 1 to position " + c.n + "\n";
                                }
                            });
                        }
                        else if (c.n == 8 && c.flag == false) {
                            //check whether there is crow on 7 or not and make it empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 7 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);

                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })

                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";
                                   
                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;
                                    ans += "Vulture moved from position 1 to position " + c.n + "\n";
                                }
                            });
                        }
                    }
                }

                /******************************* if vulture is in 2nd circle ***********************************************/
                else if (VCircle == 2) {
                    let attack = 0;
                    circleCoordinate.forEach(function(c1)
                    {
                        if(c1.n == 6 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 10 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                        else if(c1.n == 8 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 9 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                    });
                    //check its adajacent circle
                    if(attack == 0){
                        if ((c.n == 9 || c.n == 10 )&& c.flag == false) {
                            ctx.beginPath();
                            ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                            ctx.strokeStyle = "#CCFFCC";
                            ctx.stroke();
                            ctx.fillStyle = "#CCFFCC";
                            ctx.fill();

                            //make previous vulture back to empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.x == vultureX && c1.y == vultureY) {
                                    c1.flag = false;
                                    c1.bird = "empty";
                                }
                            })
                            ctx.beginPath();
                            ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                            ctx.fillStyle = '#00CC99'
                            ctx.fill();
                            ctx.strokeStyle = '#00CC99'
                            ctx.stroke();
                            vultureX = c.x;
                            vultureY = c.y;
                            VCircle = c.n;
                            turn = 1;
                            c.flag = true;
                            c.bird = "vulture";
                            ans += "Vulture moved from position 2 to position " + c.n + "\n";
                        }
                    }
                    else if(attack == 1){
                        if (c.n == 8 && c.flag == false) {
                            //check whether there is crow on 9 or not and make it empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 9 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);

                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })

                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;
                                    ans += "Vulture moved from position 2 to position " + c.n + "\n";
                                }
                            });
                        }
                        else if (c.n == 6 && c.flag == false) {
                            //check whether there is crow on 10 or not and make it empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 10 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);

                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })

                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;
                                    ans += "Vulture moved from position 2 to position " + c.n + "\n";
                                }
                            });
                        }
                    }
                }

                /******************************* if vulture is in 3rd circle ***********************************************/
                else if (VCircle == 3) {

                    let attack = 0;
                    circleCoordinate.forEach(function(c1)
                    {
                        if(c1.n == 10 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 9 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                        else if(c1.n == 7 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 8 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                    });
                    
                    console.log(attack);
                    if(attack == 0){
                        if ((c.n == 8 || c.n == 9) && c.flag == false) {
                            ctx.beginPath();
                            ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                            ctx.strokeStyle = "#CCFFCC";
                            ctx.stroke();
                            ctx.fillStyle = "#CCFFCC";
                            ctx.fill();

                            //make previous vulture back to empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.x == vultureX && c1.y == vultureY) {
                                    c1.flag = false;
                                    c1.bird = "empty";
                                }
                            })
                            ctx.beginPath();
                            ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                            ctx.fillStyle = '#00CC99'
                            ctx.fill();
                            ctx.strokeStyle = '#00CC99'
                            ctx.stroke();
                            vultureX = c.x;
                            vultureY = c.y;
                            VCircle = c.n;
                            turn = 1;
                            c.flag = true;
                            c.bird = "vulture";
                            ans += "Vulture moved from position 3 to position " + c.n + "\n";
                        }
                    }
                    else if(attack == 1){
                        if (c.n == 7 && c.flag == false) {
                            //check whether there is crow on 8 or not and make it empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 8 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);

                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })

                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;
                                    ans += "Vulture moved from position 3 to position " + c.n + "\n";
                                }
                            });
                        }
                        else if (c.n == 10 && c.flag == false) {
                            //check whether there is crow on 9 or not and make it empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 9 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);

                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })

                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;
                                    ans += "Vulture moved from position 3 to position " + c.n + "\n";                                   
                                }
                            });
                        }
                    }
                }

                /******************************* if vulture is in 4th circle ***********************************************/
                else if (VCircle == 4) {
                    let attack = 0;
                    circleCoordinate.forEach(function(c1)
                    {
                        if(c1.n == 7 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 6 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                        else if(c1.n == 9 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 10 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                    });
                    if(attack == 0){
                    //check its adajacent circle
                        if ((c.n == 10 || c.n == 6) && c.flag == false) {
                            ctx.beginPath();
                            ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                            ctx.strokeStyle = "#CCFFCC";
                            ctx.stroke();
                            ctx.fillStyle = "#CCFFCC";
                            ctx.fill();

                            //make previous vulture back to empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.x == vultureX && c1.y == vultureY) {
                                    c1.flag = false;
                                    c1.bird = "empty";
                                }
                            })
                            ctx.beginPath();
                            ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                            ctx.fillStyle = '#00CC99'
                            ctx.fill();
                            ctx.strokeStyle = '#00CC99'
                            ctx.stroke();
                            vultureX = c.x;
                            vultureY = c.y;
                            VCircle = c.n;
                            turn = 1;
                            c.flag = true;
                            c.bird = "vulture";

                            ans += "Vulture moved from position 4 to position " + c.n + "\n";
                        }
                    }
                    else if(attack == 1){
                        if (c.n == 7 && c.flag == false) {
                            //check whether there is crow on 6 or not and make it empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 6 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);

                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })

                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;
                                    ans += "Vulture moved from position 4 to position " + c.n + "\n";
                                }
                            });
                        }
                        else if (c.n == 9 && c.flag == false) {
                            //check whether there is crow on 10 or not and make it empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 10 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);

                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })

                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;
                                    ans += "Vulture moved from position 4 to position " + c.n + "\n";
                                }
                            });
                        }
                    }
                }

                /******************************* if vulture is in 5th circle ***********************************************/
                else if (VCircle == 5) {
                    let attack = 0;
                    circleCoordinate.forEach(function(c1)
                    {
                        if(c1.n == 6 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 7 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                        else if(c1.n == 9 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 8 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                    });
                    if(attack == 0){
                    //check its adajacent circle
                        if ((c.n == 7 || c.n == 8 ) && c.flag == false) {
                            ctx.beginPath();
                            ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                            ctx.strokeStyle = "#CCFFCC";
                            ctx.stroke();
                            ctx.fillStyle = "#CCFFCC";
                            ctx.fill();

                            //make previous vulture back to empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.x == vultureX && c1.y == vultureY) {
                                    c1.flag = false;
                                    c1.bird = "empty";
                                }
                            })
                            ctx.beginPath();
                            ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                            ctx.fillStyle = '#00CC99'
                            ctx.fill();
                            ctx.strokeStyle = '#00CC99'
                            ctx.stroke();
                            vultureX = c.x;
                            vultureY = c.y;
                            VCircle = c.n;
                            turn = 1;
                            c.flag = true;
                            c.bird = "vulture";

                            ans += "Vulture moved from position 5 to position " + c.n + "\n";
                        }
                    }
                    else if (attack == 1){
                        if (c.n == 6 && c.flag == false) {
                            //check whether there is crow on 7 or not and make it empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 7 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);

                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })

                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;

                                    ans += "Vulture moved from position 5 to position " + c.n + "\n";
                                }
                            });
                        }
                        else if (c.n == 9 && c.flag == false) {
                            //check whether there is crow on 8 or not and make it empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 8 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);

                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })

                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;
                                    ans += "Vulture moved from position 5 to position " + c.n + "\n";
                                }
                            });
                        }
                    }
                }

                /******************************* if vulture is in 6th circle ***********************************************/
                else if (VCircle == 6) {
                    let attack = 0;
                    circleCoordinate.forEach(function(c1)
                    {
                        if(c1.n == 5 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 7 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                        else if(c1.n == 2 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 10 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                    });
                    if(attack == 0){
                    //neighours are 1,4,7,10
                        if ((c.n == 1 ||c.n ==4 || c.n ==7 || c.n ==10) && c.flag == false) {
                            ctx.beginPath();
                            ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                            ctx.strokeStyle = "#CCFFCC";
                            ctx.stroke();
                            ctx.fillStyle = "#CCFFCC";
                            ctx.fill();

                            //make previous vulture back to empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.x == vultureX && c1.y == vultureY) {
                                    c1.flag = false;
                                    c1.bird = "empty";
                                }
                            })
                            ctx.beginPath();
                            ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                            ctx.fillStyle = '#00CC99'
                            ctx.fill();
                            ctx.strokeStyle = '#00CC99'
                            ctx.stroke();
                            vultureX = c.x;
                            vultureY = c.y;
                            VCircle = c.n;
                            turn = 1;
                            c.flag = true;
                            c.bird = "vulture";
                            ans += "Vulture moved from position 6 to position " + c.n + "\n";
                            
                        }
                    }
                    else if(attack == 1){
                        if (c.n == 5 && c.flag == false) {
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 7 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })
                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;
                                    ans += "Vulture moved from position 6 to position " + c.n + "\n";
                                }
                            });
                        }

                        else if (c.n == 2 && c.flag == false) {
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 10 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })
                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;
                                    ans += "Vulture moved from position 6 to position " + c.n + "\n";
                                }
                            });
                        }
                    }
                }

                /******************************* if vulture is in 7th circle ***********************************************/
                else if (VCircle == 7) {
                    let attack = 0;
                    circleCoordinate.forEach(function(c1)
                    {
                        if(c1.n == 3 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 8 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                        else if(c1.n == 4 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 6 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                    });
                    if(attack == 0){
                    //neighours are 1,5,6,8
                        if ((c.n == 1 || c.n ==5 || c.n == 6 || c.n == 8) && c.flag == false) {
                            ctx.beginPath();
                            ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                            ctx.strokeStyle = "#CCFFCC";
                            ctx.stroke();
                            ctx.fillStyle = "#CCFFCC";
                            ctx.fill();

                            //make previous vulture back to empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.x == vultureX && c1.y == vultureY) {
                                    c1.flag = false;
                                    c1.bird = "empty";
                                }
                            })
                            ctx.beginPath();
                            ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                            ctx.fillStyle = '#00CC99'
                            ctx.fill();
                            ctx.strokeStyle = '#00CC99'
                            ctx.stroke();
                            vultureX = c.x;
                            vultureY = c.y;
                            VCircle = c.n;
                            turn = 1;
                            c.flag = true;
                            c.bird = "vulture";
                            ans += "Vulture moved from position 7 to position " + c.n + "\n";
                        }
                    }
                    else if (attack == 1){
                        if (c.n == 4 && c.flag == false) {
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 6 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })
                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;
                                    ans += "Vulture moved from position 7 to position " + c.n + "\n";
                                }
                            });
                        }

                        else if (c.n == 3 && c.flag == false) {
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 8 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })
                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;
                                    ans += "Vulture moved from position 7 to position " + c.n + "\n";
                                }
                            });
                        }
                    }

                }

                /******************************* if vulture is in 8th circle ***********************************************/
                else if (VCircle == 8) {
                    let attack = 0;
                    circleCoordinate.forEach(function(c1)
                    {
                        if(c1.n == 2 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 9 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                        else if(c1.n == 1 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 7 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                    });
                    if (attack == 0){
                        //neighours are 3,5,7,9
                        if ((c.n == 3 || c.n == 5 || c.n == 7 || c.n == 9) && c.flag == false) {
                            ctx.beginPath();
                            ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                            ctx.strokeStyle = "#CCFFCC";
                            ctx.stroke();
                            ctx.fillStyle = "#CCFFCC";
                            ctx.fill();

                            //make previous vulture back to empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.x == vultureX && c1.y == vultureY) {
                                    c1.flag = false;
                                    c1.bird = "empty";
                                }
                            })
                            ctx.beginPath();
                            ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                            ctx.fillStyle = '#00CC99'
                            ctx.fill();
                            ctx.strokeStyle = '#00CC99'
                            ctx.stroke();
                            vultureX = c.x;
                            vultureY = c.y;
                            VCircle = c.n;
                            turn = 1;
                            c.flag = true;
                            c.bird = "vulture";

                            ans += "Vulture moved from position 8 to position " + c.n + "\n";
                        }
                    }
                    else if(attack==1){
                        if (c.n == 1 && c.flag == false) {
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 7 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })
                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;

                                    ans += "Vulture moved from position 8 to position " + c.n + "\n";
                                }
                            });
                        }

                        else if (c.n == 2 && c.flag == false) {
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 9 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })
                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;

                                    ans += "Vulture moved from position 8 to position " + c.n + "\n";
                                }
                            });
                        }
                    }
                }

                /******************************* if vulture is in 9th circle ***********************************************/
                else if (VCircle == 9) {
                    let attack = 0;
                    circleCoordinate.forEach(function(c1)
                    {
                        if(c1.n == 5 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 8 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                        else if(c1.n == 4 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 10 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                    });
                    if(attack == 0){
                        //neighours are 2,3,8,10
                        if ((c.n == 2 || c.n == 3 || c.n == 8 || c.n == 10) && c.flag == false) {
                            ctx.beginPath();
                            ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                            ctx.strokeStyle = "#CCFFCC";
                            ctx.stroke();
                            ctx.fillStyle = "#CCFFCC";
                            ctx.fill();

                            //make previous vulture back to empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.x == vultureX && c1.y == vultureY) {
                                    c1.flag = false;
                                    c1.bird = "empty";
                                }
                            })
                            ctx.beginPath();
                            ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                            ctx.fillStyle = '#00CC99'
                            ctx.fill();
                            ctx.strokeStyle = '#00CC99'
                            ctx.stroke();
                            vultureX = c.x;
                            vultureY = c.y;
                            VCircle = c.n;
                            turn = 1;
                            c.flag = true;
                            c.bird = "vulture";

                            ans += "Vulture moved from position 9 to position " + c.n + "\n";
                        }
                    }
                    else if(attack == 1){
                        if (c.n == 4 && c.flag == false) {
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 10 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })
                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;

                                    ans += "Vulture moved from position 9 to position " + c.n + "\n";
                                }
                            });
                        }

                        else if (c.n == 5 && c.flag == false) {
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 8 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })
                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;

                                    ans += "Vulture moved from position 9 to position " + c.n + "\n";
                                }
                            });
                        }
                    }

                }

                /******************************* if vulture is in 10th circle ***********************************************/
                else if (VCircle == 10) {
                    let attack = 0;
                    circleCoordinate.forEach(function(c1)
                    {
                        if(c1.n == 1 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 6 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                        else if(c1.n == 3 && c1.flag == false){
                            circleCoordinate.forEach(function(c2) {
                                if (c2.n == 9 && c2.bird == "crow") {
                                    attack = 1;
                                }
                            })
                        }
                    });
                    if(attack == 0){
                        //neighours are 2,4,6,9
                        if ((c.n == 2 || c.n == 4 || c.n==6 || c.n == 9) && c.flag == false) {
                            ctx.beginPath();
                            ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                            ctx.strokeStyle = "#CCFFCC";
                            ctx.stroke();
                            ctx.fillStyle = "#CCFFCC";
                            ctx.fill();

                            //make previous vulture back to empty
                            circleCoordinate.forEach(function (c1) {
                                if (c1.x == vultureX && c1.y == vultureY) {
                                    c1.flag = false;
                                    c1.bird = "empty";
                                }
                            })
                            ctx.beginPath();
                            ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                            ctx.fillStyle = '#00CC99'
                            ctx.fill();
                            ctx.strokeStyle = '#00CC99'
                            ctx.stroke();
                            vultureX = c.x;
                            vultureY = c.y;
                            VCircle = c.n;
                            turn = 1;
                            c.flag = true;
                            c.bird = "vulture";

                            ans += "Vulture moved from position 10 to position " + c.n + "\n";
                        }
                    }
                    else if(attack == 1){
                        if (c.n == 1 && c.flag == false) {
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 6 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })
                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;

                                    ans += "Vulture moved from position 10 to position " + c.n + "\n";
                                }
                            });
                        }

                        else if (c.n == 3 && c.flag == false) {
                            circleCoordinate.forEach(function (c1) {
                                if (c1.n == 9 && c1.flag == true) {
                                    turn = 1;
                                    ctx.beginPath();
                                    ctx.arc(vultureX, vultureY, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    circleCoordinate.forEach(function (c2) {
                                        if (vultureX == c2.x && vultureY == c2.y) {
                                            c2.flag = false;
                                            c2.bird = "empty";
                                        }
                                    })
                                    ctx.beginPath();
                                    ctx.arc(c.x, c.y, 25, 0, 2 * Math.PI);
                                    ctx.strokeStyle = '#00CC99';
                                    ctx.stroke();
                                    ctx.fillStyle = '#00CC99';
                                    ctx.fill();
                                    c.flag = true;
                                    c.bird = "vulture";
                                    vultureX = c.x;
                                    vultureY = c.y;
                                    VCircle = c.n;

                                    //delete crow circle
                                    ctx.beginPath();
                                    ctx.arc(c1.x, c1.y, 25, 0, 2 * Math.PI)
                                    ctx.strokeStyle = "#CCFFCC";
                                    ctx.stroke();
                                    ctx.fillStyle = "#CCFFCC";
                                    ctx.fill();
                                    c1.flag = false;
                                    c1.bird = "empty";

                                    //decrement crow count
                                    crowCount = crowCount + 1;
                                    document.getElementById("part2a").innerHTML = crowCount;

                                    ans += "Vulture moved from position 10 to position " + c.n + "\n";
                                }
                            });
                        }
                    }
                }
            }
        }

        /************************************* VULTURE WINNING  *************************************************/

        if (crowCount == 4) {
            ans += "Vulture Wins !" + "\n";
            // alert("VULTURE WINS : GAME OVER");
            document.getElementById("part3a").innerHTML = "Vulture";

            // document.location.reload();
        }

        /*************************************** CROW WINNING ****************************************************/

        for (let c1 of circleCoordinate) {
            /********************** vulture is present on corner points then we need 4 crows to trap it *****************/
            
            /********** vulture is on 1st circle **********/
            if (c1.n == 1 && c1.bird == "vulture") {
                let vWin = 0;
                for (let c2 of circleCoordinate) {
                    if (c2.n == 6 && c2.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c3 of circleCoordinate) {
                    if (c3.n == 7 && c3.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c4 of circleCoordinate) {
                    if (c4.n == 10 && c4.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c5 of circleCoordinate) {
                    if (c5.n == 8 && c5.bird == "crow")
                        vWin = vWin + 1;
                }
                
                if (vWin == 4) {
                    ans += "Crow Wins !" + "\n";
                   
                    // alert("CROWS WINS : GAME OVER");
                    // document.location.reload();
                    document.getElementById("part3a").innerHTML = "Crow";
                }
            }

            /********** vulture is on 2nd circle **********/
            else if (c1.n == 2 && c1.bird == "vulture") {
                let vWin = 0;
                for (let c2 of circleCoordinate) {
                    if (c2.n == 9 && c2.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c3 of circleCoordinate) {
                    if (c3.n == 10 && c3.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c4 of circleCoordinate) {
                    if (c4.n == 6 && c4.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c5 of circleCoordinate) {
                    if (c5.n == 8 && c5.bird == "crow")
                        vWin = vWin + 1;
                }
                
                if (vWin == 4) {
                    ans +="Crow Wins !" + "\n";
                    document.getElementById("part3a").innerHTML = "Crow";
                }
            }

            /********** vulture is on 3rd circle **********/
            else if (c1.n == 3 && c1.bird == "vulture") {
                let vWin = 0;
                for (let c2 of circleCoordinate) {
                    if (c2.n == 9 && c2.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c3 of circleCoordinate) {
                    if (c3.n == 10 && c3.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c4 of circleCoordinate) {
                    if (c4.n == 8 && c4.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c5 of circleCoordinate) {
                    if (c5.n == 7 && c5.bird == "crow")
                        vWin = vWin + 1;
                }
                
                if (vWin == 4) {
                    ans += "Crow Wins !" + "\n";
                    document.getElementById("part3a").innerHTML = "Crow";
                }
            }

            /********** vulture is on 4th circle **********/
            else if (c1.n == 4 && c1.bird == "vulture") {
                let vWin = 0;
                for (let c2 of circleCoordinate) {
                    if (c2.n == 9 && c2.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c3 of circleCoordinate) {
                    if (c3.n == 10 && c3.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c4 of circleCoordinate) {
                    if (c4.n == 6 && c4.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c5 of circleCoordinate) {
                    if (c5.n == 7 && c5.bird == "crow")
                        vWin = vWin + 1;
                }
                
                if (vWin == 4) {
                    ans += "Crow Wins !" + "\n";
                    document.getElementById("part3a").innerHTML = "Crow";
                }
            }

            /********** vulture is on 5th circle **********/
            else if (c1.n == 5 && c1.bird == "vulture") {
                let vWin = 0;
                for (let c2 of circleCoordinate) {
                    if (c2.n == 6 && c2.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c3 of circleCoordinate) {
                    if (c3.n == 7 && c3.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c4 of circleCoordinate) {
                    if (c4.n == 9 && c4.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c5 of circleCoordinate) {
                    if (c5.n == 8 && c5.bird == "crow")
                        vWin = vWin + 1;
                }
                
                if (vWin == 4) {
                    ans += "Crow Wins !" + "\n";
                    document.getElementById("part3a").innerHTML = "Crow";
                }
            }
            /********************** vulture is present on inner points then we need 6 crows to trap it *****************/
            
            /********** vulture is on 6th circle **********/
            else if (c1.n == 6 && c1.bird == "vulture") {
                let vWin = 0;
                for (let c2 of circleCoordinate) {
                    if (c2.n == 1 && c2.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c3 of circleCoordinate) {
                    if (c3.n == 4 && c3.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c4 of circleCoordinate) {
                    if (c4.n == 7 && c4.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c5 of circleCoordinate) {
                    if (c5.n == 10 && c5.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c6 of circleCoordinate) {
                    if (c6.n == 5 && c6.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c7 of circleCoordinate) {
                    if (c7.n == 2 && c7.bird == "crow")
                        vWin = vWin + 1;
                }
                if (vWin == 6) {
                    ans += "Crow Wins !" + "\n";
                    document.getElementById("part3a").innerHTML = "Crow";
                }
            }

            /********** vulture is on 7th circle **********/
            else if (c1.n == 7 && c1.bird == "vulture") {
                let vWin = 0;
                for (let c2 of circleCoordinate) {
                    if (c2.n == 1 && c2.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c3 of circleCoordinate) {
                    if (c3.n == 6 && c3.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c4 of circleCoordinate) {
                    if (c4.n == 8 && c4.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c5 of circleCoordinate) {
                    if (c5.n == 5 && c5.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c6 of circleCoordinate) {
                    if (c6.n == 4 && c6.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c7 of circleCoordinate) {
                    if (c7.n == 3 && c7.bird == "crow")
                        vWin = vWin + 1;
                }
                if (vWin == 6) {
                    ans += "Crow Wins !" + "\n";
                    document.getElementById("part3a").innerHTML = "Crow";
                }
            }

            /********** vulture is on 8th circle **********/
            else if (c1.n == 8 && c1.bird == "vulture") {
                let vWin = 0;
                for (let c2 of circleCoordinate) {
                    if (c2.n == 7 && c2.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c3 of circleCoordinate) {
                    if (c3.n == 3 && c3.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c4 of circleCoordinate) {
                    if (c4.n == 9 && c4.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c5 of circleCoordinate) {
                    if (c5.n == 5 && c5.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c6 of circleCoordinate) {
                    if (c6.n == 1 && c6.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c7 of circleCoordinate) {
                    if (c7.n == 2 && c7.bird == "crow")
                        vWin = vWin + 1;
                }
                if (vWin == 6) {
                    ans += "Crow Wins !" + "\n";
                    document.getElementById("part3a").innerHTML = "Crow";
                }
            }

            /********** vulture is on 9th circle **********/
            else if (c1.n == 9 && c1.bird == "vulture") {
                let vWin = 0;
                for (let c2 of circleCoordinate) {
                    if (c2.n == 2 && c2.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c3 of circleCoordinate) {
                    if (c3.n == 3 && c3.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c4 of circleCoordinate) {
                    if (c4.n == 8 && c4.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c5 of circleCoordinate) {
                    if (c5.n == 10 && c5.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c6 of circleCoordinate) {
                    if (c6.n == 5 && c6.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c7 of circleCoordinate) {
                    if (c7.n == 4 && c7.bird == "crow")
                        vWin = vWin + 1;
                }
                if (vWin == 6) {
                    ans += "Crow Wins !" + "\n";
                    document.getElementById("part3a").innerHTML = "Crow";
                }
            }

            /********** vulture is on 10th circle **********/
            else if (c1.n == 10 && c1.bird == "vulture") {
                let vWin = 0;
                for (let c2 of circleCoordinate) {
                    if (c2.n == 2 && c2.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c3 of circleCoordinate) {
                    if (c3.n == 4 && c3.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c4 of circleCoordinate) {
                    if (c4.n == 6 && c4.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c5 of circleCoordinate) {
                    if (c5.n == 9 && c5.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c6 of circleCoordinate) {
                    if (c6.n == 1 && c6.bird == "crow")
                        vWin = vWin + 1;
                }
                for (let c7 of circleCoordinate) {
                    if (c7.n == 3 && c7.bird == "crow")
                        vWin = vWin + 1;
                }
                if (vWin == 6) {
                    ans += "Crow Wins !" + "\n";
                    document.getElementById("part3a").innerHTML = "Crow";
                }
            }
        }

        
    });
   
}
// document.location.reload();

let can1 = document.querySelector("canvas");

can1.addEventListener("mousedown", function (a) {
    getMousePosition(can1, a);
    ans += " | " + "Type: mousedown | " + "X: " + a.x + " | " + "Y: " + a.y + "\n";

});

can1.addEventListener("mouseup", function (a) {
    getMousePosition(can1, a);
    ans += " | " + "Type: mouseup | " + "X: " + a.x + " | " + "Y: " + a.y + "\n";

});

can1.addEventListener("click", function (a) {
    getMousePosition(can1, a);
    ans += " | " + "Type: click | " + "X: " + a.x + " | " + "Y: " + a.y + "\n";

});

window.onload = function() {
    document.getElementById('link').onclick = function(code) 
    {
        this.href = 'data:text/plain;charset=utf-11,' + encodeURIComponent(ans);
    };
};

