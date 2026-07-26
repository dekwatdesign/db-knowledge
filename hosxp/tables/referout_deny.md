# `referout_deny`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| deny_id | int(11) | NO | PRI | 0 |  |  |
| cdate | datetime | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| pname | varchar(20) | YES |  | NULL |  |  |
| fname | varchar(50) | YES |  | NULL |  |  |
| lname | varchar(50) | YES |  | NULL |  |  |
| typept_id | varchar(5) | YES |  | NULL |  |  |
| strength_id | varchar(5) | YES |  | NULL |  |  |
| cause_referout_id | varchar(5) | YES |  | NULL |  |  |
| pdx | varchar(7) | YES |  | NULL |  |  |
| is_complete | varchar(1) | YES |  | NULL |  |  |
| refer_hospcode | varchar(5) | YES |  | NULL |  |  |
| is_upload | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | deny_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
