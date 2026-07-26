# `ckfood_cafe_ck_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckfood_cafe_ck_type_id | int(11) | NO | PRI | 0 |  |  |
| ckfood_cafe_ck_type_name | varchar(255) | YES |  | NULL |  |  |
| ckfood_cafe_ck_grp_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckfood_cafe_ck_grp_type_id | ckfood_cafe_ck_grp_type_id | no | 1 |
| PRIMARY | ckfood_cafe_ck_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
