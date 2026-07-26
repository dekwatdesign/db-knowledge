# `report_staff`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| report_staff_id | int(11) | NO | PRI | 0 |  |  |
| report_staff_name | varchar(200) | YES |  | NULL |  |  |
| report_staff_login | varchar(50) | YES |  | NULL |  |  |
| report_staff_password | varchar(250) | YES |  | NULL |  |  |
| report_staff_note | text | YES |  | NULL |  |  |
| hospcode | char(5) | YES |  | NULL |  |  |
| report_group_id | int(11) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| phone | varchar(50) | YES |  | NULL |  |  |
| email | varchar(50) | YES |  | NULL |  |  |
| amp_code | varchar(4) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | report_staff_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
