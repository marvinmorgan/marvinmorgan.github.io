"use strict";

const OBSERVATORIES = [
  {
    id: "lick-shane",
    name: "Lick Observatory - Shane 3m",
    shortName: "Lick Shane",
    lat: 37.3414,
    lon: -121.6429,
    timeZone: "America/Los_Angeles",
    minAlt: 20,
    maxAirmass: 2.3,
    minMoonSeparation: 20,
    slotMinutes: 25,
    gapMinutes: 5
  },
  {
    id: "lick-apf",
    name: "Lick Observatory - APF 2.4m",
    shortName: "Lick APF",
    lat: 37.3414,
    lon: -121.6429,
    timeZone: "America/Los_Angeles",
    minAlt: 25,
    maxAirmass: 2.1,
    minMoonSeparation: 25,
    slotMinutes: 20,
    gapMinutes: 5
  },
  {
    id: "mcdonald-het",
    name: "McDonald Observatory - HET",
    shortName: "HET",
    lat: 30.6814,
    lon: -104.0147,
    timeZone: "America/Chicago",
    minAlt: 30,
    maxAirmass: 1.9,
    minMoonSeparation: 30,
    slotMinutes: 20,
    gapMinutes: 7
  },
  {
    id: "mcdonald-2p7",
    name: "McDonald Observatory - 2.7m Harlan Smith",
    shortName: "McD 2.7m",
    lat: 30.6717,
    lon: -104.0225,
    timeZone: "America/Chicago",
    minAlt: 20,
    maxAirmass: 2.2,
    minMoonSeparation: 20,
    slotMinutes: 25,
    gapMinutes: 5
  },
  {
    id: "vlt-paranal",
    name: "ESO Very Large Telescope (VLT, Paranal)",
    shortName: "VLT",
    lat: -24.627,
    lon: -70.4045,
    timeZone: "America/Santiago",
    minAlt: 20,
    maxAirmass: 2.3,
    minMoonSeparation: 25,
    slotMinutes: 25,
    gapMinutes: 5
  },
  {
    id: "la-silla",
    name: "La Silla Observatory",
    shortName: "La Silla",
    lat: -29.2613,
    lon: -70.7346,
    timeZone: "America/Santiago",
    minAlt: 20,
    maxAirmass: 2.4,
    minMoonSeparation: 20,
    slotMinutes: 25,
    gapMinutes: 5
  },
  {
    id: "keck-1",
    name: "Keck I",
    shortName: "Keck I",
    lat: 19.8261,
    lon: -155.474,
    timeZone: "Pacific/Honolulu",
    minAlt: 20,
    maxAirmass: 2.2,
    minMoonSeparation: 25,
    slotMinutes: 20,
    gapMinutes: 5
  },
  {
    id: "keck-2",
    name: "Keck II",
    shortName: "Keck II",
    lat: 19.8261,
    lon: -155.474,
    timeZone: "Pacific/Honolulu",
    minAlt: 20,
    maxAirmass: 2.2,
    minMoonSeparation: 25,
    slotMinutes: 20,
    gapMinutes: 5
  },
  {
    id: "gemini-north",
    name: "Gemini North",
    shortName: "Gemini N",
    lat: 19.8238,
    lon: -155.4691,
    timeZone: "Pacific/Honolulu",
    minAlt: 20,
    maxAirmass: 2.2,
    minMoonSeparation: 25,
    slotMinutes: 25,
    gapMinutes: 5
  },
  {
    id: "gemini-south",
    name: "Gemini South",
    shortName: "Gemini S",
    lat: -30.2407,
    lon: -70.7366,
    timeZone: "America/Santiago",
    minAlt: 20,
    maxAirmass: 2.2,
    minMoonSeparation: 25,
    slotMinutes: 25,
    gapMinutes: 5
  },
  {
    id: "subaru",
    name: "Subaru Telescope",
    shortName: "Subaru",
    lat: 19.825,
    lon: -155.4761,
    timeZone: "Pacific/Honolulu",
    minAlt: 20,
    maxAirmass: 2.2,
    minMoonSeparation: 25,
    slotMinutes: 20,
    gapMinutes: 5
  }
];

const FALLBACK_CATALOG = {
  vega: { name: "Vega", raDeg: 279.23473479, decDeg: 38.78368896 },
  sirius: { name: "Sirius", raDeg: 101.28715533, decDeg: -16.71611586 },
  betelgeuse: { name: "Betelgeuse", raDeg: 88.792939, decDeg: 7.407064 },
  rigel: { name: "Rigel", raDeg: 78.634467, decDeg: -8.201638 },
  polaris: { name: "Polaris", raDeg: 37.95456067, decDeg: 89.26410897 },
  deneb: { name: "Deneb", raDeg: 310.35797975, decDeg: 45.28033888 },
  altair: { name: "Altair", raDeg: 297.6958273, decDeg: 8.8683212 },
  arcturus: { name: "Arcturus", raDeg: 213.9153, decDeg: 19.1824 },
  aldebaran: { name: "Aldebaran", raDeg: 68.980163, decDeg: 16.509302 },
  capella: { name: "Capella", raDeg: 79.17232794, decDeg: 45.99799147 },
  procyon: { name: "Procyon", raDeg: 114.825493, decDeg: 5.224993 },
  spica: { name: "Spica", raDeg: 201.298247, decDeg: -11.161319 },
  antares: { name: "Antares", raDeg: 247.35191667, decDeg: -26.43200278 },
  fomalhaut: { name: "Fomalhaut", raDeg: 344.41275, decDeg: -29.62223611 },
  canopus: { name: "Canopus", raDeg: 95.98787778, decDeg: -52.69566111 },
  regulus: { name: "Regulus", raDeg: 152.0929625, decDeg: 11.96720833 },
  castor: { name: "Castor", raDeg: 113.649428, decDeg: 31.888282 },
  pollux: { name: "Pollux", raDeg: 116.328958, decDeg: 28.026183 },
  mizar: { name: "Mizar", raDeg: 200.981429, decDeg: 54.925362 }
};

const COLOR_PALETTE = [
  "#d97925",
  "#3f71b6",
  "#2f5f9d",
  "#b7631a",
  "#4d82c5",
  "#995714",
  "#5c92d4",
  "#c7721f"
];

const FOLDER_COLOR_PALETTE = [
  "#d97925",
  "#3f71b6",
  "#2f5f9d",
  "#b7631a",
  "#4d82c5",
  "#995714",
  "#5c92d4",
  "#c7721f"
];

const REVERSE_SKY_DRIFT = true;
const USER_MAX_AIRMASS = 2.0;

const KECK_POINTING_LIMITS = {
  "keck-1": {
    label: "Keck I",
    deckAzStart: 5.3,
    deckAzEnd: 146.2,
    deckMinAlt: 33.3,
    maxAlt: 88.9,
    normalMinAlt: 18
  },
  "keck-2": {
    label: "Keck II",
    deckAzStart: 185.3,
    deckAzEnd: 332.8,
    deckMinAlt: 36.8,
    maxAlt: 89.5,
    normalMinAlt: 18
  }
};

const STORAGE_KEY = "mockObservingPlanner.v1";

const state = {
  observatoryId: OBSERVATORIES[0].id,
  dateISO: "",
  minuteOfDay: 0,
  playRate: 15,
  defaultExposureMin: 20,
  playing: false,
  playTimer: null,
  targets: [],
  folders: ["Tonight", "Unsorted"],
  highlightFolders: [],
  addFolder: "Tonight",
  activeTargetId: null,
  focusTargetId: null,
  plotTargetId: null,
  plotXAxis: "ut",
  plotShowMoon: false,
  activeTab: "sky",
  searchQuery: "",
  folderFilter: "ALL",
  show: {
    airmass: true,
    zenith: true,
    equatorial: false,
    allTracks: true,
    moon: true
  },
  plan: []
};

const dom = {};
const canvasGeom = {
  size: 900,
  cx: 450,
  cy: 450,
  radius: 390
};

let skyCtx = null;
let airmassCtx = null;
let planCtx = null;
let hideDoneRows = false;
let renderedStars = [];
let popupPinnedTargetId = null;
let planScrollRaf = null;

const plotGeom = {
  width: 1200,
  height: 480,
  padLeft: 64,
  padRight: 20,
  padTop: 24,
  padBottom: 46
};

const planGeom = {
  width: 1200,
  height: 520,
  padLeft: 132,
  padRight: 24,
  padTop: 28,
  padBottom: 54
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  cacheDom();
  skyCtx = dom.skyCanvas.getContext("2d");
  airmassCtx = dom.airmassCanvas.getContext("2d");
  planCtx = dom.planCanvas.getContext("2d");
  populateObservatories();
  loadState();
  const initialNow = new Date();
  if (!state.dateISO) {
    state.dateISO = isoDateOnly(initialNow);
    state.minuteOfDay = initialNow.getUTCHours() * 60 + initialNow.getUTCMinutes();
  }
  if (!Number.isFinite(state.minuteOfDay)) {
    state.minuteOfDay = initialNow.getUTCHours() * 60 + initialNow.getUTCMinutes();
  }
  bindEvents();
  applyStateToInputs();
  refreshFolderControls();
  updatePlotTargetOptions();
  refreshTargetsTable();
  updatePlanUI();
  resizeCanvas();
  updateEverything();
  setActiveTab(state.activeTab || "sky", false);
  window.addEventListener("resize", onWindowResize);
}

function cacheDom() {
  dom.statusPill = document.getElementById("statusPill");
  dom.observatorySelect = document.getElementById("observatorySelect");
  dom.dateInput = document.getElementById("dateInput");
  dom.dateJumpInput = document.getElementById("dateJumpInput");
  dom.dateJumpBtn = document.getElementById("dateJumpBtn");
  dom.timeSlider = document.getElementById("timeSlider");
  dom.stepBackBtn = document.getElementById("stepBackBtn");
  dom.stepFwdBtn = document.getElementById("stepFwdBtn");
  dom.playPauseBtn = document.getElementById("playPauseBtn");
  dom.playRateSelect = document.getElementById("playRateSelect");
  dom.utTime = document.getElementById("utTime");
  dom.telescopeTime = document.getElementById("telescopeTime");
  dom.localTime = document.getElementById("localTime");
  dom.lstValue = document.getElementById("lstValue");
  dom.jdValue = document.getElementById("jdValue");
  dom.mjdValue = document.getElementById("mjdValue");
  dom.airmassGridToggle = document.getElementById("airmassGridToggle");
  dom.zenithGridToggle = document.getElementById("zenithGridToggle");
  dom.equatorialGridToggle = document.getElementById("equatorialGridToggle");
  dom.showAllTracksToggle = document.getElementById("showAllTracksToggle");
  dom.showMoonToggle = document.getElementById("showMoonToggle");
  dom.targetNameInput = document.getElementById("targetNameInput");
  dom.manualRaInput = document.getElementById("manualRaInput");
  dom.manualDecInput = document.getElementById("manualDecInput");
  dom.defaultExposureInput = document.getElementById("defaultExposureInput");
  dom.addByNameBtn = document.getElementById("addByNameBtn");
  dom.addManualBtn = document.getElementById("addManualBtn");
  dom.newFolderInput = document.getElementById("newFolderInput");
  dom.createFolderBtn = document.getElementById("createFolderBtn");
  dom.folderSelect = document.getElementById("folderSelect");
  dom.fileInput = document.getElementById("fileInput");
  dom.importFilesBtn = document.getElementById("importFilesBtn");
  dom.folderFilterSelect = document.getElementById("folderFilterSelect");
  dom.folderList = document.getElementById("folderList");
  dom.targetSearchInput = document.getElementById("targetSearchInput");
  dom.bulkExposureInput = document.getElementById("bulkExposureInput");
  dom.bulkExposureBtn = document.getElementById("bulkExposureBtn");
  dom.clearDoneBtn = document.getElementById("clearDoneBtn");
  dom.targetTableBody = document.getElementById("targetTableBody");
  dom.optimizeBtn = document.getElementById("optimizeBtn");
  dom.planMeta = document.getElementById("planMeta");
  dom.planList = document.getElementById("planList");
  dom.skyCanvas = document.getElementById("skyCanvas");
  dom.airmassCanvas = document.getElementById("airmassCanvas");
  dom.planCanvas = document.getElementById("planCanvas");
  dom.skyTabBtn = document.getElementById("skyTabBtn");
  dom.skyKeck1TabBtn = document.getElementById("skyKeck1TabBtn");
  dom.skyKeck2TabBtn = document.getElementById("skyKeck2TabBtn");
  dom.airmassTabBtn = document.getElementById("airmassTabBtn");
  dom.planTabBtn = document.getElementById("planTabBtn");
  dom.skyView = document.getElementById("skyView");
  dom.airmassView = document.getElementById("airmassView");
  dom.planView = document.getElementById("planView");
  dom.plotTargetSelect = document.getElementById("plotTargetSelect");
  dom.plotXAxisSelect = document.getElementById("plotXAxisSelect");
  dom.syncPlotTargetBtn = document.getElementById("syncPlotTargetBtn");
  dom.plotMoonToggleBtn = document.getElementById("plotMoonToggleBtn");
  dom.plotSummary = document.getElementById("plotSummary");
  dom.plotRaDecInfo = document.getElementById("plotRaDecInfo");
  dom.plotConstraintInfo = document.getElementById("plotConstraintInfo");
  dom.starPopup = document.getElementById("starPopup");
  dom.starPopupContent = document.getElementById("starPopupContent");
  dom.closeStarPopupBtn = document.getElementById("closeStarPopupBtn");
  dom.moonInfo = document.getElementById("moonInfo");
  dom.activeTargetInfo = document.getElementById("activeTargetInfo");
  dom.planBuildBtn = document.getElementById("planBuildBtn");
  dom.planPdfBtn = document.getElementById("planPdfBtn");
  dom.planBoardWrap = document.getElementById("planBoardWrap");
  dom.planScopeHint = document.getElementById("planScopeHint");
  dom.planBoardSummary = document.getElementById("planBoardSummary");
  dom.planBoardScope = document.getElementById("planBoardScope");
  dom.planBoardNow = document.getElementById("planBoardNow");
}

function bindEvents() {
  dom.observatorySelect.addEventListener("change", () => {
    state.observatoryId = dom.observatorySelect.value;
    saveState();
    updateEverything();
  });

  dom.dateInput.addEventListener("change", () => {
    if (dom.dateInput.value) {
      state.dateISO = dom.dateInput.value;
      dom.dateJumpInput.value = state.dateISO;
      saveState();
      updateEverything();
    }
  });

  dom.dateJumpBtn.addEventListener("click", () => {
    const candidate = (dom.dateJumpInput.value || "").trim();
    if (!isIsoDate(candidate)) {
      setStatus("Use YYYY-MM-DD for date jump.", "warn");
      return;
    }
    state.dateISO = candidate;
    dom.dateInput.value = state.dateISO;
    saveState();
    updateEverything();
    setStatus(`Date set to ${state.dateISO} UTC.`, "ok");
  });

  dom.dateJumpInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      dom.dateJumpBtn.click();
    }
  });

  dom.timeSlider.addEventListener("input", () => {
    state.minuteOfDay = Number(dom.timeSlider.value);
    updateEverything(false);
  });

  dom.stepBackBtn.addEventListener("click", () => {
    shiftMinute(-10);
  });

  dom.stepFwdBtn.addEventListener("click", () => {
    shiftMinute(10);
  });

  dom.playPauseBtn.addEventListener("click", togglePlay);

  dom.playRateSelect.addEventListener("change", () => {
    state.playRate = Number(dom.playRateSelect.value);
    if (state.playing) {
      stopPlay();
      startPlay();
    }
    saveState();
  });

  dom.airmassGridToggle.addEventListener("change", () => {
    state.show.airmass = dom.airmassGridToggle.checked;
    saveState();
    renderSky();
  });

  dom.zenithGridToggle.addEventListener("change", () => {
    state.show.zenith = dom.zenithGridToggle.checked;
    saveState();
    renderSky();
  });

  dom.equatorialGridToggle.addEventListener("change", () => {
    state.show.equatorial = dom.equatorialGridToggle.checked;
    saveState();
    renderSky();
  });

  dom.showAllTracksToggle.addEventListener("change", () => {
    state.show.allTracks = dom.showAllTracksToggle.checked;
    saveState();
    renderSky();
  });

  dom.showMoonToggle.addEventListener("change", () => {
    state.show.moon = dom.showMoonToggle.checked;
    saveState();
    renderSky();
    updateMoonPanel();
  });

  dom.addByNameBtn.addEventListener("click", handleAddByName);
  dom.addManualBtn.addEventListener("click", handleAddManual);
  dom.createFolderBtn.addEventListener("click", handleCreateFolder);
  dom.importFilesBtn.addEventListener("click", handleImportFiles);
  dom.defaultExposureInput.addEventListener("change", () => {
    state.defaultExposureMin = sanitizeExposureMinutes(dom.defaultExposureInput.value);
    dom.defaultExposureInput.value = String(state.defaultExposureMin);
    saveState();
    if (state.plan.length) {
      handleOptimizePlan();
    } else {
      renderPlanBoard();
    }
  });
  dom.bulkExposureBtn.addEventListener("click", handleBulkExposureUpdate);
  dom.bulkExposureInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleBulkExposureUpdate();
    }
  });
  dom.targetSearchInput.addEventListener("input", () => {
    state.searchQuery = dom.targetSearchInput.value.trim();
    refreshTargetsTable();
    renderSky();
    updatePlotTargetOptions();
    renderPlanBoard();
    saveState();
  });

  dom.folderFilterSelect.addEventListener("change", () => {
    state.folderFilter = dom.folderFilterSelect.value;
    saveState();
    refreshTargetsTable();
    renderSky();
    updateActiveTargetPanel();
    updatePlotTargetOptions();
    renderAirmassPlot();
    renderPlanBoard();
  });

  dom.folderSelect.addEventListener("change", () => {
    state.addFolder = sanitizeFolderName(dom.folderSelect.value || "Unsorted");
    saveState();
  });

  dom.folderList.addEventListener("click", (event) => {
    const highlightButton = event.target.closest(".highlight-folder-btn");
    if (highlightButton) {
      toggleFolderHighlight(highlightButton.dataset.folder || "");
      return;
    }
    const deleteButton = event.target.closest(".delete-folder-btn");
    if (!deleteButton) {
      return;
    }
    deleteAllInFolder(deleteButton.dataset.folder || "");
  });

  dom.clearDoneBtn.addEventListener("click", () => {
    hideDoneRows = !hideDoneRows;
    dom.clearDoneBtn.textContent = hideDoneRows ? "Show Done" : "Hide Done";
    refreshTargetsTable();
  });

  dom.targetTableBody.addEventListener("change", (event) => {
    const targetId = event.target.dataset.id;
    if (!targetId) {
      return;
    }
    const target = state.targets.find((item) => item.id === targetId);
    if (!target) {
      return;
    }
    if (event.target.classList.contains("done-toggle")) {
      target.done = event.target.checked;
      saveState();
      refreshTargetsTable();
      renderSky();
      updateActiveTargetPanel();
      renderPlanBoard();
      return;
    }
    if (event.target.classList.contains("highlight-toggle")) {
      target.highlight = event.target.checked;
      saveState();
      renderSky();
      return;
    }
    if (event.target.classList.contains("exp-input")) {
      target.exposureMin = sanitizeExposureMinutes(event.target.value);
      event.target.value = String(target.exposureMin);
      saveState();
      if (state.plan.length) {
        handleOptimizePlan();
      } else {
        renderPlanBoard();
      }
    }
  });

  dom.targetTableBody.addEventListener("click", (event) => {
    const removeButton = event.target.closest(".remove-btn");
    if (removeButton) {
      removeTarget(removeButton.dataset.id);
      return;
    }
    const focusButton = event.target.closest(".focus-btn");
    if (focusButton) {
      const targetId = focusButton.dataset.id;
      if (!targetId) {
        return;
      }
      state.focusTargetId = targetId;
      state.activeTargetId = targetId;
      state.plotTargetId = targetId;
      refreshTargetsTable();
      updateActiveTargetPanel();
      updatePlotTargetOptions();
      renderSky();
      renderAirmassPlot();
      saveState();
      return;
    }
    const row = event.target.closest("tr");
    if (!row || event.target.matches("input,button")) {
      return;
    }
    state.activeTargetId = row.dataset.id;
    state.plotTargetId = state.activeTargetId;
    saveState();
    refreshTargetsTable();
    renderSky();
    updateActiveTargetPanel();
    updatePlotTargetOptions();
    renderAirmassPlot();
  });

  dom.optimizeBtn.addEventListener("click", () => {
    handleOptimizePlan();
    setActiveTab("plan");
  });

  dom.planList.addEventListener("click", (event) => {
    const markBtn = event.target.closest(".mark-plan-done-btn");
    if (!markBtn) {
      return;
    }
    const targetId = markBtn.dataset.id;
    const target = state.targets.find((item) => item.id === targetId);
    if (!target) {
      return;
    }
    target.done = true;
    state.activeTargetId = target.id;
    saveState();
    refreshTargetsTable();
    renderSky();
    updateActiveTargetPanel();
    renderAirmassPlot();
    renderPlanBoard();
    setStatus(`${target.name} marked as observed.`, "ok");
  });

  dom.skyTabBtn.addEventListener("click", () => setActiveTab("sky"));
  dom.skyKeck1TabBtn.addEventListener("click", () => setKeckSkyTab("keck-1"));
  dom.skyKeck2TabBtn.addEventListener("click", () => setKeckSkyTab("keck-2"));
  dom.airmassTabBtn.addEventListener("click", () => setActiveTab("airmass"));
  dom.planTabBtn.addEventListener("click", () => setActiveTab("plan"));

  dom.plotTargetSelect.addEventListener("change", () => {
    state.plotTargetId = dom.plotTargetSelect.value || null;
    if (state.plotTargetId) {
      state.activeTargetId = state.plotTargetId;
      refreshTargetsTable();
      updateActiveTargetPanel();
      renderSky();
    }
    renderAirmassPlot();
    saveState();
  });

  dom.plotXAxisSelect.addEventListener("change", () => {
    state.plotXAxis = dom.plotXAxisSelect.value;
    renderAirmassPlot();
    saveState();
  });

  dom.plotMoonToggleBtn.addEventListener("click", () => {
    state.plotShowMoon = !state.plotShowMoon;
    updatePlotMoonToggleButton();
    renderAirmassPlot();
    saveState();
  });

  dom.syncPlotTargetBtn.addEventListener("click", () => {
    if (!state.activeTargetId) {
      return;
    }
    state.plotTargetId = state.activeTargetId;
    updatePlotTargetOptions();
    renderAirmassPlot();
    saveState();
  });

  dom.planBuildBtn.addEventListener("click", () => {
    handleOptimizePlan();
    setActiveTab("plan");
  });
  dom.planPdfBtn.addEventListener("click", handleGeneratePlanPdf);

  if (dom.planBoardWrap) {
    dom.planBoardWrap.addEventListener("scroll", () => {
      if (state.activeTab !== "plan") {
        return;
      }
      if (planScrollRaf !== null) {
        return;
      }
      planScrollRaf = requestAnimationFrame(() => {
        planScrollRaf = null;
        renderPlanBoard();
      });
    });
  }

  dom.skyCanvas.addEventListener("click", handleSkyClick);

  dom.closeStarPopupBtn.addEventListener("click", () => {
    hideStarPopup();
  });

  document.addEventListener("click", (event) => {
    const clickedInsidePopup = event.target.closest("#starPopup");
    const clickedCanvas = event.target.closest("#skyCanvas");
    if (!clickedInsidePopup && !clickedCanvas) {
      hideStarPopup();
    }
  });
}

