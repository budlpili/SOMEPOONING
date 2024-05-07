const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});





// text editor

let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

//List of fontlist
let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive",
];

//Initial Settings
const initializer = () => {
    //function calls for highlighting buttons
    //No highlights for link, unlink,lists, undo,redo since they are one time operations
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    //create options for font names
    fontList.map((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        if(fontName) {
            fontName.appendChild(option);
        }
        
    });

    //fontSize allows only till 7
    for (let i = 1; i <= 7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        if(fontSizeRef) {
            fontSizeRef.appendChild(option);
        }
        
    }

    //default size
    if(fontSizeRef)  {
        fontSizeRef.value = 3;
    }
    
};

//main logic
const modifyText = (command, defaultUi, value) => {
    //execCommand executes command on selected text
    document.execCommand(command, defaultUi, value);
};

//For basic operations which don't need value parameter
optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null);
    });
});

//options that require value parameter (e.g colors, fonts)
advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
    });
});

//link
if(linkButton) {
    linkButton.addEventListener("click", () => {
        let userLink = prompt("Enter a URL");
        //if link has http then pass directly else add https
        if (/http/i.test(userLink)) {
            modifyText(linkButton.id, false, userLink);
        } else {
            userLink = "http://" + userLink;
            modifyText(linkButton.id, false, userLink);
        }
    });
}


//Highlight clicked button
const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            //needsRemoval = true means only one button should be highlight and other would be normal
            if (needsRemoval) {
                let alreadyActive = false;

                //If currently clicked button is already active
                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }

                //Remove highlight from other buttons
                highlighterRemover(className);
                if (!alreadyActive) {
                    //highlight clicked button
                    button.classList.add("active");
                }
            } else {
                //if other buttons can be highlighted
                button.classList.toggle("active");
            }
        });
    });
};

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active");
    });
};

window.onload = initializer();





// window.onload = () => {
    // document.querySelector('.dropbtn_click').onclick = () => {
    //     dropdown();
    // }
    document.getElementsByClassName('dataclass').onclick = () => {
        showMenu(value);
    };
    
    dropdown = () => {
        var v = document.querySelector('.dropdown-content');
        var dropbtns = document.querySelectorAll('.dropbtn');
        dropbtns.forEach(function(dropbtn) {
            dropbtn.addEventListener('click', function() {
                console.log("드랍다운 클릭")
            });
        })
        v.classList.toggle('show');
        dropbtn.style.borderColor = 'rgb(94, 94, 94)';
    }

    showMenu = (value) => {
        var dropbtn_icon = document.querySelector('.dropbtn_icon');
        var dropbtn_content = document.querySelector('.dropbtn_content');
        var dropbtn_click = document.querySelector('.dropbtn_click');
        var dropbtn = document.querySelector('.dropbtn');

        dropbtn_icon.innerText = '';
        dropbtn_content.innerText = value;
        // dropbtn_content.style.color = '#252525';
        // dropbtn.style.borderColor = '#3992a8';
    }
// }
window.onclick = (e) => {
    if (!e.target.matches('.dropbtn_click')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");

        var dropbtn_icon = document.querySelector('.dropbtn_icon');
        var dropbtn_content = document.querySelector('.dropbtn_content');
        var dropbtn_click = document.querySelector('.dropbtn_click');
        var dropbtn = document.querySelector('.dropbtn');

        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}




// drop down menu1 - 국적
const optionMenu = document.querySelector("#select-01"),
    selectBtn = optionMenu.querySelector("#select-btn-01"),
    options = optionMenu.querySelectorAll("#option-01"),
    sBtn_text = optionMenu.querySelector("#sBtn-text-01");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector("#option-text-01").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});

// drop down menu2 - 지역
const optionMenu02 = document.querySelector("#select-02"),
    selectBtn02 = optionMenu02.querySelector("#select-btn-02"),
    options02 = optionMenu02.querySelectorAll("#option-02"),
    sBtn_text02 = optionMenu02.querySelector("#sBtn-text-02");

selectBtn02.addEventListener("click", () => optionMenu02.classList.toggle("active"));

options02.forEach(option02 => {
    option02.addEventListener("click", () => {
        let selectedOption02 = option02.querySelector("#option-text-02").innerText;
        sBtn_text02.innerText = selectedOption02;

        optionMenu02.classList.remove("active");
    });
});

// drop down menu3 - 학력
const optionMenu03 = document.querySelector("#select-03"),
    selectBtn03 = optionMenu03.querySelector("#select-btn-03"),
    options03 = optionMenu03.querySelectorAll("#option-03"),
    sBtn_text03 = optionMenu03.querySelector("#sBtn-text-03");

selectBtn03.addEventListener("click", () => optionMenu03.classList.toggle("active"));

options03.forEach(option03 => {
    option03.addEventListener("click", () => {
        let selectedOption03 = option03.querySelector("#option-text-03").innerText;
        sBtn_text03.innerText = selectedOption03;

        optionMenu03.classList.remove("active");
    });
});

