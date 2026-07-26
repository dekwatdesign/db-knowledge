# `physic_snmrc_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_snmrc_list_id | int(11) | NO | PRI | 0 |  |  |
| physic_snmrc_scale_id | int(11) | YES | MUL | NULL |  |  |
| physic_snmrc_activity_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| physic_snmrc_list_lastupdate | datetime | YES |  | NULL |  |  |
| physic_snmrc_type_id | int(11) | YES | MUL | NULL |  |  |
| physic_snmrc_result_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refphysic_snmrc_activity2 | physic_snmrc_activity_id | no | 1 |
| ix_Refphysic_snmrc_result13 | physic_snmrc_result_id | no | 1 |
| ix_Refphysic_snmrc_scale10 | physic_snmrc_scale_id | no | 1 |
| ix_Refphysic_snmrc_type12 | physic_snmrc_type_id | no | 1 |
| PRIMARY | physic_snmrc_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
