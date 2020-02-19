export const findLesson = (units = [], lessonId) =>
  units.find(lessons => lessons.id === lessonId);

export const getLessonsForUnit = (lessons = [], unitid) =>
  !unitid ? lessons : lessons.filter(lesson => lesson.unitid === unitid);
