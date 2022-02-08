SELECT cohorts.name as cohort_name, count(students.*) as student_count
FROM students
JOIN cohorts on cohorts.id = students.cohort_id
GROUP BY cohorts.name
HAVING count(students.*) >= 18
ORDER BY count(students.*);