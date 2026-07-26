# `operation_schedule_resource`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| resource_id | int(11) | NO | PRI | 0 |  |  |
| resource_name | varchar(250) | YES |  | NULL |  |  |
| resource_color | int(11) | YES |  | NULL |  |  |
| resource_image_index | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | resource_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
