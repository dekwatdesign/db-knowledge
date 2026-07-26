# `ckfood_shop_ecoli_sa`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckfood_shop_ecoli_sa_id | int(11) | NO | PRI | 0 |  |  |
| ckfood_shop_ecoli_result | char(1) | YES |  | NULL |  |  |
| ckfood_shop_sa_result | char(1) | YES |  | NULL |  |  |
| ckfood_shop_ecoli_sa_note | varchar(255) | YES |  | NULL |  |  |
| ckfood_shop_check_id | int(11) | YES | MUL | NULL |  |  |
| ckfood_shop_ecoli_sa_type_id | int(11) | YES | MUL | NULL |  |  |
| staff | char(10) | YES |  | NULL |  |  |
| last_update | char(10) | YES |  | NULL |  |  |
| ckfood_shop_ck_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckfood_shop_check_id | ckfood_shop_check_id | no | 1 |
| ix_ckfood_shop_ck_id | ckfood_shop_ck_id | no | 1 |
| ix_ckfood_shop_ecoli_sa_type_id | ckfood_shop_ecoli_sa_type_id | no | 1 |
| PRIMARY | ckfood_shop_ecoli_sa_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
