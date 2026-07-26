# `oapp_vacation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_vacation_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| vacation_date | date | YES |  | NULL |  |  |
| vacation_note | text | YES |  | NULL |  |  |
| sp_time | char(1) | YES |  | NULL |  |  |
| time_start | time | YES |  | NULL |  |  |
| time_finish | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| ix_doctor_date_uni | doctor_code | yes | 1 |
| ix_doctor_date_uni | vacation_date | yes | 2 |
| PRIMARY | oapp_vacation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
