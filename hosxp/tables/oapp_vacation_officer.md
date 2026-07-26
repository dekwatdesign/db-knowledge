# `oapp_vacation_officer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_vacation_officer_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(50) | YES | MUL | NULL |  |  |
| officer_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| ix_doctor_code_officer | doctor_code | yes | 1 |
| ix_doctor_code_officer | officer_id | yes | 2 |
| ix_officer_id | officer_id | no | 1 |
| PRIMARY | oapp_vacation_officer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
