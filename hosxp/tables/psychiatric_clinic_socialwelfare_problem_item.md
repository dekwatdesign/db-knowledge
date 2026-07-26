# `psychiatric_clinic_socialwelfare_problem_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_clinic_socialwelfare_problem_item_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_clinic_socialwelfare_problem_id | char(11) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_problem_item_code | varchar(10) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_problem_item_name | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_clinic_socialwelfare_problem_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