function applyStateToInputs() {
  dom.observatorySelect.value = state.observatoryId;
  dom.dateInput.value = state.dateISO;
  dom.dateJumpInput.value = state.dateISO;
  dom.timeSlider.value = String(state.minuteOfDay);
  dom.playRateSelect.value = String(state.playRate || 15);
  dom.airmassGridToggle.checked = state.show.airmass;
  dom.zenithGridToggle.checked = state.show.zenith;
  dom.equatorialGridToggle.checked = state.show.equatorial;
  dom.showAllTracksToggle.checked = state.show.allTracks;
  dom.showMoonToggle.checked = state.show.moon;
  dom.defaultExposureInput.value = String(sanitizeExposureMinutes(state.defaultExposureMin));
  dom.targetSearchInput.value = state.searchQuery || "";
  dom.plotXAxisSelect.value = state.plotXAxis || "ut";
  updatePlotMoonToggleButton();
}

function updatePlotMoonToggleButton() {
  const enabled = state.plotShowMoon === true;
  dom.plotMoonToggleBtn.classList.toggle("is-on", enabled);
  dom.plotMoonToggleBtn.textContent = enabled ? "Moon Airmass: On" : "Moon Airmass: Off";
  dom.plotMoonToggleBtn.setAttribute("aria-pressed", enabled ? "true" : "false");
}

function populateObservatories() {
  const options = OBSERVATORIES.map((obs) => {
    return `<option value="${obs.id}">${escapeHtml(obs.name)}</option>`;
  }).join("");
  dom.observatorySelect.innerHTML = options;
}

function loadState() {
  let raw;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    raw = null;
  }
  if (!raw) {
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      if (typeof parsed.observatoryId === "string" && OBSERVATORIES.some((o) => o.id === parsed.observatoryId)) {
        state.observatoryId = parsed.observatoryId;
      }
      if (typeof parsed.dateISO === "string" && /^\d{4}-\d{2}-\d{2}$/.test(parsed.dateISO)) {
        state.dateISO = parsed.dateISO;
      }
      if (Number.isFinite(parsed.minuteOfDay)) {
        state.minuteOfDay = clamp(Math.round(parsed.minuteOfDay), 0, 1439);
      }
      if (Number.isFinite(parsed.playRate)) {
        state.playRate = parsed.playRate;
      }
      if (Number.isFinite(parsed.defaultExposureMin)) {
        state.defaultExposureMin = sanitizeExposureMinutes(parsed.defaultExposureMin);
      }
      if (parsed.show && typeof parsed.show === "object") {
        state.show.airmass = parsed.show.airmass !== false;
        state.show.zenith = parsed.show.zenith !== false;
        state.show.equatorial = parsed.show.equatorial === true;
        state.show.allTracks = parsed.show.allTracks !== false;
        state.show.moon = parsed.show.moon !== false;
      }
      if (typeof parsed.folderFilter === "string") {
        state.folderFilter = parsed.folderFilter;
      }
      if (Array.isArray(parsed.highlightFolders)) {
        state.highlightFolders = parsed.highlightFolders
          .filter((folder) => typeof folder === "string" && folder.trim())
          .map((folder) => sanitizeFolderName(folder));
      }
      if (typeof parsed.searchQuery === "string") {
        state.searchQuery = parsed.searchQuery;
      }
      if (typeof parsed.plotXAxis === "string" && (parsed.plotXAxis === "ut" || parsed.plotXAxis === "lst")) {
        state.plotXAxis = parsed.plotXAxis;
      }
      if (typeof parsed.plotShowMoon === "boolean") {
        state.plotShowMoon = parsed.plotShowMoon;
      }
      if (
        typeof parsed.activeTab === "string" &&
        ["sky", "sky-keck-1", "sky-keck-2", "airmass", "plan"].includes(parsed.activeTab)
      ) {
        state.activeTab = parsed.activeTab;
      }
      if (Array.isArray(parsed.folders)) {
        state.folders = parsed.folders
          .filter((folder) => typeof folder === "string" && folder.trim())
          .map((folder) => folder.trim());
      }
      if (typeof parsed.addFolder === "string" && parsed.addFolder.trim()) {
        state.addFolder = sanitizeFolderName(parsed.addFolder);
      }
      if (Array.isArray(parsed.targets)) {
        state.targets = parsed.targets
          .map((target, index) => normalizeLoadedTarget(target, index))
          .filter(Boolean);
      }
      if (typeof parsed.activeTargetId === "string") {
        state.activeTargetId = parsed.activeTargetId;
      }
      if (typeof parsed.focusTargetId === "string") {
        state.focusTargetId = parsed.focusTargetId;
      }
      if (typeof parsed.plotTargetId === "string") {
        state.plotTargetId = parsed.plotTargetId;
      }
    }
  } catch (error) {
    console.warn("Could not parse saved planner state.", error);
  }
  if (!state.targets.some((item) => item.id === state.activeTargetId)) {
    state.activeTargetId = state.targets.length ? state.targets[0].id : null;
  }
  if (!state.targets.some((item) => item.id === state.focusTargetId)) {
    state.focusTargetId = state.activeTargetId;
  }
  if (!state.targets.some((item) => item.id === state.plotTargetId)) {
    state.plotTargetId = state.activeTargetId;
  }
  if (!state.folders.length) {
    state.folders = ["Tonight", "Unsorted"];
  }
}

function normalizeLoadedTarget(target, index) {
  if (!target || typeof target !== "object") {
    return null;
  }
  if (!Number.isFinite(target.raDeg) || !Number.isFinite(target.decDeg)) {
    return null;
  }
  const sanitizedName = typeof target.name === "string" && target.name.trim() ? target.name.trim() : `Target ${index + 1}`;
  const rMag = coerceMagnitude(target.rMag ?? target.rmag ?? target.magR ?? target.rMagnitude);
  return {
    id: typeof target.id === "string" ? target.id : makeId(),
    name: sanitizedName,
    raDeg: normalizeDeg(target.raDeg),
    decDeg: clamp(target.decDeg, -90, 90),
    source: typeof target.source === "string" ? target.source : "Imported",
    done: Boolean(target.done),
    highlight: target.highlight !== false,
    exposureMin: sanitizeExposureMinutes(target.exposureMin),
    folder: sanitizeFolderName(typeof target.folder === "string" && target.folder.trim() ? target.folder.trim() : "Unsorted"),
    rMag: Number.isFinite(rMag) ? rMag : undefined,
    color: typeof target.color === "string" && target.color ? target.color : pickTargetColor(index)
  };
}

function saveState() {
  const payload = {
    observatoryId: state.observatoryId,
    dateISO: state.dateISO,
    minuteOfDay: state.minuteOfDay,
    playRate: state.playRate,
    defaultExposureMin: sanitizeExposureMinutes(state.defaultExposureMin),
    show: state.show,
    folderFilter: state.folderFilter,
    highlightFolders: state.highlightFolders,
    searchQuery: state.searchQuery,
    folders: state.folders,
    addFolder: state.addFolder,
    plotTargetId: state.plotTargetId,
    plotXAxis: state.plotXAxis,
    plotShowMoon: state.plotShowMoon,
    activeTab: state.activeTab,
    activeTargetId: state.activeTargetId,
    focusTargetId: state.focusTargetId,
    targets: state.targets
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn("Could not save planner state.", error);
  }
}

function getSelectedObservatory() {
  return OBSERVATORIES.find((obs) => obs.id === state.observatoryId) || OBSERVATORIES[0];
}

function getEffectiveMaxAirmass(obs) {
  return Math.min(obs.maxAirmass, USER_MAX_AIRMASS);
}

function shiftMinute(delta) {
  state.minuteOfDay = wrapMinute(state.minuteOfDay + delta);
  dom.timeSlider.value = String(state.minuteOfDay);
  updateEverything(false);
}

function togglePlay() {
  if (state.playing) {
    stopPlay();
  } else {
    startPlay();
  }
}

function startPlay() {
  if (state.playing) {
    return;
  }
  state.playing = true;
  dom.playPauseBtn.textContent = "Pause";
  state.playTimer = setInterval(() => {
    shiftMinute(Number(state.playRate) || 1);
  }, 180);
}

function stopPlay() {
  if (!state.playing) {
    return;
  }
  state.playing = false;
  dom.playPauseBtn.textContent = "Play";
  if (state.playTimer) {
    clearInterval(state.playTimer);
    state.playTimer = null;
  }
}

function getCurrentDateTime() {
  return buildDateFromIsoMinute(state.dateISO, state.minuteOfDay);
}

function buildDateFromIsoMinute(isoDate, minuteOfDay) {
  const date = new Date(`${isoDate}T00:00:00.000Z`);
  date.setUTCMinutes(wrapMinute(minuteOfDay), 0, 0);
  return date;
}

function updateEverything(save = true) {
  if (save) {
    saveState();
  }
  updateTimeReadouts();
  updatePlotTargetOptions();
  refreshTargetsTable();
  renderSky();
  renderAirmassPlot();
  renderPlanBoard();
  updateMoonPanel();
  updateActiveTargetPanel();
}

function updateTimeReadouts() {
  const obs = getSelectedObservatory();
  const now = getCurrentDateTime();
  const jd = julianDate(now);
  const lst = localSiderealTimeDeg(now, obs.lon) / 15;
  dom.utTime.textContent = formatUtc(now);
  dom.telescopeTime.textContent = `${formatLocal(now, obs.timeZone)} ${getTimeZoneAbbrev(now, obs.timeZone)}`;
  dom.localTime.textContent = `${formatLaptopLocal(now)} ${getLaptopTimeZoneAbbrev(now)}`;
  dom.lstValue.textContent = formatHours(lst);
  dom.jdValue.textContent = jd.toFixed(5);
  dom.mjdValue.textContent = (jd - 2400000.5).toFixed(5);
}

function refreshFolderControls() {
  const folders = getAllFolders();
  const canonicalFolderMap = new Map(folders.map((folder) => [normalizeName(folder), folder]));
  const dedupedHighlights = Array.from(new Set((state.highlightFolders || []).map((folder) => normalizeName(folder))));
  state.highlightFolders = dedupedHighlights
    .filter((key) => canonicalFolderMap.has(key))
    .map((key) => canonicalFolderMap.get(key));
  state.folders = folders.slice();

  dom.folderSelect.innerHTML = folders
    .map((folder) => `<option value="${escapeAttr(folder)}">${escapeHtml(folder)}</option>`)
    .join("");
  if (folders.includes(state.addFolder)) {
    dom.folderSelect.value = state.addFolder;
  } else if (!folders.includes(dom.folderSelect.value)) {
    dom.folderSelect.value = folders.includes("Tonight") ? "Tonight" : folders[0];
  }
  state.addFolder = dom.folderSelect.value;

  const filterOptions = [`<option value="ALL">All folders</option>`];
  for (const folder of folders) {
    filterOptions.push(`<option value="${escapeAttr(folder)}">${escapeHtml(folder)}</option>`);
  }
  dom.folderFilterSelect.innerHTML = filterOptions.join("");
  if (state.folderFilter !== "ALL" && !folders.includes(state.folderFilter)) {
    state.folderFilter = "ALL";
  }
  dom.folderFilterSelect.value = state.folderFilter;

  const listRows = folders.map((folder) => {
    const count = state.targets.filter((target) => target.folder === folder).length;
    const highlighted = isFolderHighlighted(folder);
    return `
      <div class="folder-item">
        <div>
          <strong>${escapeHtml(folder)}</strong>
          <span>${count} target(s)</span>
        </div>
        <div class="folder-item-actions">
          <button type="button" class="tiny-btn folder-highlight-btn highlight-folder-btn ${highlighted ? "is-on" : ""}" data-folder="${escapeAttr(folder)}">${highlighted ? "Highlighted" : "Highlight"}</button>
          <button type="button" class="tiny-btn delete-folder-btn" data-folder="${escapeAttr(folder)}">Delete All</button>
        </div>
      </div>
    `;
  });
  dom.folderList.innerHTML = listRows.join("");
  updatePlanScopeText();
}

function getHighlightedFolderKeySet() {
  return new Set((state.highlightFolders || []).map((folder) => normalizeName(folder)));
}

function isFolderHighlighted(folderName) {
  const key = normalizeName(folderName || "");
  if (!key) {
    return false;
  }
  return getHighlightedFolderKeySet().has(key);
}

function toggleFolderHighlight(folder) {
  const clean = sanitizeFolderName(folder);
  const key = normalizeName(clean);
  if (!key) {
    return;
  }
  const keys = getHighlightedFolderKeySet();
  const willEnable = !keys.has(key);
  if (willEnable) {
    keys.add(key);
  } else {
    keys.delete(key);
  }
  const canonicalMap = new Map(getAllFolders().map((name) => [normalizeName(name), name]));
  state.highlightFolders = Array.from(keys)
    .map((nameKey) => canonicalMap.get(nameKey))
    .filter(Boolean);
  refreshFolderControls();
  refreshTargetsTable();
  renderSky();
  renderPlanBoard();
  saveState();
  setStatus(`${willEnable ? "Highlighted" : "Unhighlighted"} folder "${canonicalMap.get(key) || clean}".`, "ok");
}

function handleBulkExposureUpdate() {
  if (!state.targets.length) {
    setStatus("Add targets before applying a bulk exposure.", "warn");
    return;
  }
  const exposureMin = sanitizeExposureMinutes(dom.bulkExposureInput.value);
  dom.bulkExposureInput.value = String(exposureMin);
  dom.defaultExposureInput.value = String(exposureMin);
  state.defaultExposureMin = exposureMin;
  for (const target of state.targets) {
    target.exposureMin = exposureMin;
  }
  saveState();
  refreshTargetsTable();
  updateActiveTargetPanel();
  renderSky();
  renderAirmassPlot();
  if (state.plan.length) {
    handleOptimizePlan();
  } else {
    renderPlanBoard();
  }
  setStatus(`Set exposure to ${exposureMin} min for ${state.targets.length} target(s).`, "ok");
}

function getPlannerTargets() {
  const highlightedFolders = getHighlightedFolderKeySet();
  if (highlightedFolders.size) {
    return state.targets.filter((target) => !target.done && highlightedFolders.has(normalizeName(target.folder)));
  }
  return getDisplayTargets().filter((target) => !target.done);
}

function updatePlanScopeText() {
  const highlighted = state.highlightFolders || [];
  let shortText = "Planner uses visible targets unless folders are highlighted.";
  let cardText = "No folder highlight is currently active.";
  if (highlighted.length) {
    const names = highlighted.join(", ");
    shortText = `Planner scope: highlighted folder${highlighted.length === 1 ? "" : "s"} (${names}).`;
    cardText = `Using highlighted folder${highlighted.length === 1 ? "" : "s"}: ${names}.`;
  } else if (state.folderFilter !== "ALL") {
    shortText = `Planner scope: current folder filter "${state.folderFilter}".`;
    cardText = `Using folder filter: ${state.folderFilter}.`;
  } else if ((state.searchQuery || "").trim()) {
    shortText = `Planner scope: current search filter "${state.searchQuery}".`;
    cardText = `Using search filter: "${state.searchQuery}".`;
  }
  if (dom.planScopeHint) {
    dom.planScopeHint.textContent = shortText;
  }
  if (dom.planBoardScope) {
    dom.planBoardScope.textContent = cardText;
  }
}

