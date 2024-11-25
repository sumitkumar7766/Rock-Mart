const boxes = document.querySelectorAll(".box1")
var counter1 = 0;

boxes.forEach(
    (box1, index) => {
        box1.style.left = `${index * 16}%`
    }
)

const goPrev = () => {

    if (counter1 == 0) {
        stop;
    } else {
        counter1--
        Slidebox()
    }

}


const goNext = () => {
    if (counter1 == 2) {
        stop;
    } else {
        counter1++
        Slidebox()
    }
}

const Slidebox = () => {
    boxes.forEach(
        (box1) => {
            box1.style.transform = `translateX(-${counter1 * 500}%)`
        }
    )
}

const boxes1 = document.querySelectorAll(".box2")
var counter2 = 0;

boxes1.forEach(
    (box2, index) => {
        box2.style.left = `${index * 22}%`
    }
)

const goPrev1 = () => {

    if (counter2 == 0) {
        stop;
    } else {
        counter2--
        Slidebox1()
    }

}

const goNext1 = () => {
    if (counter2 == 3) {
        stop;
    } else {
        counter2++
        Slidebox1()
    }
};


const Slidebox1 = () => {
    boxes1.forEach(
        (box2) => {
            box2.style.transform = `translateX(-${counter2 * 400}%)`
        }
    )
};

const sliddeal = document.querySelectorAll(".box3");
var counter3 = 0;

sliddeal.forEach(
    (box3, index) => {
        box3.style.left = `${index * 18}%`
    }
)

const leftdeal = () => {
    if (counter3 == 0) {
        stop;
    } else {
        counter3--;
        slidbox3();
    }
};

const rightdeal = () => {
    if (counter3 == 3) {
        stop;
    } else {
        counter3++;
        slidbox3();

    }
};

const slidbox3 = () => {
    sliddeal.forEach(
        (box3) => {
            box3.style.transform = `translateX(-${counter3 * 400}%)`
        }
    )
};

const boxe4slide = document.querySelectorAll(".box4");
var counter4 = 0;

boxe4slide.forEach(
    (box4, index) => {
        box4.style.left = `${index * 14}%`
    }
)

const box4left = () => {
    if (counter4 == 0) {
        stop;
        box4left.disable = true;
    } else {
        counter4--;
        slidebox4();
    }
};

const box4right = () => {
    if (counter4 == 1) {
        stop;
    } else {
        counter4++;
        slidebox4();
    }
};

const slidebox4 = () => {
    boxe4slide.forEach(
        (box4) => {
            box4.style.transform = `translateX(-${counter4 * 200}%)`
        }
    )
};

var x, i, j, l, ll, selElmnt, a, b, c;

