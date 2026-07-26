# `visit_pttype_income_cover`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| visit_pttype_income_cover_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| income | char(2) | YES | MUL | NULL |  |  |
| cover_amount | double(15,3) | YES |  | NULL |  |  |
| is_cover | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| ix_vn_pttype_income | vn | yes | 1 |
| ix_vn_pttype_income | pttype | yes | 2 |
| ix_vn_pttype_income | income | yes | 3 |
| ix_vn_pttype_income_index | income | yes | 1 |
| ix_vn_pttype_income_index | pttype | yes | 2 |
| ix_vn_pttype_income_index | vn | yes | 3 |
| PRIMARY | visit_pttype_income_cover_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
