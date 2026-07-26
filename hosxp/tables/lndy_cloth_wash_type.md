# `lndy_cloth_wash_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_wash_type_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_wash_type_name | varchar(30) | YES |  | NULL |  |  |
| lndy_cloth_wash_type_active | char(10) | YES |  | NULL |  |  |
| lndy_cloth_wash_type_expire | decimal(10,0) | YES |  | NULL |  |  |
| lndy_cloth_work_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_work_type_id | lndy_cloth_work_type_id | no | 1 |
| PRIMARY | lndy_cloth_wash_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
