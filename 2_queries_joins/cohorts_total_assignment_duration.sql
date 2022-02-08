SELECT sum(assignment_submissions.duration) as duration
FROM assignment_submissions
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = 'FEB12'