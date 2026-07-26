# `ckfood_shop_ck`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckfood_shop_ck_id | int(11) | NO | PRI | 0 |  |  |
| ckfood_shop_ck_date | date | YES | MUL | NULL |  |  |
| ckfood_shop_ck_val_type_id | int(11) | YES | MUL | NULL |  |  |
| ckfood_shop_ck_result | char(1) | YES |  | NULL |  |  |
| ckfood_shop_ck_result_note | varchar(255) | YES |  | NULL |  |  |
| ckfood_shop_area_val_type_id | int(11) | YES | MUL | NULL |  |  |
| ckfood_shop_area_note | varchar(255) | YES |  | NULL |  |  |
| ckfood_shop_cook_val_type_id | int(11) | YES | MUL | NULL |  |  |
| ckfood_shop_cook_note | varchar(255) | YES |  | NULL |  |  |
| ckfood_shop_sntr_val_type_id | int(11) | YES | MUL | NULL |  |  |
| ckfood_shop_sntr_note | varchar(255) | YES |  | NULL |  |  |
| ckfood_shop_ps_val_type_id | int(11) | YES | MUL | NULL |  |  |
| ckfood_shop_ps_note | varchar(255) | YES |  | NULL |  |  |
| doctor_code | char(6) | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| ckfood_shop_ck_note | varchar(255) | YES |  | NULL |  |  |
| ckfood_shop_id | int(11) | YES | MUL | NULL |  |  |
| ckfood_shop_ck_acc_code | varchar(150) | YES |  | NULL |  |  |
| ckfood_shop_ck_acc_name | varchar(250) | YES |  | NULL |  |  |
| ckfood_shop_ck_acc_price | double(13,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckfood_shop_area_val_type_id | ckfood_shop_area_val_type_id | no | 1 |
| ix_ckfood_shop_ck_date | ckfood_shop_ck_date | no | 1 |
| ix_ckfood_shop_ck_val_type_id | ckfood_shop_ck_val_type_id | no | 1 |
| ix_ckfood_shop_cook_val_type_id | ckfood_shop_cook_val_type_id | no | 1 |
| ix_ckfood_shop_id | ckfood_shop_id | no | 1 |
| ix_ckfood_shop_ps_val_type_id | ckfood_shop_ps_val_type_id | no | 1 |
| ix_ckfood_shop_sntr_val_type_id | ckfood_shop_sntr_val_type_id | no | 1 |
| ix_last_update | last_update | no | 1 |
| PRIMARY | ckfood_shop_ck_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
