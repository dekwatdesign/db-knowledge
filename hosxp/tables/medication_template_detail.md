# `medication_template_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| medication_template_detail_id | int(11) | NO | PRI | 0 |  |  |
| medication_template_id | int(11) | YES | MUL | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| qty | double(15,3) | YES |  | NULL |  |  |
| drugusage | varchar(7) | YES |  | NULL |  |  |
| usage_code | varchar(10) | YES |  | NULL |  |  |
| frequency_code | varchar(10) | YES |  | NULL |  |  |
| time_code | varchar(10) | YES |  | NULL |  |  |
| usage_unit_code | varchar(10) | YES |  | NULL |  |  |
| dispense_dose | double(15,3) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_medication_template_id | medication_template_id | no | 1 |
| PRIMARY | medication_template_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
