SELECT x, n, ARRAY(SELECT generate_series(1, n) * x) as res
FROM counter
ORDER BY x, n;