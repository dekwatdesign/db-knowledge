# `opdscreen_fp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opdscreen_fp_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| g | int(11) | YES |  | NULL |  |  |
| p | int(11) | YES |  | NULL |  |  |
| a | int(11) | YES |  | NULL |  |  |
| last_child_age_y | int(11) | YES |  | NULL |  |  |
| last_child_age_m | int(11) | YES |  | NULL |  |  |
| opdscreen_fp_type_id | int(11) | YES |  | NULL |  |  |
| last_child_age_d | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | yes | 1 |
| PRIMARY | opdscreen_fp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
