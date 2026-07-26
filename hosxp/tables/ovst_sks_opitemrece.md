# `ovst_sks_opitemrece`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_sks_opitemrece_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| sks_product_selection_type_id | int(11) | YES |  | NULL |  |  |
| sks_product_category_id | int(11) | YES |  | NULL |  |  |
| sks_claim_control_type_id | int(11) | YES |  | NULL |  |  |
| sks_claim_category_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | opi_guid | yes | 1 |
| ix_von | vn | no | 1 |
| PRIMARY | ovst_sks_opitemrece_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
