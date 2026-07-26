# `psychiatric_from_electricity_complication`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_from_electricity_complication_id | int(11) | NO | PRI | 0 |  |  |
| code | int(11) | YES |  | NULL |  |  |
| psychiatric_from_electricity_complication_prolong_apnea | char(1) | YES |  | NULL |  |  |
| psychiatric_from_electricity_complication_status_epilepticus | char(1) | YES |  | NULL |  |  |
| psychiatric_from_electricity_complication_tissue_injury | char(1) | YES |  | NULL |  |  |
| psychiatric_from_electricity_complication_fracture | char(1) | YES |  | NULL |  |  |
| psychiatric_from_electricity_complication_choke | char(1) | YES |  | NULL |  |  |
| psychiatric_from_electricity_complication_choke_saver | varchar(250) | YES |  | NULL |  |  |
| psychiatric_from_electricity_complication_imbroglio | char(1) | YES |  | NULL |  |  |
| psychiatric_from_electricity_complication_pulse_fast | char(1) | YES |  | NULL |  |  |
| psychiatric_from_electricity_complication_blood_pressure | char(1) | YES |  | NULL |  |  |
| psychiatric_from_electricity_complication_headache | char(1) | YES |  | NULL |  |  |
| psychiatric_from_electricity_complication_skin_burn | char(1) | YES |  | NULL |  |  |
| psychiatric_from_electricity_complication_backache | char(1) | YES |  | NULL |  |  |
| psychiatric_from_electricity_complication_saver | char(1) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| psychiatric_from_electricity_complication_date | date | YES |  | NULL |  |  |
| psychiatric_from_electricity_complication_time | time | YES |  | NULL |  |  |
| psychiatric_from_electricity_complication_staff | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_from_electricity_complication_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
