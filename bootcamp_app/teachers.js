const { Pool } = require('pg');

const pool = new Pool({
  user: 'youssefragab',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv[2]

const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${cohort || 'JUL02'}'
ORDER BY teacher;
`;

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${cohort || 'JUL02'}'
ORDER BY teacher;
`)
  .then(res => {
    res.rows.forEach(row => {
      console.log(`${row.cohort}: ${row.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));