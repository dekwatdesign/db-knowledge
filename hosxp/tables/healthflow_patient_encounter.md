# `healthflow_patient_encounter`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hft_penct_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(50) | YES |  | NULL |  |  |
| hft_penct_topic_text | varchar(50) | YES |  | NULL |  |  |
| hft_penct_send_json | longtext | YES |  | NULL |  |  |
| hft_penct_res_json | longtext | YES |  | NULL |  |  |
| hft_penct_res_code | int(11) | YES |  | NULL |  |  |
| create_datetime | datetime | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| hft_penct_create_by | varchar(250) | YES |  | NULL |  |  |
| hft_penct_update_by | varchar(250) | YES |  | NULL |  |  |
| oapp_id | int(11) | YES |  | NULL |  |  |
| focus_medication | longtext | YES |  | NULL |  |  |
| need_telemed | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | hft_penct_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
