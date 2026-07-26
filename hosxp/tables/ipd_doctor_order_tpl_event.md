# `ipd_doctor_order_tpl_event`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_doctor_order_tpl_event_id | int(11) | NO | PRI | 0 |  |  |
| ipd_doctor_order_tpl_id | int(11) | YES | MUL | NULL |  |  |
| event_name | varchar(200) | YES | MUL | NULL |  |  |
| event_text | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_fe | event_name | yes | 1 |
| ix_fe | ipd_doctor_order_tpl_id | yes | 2 |
| ix_ipd_doctor_order_tpl_id | ipd_doctor_order_tpl_id | no | 1 |
| PRIMARY | ipd_doctor_order_tpl_event_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