function getDisplayTargets() {
  const search = normalizeName(state.searchQuery || "");
  return state.targets.filter((target) => {
    if (state.folderFilter !== "ALL" && target.folder !== state.folderFilter) {
      return false;
    }
    if (search) {
      const haystack = `${normalizeName(target.name)} ${normalizeName(target.folder)}`;
      if (!haystack.includes(search)) {
        return false;
      }
    }
    return true;
  });
}

function refreshTargetsTable() {
  const obs = getSelectedObservatory();
  const now = getCurrentDateTime();
  const displayTargets = getDisplayTargets();
  const rows = [];
  for (const target of displayTargets) {
    if (hideDoneRows && target.done) {
      continue;
    }
    const snapshot = computeSnapshot(target, now, obs);
    const isFocus = target.id === state.focusTargetId;
    const folderHighlighted = isFolderHighlighted(target.folder);
    rows.push(`
      <tr data-id="${escapeAttr(target.id)}" class="${target.id === state.activeTargetId ? "active-row" : ""} ${target.done ? "done-row" : ""} ${isFocus ? "focus-row" : ""} ${folderHighlighted ? "folder-highlight-row" : ""}">
        <td><input type="checkbox" class="done-toggle" data-id="${escapeAttr(target.id)}" ${target.done ? "checked" : ""}></td>
        <td><input type="checkbox" class="highlight-toggle" data-id="${escapeAttr(target.id)}" ${target.highlight ? "checked" : ""}></td>
        <td><button type="button" class="tiny-btn focus-btn" data-id="${escapeAttr(target.id)}">${isFocus ? "Focused" : "Focus"}</button></td>
        <td>${escapeHtml(target.name)}</td>
        <td><code>${formatRa(target.raDeg)}</code></td>
        <td><code>${formatDec(target.decDeg)}</code></td>
        <td>${snapshot.altDeg > 0 ? `${snapshot.altDeg.toFixed(1)}°` : "--"}</td>
        <td>${Number.isFinite(snapshot.airmass) && snapshot.airmass < 9 ? snapshot.airmass.toFixed(2) : "--"}</td>
        <td><input type="number" class="exp-input" data-id="${escapeAttr(target.id)}" min="1" max="600" step="1" value="${sanitizeExposureMinutes(target.exposureMin)}"></td>
        <td>${escapeHtml(target.folder)}</td>
        <td><button type="button" class="tiny-btn remove-btn" data-id="${escapeAttr(target.id)}">Del</button></td>
      </tr>
    `);
  }
  dom.targetTableBody.innerHTML = rows.join("");
}

function computeSnapshot(target, date, obs) {
  const altAz = raDecToAltAz(target.raDeg, target.decDeg, date, obs.lat, obs.lon);
  const x = airmassFromAlt(altAz.altDeg);
  return {
    altDeg: altAz.altDeg,
    azDeg: altAz.azDeg,
    airmass: x
  };
}

function isTargetVisibleAtMinute(target, minute, obs) {
  const date = buildDateFromIsoMinute(state.dateISO, minute);
  const altAz = raDecToAltAz(target.raDeg, target.decDeg, date, obs.lat, obs.lon);
  const x = airmassFromAlt(altAz.altDeg);
  return altAz.altDeg >= obs.minAlt && x <= getEffectiveMaxAirmass(obs);
}

function computeVisibilitySegments(target, obs, startMinute, endMinute, step = 4) {
  const segments = [];
  let segStart = null;
  for (let minute = startMinute; minute <= endMinute; minute += step) {
    const visible = isTargetVisibleAtMinute(target, minute, obs);
    if (visible && segStart === null) {
      segStart = minute;
    } else if (!visible && segStart !== null) {
      segments.push({ startMinute: segStart, endMinute: Math.max(segStart + step, minute - step) });
      segStart = null;
    }
  }
  if (segStart !== null) {
    segments.push({ startMinute: segStart, endMinute });
  }
  return segments;
}

function isTargetVisibleForDuration(target, startMinute, duration, obs, step = 2) {
  const safeDuration = Math.max(1, Math.floor(duration));
  const endMinute = startMinute + safeDuration;
  for (let minute = startMinute; minute <= endMinute; minute += step) {
    if (!isTargetVisibleAtMinute(target, minute, obs)) {
      return false;
    }
  }
  if ((endMinute - startMinute) % step !== 0 && !isTargetVisibleAtMinute(target, endMinute, obs)) {
    return false;
  }
  return true;
}

async function handleAddByName() {
  const name = dom.targetNameInput.value.trim();
  if (!name) {
    setStatus("Enter a SIMBAD target name first.", "warn");
    return;
  }
  dom.addByNameBtn.disabled = true;
  setStatus(`Resolving ${name}...`, "busy");
  try {
    const resolved = await resolveTargetName(name);
    addTarget({
      name,
      raDeg: resolved.raDeg,
      decDeg: resolved.decDeg,
      source: resolved.source || "SIMBAD",
      folder: getSelectedFolder(),
      exposureMin: sanitizeExposureMinutes(dom.defaultExposureInput.value),
      rMag: resolved.rMag
    });
    dom.targetNameInput.value = "";
    setStatus(`Added ${name}.`, "ok");
  } catch (error) {
    setStatus(`Could not resolve "${name}". Add RA/DEC manually if needed.`, "err");
  } finally {
    dom.addByNameBtn.disabled = false;
  }
}

function handleAddManual() {
  const name = dom.targetNameInput.value.trim() || `Target ${state.targets.length + 1}`;
  const raRaw = dom.manualRaInput.value.trim();
  const decRaw = dom.manualDecInput.value.trim();
  const raDeg = parseRa(raRaw);
  const decDeg = parseDec(decRaw);
  if (!Number.isFinite(raDeg) || !Number.isFinite(decDeg)) {
    setStatus("Could not parse RA/DEC values.", "err");
    return;
  }
  addTarget({
    name,
    raDeg,
    decDeg,
    source: "Manual",
    folder: getSelectedFolder(),
    exposureMin: sanitizeExposureMinutes(dom.defaultExposureInput.value)
  });
  dom.manualRaInput.value = "";
  dom.manualDecInput.value = "";
  dom.targetNameInput.value = "";
  setStatus(`Added manual target ${name}.`, "ok");
}

async function handleImportFiles() {
  const files = Array.from(dom.fileInput.files || []);
  if (!files.length) {
    setStatus("Choose at least one CSV/TXT file.", "warn");
    return;
  }
  const folderName = getSelectedFolder();
  dom.importFilesBtn.disabled = true;
  setStatus(`Importing ${files.length} file(s)...`, "busy");
  let added = 0;
  let unresolved = 0;
  for (const file of files) {
    const raw = await file.text();
    const parsed = parseTargetText(raw);
    for (const item of parsed) {
      if (Number.isFinite(item.raDeg) && Number.isFinite(item.decDeg)) {
        addTarget(
          {
            name: item.name || `Target ${state.targets.length + 1}`,
            raDeg: item.raDeg,
            decDeg: item.decDeg,
            source: file.name,
            folder: folderName,
            exposureMin: sanitizeExposureMinutes(item.exposureMin),
            rMag: item.rMag
          },
          false
        );
        added += 1;
      } else if (item.name) {
        try {
          const resolved = await resolveTargetName(item.name);
          addTarget(
            {
              name: item.name,
              raDeg: resolved.raDeg,
              decDeg: resolved.decDeg,
              source: "SIMBAD",
              folder: folderName,
              exposureMin: sanitizeExposureMinutes(item.exposureMin),
              rMag: resolved.rMag
            },
            false
          );
          added += 1;
        } catch (error) {
          unresolved += 1;
        }
      }
    }
  }
  dom.fileInput.value = "";
  dom.importFilesBtn.disabled = false;
  finalizeTargetUpdates();
  if (added > 0) {
    setStatus(`Imported ${added} target(s).${unresolved ? ` ${unresolved} unresolved.` : ""}`, unresolved ? "warn" : "ok");
  } else {
    setStatus("No targets were imported.", "err");
  }
}

function handleCreateFolder() {
  const raw = dom.newFolderInput.value.trim();
  if (!raw) {
    setStatus("Enter a folder name first.", "warn");
    return;
  }
  const folder = sanitizeFolderName(raw);
  if (state.folders.some((item) => normalizeName(item) === normalizeName(folder))) {
    dom.folderSelect.value = state.folders.find((item) => normalizeName(item) === normalizeName(folder)) || folder;
    dom.newFolderInput.value = "";
    setStatus(`Folder "${folder}" already exists.`, "warn");
    return;
  }
  state.folders.push(folder);
  dom.newFolderInput.value = "";
  refreshFolderControls();
  dom.folderSelect.value = folder;
  state.addFolder = folder;
  saveState();
  setStatus(`Created folder "${folder}".`, "ok");
}

function deleteAllInFolder(folder) {
  const normalized = normalizeName(folder);
  if (!normalized) {
    return;
  }
  const before = state.targets.length;
  state.targets = state.targets.filter((target) => normalizeName(target.folder) !== normalized);
  const removed = before - state.targets.length;
  if (removed === 0) {
    setStatus(`Folder "${folder}" has no targets to delete.`, "warn");
    return;
  }
  state.plan = state.plan.filter((slot) => state.targets.some((target) => target.id === slot.targetId));
  if (!state.targets.some((target) => target.id === state.activeTargetId)) {
    state.activeTargetId = state.targets.length ? state.targets[0].id : null;
  }
  if (!state.targets.some((target) => target.id === state.focusTargetId)) {
    state.focusTargetId = state.activeTargetId;
  }
  if (!state.targets.some((target) => target.id === state.plotTargetId)) {
    state.plotTargetId = state.activeTargetId;
  }
  if (!state.targets.some((target) => target.id === popupPinnedTargetId)) {
    hideStarPopup();
  }
  if (normalizeName(folder) !== "unsorted") {
    state.folders = state.folders.filter((name) => normalizeName(name) !== normalized);
  }
  finalizeTargetUpdates();
  updatePlanUI();
  renderAirmassPlot();
  renderPlanBoard();
  setStatus(`Deleted ${removed} target(s) in "${folder}".`, "warn");
}

function parseTargetText(rawText) {
  const lines = rawText.split(/\r?\n/);
  const items = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }
    if (trimmed.includes(",")) {
      const cells = splitCsv(trimmed);
      if (!cells.length) {
        continue;
      }
      if (cells.join(" ").toLowerCase().includes("name") && cells.join(" ").toLowerCase().includes("ra")) {
        continue;
      }
      if (cells.length >= 3) {
        const raDeg = parseRa(cells[1]);
        const decDeg = parseDec(cells[2]);
        const exposureMin = cells.length >= 4 ? sanitizeExposureMinutes(cells[3]) : undefined;
        const rMag = cells.length >= 5 ? coerceMagnitude(cells[4]) : NaN;
        if (Number.isFinite(raDeg) && Number.isFinite(decDeg)) {
          items.push({ name: cells[0].trim(), raDeg, decDeg, exposureMin, rMag: Number.isFinite(rMag) ? rMag : undefined });
          continue;
        }
      }
      const fallbackExposure = cells.length >= 4 ? sanitizeExposureMinutes(cells[3]) : undefined;
      items.push({ name: cells[0].trim(), exposureMin: fallbackExposure });
      continue;
    }
    const parsedWhitespace = parseWhitespaceTargetLine(trimmed);
    if (parsedWhitespace) {
      items.push(parsedWhitespace);
      continue;
    }
    items.push({ name: trimmed });
  }
  return items;
}

