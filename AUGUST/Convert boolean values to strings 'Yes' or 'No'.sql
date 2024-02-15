SELECT
  bool,
  CASE
    WHEN bool = true THEN 'Yes'
    WHEN bool = false THEN 'No'
  END
  AS res  
FROM booltoword