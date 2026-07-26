# `ipt_pttype_income_cover`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_pttype_income_cover_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| cover_amount | double(15,3) | YES |  | NULL |  |  |
| is_cover | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_an_pttype_income | an | yes | 1 |
| ix_an_pttype_income | pttype | yes | 2 |
| ix_an_pttype_income | income | yes | 3 |
| ix_an_pttype_income_index | an | yes | 1 |
| ix_an_pttype_income_index | income | yes | 2 |
| ix_an_pttype_income_index | pttype | yes | 3 |
| PRIMARY | ipt_pttype_income_cover_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