function parseWhitespaceTargetLine(line) {
  const bits = line.split(/\s+/);
  if (bits.length < 3) {
    return null;
  }
  const maybeRMag = coerceMagnitude(bits[bits.length - 1]);
  const maybeExposure = Number(bits[bits.length - 2]);
  const hasExposureAndRMag = Number.isFinite(maybeExposure) && Number.isFinite(maybeRMag) && bits.length >= 5;
  const maybeExposureOnly = Number(bits[bits.length - 1]);
  const hasExposure = hasExposureAndRMag || (Number.isFinite(maybeExposureOnly) && bits.length >= 4);
  const decIndex = hasExposureAndRMag ? bits.length - 3 : hasExposure ? bits.length - 2 : bits.length - 1;
  const raIndex = decIndex - 1;
  if (raIndex < 1) {
    return null;
  }
  const raToken = bits[raIndex];
  const decToken = bits[decIndex];
  const raNumeric = Number.parseFloat(raToken);
  const decNumeric = Number.parseFloat(decToken);
  const raLooksLikeCoord = /[:hms]/i.test(raToken) || (Number.isFinite(raNumeric) && Math.abs(raNumeric) <= 360);
  const decLooksLikeCoord =
    /[d°'":]/i.test(decToken) || /^[+-]/.test(decToken) || (Number.isFinite(decNumeric) && Math.abs(decNumeric) <= 90);
  if (!raLooksLikeCoord || !decLooksLikeCoord) {
    return null;
  }
  const raDeg = parseRa(bits[raIndex]);
  const decDeg = parseDec(bits[decIndex]);
  if (!Number.isFinite(raDeg) || !Number.isFinite(decDeg)) {
    return null;
  }
  const name = bits.slice(0, raIndex).join(" ").trim();
  if (!name) {
    return null;
  }
  return {
    name,
    raDeg,
    decDeg,
    exposureMin: hasExposure ? sanitizeExposureMinutes(hasExposureAndRMag ? maybeExposure : maybeExposureOnly) : undefined,
    rMag: hasExposureAndRMag ? maybeRMag : undefined
  };
}

function splitCsv(line) {
  const values = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (char === "," && !inQuotes) {
      values.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }
  values.push(current.trim());
  return values;
}

function parseRa(value) {
  if (!value) {
    return NaN;
  }
  const text = String(value).trim();
  if (!text) {
    return NaN;
  }
  if (/[hms:]/i.test(text) || text.split(/\s+/).length >= 2) {
    const sexaHours = parseSexagesimal(text, true);
    if (Number.isFinite(sexaHours)) {
      return normalizeDeg(sexaHours * 15);
    }
  }
  const numeric = Number.parseFloat(text);
  if (!Number.isFinite(numeric)) {
    return NaN;
  }
  if (Math.abs(numeric) <= 24) {
    return normalizeDeg(numeric * 15);
  }
  return normalizeDeg(numeric);
}

function parseDec(value) {
  if (!value) {
    return NaN;
  }
  const text = String(value).trim();
  if (!text) {
    return NaN;
  }
  if (/[d°'":]/i.test(text) || text.split(/\s+/).length >= 2) {
    const sexaDeg = parseSexagesimal(text, false);
    if (Number.isFinite(sexaDeg)) {
      return clamp(sexaDeg, -90, 90);
    }
  }
  const numeric = Number.parseFloat(text);
  if (!Number.isFinite(numeric)) {
    return NaN;
  }
  return clamp(numeric, -90, 90);
}

function parseSexagesimal(text, isRa) {
  const clean = text
    .trim()
    .toLowerCase()
    .replace(/[hmsd°'"]/g, " ")
    .replace(/:/g, " ");
  const parts = clean.split(/\s+/).filter(Boolean);
  if (!parts.length) {
    return NaN;
  }
  if (isRa) {
    const h = Number.parseFloat(parts[0]);
    const m = Number.parseFloat(parts[1] || "0");
    const s = Number.parseFloat(parts[2] || "0");
    if (![h, m, s].every(Number.isFinite)) {
      return NaN;
    }
    return h + m / 60 + s / 3600;
  }
  const sign = String(parts[0]).startsWith("-") ? -1 : 1;
  const d = Math.abs(Number.parseFloat(parts[0]));
  const m = Number.parseFloat(parts[1] || "0");
  const s = Number.parseFloat(parts[2] || "0");
  if (![d, m, s].every(Number.isFinite)) {
    return NaN;
  }
  return sign * (d + m / 60 + s / 3600);
}

async function resolveTargetName(rawName) {
  const name = rawName.trim();
  const fallback = FALLBACK_CATALOG[normalizeName(name)];
  if (fallback) {
    return {
      name: fallback.name,
      raDeg: fallback.raDeg,
      decDeg: fallback.decDeg,
      source: "Fallback Catalog"
    };
  }
  const encoded = encodeURIComponent(name);
  const sesameUrl = `https://cds.unistra.fr/cgi-bin/nph-sesame/-oxp/SNV?${encoded}`;
  const simbadUrl = `https://simbad.u-strasbg.fr/simbad/sim-id?Ident=${encoded}&output.format=ASCII`;
  const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(sesameUrl)}`;
  const endpoints = [
    { url: sesameUrl, source: "SIMBAD/Sesame" },
    { url: simbadUrl, source: "SIMBAD" },
    { url: proxyUrl, source: "SIMBAD (proxy)" }
  ];
  for (const endpoint of endpoints) {
    try {
      const text = await fetchTextWithTimeout(endpoint.url, 7000);
      const parsed = parseResolverResponse(text, name);
      if (parsed) {
        return {
          name: parsed.name || name,
          raDeg: parsed.raDeg,
          decDeg: parsed.decDeg,
          source: endpoint.source,
          rMag: parsed.rMag
        };
      }
    } catch (error) {
      continue;
    }
  }
  throw new Error("Resolution failed");
}

function parseResolverResponse(body, fallbackName) {
  if (!body || typeof body !== "string") {
    return null;
  }
  const rMag = extractRMagFromResolver(body);
  const raDegTag = body.match(/<jradeg>\s*([-+0-9.]+)\s*<\/jradeg>/i);
  const decDegTag = body.match(/<jdedeg>\s*([-+0-9.]+)\s*<\/jdedeg>/i);
  if (raDegTag && decDegTag) {
    return {
      name: extractNameFromResolver(body) || fallbackName,
      raDeg: normalizeDeg(Number.parseFloat(raDegTag[1])),
      decDeg: clamp(Number.parseFloat(decDegTag[1]), -90, 90),
      rMag
    };
  }
  const jPos = body.match(/<jpos>\s*([-+0-9.]+)\s+([-+0-9.]+)\s*<\/jpos>/i);
  if (jPos) {
    return {
      name: extractNameFromResolver(body) || fallbackName,
      raDeg: normalizeDeg(Number.parseFloat(jPos[1])),
      decDeg: clamp(Number.parseFloat(jPos[2]), -90, 90),
      rMag
    };
  }
  const percentJ = body.match(/^%J\s+([-+0-9.]+)\s+([-+0-9.]+)/m);
  if (percentJ) {
    return {
      name: extractNameFromResolver(body) || fallbackName,
      raDeg: normalizeDeg(Number.parseFloat(percentJ[1])),
      decDeg: clamp(Number.parseFloat(percentJ[2]), -90, 90),
      rMag
    };
  }
  const simbadCoord = body.match(
    /Coordinates\(ICRS[^)]*\):\s*([0-9]{1,2})\s+([0-9]{1,2})\s+([0-9.]+)\s+([+\-][0-9]{1,2})\s+([0-9]{1,2})\s+([0-9.]+)/i
  );
  if (simbadCoord) {
    const raHours =
      Number.parseFloat(simbadCoord[1]) +
      Number.parseFloat(simbadCoord[2]) / 60 +
      Number.parseFloat(simbadCoord[3]) / 3600;
    const sign = simbadCoord[4].startsWith("-") ? -1 : 1;
    const decAbs =
      Math.abs(Number.parseFloat(simbadCoord[4])) +
      Number.parseFloat(simbadCoord[5]) / 60 +
      Number.parseFloat(simbadCoord[6]) / 3600;
    return {
      name: extractNameFromResolver(body) || fallbackName,
      raDeg: normalizeDeg(raHours * 15),
      decDeg: clamp(sign * decAbs, -90, 90),
      rMag
    };
  }
  return null;
}

function extractRMagFromResolver(body) {
  const patterns = [
    /<mag[^>]*(?:band|filter|name)=["']?R["']?[^>]*>\s*([-+]?\d+(?:\.\d+)?)/i,
    /<Rmag>\s*([-+]?\d+(?:\.\d+)?)\s*<\/Rmag>/i,
    /Flux\s+R\s*:?\s*([-+]?\d+(?:\.\d+)?)/i,
    /\bR\s*=\s*([-+]?\d+(?:\.\d+)?)/i
  ];
  for (const pattern of patterns) {
    const match = body.match(pattern);
    if (match) {
      const value = coerceMagnitude(match[1]);
      if (Number.isFinite(value)) {
        return value;
      }
    }
  }
  return undefined;
}

function extractNameFromResolver(body) {
  const oname = body.match(/<oname>\s*([^<]+)\s*<\/oname>/i);
  if (oname) {
    return oname[1].trim();
  }
  const idLine = body.match(/^%I\s+(.+)$/m);
  if (idLine) {
    return idLine[1].trim();
  }
  return "";
}

async function fetchTextWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.text();
  } finally {
    clearTimeout(timer);
  }
}

function addTarget(targetData, refresh = true) {
  const folder = sanitizeFolderName(targetData.folder || "Unsorted");
  if (!state.folders.some((item) => normalizeName(item) === normalizeName(folder))) {
    state.folders.push(folder);
  }
  const rMag = coerceMagnitude(targetData.rMag);
  const target = {
    id: makeId(),
    name: targetData.name || `Target ${state.targets.length + 1}`,
    raDeg: normalizeDeg(targetData.raDeg),
    decDeg: clamp(targetData.decDeg, -90, 90),
    source: targetData.source || "Manual",
    done: false,
    highlight: true,
    exposureMin: sanitizeExposureMinutes(targetData.exposureMin),
    folder,
    rMag: Number.isFinite(rMag) ? rMag : undefined,
    color: pickTargetColor(state.targets.length)
  };
  state.targets.push(target);
  state.activeTargetId = target.id;
  state.focusTargetId = target.id;
  state.plotTargetId = target.id;
  if (refresh) {
    finalizeTargetUpdates();
  }
}

function removeTarget(targetId) {
  const index = state.targets.findIndex((target) => target.id === targetId);
  if (index === -1) {
    return;
  }
  const removed = state.targets[index];
  state.targets.splice(index, 1);
  if (state.activeTargetId === removed.id) {
    state.activeTargetId = state.targets.length ? state.targets[0].id : null;
  }
  if (state.focusTargetId === removed.id) {
    state.focusTargetId = state.activeTargetId;
  }
  if (state.plotTargetId === removed.id) {
    state.plotTargetId = state.activeTargetId;
  }
  if (popupPinnedTargetId === removed.id) {
    hideStarPopup();
  }
  state.plan = state.plan.filter((slot) => slot.targetId !== removed.id);
  finalizeTargetUpdates();
  updatePlanUI();
  setStatus(`Removed ${removed.name}.`, "warn");
}

function finalizeTargetUpdates() {
  refreshFolderControls();
  updatePlotTargetOptions();
  refreshTargetsTable();
  updateActiveTargetPanel();
  renderSky();
  renderAirmassPlot();
  renderPlanBoard();
  saveState();
}

function handleOptimizePlan() {
  const obs = getSelectedObservatory();
  const targets = getPlannerTargets();
  if (!targets.length) {
    state.plan = [];
    updatePlanUI();
    renderPlanBoard();
    setStatus("No pending targets available for planning.", "warn");
    return;
  }
  const analyses = [];
  for (const target of targets) {
    const analysis = analyzeTargetForNight(target, obs);
    if (analysis) {
      analyses.push(analysis);
    }
  }
  if (!analyses.length) {
    state.plan = [];
    updatePlanUI();
    renderPlanBoard();
    setStatus("No targets meet this telescope's visibility constraints tonight.", "warn");
    return;
  }
  const slots = buildOptimalPlanSlots(analyses, obs, false);
  state.plan = slots;
  updatePlanUI();
  renderPlanBoard();
  saveState();
  if (slots.length) {
    setStatus(`Built ${slots.length} mock slot(s) for ${obs.shortName}.`, "ok");
  } else {
    setStatus("Planner could not place valid slots under constraints.", "warn");
  }
}

function analyzeTargetForNight(target, obs) {
  const maxAirmass = getEffectiveMaxAirmass(obs);
  let riseMinute = null;
  let setMinute = null;
  let bestAlt = -999;
  let bestMinute = 0;
  for (let minute = 0; minute < 1440; minute += 4) {
    const date = buildDateFromIsoMinute(state.dateISO, minute);
    const altAz = raDecToAltAz(target.raDeg, target.decDeg, date, obs.lat, obs.lon);
    const x = airmassFromAlt(altAz.altDeg);
    const visible = altAz.altDeg >= obs.minAlt && x <= maxAirmass;
    if (visible) {
      if (riseMinute === null) {
        riseMinute = minute;
      }
      setMinute = minute;
      if (altAz.altDeg > bestAlt) {
        bestAlt = altAz.altDeg;
        bestMinute = minute;
      }
    }
  }
  if (riseMinute === null || setMinute === null) {
    return null;
  }
  return {
    target,
    riseMinute,
    setMinute,
    bestMinute,
    bestAlt
  };
}

function buildOptimalPlanSlots(analyses, obs, includeFallback) {
  const nightWindow = computeAstronomicalNightWindow(obs);
  const nightStart = nightWindow.startMinute;
  const nightEnd = nightWindow.endMinute;
  const candidates = analyses
    .map((analysis) => {
      const duration = sanitizeExposureMinutes(analysis.target.exposureMin);
      const segments = computeVisibilitySegments(analysis.target, obs, nightStart, nightEnd, 4);
      const segmentCandidates = [];
      for (const segment of segments) {
        const earliest = segment.startMinute;
        const latest = Math.min(segment.endMinute - duration, nightEnd - duration);
        if (latest < earliest) {
          continue;
        }
        const bestMinute = clamp(analysis.bestMinute, segment.startMinute, segment.endMinute);
        segmentCandidates.push({
          analysis,
          target: analysis.target,
          duration,
          earliest,
          latest,
          bestMinute
        });
      }
      return segmentCandidates;
    })
    .flat()
    .filter(Boolean);

  candidates.sort((a, b) => a.bestMinute - b.bestMinute);
  const remaining = candidates.slice();
  const slots = [];
  let cursor = nightStart;

  while (remaining.length) {
    const viable = remaining.filter((candidate) => candidate.latest >= cursor);
    if (!viable.length) {
      break;
    }

    let bestPick = null;
    for (const candidate of viable) {
      const desiredStart = Math.max(cursor, candidate.earliest);
      const moonSafeStart = findMoonSafeStart(candidate, desiredStart, obs, cursor, false);
      if (moonSafeStart === null) {
        continue;
      }
      const idle = Math.max(0, moonSafeStart - cursor);
      const midpoint = moonSafeStart + candidate.duration / 2;
      const bestOffset = Math.abs(midpoint - candidate.bestMinute);
      const urgency = Math.max(0, candidate.latest - moonSafeStart);
      const score = idle * 5 + bestOffset * 0.45 + urgency * 0.03 - candidate.analysis.bestAlt * 0.04;
      if (!bestPick || score < bestPick.score) {
        bestPick = {
          candidate,
          startMinute: moonSafeStart,
          score
        };
      }
    }

    if (!bestPick) {
      const nextStart = viable.reduce((best, candidate) => Math.min(best, Math.max(cursor + 1, candidate.earliest)), Number.POSITIVE_INFINITY);
      if (!Number.isFinite(nextStart) || nextStart > nightEnd) {
        break;
      }
      cursor = nextStart;
      continue;
    }

    const slot = buildSlotFromStart(bestPick.candidate.analysis, bestPick.startMinute, bestPick.candidate.duration, obs);
    if (slot) {
      slots.push(slot);
      cursor = slot.endMinute + obs.gapMinutes;
    } else {
      cursor += 4;
    }
    const idx = remaining.indexOf(bestPick.candidate);
    if (idx >= 0) {
      remaining.splice(idx, 1);
    }
  }

  if (includeFallback && remaining.length) {
    for (const candidate of remaining) {
      const aroundBest = clamp(candidate.bestMinute - Math.floor(candidate.duration / 2), candidate.earliest, candidate.latest);
      let fallbackStart = findMoonSafeStart(candidate, aroundBest, obs, candidate.earliest, true);
      if (fallbackStart === null) {
        fallbackStart = aroundBest;
      }
      const slot = buildSlotFromStart(candidate.analysis, fallbackStart, candidate.duration, obs);
      if (slot) {
        slot.fallback = true;
        slots.push(slot);
      }
    }
  }

  slots.sort((a, b) => a.startMinute - b.startMinute);
  return slots;
}

function findMoonSafeStart(candidate, desiredStart, obs, minStart, allowMoonViolation) {
  const step = 4;
  const startFloor = Math.max(candidate.earliest, minStart, Math.floor(desiredStart));
  for (let minute = startFloor; minute <= candidate.latest; minute += step) {
    if (!isTargetVisibleForDuration(candidate.target, minute, candidate.duration, obs, 2)) {
      continue;
    }
    if (isMoonSafeForSlot(candidate.target, minute, candidate.duration, obs) || allowMoonViolation) {
      return minute;
    }
  }
  for (let minute = Math.min(candidate.latest, startFloor - step); minute >= candidate.earliest; minute -= step) {
    if (!isTargetVisibleForDuration(candidate.target, minute, candidate.duration, obs, 2)) {
      continue;
    }
    if (isMoonSafeForSlot(candidate.target, minute, candidate.duration, obs) || allowMoonViolation) {
      return minute;
    }
  }
  return null;
}

function isMoonSafeForSlot(target, startMinute, duration, obs) {
  const midpointMinute = startMinute + Math.floor(duration / 2);
  const midpointDate = buildDateFromIsoMinute(state.dateISO, midpointMinute);
  const moon = getMoonData(midpointDate, obs);
  const moonSeparation = angularSeparationDeg(target.raDeg, target.decDeg, moon.raDeg, moon.decDeg);
  return moonSeparation >= obs.minMoonSeparation;
}

function buildSlotFromStart(analysis, startMinute, duration, obs) {
  if (!isTargetVisibleForDuration(analysis.target, startMinute, duration, obs, 2)) {
    return null;
  }
  const endMinute = startMinute + duration;
  const midpoint = Math.floor((startMinute + endMinute) / 2);
  const midpointDate = buildDateFromIsoMinute(state.dateISO, midpoint);
  const moon = getMoonData(midpointDate, obs);
  const moonSeparation = angularSeparationDeg(analysis.target.raDeg, analysis.target.decDeg, moon.raDeg, moon.decDeg);
  const middleAltAz = raDecToAltAz(analysis.target.raDeg, analysis.target.decDeg, midpointDate, obs.lat, obs.lon);
  return {
    targetId: analysis.target.id,
    name: analysis.target.name,
    startMinute,
    endMinute,
    midpointMinute: midpoint,
    bestMinute: analysis.bestMinute,
    bestAlt: analysis.bestAlt,
    durationMinutes: duration,
    midpointAlt: middleAltAz.altDeg,
    midpointAirmass: airmassFromAlt(middleAltAz.altDeg),
    moonSeparation
  };
}

function updatePlanUI() {
  updatePlanScopeText();
  if (!state.plan.length) {
    dom.planMeta.textContent = "No plan generated yet.";
    dom.planList.innerHTML = "";
    return;
  }
  const obs = getSelectedObservatory();
  dom.planMeta.textContent = `${state.plan.length} slot(s) for ${obs.shortName} on ${state.dateISO}.`;
  const html = state.plan
    .map((slot) => {
      const startDate = buildDateFromIsoMinute(state.dateISO, slot.startMinute);
      const endDate = buildDateFromIsoMinute(state.dateISO, slot.endMinute);
      return `
        <li>
          <div class="plan-line">
            <strong>${escapeHtml(slot.name)}</strong>
            <span class="chip">${formatUtcShortTime(startDate)}-${formatUtcShortTime(endDate)} UT</span>
            <span class="chip">Tel ${formatLocalShort(startDate, obs.timeZone)}-${formatLocalShort(endDate, obs.timeZone)} ${getTimeZoneAbbrev(startDate, obs.timeZone)}</span>
            <span class="chip">Laptop ${formatLaptopLocalShort(startDate)}-${formatLaptopLocalShort(endDate)} ${getLaptopTimeZoneAbbrev(startDate)}</span>
            <span class="chip">Exp ${Math.max(1, Math.round((slot.durationMinutes || slot.endMinute - slot.startMinute || 0)))}m</span>
            <span class="chip">Alt ${slot.midpointAlt.toFixed(1)}°</span>
            <span class="chip">X ${slot.midpointAirmass.toFixed(2)}</span>
            <span class="chip">Moon ${slot.moonSeparation.toFixed(0)}°</span>
            <button type="button" class="tiny-btn mark-plan-done-btn" data-id="${escapeAttr(slot.targetId)}">Mark Done</button>
          </div>
        </li>
      `;
    })
    .join("");
  dom.planList.innerHTML = html;
}

function handleGeneratePlanPdf() {
  if (!state.targets.length) {
    setStatus("Add targets before creating an observing report.", "warn");
    return;
  }
  if (!state.plan.length) {
    handleOptimizePlan();
  }
  const obs = getSelectedObservatory();
  const report = buildObservingReport(obs);
  const pdfText = createObservingReportPdf(report);
  const filename = `mock_observing_plan_${state.dateISO}_${obs.shortName.replace(/\s+/g, "_").toLowerCase()}.pdf`;
  downloadPdf(filename, pdfText);
  setStatus(`Created PDF report for ${obs.shortName} on ${state.dateISO}.`, "ok");
}

function buildObservingReport(obs) {
  const nightWindow = computeAstronomicalNightWindow(obs);
  const targets = state.targets.slice();
  const planSlots = state.plan.slice().sort((a, b) => a.startMinute - b.startMinute);
  return {
    title: "Mock Observing Plan",
    quote: "Fear is a mile wide and an inch deep.",
    generatedAt: new Date(),
    observatory: obs,
    dateISO: state.dateISO,
    nightWindow,
    targets,
    planSlots,
    backupTargets: buildBackupPlanTargets(obs, 10)
  };
}

function buildBackupPlanTargets(obs, limit = 10) {
  const nightWindow = computeAstronomicalNightWindow(obs);
  const pool = state.targets.filter((target) => !target.done);
  const targets = pool.length ? pool : state.targets;
  return targets
    .map((target) => {
      const analysis = analyzeTargetForNight(target, obs);
      if (!analysis) {
        return null;
      }
      const segments = computeVisibilitySegments(target, obs, nightWindow.startMinute, nightWindow.endMinute, 4);
      const visibleMinutes = segments.reduce((sum, segment) => sum + Math.max(0, segment.endMinute - segment.startMinute), 0);
      const bestDate = buildDateFromIsoMinute(state.dateISO, analysis.bestMinute);
      const bestAirmass = airmassFromAlt(analysis.bestAlt);
      const magnitude = getTargetMagnitude(target);
      const magnitudeScore = Number.isFinite(magnitude) ? -magnitude * 45 : 0;
      const score = magnitudeScore + analysis.bestAlt * 1.4 + visibleMinutes * 0.03 - bestAirmass * 8;
      return {
        target,
        bestMinute: analysis.bestMinute,
        bestDate,
        bestAlt: analysis.bestAlt,
        bestAirmass,
        visibleMinutes,
        magnitude,
        score
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function getTargetMagnitude(target) {
  const candidates = [target.rMag, target.rmag, target.magR, target.rMagnitude, target.mag, target.magnitude, target.vmag, target.vMag, target.Vmag];
  for (const value of candidates) {
    const numeric = coerceMagnitude(value);
    if (Number.isFinite(numeric)) {
      return numeric;
    }
  }
  return NaN;
}

function coerceMagnitude(value) {
  if (value === undefined || value === null || value === "") {
    return NaN;
  }
  const numeric = Number.parseFloat(String(value).replace(/[^\d.+-]/g, ""));
  return Number.isFinite(numeric) ? numeric : NaN;
}

function getBestAirmassForSlot(slot, target, obs, isoDate) {
  if (!target) {
    return Number.isFinite(slot.midpointAirmass) ? slot.midpointAirmass : NaN;
  }
  const startMinute = Math.min(slot.startMinute, slot.endMinute);
  const endMinute = Math.max(slot.startMinute, slot.endMinute);
  const step = 2;
  let bestAirmass = Number.POSITIVE_INFINITY;
  for (let minute = startMinute; minute <= endMinute; minute += step) {
    const date = buildDateFromIsoMinute(isoDate, minute);
    const altAz = raDecToAltAz(target.raDeg, target.decDeg, date, obs.lat, obs.lon);
    const x = airmassFromAlt(altAz.altDeg);
    if (Number.isFinite(x) && x < bestAirmass) {
      bestAirmass = x;
    }
  }
  if ((endMinute - startMinute) % step !== 0) {
    const date = buildDateFromIsoMinute(isoDate, endMinute);
    const altAz = raDecToAltAz(target.raDeg, target.decDeg, date, obs.lat, obs.lon);
    const x = airmassFromAlt(altAz.altDeg);
    if (Number.isFinite(x) && x < bestAirmass) {
      bestAirmass = x;
    }
  }
  if (Number.isFinite(bestAirmass)) {
    return bestAirmass;
  }
  return Number.isFinite(slot.midpointAirmass) ? slot.midpointAirmass : NaN;
}

function createObservingReportPdf(report) {
  const obs = report.observatory;
  const elements = [];
  const add = (text, options = {}) => elements.push({ text, ...options });
  const addSpace = (height = 8) => elements.push({ spacer: height });
  const addRule = () => elements.push({ rule: true });
  const nightStartDate = buildDateFromIsoMinute(report.dateISO, report.nightWindow.startMinute);
  const nightEndDate = buildDateFromIsoMinute(report.dateISO, report.nightWindow.endMinute);
  const targetsById = new Map(report.targets.map((target) => [target.id, target]));

  add(report.title, { size: 20, bold: true });
  add(`Date: ${report.dateISO}   Observatory: ${obs.name}`, { size: 11 });
  add(`Generated: ${formatUtcShort(report.generatedAt)} / Laptop ${formatLaptopLocal(report.generatedAt)} ${getLaptopTimeZoneAbbrev(report.generatedAt)}`, { size: 9 });
  addSpace(4);
  add(`"${report.quote}"`, { size: 12, bold: true, italic: true });
  addRule();

  add("Night And Observatory", { size: 14, bold: true });
  add(`Astronomical night: ${formatUtcShortTime(nightStartDate)}-${formatUtcShortTime(nightEndDate)} UT; telescope ${formatLocalShort(nightStartDate, obs.timeZone)}-${formatLocalShort(nightEndDate, obs.timeZone)} ${getTimeZoneAbbrev(nightStartDate, obs.timeZone)}`);
  add(`Site: lat ${obs.lat.toFixed(4)} deg, lon ${obs.lon.toFixed(4)} deg; min altitude ${obs.minAlt} deg; max airmass ${getEffectiveMaxAirmass(obs).toFixed(2)}; moon separation ${obs.minMoonSeparation} deg.`);
  addSpace();

  add("Mock Plan For The Night", { size: 14, bold: true });
  if (report.planSlots.length) {
    add("Target                         UT              Telescope       Laptop          Exp  Best X", { mono: true, size: 8.5, bold: true });
    for (const slot of report.planSlots) {
      const target = targetsById.get(slot.targetId);
      const startDate = buildDateFromIsoMinute(report.dateISO, slot.startMinute);
      const endDate = buildDateFromIsoMinute(report.dateISO, slot.endMinute);
      const bestAirmass = getBestAirmassForSlot(slot, target, obs, report.dateISO);
      add(
        [
          padPdfText(slot.name, 30),
          padPdfText(`${formatUtcShortTime(startDate)}-${formatUtcShortTime(endDate)}`, 15),
          padPdfText(`${formatLocalShort(startDate, obs.timeZone)}-${formatLocalShort(endDate, obs.timeZone)}`, 16),
          padPdfText(`${formatLaptopLocalShort(startDate)}-${formatLaptopLocalShort(endDate)}`, 16),
          padPdfText(`${Math.round(slot.durationMinutes)}m`, 5),
          Number.isFinite(bestAirmass) ? bestAirmass.toFixed(2) : "n/a"
        ].join(" "),
        { mono: true, size: 8.5 }
      );
    }
  } else {
    add("No valid exposure slots were placed under the current constraints.");
  }
  addSpace();

  add("Backup Plan: Brightest / Most Reliable Targets", { size: 14, bold: true });
  add("Ranked by SIMBAD R magnitude when available, then high-altitude, low-airmass targets with longer usable windows.", { size: 9 });
  if (report.backupTargets.length) {
    add("Target                         Best UT  Best Tel  Alt   X    Window  Rmag", { mono: true, size: 8.5, bold: true });
    for (const item of report.backupTargets) {
      add(
        [
          padPdfText(item.target.name, 30),
          padPdfText(formatUtcShortTime(item.bestDate), 8),
          padPdfText(formatLocalShort(item.bestDate, obs.timeZone), 9),
          padPdfText(`${item.bestAlt.toFixed(1)}`, 5),
          padPdfText(`${item.bestAirmass.toFixed(2)}`, 5),
          padPdfText(`${Math.round(item.visibleMinutes)}m`, 7),
          Number.isFinite(item.magnitude) ? item.magnitude.toFixed(2) : "n/a"
        ].join(" "),
        { mono: true, size: 8.5 }
      );
    }
  } else {
    add("No backup targets meet the current visibility constraints.");
  }

  return buildSimplePdf(elements);
}

function buildSimplePdf(elements) {
  const pageWidth = 612;
  const pageHeight = 792;
  const margin = 42;
  const contentWidth = pageWidth - margin * 2;
  const pages = [];
  let commands = [];
  let y = pageHeight - margin;

  const newPage = () => {
    if (commands.length) {
      pages.push(commands);
    }
    commands = [];
    y = pageHeight - margin;
  };
  const ensureSpace = (height) => {
    if (y - height < margin) {
      newPage();
    }
  };
  const drawText = (text, options = {}) => {
    const size = options.size || 10;
    const lineHeight = size * 1.35;
    const font = options.mono ? "F3" : options.bold && options.italic ? "F5" : options.italic ? "F4" : options.bold ? "F2" : "F1";
    const wrapped = wrapPdfText(text, contentWidth, size, options.mono);
    for (const line of wrapped) {
      ensureSpace(lineHeight);
      commands.push(`BT /${font} ${size} Tf ${margin} ${y.toFixed(2)} Td (${escapePdfText(line)}) Tj ET`);
      y -= lineHeight;
    }
    y -= options.after || 1;
  };

  for (const element of elements) {
    if (element.spacer) {
      y -= element.spacer;
      continue;
    }
    if (element.rule) {
      ensureSpace(14);
      commands.push(`${margin} ${y.toFixed(2)} m ${pageWidth - margin} ${y.toFixed(2)} l S`);
      y -= 12;
      continue;
    }
    drawText(element.text || "", element);
  }
  if (commands.length) {
    pages.push(commands);
  }
  return assemblePdf(pages, pageWidth, pageHeight);
}

function assemblePdf(pages, pageWidth, pageHeight) {
  const objects = [];
  const fontObjects = [
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-BoldOblique >>"
  ];
  objects[3] = fontObjects[0];
  objects[4] = fontObjects[1];
  objects[5] = fontObjects[2];
  objects[6] = fontObjects[3];
  objects[7] = fontObjects[4];
  const pageIds = [];
  pages.forEach((pageCommands, index) => {
    const contentId = 8 + index * 2;
    const pageId = contentId + 1;
    const stream = pageCommands.join("\n");
    objects[contentId] = `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`;
    objects[pageId] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R /F4 6 0 R /F5 7 0 R >> >> /Contents ${contentId} 0 R >>`;
    pageIds.push(pageId);
  });
  objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
  objects[2] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

  let output = "%PDF-1.4\n";
  const offsets = [0];
  for (let id = 1; id < objects.length; id += 1) {
    offsets[id] = output.length;
    output += `${id} 0 obj\n${objects[id]}\nendobj\n`;
  }
  const xrefOffset = output.length;
  output += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  for (let id = 1; id < objects.length; id += 1) {
    output += `${String(offsets[id]).padStart(10, "0")} 00000 n \n`;
  }
  output += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return output;
}

function wrapPdfText(text, maxWidth, fontSize, mono = false) {
  const clean = cleanPdfText(String(text || ""));
  const approxCharWidth = fontSize * (mono ? 0.61 : 0.52);
  const maxChars = Math.max(18, Math.floor(maxWidth / approxCharWidth));
  if (mono) {
    const chunks = [];
    for (let i = 0; i < clean.length; i += maxChars) {
      chunks.push(clean.slice(i, i + maxChars).replace(/\s+$/g, ""));
    }
    return chunks.length ? chunks : [""];
  }
  const words = clean.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    if (!word) {
      continue;
    }
    if (word.length > maxChars) {
      if (line) {
        lines.push(line);
        line = "";
      }
      for (let i = 0; i < word.length; i += maxChars) {
        lines.push(word.slice(i, i + maxChars));
      }
      continue;
    }
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) {
    lines.push(line);
  }
  return lines.length ? lines : [""];
}

