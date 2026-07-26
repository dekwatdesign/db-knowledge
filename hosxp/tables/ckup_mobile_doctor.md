# `ckup_mobile_doctor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_mobile_doctor_id | int(11) | NO | PRI | 0 |  |  |
| doctor | varchar(15) | YES |  | NULL |  |  |
| hl7_doctor_code | varchar(100) | YES |  | NULL |  |  |
| doctor_name | varchar(250) | YES |  | NULL |  |  |
| doctor_licenseno | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckup_mobile_doctor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
