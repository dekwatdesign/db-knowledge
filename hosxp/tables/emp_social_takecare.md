# `emp_social_takecare`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_social_takecare_id | int(11) | NO | PRI | 0 |  |  |
| emp_social_takecare_start_date | date | YES |  | NULL |  |  |
| emp_social_takecare_end_date | date | YES |  | NULL |  |  |
| emp_social_takecare_money | decimal(10,0) | YES |  | NULL |  |  |
| emp_social_takecate_fullname | varchar(100) | YES |  | NULL |  |  |
| emp_social_takecare_comment | varchar(255) | YES |  | NULL |  |  |
| emp_social_welfare_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsocial_welfare29 | emp_social_welfare_id | no | 1 |
| PRIMARY | emp_social_takecare_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
