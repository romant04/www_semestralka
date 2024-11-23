const tabSelectors = document.querySelectorAll(".tab-selector button");
const tabs = document.getElementsByClassName("tab");

for (let tabSelector of tabSelectors) {
    tabSelector.addEventListener("click", (e) => {
        for (let tabSelector of tabSelectors) {
            tabSelector.classList.remove("selected");
        }

        e.target.classList.add("selected");

        for (let tab of tabs) {
            tab.classList.remove("visible");
        }
        const tab = document.getElementById(`tab-${e.target.id}`);
        tab.classList.add("visible");
    });
}