function cleanPdfText(text) {
  return text
    .normalize("NFKD")
    .replace(/[^\x20-\x7E]/g, "")
    .trim();
}

function escapePdfText(text) {
  return cleanPdfText(text).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function padPdfText(text, width) {
  const clean = cleanPdfText(String(text || ""));
  if (clean.length > width) {
    return clean.slice(0, Math.max(1, width - 1)) + ".";
  }
  return clean.padEnd(width, " ");
}

function downloadPdf(filename, pdfText) {
  const blob = new Blob([pdfText], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function setKeckSkyTab(observatoryId) {
  if (!KECK_POINTING_LIMITS[observatoryId]) {
    return;
  }
  state.observatoryId = observatoryId;
  dom.observatorySelect.value = observatoryId;
  setActiveTab(observatoryId === "keck-1" ? "sky-keck-1" : "sky-keck-2");
  updateEverything();
}

function setActiveTab(tab, save = true) {
  state.activeTab = ["airmass", "plan", "sky-keck-1", "sky-keck-2"].includes(tab) ? tab : "sky";
  const isSky = state.activeTab === "sky" || state.activeTab === "sky-keck-1" || state.activeTab === "sky-keck-2";
  const isKeck1 = state.activeTab === "sky-keck-1";
  const isKeck2 = state.activeTab === "sky-keck-2";
  const isAirmass = state.activeTab === "airmass";
  const isPlan = state.activeTab === "plan";
  dom.skyTabBtn.classList.toggle("active", state.activeTab === "sky");
  dom.skyKeck1TabBtn.classList.toggle("active", isKeck1);
  dom.skyKeck2TabBtn.classList.toggle("active", isKeck2);
  dom.airmassTabBtn.classList.toggle("active", isAirmass);
  dom.planTabBtn.classList.toggle("active", isPlan);
  dom.skyView.hidden = !isSky;
  dom.airmassView.hidden = !isAirmass;
  dom.planView.hidden = !isPlan;
  if (!isSky) {
    hideStarPopup();
    setTimeout(() => {
      if (isAirmass) {
        resizeAirmassCanvas();
        renderAirmassPlot();
      } else if (isPlan) {
        resizePlanCanvas();
        renderPlanBoard();
      }
    }, 0);
  }
  if (save) {
    saveState();
  }
}

function updatePlotTargetOptions() {
  const candidates = getDisplayTargets();
  const usable = candidates.length ? candidates : state.targets;
  dom.plotTargetSelect.innerHTML = usable
    .map((target) => `<option value="${escapeAttr(target.id)}">${escapeHtml(target.name)} (${escapeHtml(target.folder)})</option>`)
    .join("");
  if (!usable.length) {
    state.plotTargetId = null;
    dom.plotTargetSelect.value = "";
    return;
  }
  if (!usable.some((target) => target.id === state.plotTargetId)) {
    state.plotTargetId = state.activeTargetId && usable.some((target) => target.id === state.activeTargetId)
      ? state.activeTargetId
      : usable[0].id;
  }
  dom.plotTargetSelect.value = state.plotTargetId;
}

function getPlotTarget() {
  return state.targets.find((target) => target.id === state.plotTargetId) || null;
}

function handleSkyClick(event) {
  if (!renderedStars.length) {
    return;
  }
  const rect = dom.skyCanvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;
  let best = null;
  let bestDist = Number.POSITIVE_INFINITY;
  for (const star of renderedStars) {
    const dx = star.x - clickX;
    const dy = star.y - clickY;
    const dist = Math.hypot(dx, dy);
    if (dist < bestDist) {
      bestDist = dist;
      best = star;
    }
  }
  if (!best || bestDist > 14) {
    hideStarPopup();
    return;
  }
  state.activeTargetId = best.id;
  state.focusTargetId = best.id;
  state.plotTargetId = best.id;
  popupPinnedTargetId = best.id;
  refreshTargetsTable();
  updateActiveTargetPanel();
  updatePlotTargetOptions();
  renderAirmassPlot();
  saveState();
  showStarPopup(best.target, best, best.snapshot);
}

function showStarPopup(target, starPoint, snapshot) {
  if (!target || !starPoint) {
    hideStarPopup();
    return;
  }
  const obs = getSelectedObservatory();
  const snap = snapshot || computeSnapshot(target, getCurrentDateTime(), obs);
  dom.starPopupContent.innerHTML = `
    <strong>${escapeHtml(target.name)}</strong><br>
    RA: <code>${formatRa(target.raDeg)}</code> DEC: <code>${formatDec(target.decDeg)}</code><br>
    Requested exposure: <strong>${sanitizeExposureMinutes(target.exposureMin)} min</strong><br>
    Alt/Az: <strong>${snap.altDeg.toFixed(1)}°</strong> / <strong>${snap.azDeg.toFixed(1)}°</strong><br>
    Airmass: <strong>${Number.isFinite(snap.airmass) ? snap.airmass.toFixed(2) : "n/a"}</strong><br>
    Folder: <strong>${escapeHtml(target.folder)}</strong>
  `;
  const popupWidth = 220;
  const popupHeight = 118;
  const margin = 10;
  const desiredX = starPoint.x + 10;
  const desiredY = starPoint.y - popupHeight - 12;
  const left = clamp(desiredX, margin, canvasGeom.size - popupWidth - margin);
  const top = clamp(desiredY, margin, canvasGeom.size - popupHeight - margin);
  dom.starPopup.style.left = `${left}px`;
  dom.starPopup.style.top = `${top}px`;
  dom.starPopup.classList.remove("hidden");
}

function refreshStarPopupFromPinned(obs, now) {
  if (!popupPinnedTargetId || dom.starPopup.classList.contains("hidden")) {
    return;
  }
  const star = renderedStars.find((item) => item.id === popupPinnedTargetId);
  if (!star) {
    hideStarPopup();
    return;
  }
  const target = state.targets.find((item) => item.id === popupPinnedTargetId);
  if (!target) {
    hideStarPopup();
    return;
  }
  showStarPopup(target, star, computeSnapshot(target, now, obs));
}

function hideStarPopup() {
  popupPinnedTargetId = null;
  dom.starPopup.classList.add("hidden");
}

function resizeAirmassCanvas() {
  const wrapWidth = Math.floor((dom.airmassCanvas.parentElement && dom.airmassCanvas.parentElement.clientWidth) || 0);
  const fallbackWidth = Math.floor(Math.min(window.innerWidth * 0.88, 1100));
  const width = Math.max(560, wrapWidth || fallbackWidth);
  const height = Math.max(320, Math.floor(width * 0.4));
  const dpr = Math.min(3, (window.devicePixelRatio || 1) * 1.15);
  dom.airmassCanvas.width = Math.floor(width * dpr);
  dom.airmassCanvas.height = Math.floor(height * dpr);
  dom.airmassCanvas.style.height = `${height}px`;
  airmassCtx.setTransform(1, 0, 0, 1, 0, 0);
  airmassCtx.scale(dpr, dpr);
  plotGeom.width = width;
  plotGeom.height = height;
}

function resizePlanCanvas() {
  const wrapWidth = Math.floor((dom.planCanvas.parentElement && dom.planCanvas.parentElement.clientWidth) || 0);
  const fallbackWidth = Math.floor(Math.min(window.innerWidth * 0.88, 1100));
  const width = Math.max(560, wrapWidth || fallbackWidth);
  const scopeCount = Math.max((getPlannerTargets() || []).length, state.plan.length, 4);
  const rows = Math.max(4, scopeCount);
  const rowHeightPx = 30;
  const height = Math.max(360, Math.floor(178 + rows * rowHeightPx));
  const dpr = Math.min(3, (window.devicePixelRatio || 1) * 1.1);
  const pixelWidth = Math.floor(width * dpr);
  const pixelHeight = Math.floor(height * dpr);
  if (dom.planCanvas.width === pixelWidth && dom.planCanvas.height === pixelHeight) {
    planGeom.width = width;
    planGeom.height = height;
    return;
  }
  dom.planCanvas.width = pixelWidth;
  dom.planCanvas.height = pixelHeight;
  dom.planCanvas.style.height = `${height}px`;
  planCtx.setTransform(1, 0, 0, 1, 0, 0);
  planCtx.scale(dpr, dpr);
  planGeom.width = width;
  planGeom.height = height;
}

function renderPlanBoard() {
  if (!planCtx) {
    return;
  }
  updatePlanScopeText();
  resizePlanCanvas();
  const ctx = planCtx;
  const obs = getSelectedObservatory();
  const now = getCurrentDateTime();
  const w = planGeom.width;
  const h = planGeom.height;
  const nightWindow = computeSunBelowWindow(obs, 0);
  const nightStart = nightWindow.startMinute;
  const nightEnd = nightWindow.endMinute;
  const nightDuration = Math.max(60, nightWindow.durationMinutes);
  const candidates = getPlannerTargets();
  const analyses = candidates
    .map((target) => {
      const window = analyzeTargetForNight(target, obs);
      const visibilitySegments = computeVisibilitySegments(target, obs, nightStart, nightEnd, 4);
      return { target, window, visibilitySegments };
    })
    .filter((item) => item.window && item.visibilitySegments.length);
  analyses.sort((a, b) => {
    const aStart = a.visibilitySegments[0].startMinute;
    const bStart = b.visibilitySegments[0].startMinute;
    if (aStart !== bStart) {
      return aStart - bStart;
    }
    const aEnd = a.visibilitySegments[a.visibilitySegments.length - 1].endMinute;
    const bEnd = b.visibilitySegments[b.visibilitySegments.length - 1].endMinute;
    return aEnd - bEnd;
  });
  const optimizedDisplaySlots = buildOptimalPlanSlots(analyses.map((item) => item.window), obs, true);
  const optimizedDisplayByTarget = new Map(optimizedDisplaySlots.map((slot) => [slot.targetId, slot]));

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#c5cdd8";
  ctx.fillRect(0, 0, w, h);

  if (!analyses.length) {
    ctx.fillStyle = "#22395b";
    ctx.font = `15px "Space Grotesk", sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("No visible targets for the planner scope on this date.", w / 2, h / 2 - 8);
    ctx.fillText("Highlight a folder or change the date/observatory, then rebuild.", w / 2, h / 2 + 16);
    if (dom.planBoardSummary) {
      dom.planBoardSummary.textContent = "No visible targets for this planner scope.";
    }
    if (dom.planBoardNow) {
      dom.planBoardNow.textContent = `UT cursor: ${formatUtc(now)}.`;
    }
    return;
  }

  ctx.font = `12px "IBM Plex Mono", monospace`;
  let maxNameWidth = 0;
  for (const item of analyses) {
    maxNameWidth = Math.max(maxNameWidth, ctx.measureText(item.target.name).width);
  }
  const xMin = clamp(Math.ceil(maxNameWidth) + 18, 110, Math.min(320, Math.floor(w * 0.42)));
  const xMax = w - 24;
  const yMin = 108;
  const yMax = h - 60;
  const scrollTop = dom.planBoardWrap ? dom.planBoardWrap.scrollTop : 0;
  const stickyHeaderHeight = 86;
  const stickyHeaderTop = clamp(scrollTop, 0, Math.max(0, yMax - stickyHeaderHeight - 2));
  const stickyUtcTickY = stickyHeaderTop + 28;
  const stickyTelescopeTickY = stickyHeaderTop + 46;
  const stickyLaptopTickY = stickyHeaderTop + 64;
  const xFromAbsMinute = (minute) => {
    const rel = clamp(minute - nightStart, 0, nightDuration);
    return xMin + (rel / nightDuration) * (xMax - xMin);
  };
  const xFromRelMinute = (relMinute) => xMin + (clamp(relMinute, 0, nightDuration) / nightDuration) * (xMax - xMin);

  const rowHeight = (yMax - yMin) / analyses.length;
  drawPlanTwilightShading(ctx, obs, xFromAbsMinute, yMin, yMax, nightStart, nightEnd);
  for (let i = 0; i < analyses.length; i += 1) {
    const rowY = yMin + i * rowHeight;
    ctx.fillStyle = i % 2 === 0 ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.06)";
    ctx.fillRect(xMin, rowY, xMax - xMin, rowHeight);
  }

  const tickStep = nightDuration > 540 ? 90 : nightDuration > 330 ? 60 : 30;
  for (let rel = 0; rel <= nightDuration; rel += tickStep) {
    const x = xFromRelMinute(rel);
    ctx.beginPath();
    ctx.moveTo(x, yMin);
    ctx.lineTo(x, yMax);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = "#243b5d";
    ctx.font = `11px "IBM Plex Mono", monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(String(Math.round(rel)), x, yMax + 8);
  }

  for (let i = 0; i <= analyses.length; i += 1) {
    const y = yMin + i * rowHeight;
    ctx.beginPath();
    ctx.moveTo(xMin, y);
    ctx.lineTo(xMax, y);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.42)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  const slotByTarget = new Map(state.plan.map((slot) => [slot.targetId, slot]));
  const safeBarHeight = Math.max(4, Math.min(22, rowHeight * 0.78));
  for (let i = 0; i < analyses.length; i += 1) {
    const item = analyses[i];
    const target = item.target;
    const window = item.window;
    const visibilitySegments = item.visibilitySegments;
    const yCenter = yMin + i * rowHeight + rowHeight * 0.5;
    const barY = yCenter - safeBarHeight * 0.5;

    ctx.fillStyle = "#22395b";
    ctx.font = `12px "IBM Plex Mono", monospace`;
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(target.name, xMin - 6, yCenter);

    for (const segment of visibilitySegments) {
      const segStart = Math.max(nightStart, segment.startMinute);
      const segEnd = Math.min(nightEnd, segment.endMinute);
      if (segEnd <= segStart) {
        continue;
      }
      const a0 = xFromAbsMinute(segStart);
      const a1 = xFromAbsMinute(segEnd);
      ctx.fillStyle = "rgba(160, 226, 169, 0.74)";
      ctx.strokeStyle = "rgba(132, 154, 188, 0.92)";
      ctx.lineWidth = 1;
      ctx.fillRect(a0, barY, Math.max(2, a1 - a0), safeBarHeight);
      ctx.strokeRect(a0, barY, Math.max(2, a1 - a0), safeBarHeight);
    }

    const slot = optimizedDisplayByTarget.get(target.id) || slotByTarget.get(target.id) || null;
    const duration = sanitizeExposureMinutes(slot ? slot.durationMinutes : target.exposureMin);
    let expStart = null;
    let expEnd = null;
    if (slot) {
      expStart = slot.startMinute;
      expEnd = slot.endMinute;
    } else if (visibilitySegments.length) {
      const centered = window.bestMinute - Math.floor(duration / 2);
      let pick = null;
      for (const segment of visibilitySegments) {
        const segStart = Math.max(nightStart, segment.startMinute);
        const segEnd = Math.min(nightEnd, segment.endMinute);
        if (segEnd <= segStart) {
          continue;
        }
        const segSpan = Math.max(1, segEnd - segStart);
        const drawDuration = Math.min(duration, segSpan);
        const maxStart = Math.max(segStart, segEnd - drawDuration);
        const start = clamp(centered, segStart, maxStart);
        if (!isTargetVisibleForDuration(target, start, drawDuration, obs, 2)) {
          continue;
        }
        const midpoint = start + drawDuration / 2;
        const score = Math.abs(midpoint - window.bestMinute) - segSpan * 0.01;
        if (!pick || score < pick.score) {
          pick = { start, duration: drawDuration, score };
        }
      }
      if (pick) {
        expStart = pick.start;
        expEnd = pick.start + pick.duration;
      }
    } else {
      const centered = window.bestMinute - Math.floor(duration / 2);
      const maxStart = Math.max(nightStart, nightEnd - duration);
      expStart = clamp(centered, nightStart, maxStart);
      expEnd = Math.min(nightEnd, expStart + duration);
    }
    if (expStart !== null && expEnd !== null) {
      const e0 = xFromAbsMinute(Math.max(expStart, nightStart));
      const e1 = xFromAbsMinute(Math.min(expEnd, nightEnd));
      const width = Math.max(3, e1 - e0);
      ctx.fillStyle = "#d96f16";
      ctx.strokeStyle = "#274161";
      ctx.lineWidth = 1;
      ctx.fillRect(e0, barY, width, safeBarHeight);
      ctx.strokeRect(e0, barY, width, safeBarHeight);
    }
  }

  const nowX = xFromAbsMinute(state.minuteOfDay);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
  ctx.lineWidth = 1.4;
  ctx.setLineDash([6, 5]);
  ctx.beginPath();
  ctx.moveTo(nowX, yMin);
  ctx.lineTo(nowX, yMax);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.strokeStyle = "rgba(156, 168, 187, 0.95)";
  ctx.lineWidth = 1;
  ctx.strokeRect(xMin, yMin, xMax - xMin, yMax - yMin);

  ctx.fillStyle = "rgba(197, 205, 216, 0.96)";
  ctx.fillRect(0, stickyHeaderTop, w, stickyHeaderHeight);
  ctx.beginPath();
  ctx.moveTo(0, stickyHeaderTop + stickyHeaderHeight);
  ctx.lineTo(w, stickyHeaderTop + stickyHeaderHeight);
  ctx.strokeStyle = "rgba(156, 168, 187, 0.95)";
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = "#233c5e";
  ctx.font = `700 16px "Space Grotesk", sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText("Time", (xMin + xMax) * 0.5, stickyHeaderTop + 2);
  const zoneLabel = getTimeZoneAbbrev(buildDateFromIsoMinute(state.dateISO, nightStart), obs.timeZone);
  const laptopZoneLabel = getLaptopTimeZoneAbbrev(buildDateFromIsoMinute(state.dateISO, nightStart));
  for (let rel = 0; rel <= nightDuration; rel += tickStep) {
    const x = xFromRelMinute(rel);
    const date = buildDateFromIsoMinute(state.dateISO, nightStart + rel);
    ctx.fillStyle = "#243b5d";
    ctx.font = `11px "IBM Plex Mono", monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(formatUtcShortTime(date), x, stickyUtcTickY);
    ctx.font = `10px "IBM Plex Mono", monospace`;
    ctx.fillStyle = "#38547a";
    ctx.fillText(formatLocalShort(date, obs.timeZone), x, stickyTelescopeTickY);
    ctx.fillStyle = "#4a6285";
    ctx.fillText(formatLaptopLocalShort(date), x, stickyLaptopTickY);
  }

  ctx.fillStyle = "#233c5e";
  ctx.textAlign = "right";
  ctx.textBaseline = "top";
  ctx.font = `700 12px "Space Grotesk", sans-serif`;
  ctx.fillText("Starname", xMin - 6, stickyHeaderTop + 5);
  ctx.font = `10px "Space Grotesk", sans-serif`;
  ctx.fillText("UTC", xMin - 6, stickyUtcTickY);
  ctx.fillText(`${obs.shortName}${zoneLabel ? ` ${zoneLabel}` : ""}`, xMin - 6, stickyTelescopeTickY);
  ctx.fillText(`Laptop${laptopZoneLabel ? ` ${laptopZoneLabel}` : ""}`, xMin - 6, stickyLaptopTickY);

  ctx.fillStyle = "#233c5e";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.font = `11px "Space Grotesk", sans-serif`;
  ctx.fillText("Minutes from Start of the Night", (xMin + xMax) * 0.5, yMax + 34);

  const minutesSinceNightStart = clamp(state.minuteOfDay - nightStart, 0, nightDuration);
  const currentSlot = optimizedDisplaySlots.find((slot) => state.minuteOfDay >= slot.startMinute && state.minuteOfDay <= slot.endMinute) || null;
  const plannedInScope = optimizedDisplaySlots.length;
  const totalRequested = analyses.reduce((sum, item) => sum + sanitizeExposureMinutes(item.target.exposureMin), 0);
  if (dom.planBoardSummary) {
    dom.planBoardSummary.innerHTML = `
      Targets in scope: <strong>${analyses.length}</strong><br>
      Exposure blocks in scope: <strong>${plannedInScope}</strong><br>
      Requested exposure total: <strong>${totalRequested} min</strong><br>
      Night window: <strong>${formatUtcShortTime(buildDateFromIsoMinute(state.dateISO, nightStart))}-${formatUtcShortTime(buildDateFromIsoMinute(state.dateISO, nightEnd))} UT</strong>
    `;
  }
  if (dom.planBoardNow) {
    dom.planBoardNow.innerHTML = `
      UT cursor: <strong>${formatUtc(now)}</strong><br>
      Telescope cursor: <strong>${formatLocal(now, obs.timeZone)} ${getTimeZoneAbbrev(now, obs.timeZone)}</strong><br>
      Laptop cursor: <strong>${formatLaptopLocal(now)} ${getLaptopTimeZoneAbbrev(now)}</strong><br>
      Minutes from night start: <strong>${Math.round(minutesSinceNightStart)}</strong><br>
      Current planned target: <strong>${currentSlot ? escapeHtml(currentSlot.name) : "none"}</strong>
    `;
  }
}

function renderAirmassPlot() {
  if (!airmassCtx) {
    return;
  }
  const ctx = airmassCtx;
  const w = plotGeom.width;
  const h = plotGeom.height;
  const { padLeft, padRight, padTop, padBottom } = plotGeom;
  const obs = getSelectedObservatory();
  const maxAirmass = getEffectiveMaxAirmass(obs);
  const target = getPlotTarget();
  const xMin = padLeft;
  const xMax = w - padRight;
  const yMin = padTop;
  const yMax = h - padBottom;
  const yFromAirmass = (x) => yMin + ((clamp(x, 1, 5) - 1) / 4) * (yMax - yMin);
  const xFromMinute = (minute) => xMin + (minute / 1439) * (xMax - xMin);

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#123453";
  ctx.fillRect(0, 0, w, h);
  drawNightBands(ctx, obs, xFromMinute, yMin, yMax);

  ctx.strokeStyle = "rgba(212, 234, 252, 0.35)";
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 5]);
  const yTicks = [1, 1.2, 1.5, 2, 3, 4, 5];
  for (const yTick of yTicks) {
    const y = yFromAirmass(yTick);
    ctx.beginPath();
    ctx.moveTo(xMin, y);
    ctx.lineTo(xMax, y);
    ctx.stroke();
    ctx.fillStyle = "rgba(236, 246, 255, 0.95)";
    ctx.font = `12px "IBM Plex Mono", monospace`;
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(yTick.toFixed(yTick % 1 ? 1 : 0), xMin - 8, y);
  }

  for (let minute = 0; minute < 1440; minute += 60) {
    const x = xFromMinute(minute);
    ctx.beginPath();
    ctx.moveTo(x, yMin);
    ctx.lineTo(x, yMax);
    ctx.strokeStyle = "rgba(220, 238, 255, 0.28)";
    ctx.setLineDash([]);
    ctx.stroke();
    const date = buildDateFromIsoMinute(state.dateISO, minute);
    const label = state.plotXAxis === "lst" ? formatHours(localSiderealTimeDeg(date, obs.lon) / 15).slice(0, 5) : `${pad2(Math.floor(minute / 60))}h`;
    ctx.fillStyle = "rgba(244, 250, 255, 0.98)";
    ctx.font = `12px "IBM Plex Mono", monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(label, x, yMax + 8);
  }

  ctx.fillStyle = "rgba(244, 251, 255, 0.98)";
  ctx.font = `12px "Space Grotesk", sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText(state.plotXAxis === "lst" ? "Time (LMST)" : "Time (UT)", (xMin + xMax) * 0.5, h - 20);

  ctx.save();
  ctx.translate(18, (yMin + yMax) * 0.5);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = "rgba(244, 251, 255, 0.98)";
  ctx.font = `12px "Space Grotesk", sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText("Airmass", 0, 0);
  ctx.restore();

  ctx.strokeStyle = "rgba(255, 166, 77, 0.96)";
  ctx.lineWidth = 1.5;
  ctx.setLineDash([6, 4]);
  const constraintY = yFromAirmass(maxAirmass);
  ctx.beginPath();
  ctx.moveTo(xMin, constraintY);
  ctx.lineTo(xMax, constraintY);
  ctx.stroke();

  const nowX = xFromMinute(state.minuteOfDay);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
  ctx.lineWidth = 1.3;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(nowX, yMin);
  ctx.lineTo(nowX, yMax);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.strokeStyle = "rgba(227, 241, 255, 0.95)";
  ctx.lineWidth = 1;
  ctx.strokeRect(xMin, yMin, xMax - xMin, yMax - yMin);

  if (state.plotShowMoon) {
    let moonDrawing = false;
    let moonLabelPoint = null;
    let moonBestAirmass = Number.POSITIVE_INFINITY;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.96)";
    ctx.lineWidth = 1.9;
    ctx.setLineDash([7, 4]);
    ctx.beginPath();
    for (let minute = 0; minute < 1440; minute += 4) {
      const date = buildDateFromIsoMinute(state.dateISO, minute);
      const moon = getMoonData(date, obs);
      const moonAirmass = airmassFromAlt(moon.altDeg);
      if (moon.altDeg > 0 && Number.isFinite(moonAirmass) && moonAirmass <= 5) {
        const x = xFromMinute(minute);
        const y = yFromAirmass(moonAirmass);
        if (!moonDrawing) {
          ctx.moveTo(x, y);
          moonDrawing = true;
        } else {
          ctx.lineTo(x, y);
        }
        if (moonAirmass < moonBestAirmass) {
          moonBestAirmass = moonAirmass;
          moonLabelPoint = { x, y };
        }
      } else {
        moonDrawing = false;
      }
    }
    ctx.stroke();
    ctx.setLineDash([]);
    if (moonLabelPoint) {
      ctx.fillStyle = "rgba(255, 255, 255, 0.98)";
      ctx.font = `11px "IBM Plex Mono", monospace`;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText("Moon", moonLabelPoint.x + 7, moonLabelPoint.y - 7);
    }
  }

  if (!target) {
    ctx.fillStyle = "rgba(244, 251, 255, 0.98)";
    ctx.font = `15px "Space Grotesk", sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("No target available for plotting", w / 2, h / 2);
    dom.plotSummary.textContent = "Select a target to generate the airmass curve.";
    dom.plotRaDecInfo.textContent = "RA/DEC limits update with observatory and date.";
    dom.plotConstraintInfo.textContent = "Visibility constraints shown here.";
    return;
  }

  let drawing = false;
  let bestAirmass = Number.POSITIVE_INFINITY;
  let bestMinute = null;
  let bestAlt = -999;
  let visibleStart = null;
  let visibleEnd = null;
  let labelPoint = null;
  ctx.strokeStyle = "#ff8a1f";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  for (let minute = 0; minute < 1440; minute += 4) {
    const date = buildDateFromIsoMinute(state.dateISO, minute);
    const altAz = raDecToAltAz(target.raDeg, target.decDeg, date, obs.lat, obs.lon);
    const air = airmassFromAlt(altAz.altDeg);
    const isVisible = altAz.altDeg >= obs.minAlt && air <= maxAirmass;
    if (isVisible) {
      if (visibleStart === null) {
        visibleStart = minute;
      }
      visibleEnd = minute;
    }
    if (altAz.altDeg > 0 && Number.isFinite(air) && air <= 5) {
      const x = xFromMinute(minute);
      const y = yFromAirmass(air);
      if (!drawing) {
        ctx.moveTo(x, y);
        drawing = true;
      } else {
        ctx.lineTo(x, y);
      }
      if (air < bestAirmass) {
        bestAirmass = air;
        bestMinute = minute;
        bestAlt = altAz.altDeg;
        labelPoint = { x, y };
      }
    } else {
      drawing = false;
    }
  }
  ctx.stroke();

  if (labelPoint) {
    const boxText = target.name;
    ctx.font = `12px "IBM Plex Mono", monospace`;
    const textWidth = ctx.measureText(boxText).width;
    const bx = clamp(labelPoint.x - textWidth * 0.5 - 6, xMin + 4, xMax - textWidth - 14);
    const by = clamp(labelPoint.y - 32, yMin + 2, yMax - 20);
    ctx.fillStyle = "rgba(10, 31, 49, 0.92)";
    ctx.strokeStyle = "rgba(255, 173, 96, 0.95)";
    ctx.lineWidth = 1;
    roundRect(ctx, bx, by, textWidth + 12, 22, 6, true, true);
    ctx.fillStyle = "#fff0df";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(boxText, bx + 6, by + 11);
  }

  const transit = estimateTransit(getCurrentDateTime(), obs, target);
  const decMin = clamp(obs.lat - (90 - obs.minAlt), -90, 90);
  const decMax = clamp(obs.lat + (90 - obs.minAlt), -90, 90);
  const nightRa = computeAstronomicalNightRaRange(obs);
  const bestDate = bestMinute !== null ? buildDateFromIsoMinute(state.dateISO, bestMinute) : null;

  dom.plotSummary.innerHTML = `
    <strong>${escapeHtml(target.name)}</strong><br>
    Min airmass: <strong>${Number.isFinite(bestAirmass) ? bestAirmass.toFixed(2) : "n/a"}</strong><br>
    Max altitude: <strong>${bestAlt > -900 ? bestAlt.toFixed(1) : "n/a"}°</strong><br>
    Best time: <strong>${bestDate ? formatUtcShort(bestDate) : "n/a"}</strong><br>
    Observable window: <strong>${visibleStart !== null ? `${formatUtcShortTime(buildDateFromIsoMinute(state.dateISO, visibleStart))}-${formatUtcShortTime(buildDateFromIsoMinute(state.dateISO, visibleEnd))} UT` : "not observable"}</strong>
  `;
  dom.plotRaDecInfo.innerHTML = `
    Transit-accessible DEC: <strong>${formatDec(decMin)}</strong> to <strong>${formatDec(decMax)}</strong><br>
    Meridian RA now: <strong>${formatRa(localSiderealTimeDeg(getCurrentDateTime(), obs.lon))}</strong><br>
    Astronomical-night RA: <strong>${nightRa ? `${formatHours(nightRa.startRaHours).slice(0, 5)} to ${formatHours(nightRa.endRaHours).slice(0, 5)}` : "n/a"}</strong>
  `;
  dom.plotConstraintInfo.innerHTML = `
    Observatory: <strong>${escapeHtml(obs.name)}</strong><br>
    Min altitude: <strong>${obs.minAlt}°</strong><br>
    Max airmass: <strong>${maxAirmass.toFixed(2)}</strong><br>
    Nearest transit: <strong>${formatUtcShort(transit)}</strong>
  `;
}

