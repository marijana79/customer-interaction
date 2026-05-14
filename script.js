const pageViews = Array.from(document.querySelectorAll("[data-view]"));
const viewLinks = Array.from(document.querySelectorAll("[data-view-link]"));

const interviewCards = Array.from(document.querySelectorAll(".interview-card"));
const interviewToggles = Array.from(document.querySelectorAll(".interview-card .accordion-toggle"));
const toggleAllButton = document.querySelector("#toggle-all");
const searchInput = document.querySelector("#card-search");
const emptyState = document.querySelector("#empty-state");

const personaToggles = Array.from(document.querySelectorAll(".persona-card__toggle"));
const personaExpandAllButton = document.querySelector("#personas-expand-all");
const personaCollapseAllButton = document.querySelector("#personas-collapse-all");
const personaTabs = Array.from(document.querySelectorAll("[data-persona-tab]"));
const personaPanels = Array.from(document.querySelectorAll("[data-persona-panel]"));

const setCardExpanded = (button, shouldExpand) => {
  const panelId = button.getAttribute("aria-controls");
  const panel = document.getElementById(panelId);
  const label = button.querySelector(".accordion-toggle__text");

  if (!panel || !label) {
    return;
  }

  button.setAttribute("aria-expanded", String(shouldExpand));
  label.textContent = shouldExpand ? "Collapse" : "Expand";
  panel.style.maxHeight = shouldExpand ? `${panel.scrollHeight}px` : "0px";
};

const syncToggleAllLabel = () => {
  if (!toggleAllButton) {
    return;
  }

  const visibleButtons = interviewCards
    .filter((card) => !card.hidden)
    .map((card) => card.querySelector(".accordion-toggle"));

  const allVisibleExpanded = visibleButtons.length > 0 && visibleButtons.every(
    (button) => button.getAttribute("aria-expanded") === "true"
  );

  toggleAllButton.textContent = allVisibleExpanded ? "Collapse all" : "Expand all";
};

const updateOpenPanelHeights = () => {
  [...interviewToggles, ...personaToggles].forEach((button) => {
    if (button.getAttribute("aria-expanded") === "true") {
      const panel = document.getElementById(button.getAttribute("aria-controls"));

      if (panel) {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    }
  });
};

const showView = (viewName) => {
  const targetView = pageViews.find((view) => view.dataset.view === viewName);

  if (!targetView) {
    return;
  }

  pageViews.forEach((view) => {
    view.hidden = view.dataset.view !== viewName;
  });

  viewLinks.forEach((link) => {
    const isActive = link.dataset.viewLink === viewName;
    link.classList.toggle("side-nav__link--active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  updateOpenPanelHeights();
};

const setPersonaTab = (tabName, shouldFocus = false) => {
  const activeTab = personaTabs.find((tab) => tab.dataset.personaTab === tabName);

  if (!activeTab) {
    return;
  }

  personaTabs.forEach((tab) => {
    const isSelected = tab.dataset.personaTab === tabName;
    tab.classList.toggle("persona-tab--active", isSelected);
    tab.setAttribute("aria-selected", String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
  });

  personaPanels.forEach((panel) => {
    panel.hidden = panel.dataset.personaPanel !== tabName;
  });

  if (shouldFocus) {
    activeTab.focus();
  }

  updateOpenPanelHeights();
};

viewLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const viewName = link.dataset.viewLink;
    showView(viewName);
    history.replaceState(null, "", `#${viewName}`);
  });
});

interviewToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    setCardExpanded(button, !isExpanded);
    syncToggleAllLabel();
  });
});

if (toggleAllButton) {
  toggleAllButton.addEventListener("click", () => {
    const visibleCards = interviewCards.filter((card) => !card.hidden);
    const shouldExpand = visibleCards.some(
      (card) => card.querySelector(".accordion-toggle").getAttribute("aria-expanded") === "false"
    );

    visibleCards.forEach((card) => {
      setCardExpanded(card.querySelector(".accordion-toggle"), shouldExpand);
    });

    syncToggleAllLabel();
  });
}

if (searchInput && emptyState) {
  searchInput.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    let visibleCount = 0;

    interviewCards.forEach((card) => {
      const searchableText = `${card.textContent} ${card.dataset.searchContent}`.toLowerCase();
      const isMatch = searchableText.includes(query);

      card.hidden = !isMatch;

      if (isMatch) {
        visibleCount += 1;
      }
    });

    emptyState.hidden = visibleCount !== 0;
    updateOpenPanelHeights();
    syncToggleAllLabel();
  });
}

personaToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    setCardExpanded(button, !isExpanded);
  });
});

if (personaExpandAllButton) {
  personaExpandAllButton.addEventListener("click", () => {
    personaToggles.forEach((button) => setCardExpanded(button, true));
  });
}

if (personaCollapseAllButton) {
  personaCollapseAllButton.addEventListener("click", () => {
    personaToggles.forEach((button) => setCardExpanded(button, false));
  });
}

personaTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setPersonaTab(tab.dataset.personaTab);
  });

  tab.addEventListener("keydown", (event) => {
    const currentIndex = personaTabs.indexOf(tab);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % personaTabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + personaTabs.length) % personaTabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = personaTabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setPersonaTab(personaTabs[nextIndex].dataset.personaTab, true);
  });
});

window.addEventListener("resize", updateOpenPanelHeights);

const initialHash = window.location.hash.replace("#", "");
showView(initialHash === "personas" ? "personas" : "interviews");
setPersonaTab("personas");
syncToggleAllLabel();