// drop down menu3-1 - 명문대인증
const optionMenu03_1 = document.querySelector("#select-03-1"),
    selectBtn03_1 = optionMenu03_1.querySelector("#select-btn-03-1"),
    options03_1 = optionMenu03_1.querySelectorAll("#option-03-1"),
    sBtn_text03_1 = optionMenu03_1.querySelector("#sBtn-text-03-1");

selectBtn03_1.addEventListener("click", () => optionMenu03_1.classList.toggle("active"));

options03_1.forEach(option03_1 => {
    option03_1.addEventListener("click", () => {
        let selectedOption03_1 = option03_1.querySelector("#option-text-03-1").innerText;
        sBtn_text03_1.innerText = selectedOption03_1;

        optionMenu03_1.classList.remove("active");
    });
});

// drop down menu4 - 직업
const optionMenu04 = document.querySelector("#select-04"),
    selectBtn04 = optionMenu04.querySelector("#select-btn-04"),
    options04 = optionMenu04.querySelectorAll("#option-04"),
    sBtn_text04 = optionMenu04.querySelector("#sBtn-text-04");

selectBtn04.addEventListener("click", () => optionMenu04.classList.toggle("active"));

options04.forEach(option04 => {
    option04.addEventListener("click", () => {
        let selectedOption04 = option04.querySelector("#option-text-04").innerText;
        sBtn_text04.innerText = selectedOption04;

        optionMenu04.classList.remove("active");
    });
});

// drop down menu5 - 전문직인증
const optionMenu05 = document.querySelector("#select-05"),
    selectBtn05 = optionMenu05.querySelector("#select-btn-05"),
    options05 = optionMenu05.querySelectorAll("#option-05"),
    sBtn_text05 = optionMenu05.querySelector("#sBtn-text-05");

selectBtn05.addEventListener("click", () => optionMenu05.classList.toggle("active"));

options05.forEach(option05 => {
    option05.addEventListener("click", () => {
        let selectedOption05 = option05.querySelector("#option-text-05").innerText;
        sBtn_text05.innerText = selectedOption05;

        optionMenu05.classList.remove("active");
    });
});

// drop down menu6 - 대기업인증
const optionMenu06 = document.querySelector("#select-06"),
    selectBtn06 = optionMenu06.querySelector("#select-btn-06"),
    options06 = optionMenu06.querySelectorAll("#option-06"),
    sBtn_text06 = optionMenu06.querySelector("#sBtn-text-06");

selectBtn06.addEventListener("click", () => optionMenu06.classList.toggle("active"));

options06.forEach(option06 => {
    option06.addEventListener("click", () => {
        let selectedOption06 = option06.querySelector("#option-text-06").innerText;
        sBtn_text06.innerText = selectedOption06;

        optionMenu06.classList.remove("active");
    });
});

// drop down menu7 - 사업가인증
const optionMenu07 = document.querySelector("#select-07"),
    selectBtn07 = optionMenu07.querySelector("#select-btn-07"),
    options07 = optionMenu07.querySelectorAll("#option-07"),
    sBtn_text07 = optionMenu07.querySelector("#sBtn-text-07");

selectBtn07.addEventListener("click", () => optionMenu07.classList.toggle("active"));

options07.forEach(option07 => {
    option07.addEventListener("click", () => {
        let selectedOption07 = option07.querySelector("#option-text-07").innerText;
        sBtn_text07.innerText = selectedOption07;

        optionMenu07.classList.remove("active");
    });
});

// drop down menu8 - 고소득인증
const optionMenu08 = document.querySelector("#select-08"),
    selectBtn08 = optionMenu08.querySelector("#select-btn-08"),
    options08 = optionMenu08.querySelectorAll("#option-08"),
    sBtn_text08 = optionMenu08.querySelector("#sBtn-text-08");

selectBtn08.addEventListener("click", () => optionMenu08.classList.toggle("active"));

options08.forEach(option08 => {
    option08.addEventListener("click", () => {
        let selectedOption08 = option08.querySelector("#option-text-08").innerText;
        sBtn_text08.innerText = selectedOption08;

        optionMenu08.classList.remove("active");
    });
});
// drop down menu9 - 고소득인증
const optionMenu09 = document.querySelector("#select-09"),
    selectBtn09 = optionMenu09.querySelector("#select-btn-09"),
    options09 = optionMenu09.querySelectorAll("#option-09"),
    sBtn_text09 = optionMenu09.querySelector("#sBtn-text-09");

selectBtn09.addEventListener("click", () => optionMenu09.classList.toggle("active"));

options09.forEach(option09 => {
    option09.addEventListener("click", () => {
        let selectedOption09 = option09.querySelector("#option-text-09").innerText;
        sBtn_text09.innerText = selectedOption09;

        optionMenu09.classList.remove("active");
    });
});







// 이미지 팝업 모달


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}