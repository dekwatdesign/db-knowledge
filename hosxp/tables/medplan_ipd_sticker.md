# `medplan_ipd_sticker`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| medplan_ipd_sticker_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| med_plan_number | int(11) | YES | MUL | NULL |  |  |
| print_date | date | YES |  | NULL |  |  |
| icode | char(9) | YES |  | NULL |  |  |
| qty | double(15,3) | YES |  | NULL |  |  |
| print_ok | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_an_print_date | an | no | 1 |
| ix_an_print_date | print_date | no | 2 |
| ix_medplannumber_date | med_plan_number | yes | 1 |
| ix_medplannumber_date | print_date | yes | 2 |
| ix_pd | an | no | 1 |
| ix_pd | med_plan_number | no | 2 |
| ix_pd | print_date | no | 3 |
| PRIMARY | medplan_ipd_sticker_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
