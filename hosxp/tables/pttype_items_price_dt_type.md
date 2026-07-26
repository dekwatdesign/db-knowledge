# `pttype_items_price_dt_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_items_price_dt_type_id | int(11) | NO | PRI | 0 |  |  |
| pttype_items_price_id | int(11) | YES | MUL | NULL |  |  |
| doctor_type_id | int(11) | YES | MUL | NULL |  |  |
| visit_type | char(1) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| charge_df | char(1) | YES |  | NULL |  |  |
| charge_icode | varchar(7) | YES |  | NULL |  |  |
| fixed_df_price | char(1) | YES |  | NULL |  |  |
| df_price | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pttype_items_price_id | pttype_items_price_id | no | 1 |
| ix_uni | pttype_items_price_id | yes | 1 |
| ix_uni | doctor_type_id | yes | 2 |
| ix_uni | visit_type | yes | 3 |
| ix_uni_index | doctor_type_id | yes | 1 |
| ix_uni_index | pttype_items_price_id | yes | 2 |
| ix_uni_index | visit_type | yes | 3 |
| PRIMARY | pttype_items_price_dt_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
