# `physic_denver2_list_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_denver2_list_detail_id | int(11) | NO | PRI | 0 |  |  |
| note | varchar(250) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| physic_denver2_list_id | int(11) | YES | MUL | NULL |  |  |
| physic_denver2_value_id | int(11) | YES | MUL | NULL |  |  |
| physic_denver2_activity_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_denver2_list_detail_activity_id | physic_denver2_activity_id | no | 1 |
| ix_idx_physic_denver2_list_detail_list_id | physic_denver2_list_id | no | 1 |
| ix_idx_physic_denver2_list_detail_value_id | physic_denver2_value_id | no | 1 |
| PRIMARY | physic_denver2_list_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
