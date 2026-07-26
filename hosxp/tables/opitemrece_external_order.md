# `opitemrece_external_order`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opitemrece_external_order_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| medication_name | varchar(200) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(20) | YES |  | NULL |  |  |
| medication_usage_name | varchar(200) | YES |  | NULL |  |  |
| order_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | opitemrece_external_order_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
