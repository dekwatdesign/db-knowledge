# `patient_outsider`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_outsider_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| pname | varchar(25) | YES |  | NULL |  |  |
| fname | varchar(50) | YES |  | NULL |  |  |
| lname | varchar(50) | YES |  | NULL |  |  |
| relation_name | varchar(200) | YES |  | NULL |  |  |
| phone | varchar(150) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| allow_visit | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| PRIMARY | patient_outsider_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
