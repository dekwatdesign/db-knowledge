# `ckfood_shop_check_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckfood_shop_check_list_id | int(11) | NO | PRI | 0 |  |  |
| ckfood_shop_check_list_result | double(13,3) | YES |  | NULL |  |  |
| ckfood_shop_check_list_note | varchar(255) | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| ckfood_shop_check_id | int(11) | YES | MUL | NULL |  |  |
| ckfood_shop_check_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckfood_shop_check_id | ckfood_shop_check_id | no | 1 |
| ix_ckfood_shop_check_type_id | ckfood_shop_check_type_id | no | 1 |
| ix_last_update | last_update | no | 1 |
| PRIMARY | ckfood_shop_check_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
