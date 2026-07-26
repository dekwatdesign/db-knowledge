# `cancer_nursenote_icrt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_nursenote_icrt_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(15) | YES |  | NULL |  |  |
| vn | varchar(20) | YES |  | NULL |  |  |
| icrt_status | varchar(3) | YES |  | NULL |  |  |
| icrt_order_no | int(11) | YES |  | NULL |  |  |
| evaluate_event_status | varchar(1) | YES |  | NULL |  |  |
| evaluate_date | date | YES |  | NULL |  |  |
| evaluate_time | time | YES |  | NULL |  |  |
| temperature | double(22,3) | YES |  | NULL |  |  |
| pressure | double(22,3) | YES |  | NULL |  |  |
| rate | double(22,3) | YES |  | NULL |  |  |
| bp | double(22,3) | YES |  | NULL |  |  |
| symptom | varchar(100) | YES |  | NULL |  |  |
| application_status | varchar(1) | YES |  | NULL |  |  |
| application_text | varchar(100) | YES |  | NULL |  |  |
| packing_verginal_status | varchar(1) | YES |  | NULL |  |  |
| vasilin_qty | int(11) | YES |  | NULL |  |  |
| roll_qty | int(11) | YES |  | NULL |  |  |
| bleeding_verginal_status | varchar(1) | YES |  | NULL |  |  |
| bleeding_verginal_text | varchar(100) | YES |  | NULL |  |  |
| iv_flici_status | varchar(1) | YES |  | NULL |  |  |
| iv_flici_text | varchar(100) | YES |  | NULL |  |  |
| iv_flici_rate | int(11) | YES |  | NULL |  |  |
| iv_flici_bottle | double(22,3) | YES |  | NULL |  |  |
| complication_status | varchar(1) | YES |  | NULL |  |  |
| complication_text | varchar(100) | YES |  | NULL |  |  |
| other_text | varchar(100) | YES |  | NULL |  |  |
| remark_text | varchar(100) | YES |  | NULL |  |  |
| recommend_list | varchar(100) | YES |  | NULL |  |  |
| iv_flici_type | int(11) | YES |  | NULL |  |  |
| iv_flici_rate_unit | int(11) | YES |  | NULL |  |  |
| foley_cath_status | varchar(1) | YES |  | NULL |  |  |
| foley_cath_cc | varchar(100) | YES |  | NULL |  |  |
| rectal_dose_status | varchar(1) | YES |  | NULL |  |  |
| rectal_dose_text | varchar(100) | YES |  | NULL |  |  |
| symptom_after | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_nursenote_icrt_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
