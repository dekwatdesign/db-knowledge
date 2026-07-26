# `clinicmember_tb_medication_plan_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_tb_medication_plan_list_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_tb_medication_plan_id | int(11) | YES | MUL | NULL |  |  |
| clinicmember_tb_medication_code | char(1) | YES |  | NULL |  |  |
| month_start | int(11) | YES |  | NULL |  |  |
| month_end | int(11) | YES |  | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_tb_medication_plan_id | clinicmember_tb_medication_plan_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | clinicmember_tb_medication_plan_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
