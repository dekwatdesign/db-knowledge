# `doctor_oapp_limit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_oapp_limit_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(10) | YES | MUL | NULL |  |  |
| oapp_week_day_id | int(11) | YES |  | NULL |  |  |
| oapp_limit | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | doctor_code | yes | 1 |
| ix_unique | oapp_week_day_id | yes | 2 |
| PRIMARY | doctor_oapp_limit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
