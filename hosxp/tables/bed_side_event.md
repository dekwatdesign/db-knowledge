# `bed_side_event`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bed_side_event_id | int(11) | NO | PRI | 0 |  |  |
| bedno | varchar(6) | YES | MUL | NULL |  |  |
| bed_side_device_id | int(11) | YES |  | NULL |  |  |
| anvn | varchar(12) | YES | MUL | NULL |  |  |
| event_datetime | datetime | YES |  | NULL |  |  |
| hr | int(11) | YES |  | NULL |  |  |
| vpc | int(11) | YES |  | NULL |  |  |
| st2 | double(15,2) | YES |  | NULL |  |  |
| resp | int(11) | YES |  | NULL |  |  |
| resp_apsec1 | int(11) | YES |  | NULL |  |  |
| resp_apsec2 | int(11) | YES |  | NULL |  |  |
| resp_imp | int(11) | YES |  | NULL |  |  |
| spo2 | int(11) | YES |  | NULL |  |  |
| pr_spo2 | int(11) | YES |  | NULL |  |  |
| spo2_sensmode | int(11) | YES |  | NULL |  |  |
| temperature | double(15,1) | YES |  | NULL |  |  |
| bps | int(11) | YES |  | NULL |  |  |
| bpd | int(11) | YES |  | NULL |  |  |
| bpm | int(11) | YES |  | NULL |  |  |
| pr_p1 | int(11) | YES |  | NULL |  |  |
| ppv | int(11) | YES |  | NULL |  |  |
| spv | int(11) | YES |  | NULL |  |  |
| rpr | int(11) | YES |  | NULL |  |  |
| sqi | int(11) | YES |  | NULL |  |  |
| st1 | double(15,2) | YES |  | NULL |  |  |
| st3 | double(15,2) | YES |  | NULL |  |  |
| stvr | double(15,2) | YES |  | NULL |  |  |
| stvl | double(15,2) | YES |  | NULL |  |  |
| stvf | double(15,2) | YES |  | NULL |  |  |
| stv1 | double(15,2) | YES |  | NULL |  |  |
| stv2 | double(15,2) | YES |  | NULL |  |  |
| stv3 | double(15,2) | YES |  | NULL |  |  |
| stv4 | double(15,2) | YES |  | NULL |  |  |
| stv5 | double(15,2) | YES |  | NULL |  |  |
| stv6 | double(15,2) | YES |  | NULL |  |  |
| apsec_resp | int(11) | YES |  | NULL |  |  |
| rpr_spo2 | int(11) | YES |  | NULL |  |  |
| tskin | double(15,1) | YES |  | NULL |  |  |
| trect | double(15,1) | YES |  | NULL |  |  |
| arts | int(11) | YES |  | NULL |  |  |
| artd | int(11) | YES |  | NULL |  |  |
| artm | int(11) | YES |  | NULL |  |  |
| pr_art | int(11) | YES |  | NULL |  |  |
| rpr_art | int(11) | YES |  | NULL |  |  |
| cvp_s | int(11) | YES |  | NULL |  |  |
| cvp_d | int(11) | YES |  | NULL |  |  |
| cvp_m | int(11) | YES |  | NULL |  |  |
| resp_co2 | int(11) | YES |  | NULL |  |  |
| rresp_co2 | int(11) | YES |  | NULL |  |  |
| etco2 | double(15,1) | YES |  | NULL |  |  |
| apsec_co2 | int(11) | YES |  | NULL |  |  |
| sqi_escco | int(11) | YES |  | NULL |  |  |
| fi_co2 | double(15,3) | YES |  | NULL |  |  |
| stecg1 | double(15,3) | YES |  | NULL |  |  |
| event_no | varchar(15) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_anvn | anvn | no | 1 |
| ix_anvn_evdate | anvn | no | 1 |
| ix_anvn_evdate | event_datetime | no | 2 |
| ix_an_eventno | anvn | no | 1 |
| ix_an_eventno | event_no | no | 2 |
| ix_an_eventnobn | anvn | no | 1 |
| ix_an_eventnobn | bedno | no | 2 |
| ix_an_eventnobn | event_no | no | 3 |
| ix_bedno | bedno | no | 1 |
| ix_event_no | event_no | no | 1 |
| PRIMARY | bed_side_event_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