function drawNightBands(ctx, obs, xFromMinute, yMin, yMax) {
  for (let minute = 0; minute < 1440; minute += 6) {
    const date = buildDateFromIsoMinute(state.dateISO, minute);
    const sunAlt = getSunAltitudeDeg(date, obs);
    let color = "rgba(177, 214, 244, 0.38)";
    if (sunAlt < -18) {
      color = "rgba(15, 42, 70, 0.92)";
    } else if (sunAlt < -12) {
      color = "rgba(34, 84, 135, 0.74)";
    } else if (sunAlt < -6) {
      color = "rgba(63, 133, 198, 0.62)";
    }
    const x0 = xFromMinute(minute);
    const x1 = xFromMinute(Math.min(minute + 6, 1439));
    ctx.fillStyle = color;
    ctx.fillRect(x0, yMin, Math.max(1, x1 - x0), yMax - yMin);
  }
}

function drawPlanTwilightShading(ctx, obs, xFromMinute, yMin, yMax, startMinute, endMinute) {
  const step = 4;
  for (let minute = startMinute; minute < endMinute; minute += step) {
    const date = buildDateFromIsoMinute(state.dateISO, minute);
    const sunAlt = getSunAltitudeDeg(date, obs);
    let color = "";
    if (sunAlt > -6) {
      color = "rgba(228, 163, 96, 0.28)";
    } else if (sunAlt > -12) {
      color = "rgba(122, 156, 204, 0.24)";
    }
    if (!color) {
      continue;
    }
    const x0 = xFromMinute(minute);
    const x1 = xFromMinute(Math.min(minute + step, endMinute));
    ctx.fillStyle = color;
    ctx.fillRect(x0, yMin, Math.max(1, x1 - x0), yMax - yMin);
  }
}

function computeAstronomicalNightRaRange(obs) {
  let firstMinute = null;
  let lastMinute = null;
  for (let minute = 0; minute < 1440; minute += 5) {
    const date = buildDateFromIsoMinute(state.dateISO, minute);
    if (getSunAltitudeDeg(date, obs) < -18) {
      if (firstMinute === null) {
        firstMinute = minute;
      }
      lastMinute = minute;
    }
  }
  if (firstMinute === null || lastMinute === null) {
    return null;
  }
  const startDate = buildDateFromIsoMinute(state.dateISO, firstMinute);
  const endDate = buildDateFromIsoMinute(state.dateISO, lastMinute);
  return {
    startRaHours: localSiderealTimeDeg(startDate, obs.lon) / 15,
    endRaHours: localSiderealTimeDeg(endDate, obs.lon) / 15
  };
}

function computeAstronomicalNightWindow(obs) {
  return computeSunBelowWindow(obs, -18);
}

