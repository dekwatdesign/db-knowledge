# `oapp_week_limit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_week_limit_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(10) | YES | MUL | NULL |  |  |
| oapp_week_day_id | int(11) | YES |  | NULL |  |  |
| oapp_week_limit_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| ix_unique | doctor_code | no | 1 |
| ix_unique | oapp_week_day_id | no | 2 |
| PRIMARY | oapp_week_limit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
