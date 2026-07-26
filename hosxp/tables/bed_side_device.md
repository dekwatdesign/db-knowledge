# `bed_side_device`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bed_side_device_id | int(11) | NO | PRI | 0 |  |  |
| bedno | varchar(6) | YES | MUL | NULL |  |  |
| device_model | varchar(200) | YES |  | NULL |  |  |
| device_supplier | varchar(100) | YES |  | NULL |  |  |
| device_ip | varchar(100) | YES |  | NULL |  |  |
| device_port | int(11) | YES |  | NULL |  |  |
| bed_side_device_type_id | int(11) | YES |  | NULL |  |  |
| real_device_ip | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bedno | bedno | no | 1 |
| PRIMARY | bed_side_device_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
