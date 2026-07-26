# `accident_vehicle_picture`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| accident_vehicle_picture_id | int(11) | NO | PRI | 0 |  |  |
| accident_vehicle_list_id | int(11) | YES | MUL | NULL |  |  |
| accident_vehicle_picture_blob | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | accident_vehicle_list_id | no | 1 |
| PRIMARY | accident_vehicle_picture_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
