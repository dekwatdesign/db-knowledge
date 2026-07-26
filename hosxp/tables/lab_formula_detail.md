# `lab_formula_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_formula_detail_id | int(11) | NO | PRI | 0 |  |  |
| lab_formula_head_id | int(11) | YES | MUL | NULL |  |  |
| lab_items_code | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_lab_formula_head_id | lab_formula_head_id | no | 1 |
| PRIMARY | lab_formula_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
