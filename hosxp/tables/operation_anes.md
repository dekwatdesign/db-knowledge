# `operation_anes`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anes_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES | MUL | NULL |  |  |
| doctor | varchar(9) | YES | MUL | NULL |  |  |
| control_doctor | varchar(10) | YES |  | NULL |  |  |
| begin_date_time | datetime | YES |  | NULL |  |  |
| end_date_time | datetime | YES |  | NULL |  |  |
| complication_icd1 | varchar(7) | YES |  | NULL |  |  |
| complication_icd2 | varchar(7) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| anes_type_id | int(11) | YES |  | NULL |  |  |
| anes_note | varchar(250) | YES |  | NULL |  |  |
| wait_save | char(1) | YES |  | NULL |  |  |
| df_icode | varchar(7) | YES |  | NULL |  |  |
| df_price | double(15,3) | YES |  | NULL |  |  |
| df_opitemrece_guid | varchar(38) | YES |  | NULL |  |  |
| doctor2 | varchar(9) | YES |  | NULL |  |  |
| doctor3 | varchar(9) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| doctor4 | varchar(9) | YES |  | NULL |  |  |
| doctor5 | varchar(9) | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| begin_time | time | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| end_time | time | YES |  | NULL |  |  |
| technique_id | int(11) | YES |  | NULL |  |  |
| straight_qty | int(11) | YES |  | NULL |  |  |
| anes_curved_text | varchar(200) | YES |  | NULL |  |  |
| anes_adjunct_type_id | int(11) | YES |  | NULL |  |  |
| anes_attempt_type_id | int(11) | YES |  | NULL |  |  |
| anes_intubation_time | time | YES |  | NULL |  |  |
| anes_difficulty_type_id | int(11) | YES |  | NULL |  |  |
| anes_tube_type_id | int(11) | YES |  | NULL |  |  |
| anes_tube_size | double(15,3) | YES |  | NULL |  |  |
| anes_tube_a_type_id | int(11) | YES |  | NULL |  |  |
| anes_attempt_text | varchar(200) | YES |  | NULL |  |  |
| anes_curved | int(11) | YES |  | NULL |  |  |
| anes_note_text | text | YES |  | NULL |  |  |
| anes_depth | double(15,3) | YES |  | NULL |  |  |
| anes_status_type_id | int(11) | YES |  | NULL |  |  |
| anes_hour | int(11) | YES |  | NULL |  |  |
| anes_minute | int(11) | YES |  | NULL |  |  |
| operation_time_type_id | int(11) | YES |  | NULL |  |  |
| anes_complex | char(1) | YES |  | NULL |  |  |
| operation_anes_charge_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| doctor | doctor | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| operation_id | operation_id | no | 1 |
| PRIMARY | anes_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
