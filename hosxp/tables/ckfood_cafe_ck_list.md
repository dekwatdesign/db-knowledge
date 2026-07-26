# `ckfood_cafe_ck_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckfood_cafe_ck_list_id | int(11) | NO | PRI | 0 |  |  |
| ckfood_cafe_ck_id | int(11) | YES | MUL | NULL |  |  |
| ckfood_cafe_ck_type_id | int(11) | YES | MUL | NULL |  |  |
| ckfood_cafe_ck_list_result | varchar(255) | YES |  | NULL |  |  |
| ckfood_cafe_ck_list_note | varchar(255) | YES |  | NULL |  |  |
| ckfood_cafe_ck_grp_type_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckfood_cafe_ck_grp_type_id | ckfood_cafe_ck_grp_type_id | no | 1 |
| ix_ckfood_cafe_ck_id | ckfood_cafe_ck_id | no | 1 |
| ix_ckfood_cafe_ck_type_id | ckfood_cafe_ck_type_id | no | 1 |
| ix_last_update | last_update | no | 1 |
| PRIMARY | ckfood_cafe_ck_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
