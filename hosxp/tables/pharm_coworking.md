# `pharm_coworking`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pharm_coworking_id | int(11) | NO | PRI | 0 |  |  |
| pharm_coworking_staff | varchar(15) | YES |  | NULL |  |  |
| pharm_alyze_id | int(11) | YES | MUL | NULL |  |  |
| pharm_position_working_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refpharm_workload31 | pharm_alyze_id | no | 1 |
| ix_Refpharm_workposition101 | pharm_position_working_id | no | 1 |
| PRIMARY | pharm_coworking_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
