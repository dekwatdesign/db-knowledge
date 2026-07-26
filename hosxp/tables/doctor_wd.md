# `doctor_wd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_wd_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(20) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| computer_name | varchar(100) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| ix_dv | doctor_code | no | 1 |
| ix_dv | vn | no | 2 |
| PRIMARY | doctor_wd_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
