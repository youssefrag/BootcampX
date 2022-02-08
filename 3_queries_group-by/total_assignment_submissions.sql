SELECT cohorts.name as cohort, count(assignment_submissions.*) as total_submissions
FROM assignment_submissions
JOIN students ON assignment_submissions.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER BY count(*) DESC;