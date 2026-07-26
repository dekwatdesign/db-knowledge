# `physic_denver2_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_denver2_list_id | int(11) | NO | PRI | 0 |  |  |
| physic_denver2_list_date | date | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(15) | YES |  | NULL |  |  |
| doctor_code | varchar(6) | YES |  | NULL |  |  |
| staff | varchar(255) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| physic_register_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_denver2_list_register_id | physic_register_id | no | 1 |
| PRIMARY | physic_denver2_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
