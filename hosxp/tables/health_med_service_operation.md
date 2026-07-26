# `health_med_service_operation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_service_operation_id | int(11) | NO | PRI | 0 |  |  |
| health_med_service_id | int(11) | YES |  | NULL |  |  |
| health_med_operation_type_id | int(11) | YES |  | NULL |  |  |
| health_med_operation_item_id | int(11) | YES |  | NULL |  |  |
| health_med_organ_id | int(11) | YES |  | NULL |  |  |
| health_med_service_operation_time_minute | int(11) | YES |  | NULL |  |  |
| service_price | double(15,3) | YES |  | NULL |  |  |
| service_icode | varchar(7) | YES |  | NULL |  |  |
| service_qty | int(11) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| health_med_provider_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_service_operation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