x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;

    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);

    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {

        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {

            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {

        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
};

function closeAllSelect(elmnt) {

    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
};

let searchtag = document.querySelector(".searchproduct"),
    searchBut = document.querySelector(".magnifing");

searchBut.addEventListener("click", () => {
    let tag = searchtag.value;
    if (tag == 'mobile' || tag == 'MOBILE' || tag == 'molbile phone' || tag == 'mobile Phone' || tag == 'realme mobile' || tag == 'samsang mobile' || tag == 'samsang galaxy' || tag == 'motorola' || tag == 'redmi mobile' || tag == 'samsang' || tag == 'realme') {
        window.location.href = 'mobile.html';
    }
    else if (tag == 'mac' || tag == 'macbook' || tag == 'mac m3' || tag == 'mac m1' || tag == 'mac m2' || tag == 'mac m4' || tag == 'mac 2024' || tag == 'apple 2024' || tag == 'MAC BOOK' || tag == 'MAC' || tag == 'MACBOOK' || tag == 'MAC') {
        window.location.href = 'macbook.html';
    }
    else if (tag == 'neck band' || tag == 'traully' || tag == 'trolley' || tag == 'troley' || tag == 'agni 3' || tag == 'lava' || tag == 'tv' || tag == 'earbud' || tag == 'laptop' || tag == 'bed' || tag == 'watch' || tag == 'ro' || tag == 'Blockbuster' || tag == 'blockbuster deal') {
        window.location.href = 'blockbusterdeal.html';
    }
    else if (tag == 'scotey' || tag == 'scoter' || tag == 'corck' || tag == 'morfo' || tag == 'cycle' || tag == 'electronic cycle' || tag == 'vacume clenar' || tag == 'cleaner' || tag == 'heater' || tag == 'induction' || tag == 'mixi' || tag == 'mixture' || tag == 'l1' || tag == '50% off' || tag == '50%') {
        window.location.href = 'minimemdeal.html';
    } else if (tag == 'kitchen' || tag == 'Kitchen product' || tag == 'bottel' || tag == 'tawa') {
        window.location.href = 'homeandkitchen.html';
    }
    else {
        alert("Plese enter Valid tag !")
    }
})

let mobileopen = document.querySelector("#mobileopen"),
    macopen = document.querySelector("#macopen");

mobileopen.addEventListener("click", () => {
    window.open("mobile.html");
})

macopen.addEventListener("click", () => {
    window.open("macbook.html");
});

let homepurifier11 = document.querySelector("#homepurifier11");

homepurifier11.addEventListener("click", () => {
    window.location.href = 'homeandkitchen.html';
});

let scoter11 = document.querySelector("#scoter11");

scoter11.addEventListener("click", () => {
    window.location.href = 'minimemdeal.html';
});

let mobilego11 = document.querySelector("#mobilego11");

mobilego11.addEventListener("click", () => {
    window.location.href = 'mobile.html';
});

let blockbusterdeal112 = document.querySelector("#blockbusterdeal112");

blockbusterdeal112.addEventListener("click", () => {
    window.location.href = 'blockbusterdeal.html';
});

let blockbusterdeal113 = document.querySelector("#blockbusterdeal113");

blockbusterdeal113.addEventListener("click", () => {
    window.location.href = 'blockbusterdeal.html';
});

let blockbusterdeal114 = document.querySelector("#blockbusterdeal114");

blockbusterdeal114.addEventListener("click", () => {
    window.location.href = 'blockbusterdeal.html';
});

let blockbusterdeal115 = document.querySelector("#blockbusterdeal115");

blockbusterdeal115.addEventListener("click", () => {
    window.location.href = 'blockbusterdeal.html';
});

let blockbusterdeal116 = document.querySelector("#blockbusterdeal116");

blockbusterdeal116.addEventListener("click", () => {
    window.location.href = 'blockbusterdeal.html';
});

let blockbusterdeal117 = document.querySelector("#blockbusterdeal117");

blockbusterdeal117.addEventListener("click", () => {
    window.location.href = 'blockbusterdeal.html';
});

let blockbusterdeal118 = document.querySelector("#blockbusterdeal118");

blockbusterdeal118.addEventListener("click", () => {
    window.location.href = 'blockbusterdeal.html';
});

let blockbusterdeal119 = document.querySelector("#blockbusterdeal119");

blockbusterdeal119.addEventListener("click", () => {
    window.location.href = 'blockbusterdeal.html';
});

let blockbusterdeal120 = document.querySelector("#blockbusterdeal120");

blockbusterdeal120.addEventListener("click", () => {
    window.location.href = 'blockbusterdeal.html';
});

let blockbusterdeal121 = document.querySelector("#blockbusterdeal121");

blockbusterdeal121.addEventListener("click", () => {
    window.location.href = 'blockbusterdeal.html';
});

let blockbusterdeal122 = document.querySelector("#blockbusterdeal122");

blockbusterdeal122.addEventListener("click", () => {
    window.location.href = 'blockbusterdeal.html';
});

let blockbusterdeal123 = document.querySelector("#blockbusterdeal123");

blockbusterdeal123.addEventListener("click", () => {
    window.location.href = 'blockbusterdeal.html';
});

let blockbusterdeal124 = document.querySelector("#blockbusterdeal124");

blockbusterdeal124.addEventListener("click", () => {
    window.location.href = 'blockbusterdeal.html';
});

let blockbusterdeal125 = document.querySelector("#blockbusterdeal125");

blockbusterdeal125.addEventListener("click", () => {
    window.location.href = 'blockbusterdeal.html';
});

let blockbusterdeal126 = document.querySelector("#blockbusterdeal126");

blockbusterdeal126.addEventListener("click", () => {
    window.location.href = 'blockbusterdeal.html';
});

let kitchen11 = document.querySelector("#kitchen11");

kitchen11.addEventListener("click", () => {
    window.location.href = 'homeandkitchen.html';
});

let mobileclick11 = document.querySelector("#mobileclick11");

mobileclick11.addEventListener("click", () => {
    window.location.href = 'mobile.html';
});


let tokonwitt1 = document.querySelector("#tokonwitt1"),
    tokonwitt2 = document.querySelector("#tokonwitt2"),
    tokonwitt3 = document.querySelector("#tokonwitt3"),
    tokonwitt4 = document.querySelector("#tokonwitt4");


tokonwitt1.addEventListener("click", () => {
    alert("This is in traiyal mode It will coming soon, Plese cooperate with us !");
})

tokonwitt2.addEventListener("click", () => {
    alert("This is in traiyal mode It will coming soon, Plese cooperate with us !");
})

tokonwitt3.addEventListener("click", () => {
    alert("This is in traiyal mode It will coming soon, Plese cooperate with us !");
})

tokonwitt4.addEventListener("click", () => {
    alert("This is in traiyal mode It will coming soon, Plese cooperate with us !");
})