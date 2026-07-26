# `dt_lab_material`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_lab_material_id | int(11) | NO | PRI | 0 |  |  |
| dt_lab_material_name | varchar(250) | YES |  | NULL |  |  |
| dt_lab_material_price | double(13,3) | YES |  | NULL |  |  |
| dt_lab_material_unit | varchar(250) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |
| icode | char(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_lab_material_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
