# `doctor_emr_view`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_emr_view_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(50) | YES | MUL | NULL |  |  |
| emr_view_item_id | int(11) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| enable_view | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_u_index | doctor_code | yes | 1 |
| ix_u_index | emr_view_item_id | yes | 2 |
| PRIMARY | doctor_emr_view_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
