# `dt_lab_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_lab_items_id | int(11) | NO | PRI | 0 |  |  |
| dt_lab_items_name | varchar(250) | YES |  | NULL |  |  |
| dt_lab_items_unit | varchar(250) | YES |  | NULL |  |  |
| dt_lab_items_price | double(13,3) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| dt_lab_items_group_id | int(11) | YES | MUL | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_lab_items_group8 | dt_lab_items_group_id | no | 1 |
| PRIMARY | dt_lab_items_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
