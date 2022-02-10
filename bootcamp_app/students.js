const { Pool } = require('pg');

const pool = new Pool({
  user: 'youssefragab',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv.splice(2, 3)
const cohort = args[0]
const limit = args[1]

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '${cohort}%'
LIMIT ${limit || 5};
`)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));
