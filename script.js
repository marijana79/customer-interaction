const cards = Array.from(document.querySelectorAll(".interview-card"));
const toggles = Array.from(document.querySelectorAll(".accordion-toggle"));
const toggleAllButton = document.querySelector("#toggle-all");
const searchInput = document.querySelector("#card-search");
const emptyState = document.querySelector("#empty-state");

const setCardExpanded = (button, shouldExpand) => {
  const panelId = button.getAttribute("aria-controls");
  const panel = document.getElementById(panelId);
  const label = button.querySelector(".accordion-toggle__text");

  button.setAttribute("aria-expanded", String(shouldExpand));
  label.textContent = shouldExpand ? "Collapse" : "Expand";
  panel.style.maxHeight = shouldExpand ? `${panel.scrollHeight}px` : "0px";
};

const syncToggleAllLabel = () => {
  const visibleButtons = cards
    .filter((card) => !card.hidden)
    .map((card) => card.querySelector(".accordion-toggle"));

  const allVisibleExpanded = visibleButtons.length > 0 && visibleButtons.every(
    (button) => button.getAttribute("aria-expanded") === "true"
  );

  toggleAllButton.textContent = allVisibleExpanded ? "Collapse all" : "Expand all";
};

const updateOpenPanelHeights = () => {
  toggles.forEach((button) => {
    if (button.getAttribute("aria-expanded") === "true") {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  });
};

toggles.forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    setCardExpanded(button, !isExpanded);
    syncToggleAllLabel();
  });
});

toggleAllButton.addEventListener("click", () => {
  const visibleCards = cards.filter((card) => !card.hidden);
  const shouldExpand = visibleCards.some(
    (card) => card.querySelector(".accordion-toggle").getAttribute("aria-expanded") === "false"
  );

  visibleCards.forEach((card) => {
    setCardExpanded(card.querySelector(".accordion-toggle"), shouldExpand);
  });

  syncToggleAllLabel();
});

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
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

window.addEventListener("resize", updateOpenPanelHeights);
syncToggleAllLabel();
