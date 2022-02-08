SELECT cohorts.name as name, (avg(assistance_requests.completed_at - assistance_requests.started_at)) as average_assistance_request_duration
FROM assistance_requests 
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER BY average_assistance_request_duration;