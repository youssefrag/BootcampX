SELECT day, count(*) as total_assignemnts
FROM assignments
GROUP BY day
ORDER BY day;