const applaycupon = () => {
    alert("After end of Great Indian Festival this offer is apply");
};

const greatindiafest = () => {
    alert("This offer is already included");
};

let redmi13 = document.querySelector("#redmi13");
let mobileimgdiv = document.querySelector(".catergryofmob1"),
    mobiledetaildiv = document.querySelector(".mobiledetail"),
    mobile2 = document.querySelector(".mobile2"),
    mobile3 = document.querySelector(".mobile3"),
    mobile4 = document.querySelector(".mobile4"),
    mobile5 = document.querySelector(".mobile5"),
    mobile6 = document.querySelector(".mobile6"),
    mobile7 = document.querySelector(".mobile7"),
    mobile8 = document.querySelector(".mobile8"),
    mobile9 = document.querySelector(".mobile9"),
    mobile10 = document.querySelector(".mobile10"),
    mobile11 = document.querySelector(".mobile11"),
    mobile12 = document.querySelector(".mobile12"),
    mobile13 = document.querySelector(".mobile13"),
    mobile14 = document.querySelector(".mobile14"),
    mobile15 = document.querySelector(".mobile15"),
    mobile16 = document.querySelector(".mobile16"),
    mobile17 = document.querySelector(".mobile17"),
    brand = document.querySelector(".brand"),
    samM55 = document.querySelector("#samM55"),
    on4d = document.querySelector("#on4d"),
    phone4 = document.querySelector("#phone4"),
    phone5 = document.querySelector("#phone5"),
    phone6 = document.querySelector("#phone6"),
    phone7 = document.querySelector("#phone7"),
    phone8 = document.querySelector("#phone8"),
    phone9 = document.querySelector("#phone9"),
    phone10 = document.querySelector("#phone10"),
    phone11 = document.querySelector("#phone11"),
    phone12 = document.querySelector("#phone12"),
    phone13 = document.querySelector("#phone13"),
    phone14 = document.querySelector("#phone14"),
    phone15 = document.querySelector("#phone15"),
    phone16 = document.querySelector("#phone16");

redmi13.addEventListener("click", () => {
    mobileimgdiv.hidden = true;
    mobiledetaildiv.hidden = false;
});

samM55.addEventListener("click", () => {
    mobileimgdiv.hidden = true;
    mobile2.hidden = false;
});

on4d.addEventListener("click", () => {
    mobileimgdiv.hidden = true;
    mobile3.hidden = false;
})

phone4.addEventListener("click", () => {
    mobileimgdiv.hidden = true;
    mobile4.hidden = false;
})

phone5.addEventListener("click", () => {
    mobileimgdiv.hidden = true;
    mobile5.hidden = false;
})

phone6.addEventListener("click", () => {
    mobileimgdiv.hidden = true;
    mobile6.hidden = false;
})

phone7.addEventListener("click", () => {
    mobileimgdiv.hidden = true;
    mobile7.hidden = false;
})

phone8.addEventListener("click", () => {
    mobileimgdiv.hidden = true;
    mobile8.hidden = false;
})

phone9.addEventListener("click", () => {
    mobileimgdiv.hidden = true;
    mobile9.hidden = false;
})

phone10.addEventListener("click", () => {
    mobileimgdiv.hidden = true;
    mobile10.hidden = false;
})

phone11.addEventListener("click", () => {
    mobileimgdiv.hidden = true;
    mobile11.hidden = false;
})

phone12.addEventListener("click", () => {
    mobileimgdiv.hidden = true;
    mobile12.hidden = false;
})

phone13.addEventListener("click", () => {
    mobileimgdiv.hidden = true;
    mobile13.hidden = false;
})

phone14.addEventListener("click", () => {
    mobileimgdiv.hidden = true;
    mobile14.hidden = false;
})

phone15.addEventListener("click", () => {
    mobileimgdiv.hidden = true;
    mobile15.hidden = false;
})

phone16.addEventListener("click", () => {
    mobileimgdiv.hidden = true;
    mobile16.hidden = false;
});

