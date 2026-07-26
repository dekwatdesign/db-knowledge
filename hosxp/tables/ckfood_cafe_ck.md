# `ckfood_cafe_ck`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckfood_cafe_ck_id | int(11) | NO | PRI | 0 |  |  |
| ckfood_cafe_ck_date | date | YES | MUL | NULL |  |  |
| doctor_code | char(6) | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| ckfood_cafe_ck_note | varchar(255) | YES |  | NULL |  |  |
| ckfood_cafeteria_id | int(11) | YES | MUL | NULL |  |  |
| ckfood_cafe_ck_acc_code | varchar(150) | YES |  | NULL |  |  |
| ckfood_cafe_ck_acc_name | varchar(250) | YES |  | NULL |  |  |
| ckfood_cafe_ck_acc_price | double(13,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckfood_cafeteria_id | ckfood_cafeteria_id | no | 1 |
| ix_ckfood_cafe_ck_date | ckfood_cafe_ck_date | no | 1 |
| ix_last_update | last_update | no | 1 |
| PRIMARY | ckfood_cafe_ck_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
