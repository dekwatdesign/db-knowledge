# `accident_vehicle_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| accident_vehicle_list_id | int(11) | NO | PRI | 0 |  |  |
| accident_list_id | int(11) | YES | MUL | NULL |  |  |
| accident_vehicle_type_id | int(11) | YES |  | NULL |  |  |
| vehicle_register_no | varchar(50) | YES |  | NULL |  |  |
| accident_transport_type_id | int(11) | YES |  | NULL |  |  |
| register_chwpart | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ali | accident_list_id | no | 1 |
| PRIMARY | accident_vehicle_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