let mobcart1 = document.querySelector(".mobiledetail1");

const addcartmob1 = () => {
    alert("Your Item is Succesfully add to cart");
}

const buymob1 = () => {
    mobiledetaildiv.hidden = true;
    mobile17.hidden = false;
    brand.hidden = true;
}

const buymob2 = () => {
    mobile2.hidden = true;
    mobile17.hidden = false;
    brand.hidden = true;
}

const buymob3 = () => {
    mobile3.hidden = true;
    mobile17.hidden = false;
    brand.hidden = true;
}

const buymob4 = () => {
    mobile4.hidden = true;
    mobile17.hidden = false;
    brand.hidden = true;
}

const buymob5 = () => {
    mobile5.hidden = true;
    mobile17.hidden = false;
    brand.hidden = true;
}

const buymob6 = () => {
    mobile6.hidden = true;
    mobile17.hidden = false;
    brand.hidden = true;
}

const buymob7 = () => {
    mobile7.hidden = true;
    mobile17.hidden = false;
    brand.hidden = true;
}

const buymob8 = () => {
    mobile8.hidden = true;
    mobile17.hidden = false;
    brand.hidden = true;
}

const buymob9 = () => {
    mobile9.hidden = true;
    mobile17.hidden = false;
    brand.hidden = true;
}

const buymob10 = () => {
    mobile10.hidden = true;
    mobile17.hidden = false;
    brand.hidden = true;
}

const buymob11 = () => {
    mobile11.hidden = true;
    mobile17.hidden = false;
    brand.hidden = true;
}

const buymob12 = () => {
    mobile12.hidden = true;
    mobile17.hidden = false;
    brand.hidden = true;
}

const buymob13 = () => {
    mobile13.hidden = true;
    mobile17.hidden = false;
    brand.hidden = true;
}

const buymob14 = () => {
    mobile14.hidden = true;
    mobile17.hidden = false;
    brand.hidden = true;
}

const buymob15 = () => {
    mobile15.hidden = true;
    mobile17.hidden = false;
    brand.hidden = true;
}

const buymob16 = () => {
    mobile16.hidden = true;
    mobile17.hidden = false;
    brand.hidden = true;
}

const placesucessfuly = () => {
    alert("Order Place Successfully");
    window.location.replace("mobile.html");
}

let box19 = document.querySelector(".box19"),
    container = document.querySelector(".container"),
    container18t = document.querySelector("#container18t"),
    container18t2 = document.querySelector("#container18t2")
check1 = document.querySelector("#check1"),
    check2 = document.querySelector("#check2"),
    placeorder = document.querySelector(".placeorder"),
    check3 = document.querySelector("#check3");

container.addEventListener("click", () => {
    box19.hidden = false;
    check2.checked = false;
    check3.checked = false;
    placeorder.hidden = false;
})

container18t.addEventListener("click", () => {
    box19.hidden = true;
    check1.checked = false;
    check3.checked = false;
    placeorder.hidden = false;
})

container18t2.addEventListener("click", () => {
    box19.hidden = true;
    check1.checked = false;
    check2.checked = false;
    placeorder.hidden = false;
})

placeorder.addEventListener("click", () => {
    // alert();
})

let add4 = document.querySelector(".add4"),
    addadresh = document.querySelector(".addadresh"),
    changebut = document.querySelector(".changebut"),
    orderaddresh = document.querySelector(".orderaddresh");

add4.addEventListener("click", () => {
    addadresh.hidden = false
    changebut.hidden = false;
})

changebut.addEventListener("click", () => {
    let valoraddresh = addadresh.value;
    orderaddresh.innerText = valoraddresh;
});

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
    }else if (tag == 'kitchen' || tag == 'Kitchen product' || tag == 'bottel' || tag == 'tawa'){
        window.location.href = 'homeandkitchen.html';
    }
    else {
        alert("Plese enter Valid tag !")
    }
});

