# `health_med_element_cause`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_element_cause_id | int(11) | NO | PRI | 0 |  |  |
| health_med_service_id | int(11) | YES | MUL | NULL |  |  |
| health_med_element_type_id | int(11) | YES |  | NULL |  |  |
| health_med_element_subtype_id | int(11) | YES |  | NULL |  |  |
| cause_text | text | YES |  | NULL |  |  |
| health_med_balance_type_id | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_service_id | health_med_service_id | no | 1 |
| PRIMARY | health_med_element_cause_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
