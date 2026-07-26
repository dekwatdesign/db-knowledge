# `operation_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_screen_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES | MUL | NULL |  |  |
| screen_date | date | YES |  | NULL |  |  |
| screen_time | time | YES |  | NULL |  |  |
| screen_staff | varchar(50) | YES |  | NULL |  |  |
| bps | double(15,3) | YES |  | NULL |  |  |
| bpd | double(15,3) | YES |  | NULL |  |  |
| temperature | double(15,3) | YES |  | NULL |  |  |
| rr | int(11) | YES |  | NULL |  |  |
| hr | int(11) | YES |  | NULL |  |  |
| bw | double(15,3) | YES |  | NULL |  |  |
| screen_note | text | YES |  | NULL |  |  |
| coma_score_e | char(1) | YES |  | NULL |  |  |
| coma_score_m | char(1) | YES |  | NULL |  |  |
| coma_score_v | char(1) | YES |  | NULL |  |  |
| operation_screen_type_id | int(11) | YES |  | NULL |  |  |
| operation_screen_act_id | int(11) | YES |  | NULL |  |  |
| operation_respiration_id | int(11) | YES |  | NULL |  |  |
| operation_circulation_id | int(11) | YES |  | NULL |  |  |
| operation_consciousness_id | int(11) | YES |  | NULL |  |  |
| operation_screen_o2_sat_id | int(11) | YES |  | NULL |  |  |
| recovery_score | int(11) | YES |  | NULL |  |  |
| pain_score | int(11) | YES |  | NULL |  |  |
| sedation_score_type_id | int(11) | YES |  | NULL |  |  |
| operation_location_id | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| operation_anes_phy_status_id | int(11) | YES |  | NULL |  |  |
| npo_date | date | YES |  | NULL |  |  |
| npo_time | time | YES |  | NULL |  |  |
| height | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_id | operation_id | no | 1 |
| PRIMARY | operation_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
