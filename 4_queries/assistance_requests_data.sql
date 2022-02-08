SELECT teachers.name as teacher, students.name as student, assignments.name as assignment, (assistance_requests.completed_at - assistance_requests.started_at) as duration
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN assignments ON assignments.id = assistance_requests.assignment_id
JOIN assignment_submissions ON assignment_submissions.id = assignments.id
JOIN students ON assignment_submissions.student_id = students.id
ORDER BY duration ASC;