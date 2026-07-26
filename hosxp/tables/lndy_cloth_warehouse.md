# `lndy_cloth_warehouse`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_warehouse_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_warehouse_name | varchar(30) | YES |  | NULL |  |  |
| lndy_cloth_warehouse_active | char(5) | YES |  | NULL |  |  |
| hospitial_department_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_work_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospitial_department_id | hospitial_department_id | no | 1 |
| ix_lndy_cloth_work_type_id | lndy_cloth_work_type_id | no | 1 |
| PRIMARY | lndy_cloth_warehouse_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
