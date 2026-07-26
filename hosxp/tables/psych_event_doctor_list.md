# `psych_event_doctor_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_event_doctor_list_id | int(11) | NO | PRI | 0 |  |  |
| psych_event_id | int(11) | YES | MUL | NULL |  |  |
| psych_event_doctor_code | varchar(7) | YES |  | NULL |  |  |
| psych_doctor_position_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_doctor_position_id | psych_doctor_position_id | no | 1 |
| ix_psych_event_id | psych_event_id | no | 1 |
| PRIMARY | psych_event_doctor_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
