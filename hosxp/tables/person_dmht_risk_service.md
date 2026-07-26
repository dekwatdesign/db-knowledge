# `person_dmht_risk_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_dmht_risk_service_id | int(11) | NO | PRI | 0 |  |  |
| person_dmht_risk_register_id | int(11) | YES | MUL | NULL |  |  |
| person_dmht_risk_service_date | date | YES |  | NULL |  |  |
| fbs_before | double(15,3) | YES |  | NULL |  |  |
| fbs_after | double(15,3) | YES |  | NULL |  |  |
| bps_before | int(11) | YES |  | NULL |  |  |
| bpd_before | int(11) | YES |  | NULL |  |  |
| bps_after | int(11) | YES |  | NULL |  |  |
| bpd_after | int(11) | YES |  | NULL |  |  |
| waist_before | double(15,3) | YES |  | NULL |  |  |
| waist_after | double(15,3) | YES |  | NULL |  |  |
| service_note | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| service_before_check_date | date | YES |  | NULL |  |  |
| service_after_check_date | date | YES |  | NULL |  |  |
| bdg_year | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_dmht_risk_register_id | person_dmht_risk_register_id | no | 1 |
| PRIMARY | person_dmht_risk_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
