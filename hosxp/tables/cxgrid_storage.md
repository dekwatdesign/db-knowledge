# `cxgrid_storage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cxgrid_storage_id | int(11) | NO | PRI | 0 |  |  |
| staff | varchar(200) | YES | MUL | NULL |  |  |
| class_name | varchar(200) | YES | MUL | NULL |  |  |
| grid_name | varchar(200) | YES |  | NULL |  |  |
| storage_data | longblob | YES |  | NULL |  |  |
| object_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | staff | no | 1 |
| ix_name | class_name | no | 2 |
| ix_name | grid_name | no | 3 |
| ix_name_index | class_name | no | 1 |
| ix_name_index | grid_name | no | 2 |
| ix_name_index | staff | no | 3 |
| PRIMARY | cxgrid_storage_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
