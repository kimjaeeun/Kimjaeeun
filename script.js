// 페이지가 로드될 때 "About Me" 섹션을 표시합니다.
document.getElementById("about").style.display = "block";
document.getElementById("about-button").classList.add("selected");

// 버튼 클릭 이벤트를 추가합니다.
document.getElementById("about-button").addEventListener("click", function () {
    showSection("about");
    updateSelectedButton("about-button");
});

document.getElementById("portfolio-button").addEventListener("click", function () {
    showSection("portfolio");
    updateSelectedButton("portfolio-button");
});

document.getElementById("contact-button").addEventListener("click", function () {
    showSection("contact");
    updateSelectedButton("contact-button");
});

// 섹션을 표시하는 함수
function showSection(sectionId) {
    // 모든 섹션을 숨깁니다.
    var sections = document.getElementsByClassName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    // 지정한 섹션을 표시합니다.
    document.getElementById(sectionId).style.display = "block";
}

// 선택된 버튼을 강조하는 함수
function updateSelectedButton(buttonId) {
    // 모든 버튼의 선택 상태를 초기화합니다.
    var buttons = document.getElementsByTagName("a");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selected");
    }
    // 선택된 버튼을 강조합니다.
    document.getElementById(buttonId).classList.add("selected");
}
