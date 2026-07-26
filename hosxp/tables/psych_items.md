# `psych_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_items_id | int(11) | NO | PRI | 0 |  |  |
| psych_items_name | varchar(255) | YES | MUL | NULL |  |  |
| psych_group_treatment_id | int(11) | YES | MUL | NULL |  |  |
| psych_mdp_type_id | int(11) | YES | MUL | NULL |  |  |
| psych_items_minute | int(11) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| price2 | double(15,3) | YES |  | NULL |  |  |
| price3 | double(15,3) | YES |  | NULL |  |  |
| icd10 | varchar(9) | YES |  | NULL |  |  |
| icd9 | varchar(9) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| f43_rehab_code | varchar(10) | YES |  | NULL |  |  |
| use_price_policy | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | psych_items_name | no | 1 |
| ix_psych_group_treatment_id | psych_group_treatment_id | no | 1 |
| ix_psych_mdp_type_id | psych_mdp_type_id | no | 1 |
| PRIMARY | psych_items_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
