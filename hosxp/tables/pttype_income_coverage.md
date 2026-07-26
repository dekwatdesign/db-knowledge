# `pttype_income_coverage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_income_coverage_id | int(11) | NO | PRI | 0 |  |  |
| pttype | char(2) | YES | MUL | NULL |  |  |
| income | char(2) | YES | MUL | NULL |  |  |
| coverage_amount | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pttype | pttype | no | 1 |
| ix_pttype_income | pttype | yes | 1 |
| ix_pttype_income | income | yes | 2 |
| ix_pttype_income_index | income | yes | 1 |
| ix_pttype_income_index | pttype | yes | 2 |
| PRIMARY | pttype_income_coverage_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
