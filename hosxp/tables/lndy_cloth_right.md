# `lndy_cloth_right`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_right_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_warehouse_id | int(11) | YES | MUL | NULL |  |  |
| loginid | varchar(100) | YES |  | NULL |  |  |
| lndy_cloth_department_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_department_id | lndy_cloth_department_id | no | 1 |
| ix_lndy_cloth_warehouse_id | lndy_cloth_warehouse_id | no | 1 |
| PRIMARY | lndy_cloth_right_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
