# `dt_fixed_recall4_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_fixed_recall4_detail_id | int(11) | NO | PRI | 0 |  |  |
| dtarea_code | varchar(15) | YES |  | NULL |  |  |
| dt_fixed_recall4_satisfactory1 | varchar(20) | YES |  | NULL |  |  |
| dt_fixed_recall4_satisfactory2 | varchar(20) | YES |  | NULL |  |  |
| dt_fixed_recall4_notacceptable1 | varchar(50) | YES |  | NULL |  |  |
| dt_fixed_recall4_notacceptable2 | varchar(50) | YES |  | NULL |  |  |
| dt_fixed_recall4_type | varchar(50) | YES |  | NULL |  |  |
| dt_fixed_recall4_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dt_fixed_recall4_id | dt_fixed_recall4_id | no | 1 |
| PRIMARY | dt_fixed_recall4_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
