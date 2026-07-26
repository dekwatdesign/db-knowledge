# `lndy_cloth_return`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_return_id | decimal(10,0) | NO | PRI | 0 |  |  |
| lndy_cloth_return_staff | varchar(40) | YES |  | NULL |  |  |
| lndy_cloth_return_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_wash_id | decimal(10,0) | YES | MUL | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| lndy_cloth_return_employee | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_wash_id | lndy_cloth_wash_id | no | 1 |
| PRIMARY | lndy_cloth_return_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
