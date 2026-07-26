# `opitemrece_discount`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opitemrece_discount_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| discount | double(15,2) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opi_guid | opi_guid | yes | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | opitemrece_discount_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
