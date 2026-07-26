# `dt_fixed_recall34`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_fixed_recall34_id | int(11) | NO | PRI | 0 |  |  |
| dtarea_code | varchar(10) | YES |  | NULL |  |  |
| mb | double(15,2) | YES |  | NULL |  |  |
| b | double(15,2) | YES |  | NULL |  |  |
| db | double(15,2) | YES |  | NULL |  |  |
| ml | double(15,2) | YES |  | NULL |  |  |
| l | double(15,2) | YES |  | NULL |  |  |
| dl | double(15,2) | YES |  | NULL |  |  |
| dt_fixed_recall34_type | varchar(50) | YES |  | NULL |  |  |
| dt_fixed_recall_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dt_fixed_main_id | dt_fixed_recall_id | no | 1 |
| PRIMARY | dt_fixed_recall34_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
