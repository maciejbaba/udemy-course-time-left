window.onload = () => {
  const sections = getSections();

  const timeTexts = getTimeTextsFromSections(sections);

  let totalMinutes = 0;
  timeTexts.forEach((timeText) => {
    totalMinutes += getMinutesFromText(timeText);
  });

  sections.forEach((section) => {
    const minutes = getMinutesFromText(section.children[1]?.textContent);
    const hoursLeft = getHoursFromMinutes(totalMinutes);
    const minutesLeft = getMinutesFromTotalMinutes(totalMinutes);
    injectTimeIntoSection(hoursLeft, minutesLeft, section);
    totalMinutes -= minutes;
  });
};

function getMinutesFromText(text) {
  const firstItem = text.split(' ')[0];
  if (!firstItem?.includes('hr')) {
    return parseInt(firstItem?.replace('min', ''));
  }
  const secondItem = text.split(' ')[1];
  return (
    parseInt(firstItem?.replace('hr', '')) * 60 +
    parseInt(secondItem?.replace('min', ''))
  );
}

function getSections() {
  const sections = document.querySelectorAll(
    '[data-purpose="section-duration-sr-only"]'
  );
  return sections;
}

function getTimeTextsFromSections(sections) {
  const timeTexts = [];
  sections.forEach((section) => {
    timeTexts.push(section.children[1]?.textContent);
  });
  return timeTexts;
}

function getHoursFromMinutes(minutes) {
  return Math.floor(minutes / 60);
}

function getMinutesFromTotalMinutes(totalMinutes) {
  return totalMinutes % 60;
}

function injectTimeIntoSection(hours, minutes, section) {
  const sibling = section.previousElementSibling;
  const text = sibling.textContent;
  sibling.textContent = `${text} | Time left: ${hours}hr ${minutes}min`;
}
