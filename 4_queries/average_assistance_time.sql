SELECT (avg(assistance_requests.completed_at - assistance_requests.started_at)) as average_assistance_request_duration
FROM assistance_requests;