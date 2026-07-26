# `psychiatric_form_trace_forward`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_form_trace_forward_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_form_trace_forward_reason | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_cc | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_safety | char(1) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_accident | char(1) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_fall_move | char(1) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_coma_score | char(1) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_refer_car | char(1) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_death_move | char(1) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_et_tube | char(1) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_sputum | char(1) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_another | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_specify | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_diag_after_care | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_operation_basic | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_trace1 | char(1) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_trace1_cc | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_trace1_date | date | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_trace1_doctor_id | varchar(6) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_trace2 | char(255) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_trace2_cc | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_trace2_date | date | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_trace2_doctor_id | varchar(6) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_trace3 | char(1) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_trace3_cc | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_trace3_date | date | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_trace3_doctor_id | varchar(6) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_refer_date | datetime | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_user_inform | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_refer_hospcode | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_position | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_date | date | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_time | time | YES |  | NULL |  |  |
| psychiatric_form_trace_forward_staff | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_form_trace_forward_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
