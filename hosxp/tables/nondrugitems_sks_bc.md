# `nondrugitems_sks_bc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nondrugitems_sks_bc_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| pcode | varchar(2) | YES |  | NULL |  |  |
| pttype | varchar(2) | YES |  | NULL |  |  |
| income | varchar(2) | YES |  | NULL |  |  |
| bill_code | varchar(10) | YES |  | NULL |  |  |
| claim_cat | varchar(2) | YES |  | NULL |  |  |
| start_date | date | YES |  | NULL |  |  |
| finish_date | date | YES | MUL | NULL |  |  |
| claim_amount | double(22,2) | YES |  | NULL |  |  |
| rev_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| icode | icode | no | 1 |
| icode | pcode | no | 2 |
| ix_code_1 | finish_date | no | 1 |
| ix_code_1 | icode | no | 2 |
| ix_code_1 | income | no | 3 |
| ix_code_1 | pttype | no | 4 |
| ix_code_1 | start_date | no | 5 |
| ix_code_2 | icode | no | 1 |
| ix_code_uni | icode | yes | 1 |
| ix_code_uni | income | yes | 2 |
| ix_code_uni | pttype | yes | 3 |
| ix_code_uni | start_date | yes | 4 |
| PRIMARY | nondrugitems_sks_bc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