function computeSunBelowWindow(obs, sunAltThresholdDeg) {
  const step = 4;
  const segments = [];
  let currentStart = null;
  for (let minute = 0; minute < 1440; minute += step) {
    const date = buildDateFromIsoMinute(state.dateISO, minute);
    const isNight = getSunAltitudeDeg(date, obs) < sunAltThresholdDeg;
    if (isNight && currentStart === null) {
      currentStart = minute;
    } else if (!isNight && currentStart !== null) {
      segments.push({ startMinute: currentStart, endMinute: Math.max(currentStart + step, minute - step) });
      currentStart = null;
    }
  }
  if (currentStart !== null) {
    segments.push({ startMinute: currentStart, endMinute: 1439 });
  }
  if (!segments.length) {
    return { startMinute: 0, endMinute: 1439, durationMinutes: 1439 };
  }
  let selected = segments.find((seg) => state.minuteOfDay >= seg.startMinute && state.minuteOfDay <= seg.endMinute) || null;
  if (!selected) {
    selected = segments.reduce((best, seg) => {
      const span = seg.endMinute - seg.startMinute;
      const bestSpan = best ? best.endMinute - best.startMinute : -1;
      return span > bestSpan ? seg : best;
    }, null);
  }
  const durationMinutes = Math.max(60, selected.endMinute - selected.startMinute);
  return {
    startMinute: selected.startMinute,
    endMinute: selected.endMinute,
    durationMinutes
  };
}

function renderSky() {
  if (!skyCtx) {
    return;
  }
  const obs = getSelectedObservatory();
  const keckMode = getActiveKeckMode();
  const now = getCurrentDateTime();
  const folderColorMap = buildFolderColorMap();
  renderedStars = [];
  drawSkyBackground();
  drawHorizon();
  if (state.show.zenith) {
    drawZenithGrid();
  }
  if (state.show.airmass) {
    drawAirmassGrid();
  }
  if (state.show.equatorial) {
    drawEquatorialGrid(obs, now);
  }
  if (keckMode) {
    drawKeckPointingLimits(keckMode);
  }
  drawCardinalAxes();
  drawCardinalLabels();
  if (state.show.allTracks) {
    const trackTargets = getDisplayTargets().filter(
      (target) => target.highlight || isFolderHighlighted(target.folder) || target.id === state.focusTargetId
    );
    for (const target of trackTargets) {
      drawTargetTrack(target, obs, {
        focus: target.id === state.focusTargetId,
        active: target.id === state.activeTargetId,
        folder: isFolderHighlighted(target.folder),
        keckMode
      }, folderColorMap);
    }
  } else {
    const focus = state.targets.find((target) => target.id === state.focusTargetId);
    const active = state.targets.find((target) => target.id === state.activeTargetId);
    if (focus) {
      drawTargetTrack(focus, obs, { focus: true, active: focus.id === state.activeTargetId, folder: isFolderHighlighted(focus.folder), keckMode }, folderColorMap);
      if (active && active.id !== focus.id) {
        drawTargetTrack(active, obs, { active: true, folder: isFolderHighlighted(active.folder), keckMode }, folderColorMap);
      }
    } else if (active) {
      drawTargetTrack(active, obs, { active: true, folder: isFolderHighlighted(active.folder), keckMode }, folderColorMap);
    }
  }
  drawTargets(obs, now, folderColorMap, keckMode);
  refreshStarPopupFromPinned(obs, now);
  if (state.show.moon) {
    drawMoonMarker(obs, now);
  }
}

function drawSkyBackground() {
  const size = canvasGeom.size;
  skyCtx.fillStyle = "#061146";
  skyCtx.fillRect(0, 0, size, size);
  skyCtx.save();
  skyCtx.beginPath();
  skyCtx.arc(canvasGeom.cx, canvasGeom.cy, canvasGeom.radius, 0, Math.PI * 2);
  skyCtx.clip();
  const grad = skyCtx.createRadialGradient(
    canvasGeom.cx,
    canvasGeom.cy,
    canvasGeom.radius * 0.12,
    canvasGeom.cx,
    canvasGeom.cy,
    canvasGeom.radius * 1.1
  );
  grad.addColorStop(0, "#0f2382");
  grad.addColorStop(0.56, "#0b1b69");
  grad.addColorStop(1, "#061246");
  skyCtx.fillStyle = grad;
  skyCtx.fillRect(0, 0, size, size);
  const limb = skyCtx.createRadialGradient(
    canvasGeom.cx,
    canvasGeom.cy,
    canvasGeom.radius * 0.45,
    canvasGeom.cx,
    canvasGeom.cy,
    canvasGeom.radius * 1.02
  );
  limb.addColorStop(0, "rgba(68, 124, 198, 0)");
  limb.addColorStop(1, "rgba(3, 10, 28, 0.72)");
  skyCtx.fillStyle = limb;
  skyCtx.fillRect(0, 0, size, size);
  skyCtx.restore();
}

function drawHorizon() {
  skyCtx.save();
  skyCtx.strokeStyle = "rgba(255, 255, 255, 0.95)";
  skyCtx.lineWidth = 2.2;
  skyCtx.beginPath();
  skyCtx.arc(canvasGeom.cx, canvasGeom.cy, canvasGeom.radius, 0, Math.PI * 2);
  skyCtx.stroke();
  skyCtx.restore();
}

function drawCardinalAxes() {
  skyCtx.save();
  skyCtx.strokeStyle = "rgba(229, 236, 247, 0.72)";
  skyCtx.lineWidth = 1.5;
  const north = projectAltAz(0, 0);
  const south = projectAltAz(0, 180);
  const east = projectAltAz(0, 90);
  const west = projectAltAz(0, 270);
  if (north && south) {
    skyCtx.beginPath();
    skyCtx.moveTo(north.x, north.y);
    skyCtx.lineTo(south.x, south.y);
    skyCtx.stroke();
  }
  if (east && west) {
    skyCtx.beginPath();
    skyCtx.moveTo(east.x, east.y);
    skyCtx.lineTo(west.x, west.y);
    skyCtx.stroke();
  }
  skyCtx.restore();
}

function drawZenithGrid() {
  skyCtx.save();
  skyCtx.strokeStyle = "rgba(224, 237, 249, 0.38)";
  skyCtx.lineWidth = 1;
  skyCtx.setLineDash([4, 4]);
  for (let alt = 15; alt <= 75; alt += 15) {
    drawAltitudeCircle(alt);
  }
  for (let az = 0; az < 360; az += 30) {
    const outer = projectAltAz(0, az);
    if (!outer) {
      continue;
    }
    skyCtx.beginPath();
    skyCtx.moveTo(canvasGeom.cx, canvasGeom.cy);
    skyCtx.lineTo(outer.x, outer.y);
    skyCtx.stroke();
  }
  skyCtx.restore();
}

function drawAirmassGrid() {
  skyCtx.save();
  skyCtx.strokeStyle = "rgba(232, 243, 252, 0.42)";
  skyCtx.lineWidth = 1;
  skyCtx.setLineDash([6, 6]);
  const values = [1.2, 1.5, 2, 3];
  for (const x of values) {
    const alt = altitudeFromAirmass(x);
    drawAltitudeCircle(alt);
    const labelPoint = projectAltAz(alt, 100);
    if (labelPoint) {
      skyCtx.fillStyle = "rgba(239, 248, 255, 0.92)";
      skyCtx.font = `12px "IBM Plex Mono", monospace`;
      skyCtx.fillText(`${x.toFixed(1)}`, labelPoint.x + 4, labelPoint.y);
    }
  }
  skyCtx.restore();
}

function drawEquatorialGrid(obs, date) {
  skyCtx.save();
  skyCtx.strokeStyle = "rgba(220, 237, 250, 0.36)";
  skyCtx.lineWidth = 1;
  const decLines = [-60, -30, 0, 30, 60];
  for (const dec of decLines) {
    const points = [];
    for (let hourAngle = -180; hourAngle <= 180; hourAngle += 3) {
      const altAz = hourAngleDecToAltAz(hourAngle, dec, obs.lat);
      points.push(projectAltAz(altAz.altDeg, altAz.azDeg));
    }
    drawPolylineWithBreaks(points);
  }
  skyCtx.strokeStyle = "rgba(208, 228, 245, 0.3)";
  const hourAngleLines = [-90, -60, -30, 0, 30, 60, 90];
  for (const hourAngle of hourAngleLines) {
    const points = [];
    for (let dec = -80; dec <= 80; dec += 2) {
      const altAz = hourAngleDecToAltAz(hourAngle, dec, obs.lat);
      points.push(projectAltAz(altAz.altDeg, altAz.azDeg));
    }
    drawPolylineWithBreaks(points);
  }
  skyCtx.restore();
}

function drawCardinalLabels() {
  skyCtx.save();
  skyCtx.fillStyle = "rgba(247, 251, 255, 0.98)";
  skyCtx.font = `700 16px "IBM Plex Mono", monospace`;
  skyCtx.textAlign = "center";
  skyCtx.textBaseline = "middle";
  const labels = [
    { t: "N", az: 0 },
    { t: "E", az: 270 },
    { t: "S", az: 180 },
    { t: "W", az: 90 }
  ];
  for (const label of labels) {
    const point = projectOutsideAz(label.az, 14);
    if (!point) {
      continue;
    }
    skyCtx.lineWidth = 2.2;
    skyCtx.strokeStyle = "rgba(8, 18, 34, 0.72)";
    skyCtx.strokeText(label.t, point.x, point.y);
    skyCtx.fillText(label.t, point.x, point.y);
  }
  skyCtx.restore();
}

function drawAltitudeCircle(altDeg) {
  const radius = Math.cos(degToRad(clamp(altDeg, 0, 90))) * canvasGeom.radius;
  skyCtx.beginPath();
  skyCtx.arc(canvasGeom.cx, canvasGeom.cy, radius, 0, Math.PI * 2);
  skyCtx.stroke();
}

function getActiveKeckMode() {
  if (state.activeTab === "sky-keck-1") {
    return KECK_POINTING_LIMITS["keck-1"];
  }
  if (state.activeTab === "sky-keck-2") {
    return KECK_POINTING_LIMITS["keck-2"];
  }
  return null;
}

function getKeckLimitForAltAz(altDeg, azDeg, limits) {
  if (!limits || !Number.isFinite(altDeg) || !Number.isFinite(azDeg)) {
    return { status: "normal", minAlt: 0 };
  }
  const sourceAz = keckSkyAzToSourceAz(azDeg);
  const inDeckSector = isAzBetween(sourceAz, limits.deckAzStart, limits.deckAzEnd);
  if (inDeckSector && altDeg < limits.deckMinAlt) {
    return { status: "blocked", minAlt: limits.deckMinAlt };
  }
  if (!inDeckSector && altDeg < limits.normalMinAlt) {
    return { status: "vignetted", minAlt: limits.normalMinAlt };
  }
  if (altDeg > limits.maxAlt) {
    return { status: "zenith-risk", minAlt: limits.maxAlt };
  }
  return { status: "normal", minAlt: inDeckSector ? limits.deckMinAlt : limits.normalMinAlt };
}

function keckSourceAzToSkyAz(azDeg) {
  return normalizeDeg(360 - azDeg);
}

function keckSkyAzToSourceAz(azDeg) {
  return normalizeDeg(360 - azDeg);
}

function keckSourceRangeToSkyRange(startAz, endAz) {
  return {
    startAz: keckSourceAzToSkyAz(endAz),
    endAz: keckSourceAzToSkyAz(startAz)
  };
}

function isAzBetween(azDeg, startDeg, endDeg) {
  const az = normalizeDeg(azDeg);
  const start = normalizeDeg(startDeg);
  const end = normalizeDeg(endDeg);
  if (start <= end) {
    return az >= start && az <= end;
  }
  return az >= start || az <= end;
}

function drawKeckPointingLimits(limits) {
  const deckRange = keckSourceRangeToSkyRange(limits.deckAzStart, limits.deckAzEnd);
  const openRange = keckSourceRangeToSkyRange(limits.deckAzEnd, limits.deckAzStart);
  skyCtx.save();
  skyCtx.beginPath();
  skyCtx.arc(canvasGeom.cx, canvasGeom.cy, canvasGeom.radius, 0, Math.PI * 2);
  skyCtx.clip();
  drawKeckSector(deckRange.startAz, deckRange.endAz, 0, limits.deckMinAlt, "rgba(255, 95, 95, 0.42)");
  drawKeckSector(openRange.startAz, openRange.endAz, 0, limits.normalMinAlt, "rgba(246, 224, 95, 0.34)");
  drawKeckSector(deckRange.startAz, deckRange.endAz, limits.deckMinAlt, 90, "rgba(140, 177, 231, 0.13)");
  drawKeckSector(openRange.startAz, openRange.endAz, limits.normalMinAlt, 90, "rgba(170, 221, 143, 0.11)");
  skyCtx.restore();

  skyCtx.save();
  skyCtx.strokeStyle = "rgba(255, 248, 226, 0.86)";
  skyCtx.lineWidth = 1.5;
  drawKeckBoundary(keckSourceAzToSkyAz(limits.deckAzStart), 0, limits.deckMinAlt);
  drawKeckBoundary(keckSourceAzToSkyAz(limits.deckAzEnd), 0, limits.deckMinAlt);
  skyCtx.strokeStyle = "rgba(255, 216, 106, 0.88)";
  drawKeckAltitudeArc(deckRange.startAz, deckRange.endAz, limits.deckMinAlt);
  skyCtx.strokeStyle = "rgba(244, 247, 255, 0.64)";
  drawKeckAltitudeArc(openRange.startAz, openRange.endAz, limits.normalMinAlt);
  skyCtx.setLineDash([5, 5]);
  drawKeckAltitudeArc(0, 360, 85);
  skyCtx.setLineDash([]);
  skyCtx.fillStyle = "rgba(255, 249, 234, 0.96)";
  skyCtx.font = `700 13px "Space Grotesk", sans-serif`;
  skyCtx.textAlign = "left";
  skyCtx.fillText(`${limits.label} pointing limits`, canvasGeom.cx - canvasGeom.radius + 18, canvasGeom.cy - canvasGeom.radius + 26);
  skyCtx.font = `11px "IBM Plex Mono", monospace`;
  skyCtx.fillText(`Deck block: az ${limits.deckAzStart.toFixed(1)}°-${limits.deckAzEnd.toFixed(1)}°, alt < ${limits.deckMinAlt.toFixed(1)}°`, canvasGeom.cx - canvasGeom.radius + 18, canvasGeom.cy - canvasGeom.radius + 44);
  skyCtx.fillText(`Vignetted: alt < ${limits.normalMinAlt}° outside deck sector; guiding caution above 85°`, canvasGeom.cx - canvasGeom.radius + 18, canvasGeom.cy - canvasGeom.radius + 60);
  skyCtx.restore();
}

function drawKeckSector(startAz, endAz, minAlt, maxAlt, fillStyle) {
  const points = [];
  forEachAzInRange(startAz, endAz, 2, (az) => {
    points.push(projectAltAz(minAlt, az));
  });
  const outer = [];
  forEachAzInRange(startAz, endAz, 2, (az) => {
    outer.push(projectAltAz(maxAlt, az));
  });
  const polygon = points.concat(outer.reverse()).filter(Boolean);
  if (polygon.length < 3) {
    return;
  }
  skyCtx.beginPath();
  skyCtx.moveTo(polygon[0].x, polygon[0].y);
  for (const point of polygon.slice(1)) {
    skyCtx.lineTo(point.x, point.y);
  }
  skyCtx.closePath();
  skyCtx.fillStyle = fillStyle;
  skyCtx.fill();
}

function drawKeckBoundary(az, minAlt, maxAlt) {
  const low = projectAltAz(minAlt, az);
  const high = projectAltAz(maxAlt, az);
  if (!low || !high) {
    return;
  }
  skyCtx.beginPath();
  skyCtx.moveTo(low.x, low.y);
  skyCtx.lineTo(high.x, high.y);
  skyCtx.stroke();
}

function drawKeckAltitudeArc(startAz, endAz, alt) {
  const points = [];
  forEachAzInRange(startAz, endAz, 2, (az) => {
    points.push(projectAltAz(alt, az));
  });
  drawPolylineWithBreaks(points);
}

function forEachAzInRange(startAz, endAz, stepDeg, callback) {
  const start = normalizeDeg(startAz);
  const end = normalizeDeg(endAz);
  const span = positiveModulo(end - start, 360) || 360;
  for (let offset = 0; offset <= span; offset += stepDeg) {
    callback(normalizeDeg(start + offset));
  }
  if (span % stepDeg !== 0) {
    callback(end);
  }
}

function drawTargetTrack(target, obs, emphasis = {}, folderColorMap) {
  const points = [];
  const keckMode = emphasis.keckMode || null;
  for (let minute = 0; minute <= 1440; minute += 6) {
    const safeMinute = minute === 1440 ? 1439 : minute;
    const date = buildDateFromIsoMinute(state.dateISO, safeMinute);
    const altAz = raDecToAltAz(target.raDeg, target.decDeg, date, obs.lat, obs.lon);
    const keckStatus = getKeckLimitForAltAz(altAz.altDeg, altAz.azDeg, keckMode);
    points.push(keckStatus.status === "blocked" ? null : projectAltAz(altAz.altDeg, altAz.azDeg));
  }
  const isFocus = Boolean(emphasis.focus);
  const isActive = Boolean(emphasis.active);
  const isFolderHighlight = Boolean(emphasis.folder);
  const baseColor = getFolderColor(target.folder, folderColorMap);
  skyCtx.save();
  if (target.done) {
    skyCtx.strokeStyle = isFocus ? "rgba(83, 103, 122, 0.75)" : isFolderHighlight ? "rgba(126, 146, 166, 0.58)" : "rgba(102, 124, 144, 0.35)";
  } else {
    const alpha = isFocus ? 0.9 : isActive ? 0.66 : isFolderHighlight ? 0.56 : 0.38;
    skyCtx.strokeStyle = hexToRgba(baseColor, alpha);
  }
  skyCtx.lineWidth = isFocus ? 3.2 : isActive ? 2.2 : isFolderHighlight ? 1.8 : 1.2;
  drawPolylineWithBreaks(points);
  skyCtx.restore();
}

