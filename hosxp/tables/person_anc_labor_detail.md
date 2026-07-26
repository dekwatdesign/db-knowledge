# `person_anc_labor_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_anc_labor_detail_id | int(11) | NO | PRI | 0 |  |  |
| person_anc_id | int(11) | YES |  | NULL |  |  |
| child_no | int(11) | YES |  | NULL |  |  |
| body_weight | double(15,3) | YES |  | NULL |  |  |
| labor_date | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_anc_labor_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
