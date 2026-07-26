# `health_med_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_service_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| health_med_service_type_id | int(11) | YES |  | NULL |  |  |
| service_date | date | YES | MUL | NULL |  |  |
| service_time | time | YES |  | NULL |  |  |
| health_med_doctor_id | int(11) | YES |  | NULL |  |  |
| health_med_treatment_type_id | int(11) | YES |  | NULL |  |  |
| health_med_service_result_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| in_hospcode_service | char(1) | YES |  | NULL |  |  |
| ipt_order_no | int(11) | YES |  | NULL |  |  |
| health_med_element_type_id | int(11) | YES |  | NULL |  |  |
| health_med_season_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_service_date | service_date | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | health_med_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