function drawTargets(obs, now, folderColorMap, keckMode = null) {
  const targets = getDisplayTargets();
  for (const target of targets) {
    const altAz = raDecToAltAz(target.raDeg, target.decDeg, now, obs.lat, obs.lon);
    const point = projectAltAz(altAz.altDeg, altAz.azDeg);
    if (!point) {
      continue;
    }
    const isActive = target.id === state.activeTargetId;
    const isFocus = target.id === state.focusTargetId;
    const isFolderHighlight = isFolderHighlighted(target.folder);
    const isHighlighted = target.highlight || isFolderHighlight;
    const baseColor = getFolderColor(target.folder, folderColorMap);
    const keckStatus = getKeckLimitForAltAz(altAz.altDeg, altAz.azDeg, keckMode);
    const radius = isFocus ? 6.8 : isActive ? 6.2 : isHighlighted ? 4.6 : 3.2;
    skyCtx.beginPath();
    skyCtx.fillStyle = keckStatus.status === "blocked"
      ? "#ff6b6b"
      : keckStatus.status === "vignetted"
        ? "#f1d45c"
        : target.done ? "#7d8ea0" : darkenHex(baseColor, isFocus || isFolderHighlight ? 0.5 : 0.6);
    skyCtx.arc(point.x, point.y, radius, 0, Math.PI * 2);
    skyCtx.fill();
    if (isActive || isFocus || isFolderHighlight) {
      skyCtx.strokeStyle = isFocus ? "#ffb15d" : isFolderHighlight ? "#fff0d8" : "#174f85";
      skyCtx.lineWidth = isFocus ? 2.6 : isFolderHighlight ? 1.7 : 2;
      skyCtx.beginPath();
      skyCtx.arc(point.x, point.y, radius + 3, 0, Math.PI * 2);
      skyCtx.stroke();
    }
    skyCtx.font = `${isFocus ? "700 11px" : isActive ? "600 10px" : "500 8px"} "IBM Plex Mono", monospace`;
    skyCtx.textAlign = "center";
    skyCtx.textBaseline = "bottom";
    skyCtx.lineWidth = isFocus ? 2.8 : 2;
    skyCtx.strokeStyle = "rgba(6, 16, 25, 0.92)";
    skyCtx.strokeText(target.name, point.x, point.y - radius - 4);
    skyCtx.fillStyle = isFocus
      ? "rgba(255, 199, 133, 0.97)"
      : target.done
        ? "rgba(154, 178, 199, 0.92)"
        : isFolderHighlight
          ? "rgba(255, 232, 204, 0.95)"
          : "rgba(229, 243, 255, 0.96)";
    skyCtx.fillText(target.name, point.x, point.y - radius - 4);
    renderedStars.push({
      id: target.id,
      x: point.x,
      y: point.y,
      radius,
      target,
      snapshot: {
        altDeg: altAz.altDeg,
        azDeg: altAz.azDeg,
        airmass: airmassFromAlt(altAz.altDeg)
      }
    });
  }
}

function drawMoonMarker(obs, now) {
  const moon = getMoonData(now, obs);
  const point = projectAltAz(moon.altDeg, moon.azDeg);
  if (!point) {
    return;
  }
  skyCtx.save();
  skyCtx.beginPath();
  skyCtx.fillStyle = "rgba(255, 255, 255, 1)";
  skyCtx.arc(point.x, point.y, 9.5, 0, Math.PI * 2);
  skyCtx.fill();
  skyCtx.strokeStyle = "rgba(255, 255, 255, 1)";
  skyCtx.lineWidth = 1.2;
  skyCtx.stroke();
  skyCtx.fillStyle = "rgba(255, 255, 255, 1)";
  skyCtx.font = `13px "IBM Plex Mono", monospace`;
  skyCtx.textAlign = "left";
  skyCtx.textBaseline = "top";
  skyCtx.fillText("Moon", point.x + 12, point.y + 2);
  skyCtx.restore();
}

function drawPolylineWithBreaks(points) {
  let drawing = false;
  skyCtx.beginPath();
  for (const point of points) {
    if (!point) {
      drawing = false;
      continue;
    }
    if (!drawing) {
      skyCtx.moveTo(point.x, point.y);
      drawing = true;
    } else {
      skyCtx.lineTo(point.x, point.y);
    }
  }
  skyCtx.stroke();
}

function updateMoonPanel() {
  const obs = getSelectedObservatory();
  const now = getCurrentDateTime();
  const moon = getMoonData(now, obs);
  if (!state.show.moon) {
    dom.moonInfo.textContent = "Moon marker hidden (toggle on in Sky Layers).";
    return;
  }
  const altitudeText = moon.altDeg > 0 ? `${moon.altDeg.toFixed(1)}°` : "below horizon";
  dom.moonInfo.innerHTML = `
    Alt: <strong>${altitudeText}</strong><br>
    Az: <strong>${moon.azDeg.toFixed(1)}°</strong><br>
    Illumination: <strong>${(moon.illumination * 100).toFixed(1)}%</strong><br>
    Phase age: <strong>${moon.phaseAgeDays.toFixed(1)} days</strong>
  `;
}

function updateActiveTargetPanel() {
  const obs = getSelectedObservatory();
  const maxAirmass = getEffectiveMaxAirmass(obs);
  const now = getCurrentDateTime();
  const target = state.targets.find((item) => item.id === state.activeTargetId);
  if (!target) {
    dom.activeTargetInfo.textContent = "Select a target to inspect details.";
    return;
  }
  const pos = raDecToAltAz(target.raDeg, target.decDeg, now, obs.lat, obs.lon);
  const x = airmassFromAlt(pos.altDeg);
  const transit = estimateTransit(now, obs, target);
  const telescopeTransit = `${formatLocalShort(transit, obs.timeZone)} ${getTimeZoneAbbrev(transit, obs.timeZone)}`;
  const laptopTransit = `${formatLaptopLocalShort(transit)} ${getLaptopTimeZoneAbbrev(transit)}`;
  const visibleText = pos.altDeg >= obs.minAlt && x <= maxAirmass ? "Meets constraints now" : "Outside constraints now";
  dom.activeTargetInfo.innerHTML = `
    <strong>${escapeHtml(target.name)}</strong><br>
    RA: <code>${formatRa(target.raDeg)}</code> DEC: <code>${formatDec(target.decDeg)}</code><br>
    Requested exposure: <strong>${sanitizeExposureMinutes(target.exposureMin)} min</strong><br>
    Alt/Az: <strong>${pos.altDeg.toFixed(1)}°</strong> / <strong>${pos.azDeg.toFixed(1)}°</strong><br>
    Airmass: <strong>${Number.isFinite(x) ? x.toFixed(2) : "n/a"}</strong><br>
    Nearest transit: <strong>${formatUtcShort(transit)}</strong><br>
    Telescope transit: <strong>${telescopeTransit}</strong><br>
    Laptop transit: <strong>${laptopTransit}</strong><br>
    Status: <strong>${visibleText}</strong>
  `;
}

function estimateTransit(date, obs, target) {
  const lst = localSiderealTimeDeg(date, obs.lon);
  const hourAngle = normalizeTo180(lst - target.raDeg);
  const siderealDegPerMinute = 360.98564736629 / 1440;
  const deltaMinutes = -hourAngle / siderealDegPerMinute;
  return new Date(date.getTime() + deltaMinutes * 60000);
}

function getMoonData(date, obs) {
  const jd = julianDate(date);
  const d = jd - 2451545.0;
  const moon = moonEquatorial(d);
  const altAz = raDecToAltAz(moon.raDeg, moon.decDeg, date, obs.lat, obs.lon);
  const synodic = 29.53058867;
  const age = positiveModulo(jd - 2451550.1, synodic);
  const illumination = 0.5 * (1 - Math.cos((2 * Math.PI * age) / synodic));
  return {
    raDeg: moon.raDeg,
    decDeg: moon.decDeg,
    altDeg: altAz.altDeg,
    azDeg: altAz.azDeg,
    phaseAgeDays: age,
    illumination
  };
}

function moonEquatorial(daysSinceJ2000) {
  const L = normalizeDeg(218.316 + 13.176396 * daysSinceJ2000);
  const M = normalizeDeg(134.963 + 13.064993 * daysSinceJ2000);
  const F = normalizeDeg(93.272 + 13.22935 * daysSinceJ2000);
  const lon = normalizeDeg(L + 6.289 * Math.sin(degToRad(M)));
  const lat = 5.128 * Math.sin(degToRad(F));
  const eps = 23.439 - 0.0000004 * daysSinceJ2000;
  const lonRad = degToRad(lon);
  const latRad = degToRad(lat);
  const epsRad = degToRad(eps);
  const sinLon = Math.sin(lonRad);
  const cosLon = Math.cos(lonRad);
  const sinLat = Math.sin(latRad);
  const cosLat = Math.cos(latRad);
  const ra = Math.atan2(sinLon * Math.cos(epsRad) - Math.tan(latRad) * Math.sin(epsRad), cosLon);
  const dec = Math.asin(sinLat * Math.cos(epsRad) + cosLat * Math.sin(epsRad) * sinLon);
  return {
    raDeg: normalizeDeg(radToDeg(ra)),
    decDeg: radToDeg(dec)
  };
}

function sunEquatorial(daysSinceJ2000) {
  const L = normalizeDeg(280.460 + 0.9856474 * daysSinceJ2000);
  const g = normalizeDeg(357.528 + 0.9856003 * daysSinceJ2000);
  const lambda = normalizeDeg(L + 1.915 * Math.sin(degToRad(g)) + 0.020 * Math.sin(2 * degToRad(g)));
  const epsilon = 23.439 - 0.0000004 * daysSinceJ2000;
  const lambdaRad = degToRad(lambda);
  const epsilonRad = degToRad(epsilon);
  const ra = Math.atan2(Math.cos(epsilonRad) * Math.sin(lambdaRad), Math.cos(lambdaRad));
  const dec = Math.asin(Math.sin(epsilonRad) * Math.sin(lambdaRad));
  return {
    raDeg: normalizeDeg(radToDeg(ra)),
    decDeg: radToDeg(dec)
  };
}

function getSunAltitudeDeg(date, obs) {
  const d = julianDate(date) - 2451545.0;
  const sun = sunEquatorial(d);
  return raDecToAltAz(sun.raDeg, sun.decDeg, date, obs.lat, obs.lon).altDeg;
}

function raDecToAltAz(raDeg, decDeg, date, latDeg, lonDeg) {
  const lst = localSiderealTimeDeg(date, lonDeg);
  const hourAngle = REVERSE_SKY_DRIFT ? normalizeTo180(raDeg - lst) : normalizeTo180(lst - raDeg);
  return hourAngleDecToAltAz(hourAngle, decDeg, latDeg);
}

function hourAngleDecToAltAz(hourAngleDeg, decDeg, latDeg) {
  const ha = degToRad(hourAngleDeg);
  const dec = degToRad(decDeg);
  const lat = degToRad(latDeg);
  const sinAlt = Math.sin(dec) * Math.sin(lat) + Math.cos(dec) * Math.cos(lat) * Math.cos(ha);
  const alt = Math.asin(clamp(sinAlt, -1, 1));
  const y = Math.sin(ha);
  const x = Math.cos(ha) * Math.sin(lat) - Math.tan(dec) * Math.cos(lat);
  const az = Math.atan2(y, x) + Math.PI;
  return {
    altDeg: radToDeg(alt),
    azDeg: normalizeDeg(radToDeg(az))
  };
}

function projectAltAz(altDeg, azDeg) {
  if (!Number.isFinite(altDeg) || altDeg < 0) {
    return null;
  }
  const radius = Math.cos(degToRad(clamp(altDeg, 0, 90))) * canvasGeom.radius;
  const azRad = degToRad(azDeg);
  return {
    x: canvasGeom.cx + radius * Math.sin(azRad),
    y: canvasGeom.cy - radius * Math.cos(azRad)
  };
}

function projectOutsideAz(azDeg, offsetPx = 18) {
  const azRad = degToRad(azDeg);
  const radius = canvasGeom.radius + offsetPx;
  return {
    x: canvasGeom.cx + radius * Math.sin(azRad),
    y: canvasGeom.cy - radius * Math.cos(azRad)
  };
}

function airmassFromAlt(altDeg) {
  if (!Number.isFinite(altDeg) || altDeg <= 0) {
    return Number.POSITIVE_INFINITY;
  }
  const z = 90 - altDeg;
  if (z >= 90) {
    return Number.POSITIVE_INFINITY;
  }
  const cosZ = Math.cos(degToRad(z));
  const correction = 0.50572 * Math.pow(96.07995 - z, -1.6364);
  return 1 / (cosZ + correction);
}

function altitudeFromAirmass(x) {
  if (!Number.isFinite(x) || x <= 1) {
    return 90;
  }
  const value = clamp(1 / x, -1, 1);
  return radToDeg(Math.asin(value));
}

function angularSeparationDeg(raDegA, decDegA, raDegB, decDegB) {
  const raA = degToRad(raDegA);
  const decA = degToRad(decDegA);
  const raB = degToRad(raDegB);
  const decB = degToRad(decDegB);
  const cosSep =
    Math.sin(decA) * Math.sin(decB) + Math.cos(decA) * Math.cos(decB) * Math.cos(raA - raB);
  return radToDeg(Math.acos(clamp(cosSep, -1, 1)));
}

function julianDate(date) {
  return date.getTime() / 86400000 + 2440587.5;
}

function localSiderealTimeDeg(date, longitudeDeg) {
  const jd = julianDate(date);
  const t = (jd - 2451545.0) / 36525;
  const gmst =
    280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * t * t - (t * t * t) / 38710000;
  return normalizeDeg(gmst + longitudeDeg);
}

function resizeCanvas() {
  const rect = dom.skyCanvas.getBoundingClientRect();
  const size = Math.max(320, Math.floor(Math.min(rect.width, window.innerHeight * 0.78)));
  const dpr = Math.min(3, (window.devicePixelRatio || 1) * 1.18);
  dom.skyCanvas.width = Math.floor(size * dpr);
  dom.skyCanvas.height = Math.floor(size * dpr);
  dom.skyCanvas.style.height = `${size}px`;
  skyCtx.setTransform(1, 0, 0, 1, 0, 0);
  skyCtx.scale(dpr, dpr);
  canvasGeom.size = size;
  canvasGeom.cx = size / 2;
  canvasGeom.cy = size / 2;
  canvasGeom.radius = size * 0.45;
  resizeAirmassCanvas();
  resizePlanCanvas();
}

function onWindowResize() {
  resizeCanvas();
  renderSky();
  renderAirmassPlot();
  renderPlanBoard();
}

function setStatus(text, kind = "") {
  dom.statusPill.textContent = text;
  dom.statusPill.classList.remove("busy", "ok", "warn", "err");
  if (kind) {
    dom.statusPill.classList.add(kind);
  }
}

function makeId() {
  return `t-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function getSelectedFolder() {
  const selected = dom.folderSelect.value || "Unsorted";
  const folder = sanitizeFolderName(selected);
  if (!state.folders.some((name) => normalizeName(name) === normalizeName(folder))) {
    state.folders.push(folder);
    refreshFolderControls();
    dom.folderSelect.value = folder;
  }
  state.addFolder = folder;
  return folder;
}

function sanitizeExposureMinutes(value) {
  if (value === undefined || value === null || value === "") {
    return clamp(Math.round(Number(state.defaultExposureMin) || 20), 1, 600);
  }
  const parsed = Number.parseFloat(String(value).trim());
  if (!Number.isFinite(parsed)) {
    return clamp(Math.round(Number(state.defaultExposureMin) || 20), 1, 600);
  }
  return clamp(Math.round(parsed), 1, 600);
}

function sanitizeFolderName(value) {
  const raw = String(value || "").trim();
  if (!raw) {
    return "Unsorted";
  }
  return raw.replace(/[<>:"/\\|?*]+/g, "_").slice(0, 48);
}

function getAllFolders() {
  const fromTargets = state.targets.map((target) => sanitizeFolderName(target.folder || "Unsorted"));
  const all = [...state.folders, ...fromTargets, "Unsorted"];
  const deduped = new Map();
  for (const name of all) {
    const clean = sanitizeFolderName(name);
    const key = normalizeName(clean);
    if (!deduped.has(key)) {
      deduped.set(key, clean);
    }
  }
  return Array.from(deduped.values());
}

function buildFolderColorMap() {
  const folders = getAllFolders();
  const map = new Map();
  for (let i = 0; i < folders.length; i += 1) {
    const folder = folders[i];
    map.set(normalizeName(folder), FOLDER_COLOR_PALETTE[i % FOLDER_COLOR_PALETTE.length]);
  }
  return map;
}

function getFolderColor(folderName, folderColorMap) {
  const key = normalizeName(folderName || "Unsorted");
  if (folderColorMap && folderColorMap.has(key)) {
    return folderColorMap.get(key);
  }
  return FOLDER_COLOR_PALETTE[0];
}

function pickTargetColor(index) {
  return COLOR_PALETTE[index % COLOR_PALETTE.length];
}

function wrapMinute(minute) {
  return positiveModulo(Math.round(minute), 1440);
}

function positiveModulo(value, mod) {
  return ((value % mod) + mod) % mod;
}

function degToRad(value) {
  return (value * Math.PI) / 180;
}

function radToDeg(value) {
  return (value * 180) / Math.PI;
}

function normalizeDeg(value) {
  return positiveModulo(value, 360);
}

function normalizeTo180(value) {
  let wrapped = normalizeDeg(value);
  if (wrapped > 180) {
    wrapped -= 360;
  }
  return wrapped;
}

function clamp(value, minValue, maxValue) {
  return Math.max(minValue, Math.min(maxValue, value));
}

function isoDateOnly(date) {
  return date.toISOString().slice(0, 10);
}

function isIsoDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }
  const date = new Date(`${value}T00:00:00.000Z`);
  return Number.isFinite(date.getTime()) && isoDateOnly(date) === value;
}

function normalizeName(name) {
  return name.trim().toLowerCase().replace(/\s+/g, " ");
}

function formatUtc(date) {
  return `${date.toISOString().slice(11, 19)} UTC`;
}

function formatUtcShort(date) {
  return `${date.toISOString().slice(0, 16).replace("T", " ")} UTC`;
}

function formatUtcShortTime(date) {
  return date.toISOString().slice(11, 16);
}

function formatLocal(date, timeZone) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }).format(date);
}

function formatLocalShort(date, timeZone) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  }).format(date);
}

function formatLaptopLocal(date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: getLaptopDisplayTimeZone(),
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }).format(date);
}

function formatLaptopLocalShort(date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: getLaptopDisplayTimeZone(),
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  }).format(date);
}

function getLaptopDisplayTimeZone() {
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  if (zone === "PST" || zone === "US/Pacific" || zone === "Etc/GMT+8") {
    return "America/Los_Angeles";
  }
  return zone || "UTC";
}

function getLaptopTimeZoneAbbrev(date) {
  return getTimeZoneAbbrev(date, getLaptopDisplayTimeZone());
}

function getTimeZoneAbbrev(date, timeZone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "short"
  }).formatToParts(date);
  const zonePart = parts.find((part) => part.type === "timeZoneName");
  return zonePart ? zonePart.value : "";
}

function formatHours(hoursValue) {
  const wrapped = positiveModulo(hoursValue, 24);
  const totalSeconds = Math.round(wrapped * 3600);
  const hh = Math.floor(totalSeconds / 3600) % 24;
  const mm = Math.floor((totalSeconds % 3600) / 60);
  const ss = totalSeconds % 60;
  return `${pad2(hh)}:${pad2(mm)}:${pad2(ss)}`;
}

function formatRa(raDeg) {
  return formatHours(normalizeDeg(raDeg) / 15);
}

function formatDec(decDeg) {
  const sign = decDeg < 0 ? "-" : "+";
  const absVal = Math.abs(decDeg);
  const d = Math.floor(absVal);
  const mFloat = (absVal - d) * 60;
  const m = Math.floor(mFloat);
  const s = Math.round((mFloat - m) * 60);
  return `${sign}${pad2(d)}:${pad2(m)}:${pad2(s)}`;
}

function pad2(value) {
  return String(value).padStart(2, "0");
}

function escapeHtml(raw) {
  return String(raw)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(raw) {
  return escapeHtml(raw);
}

function hexToRgba(hex, alpha) {
  const clean = hex.replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  const num = Number.parseInt(full, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function darkenHex(hex, factor = 0.6) {
  const clean = hex.replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  const num = Number.parseInt(full, 16);
  const r = Math.max(0, Math.min(255, Math.round(((num >> 16) & 255) * factor)));
  const g = Math.max(0, Math.min(255, Math.round(((num >> 8) & 255) * factor)));
  const b = Math.max(0, Math.min(255, Math.round((num & 255) * factor)));
  return `rgb(${r}, ${g}, ${b})`;
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }
}
