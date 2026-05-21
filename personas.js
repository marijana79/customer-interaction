const personaTabs = Array.from(document.querySelectorAll(".personas-tab"));
const personaPanels = Array.from(document.querySelectorAll(".personas-tab-panel"));
const personaToggles = Array.from(document.querySelectorAll(".persona-toggle"));
const expandPersonasButton = document.querySelector("#expand-personas");
const collapsePersonasButton = document.querySelector("#collapse-personas");

const setPersonaExpanded = (button, shouldExpand) => {
  const panel = document.getElementById(button.getAttribute("aria-controls"));
  const label = button.querySelector(".persona-toggle__text");

  button.setAttribute("aria-expanded", String(shouldExpand));
  label.textContent = shouldExpand ? "Collapse" : "Expand";
  panel.style.maxHeight = shouldExpand ? `${panel.scrollHeight}px` : "0px";
};

const updateOpenPersonaPanelHeights = () => {
  personaToggles.forEach((button) => {
    if (button.getAttribute("aria-expanded") === "true") {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  });
};

personaTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedPanelId = tab.getAttribute("aria-controls");

    personaTabs.forEach((currentTab) => {
      currentTab.setAttribute("aria-selected", String(currentTab === tab));
    });

    personaPanels.forEach((panel) => {
      panel.hidden = panel.id !== selectedPanelId;
    });

    updateOpenPersonaPanelHeights();
  });
});

personaToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    setPersonaExpanded(button, !isExpanded);
  });
});

expandPersonasButton.addEventListener("click", () => {
  personaToggles.forEach((button) => setPersonaExpanded(button, true));
});

collapsePersonasButton.addEventListener("click", () => {
  personaToggles.forEach((button) => setPersonaExpanded(button, false));
});

window.addEventListener("resize", updateOpenPersonaPanelHeights);
