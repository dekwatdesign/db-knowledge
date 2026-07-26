# `blb_blood_reg`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_blood_reg_id | int(11) | NO | PRI | 0 |  |  |
| blb_blood_reg_type_id | int(11) | YES | MUL | NULL |  |  |
| blb_blood_reg_date | date | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| blb_reg_internal_id | int(11) | YES | MUL | NULL |  |  |
| blb_reg_external_id | int(11) | YES | MUL | NULL |  |  |
| blb_stock_success | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_blood_reg_type_id | blb_blood_reg_type_id | no | 1 |
| ix_blb_reg_external_id | blb_reg_external_id | no | 1 |
| ix_blb_reg_internal_id | blb_reg_internal_id | no | 1 |
| PRIMARY | blb_blood_reg_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
