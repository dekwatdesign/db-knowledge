# `physic_barthel_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_barthel_list_id | int(11) | NO | PRI | 0 |  |  |
| physic_barthel_scale_id | int(11) | YES | MUL | NULL |  |  |
| physic_barthel_value_id | int(11) | YES | MUL | NULL |  |  |
| physic_barthel_activity_id | int(11) | YES | MUL | NULL |  |  |
| physic_barthel_list_lastupdate | datetime | YES |  | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refphysic_barthel_activity9 | physic_barthel_activity_id | no | 1 |
| ix_Refphysic_barthel_scale5 | physic_barthel_scale_id | no | 1 |
| ix_Refphysic_barthel_value6 | physic_barthel_value_id | no | 1 |
| PRIMARY | physic_barthel_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
