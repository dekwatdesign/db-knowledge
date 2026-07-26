# `health_med_service_treatment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_service_treatment_id | int(11) | NO | PRI | 0 |  |  |
| health_med_service_id | int(11) | YES |  | NULL |  |  |
| health_med_treatment_type_id | int(11) | YES |  | NULL |  |  |
| health_med_treatment_subtype_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_service_treatment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
