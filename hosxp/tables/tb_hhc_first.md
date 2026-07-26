# `tb_hhc_first`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_hhc_first_id | int(11) | NO | PRI | 0 |  |  |
| tb_register_id | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| tb_hhc_first_date | date | YES |  | NULL |  |  |
| tb_hhc_first_receive_data_date | date | YES |  | NULL |  |  |
| tb_hhc_first_choice_one | char(1) | YES |  | NULL |  |  |
| tb_hhc_first_choice_one_other_note | varchar(255) | YES |  | NULL |  |  |
| tb_hhc_first_choice_two | char(1) | YES |  | NULL |  |  |
| tb_hhc_first_choice_two_other_note | varchar(255) | YES |  | NULL |  |  |
| tb_hhc_first_choice_three | char(1) | YES |  | NULL |  |  |
| tb_hhc_first_choice_three_other_note | varchar(255) | YES |  | NULL |  |  |
| tb_hhc_method_eliminate_sputum_id | int(11) | YES |  | NULL |  |  |
| tb_hhc_first_choice_four_other_note | varchar(255) | YES |  | NULL |  |  |
| tb_hhc_first_choice_five | char(1) | YES |  | NULL |  |  |
| tb_hhc_first_choice_five_phase_month | int(11) | YES |  | NULL |  |  |
| tb_hhc_first_choice_six | char(1) | YES |  | NULL |  |  |
| tb_hhc_first_choice_six_date_appointment | date | YES |  | NULL |  |  |
| tb_hhc_first_choice_seven | char(1) | YES |  | NULL |  |  |
| tb_hhc_first_choice_seven_other_note | varchar(255) | YES |  | NULL |  |  |
| tb_hhc_first_reason_one | char(1) | YES |  | NULL |  |  |
| tb_hhc_first_reason_two | char(1) | YES |  | NULL |  |  |
| tb_hhc_first_reason_three | char(1) | YES |  | NULL |  |  |
| tb_hhc_first_reason_four | char(1) | YES |  | NULL |  |  |
| tb_hhc_first_reason_five | char(1) | YES |  | NULL |  |  |
| tb_hhc_first_reason_six | char(1) | YES |  | NULL |  |  |
| tb_hhc_first_reason_six_other_note | varchar(255) | YES |  | NULL |  |  |
| tb_hhc_first_user_save | varchar(6) | YES |  | NULL |  |  |
| tb_hhc_first_last_update | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_hhc_first_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
