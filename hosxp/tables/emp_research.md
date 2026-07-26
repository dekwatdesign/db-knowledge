# `emp_research`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_research_id | int(11) | NO | PRI | 0 |  |  |
| emp_research_name | varchar(250) | YES |  | NULL |  |  |
| emp_research_detail | text | YES |  | NULL |  |  |
| emp_research_begindate | date | YES |  | NULL |  |  |
| emp_research_enddate | date | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_research_lastupdate | date | YES |  | NULL |  |  |
| emp_research_agency_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_research_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
