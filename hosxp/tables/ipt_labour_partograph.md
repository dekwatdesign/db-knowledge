# `ipt_labour_partograph`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_labour_partograph_id | int(11) | NO | PRI | 0 |  |  |
| ipt_labour_id | int(11) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| observe_datetime | datetime | YES |  | NULL |  |  |
| fetal_heart_rate | int(11) | YES |  | NULL |  |  |
| amniotic_fluid | varchar(20) | YES |  | NULL |  |  |
| moulding | varchar(10) | YES |  | NULL |  |  |
| cervical_dilation_cm | double(5,2) | YES |  | NULL |  |  |
| descent_of_head | varchar(10) | YES |  | NULL |  |  |
| contraction_per_10min | int(11) | YES |  | NULL |  |  |
| contraction_duration_sec | int(11) | YES |  | NULL |  |  |
| contraction_strength | varchar(10) | YES |  | NULL |  |  |
| oxytocin_uml | double(6,2) | YES |  | NULL |  |  |
| oxytocin_drops_min | int(11) | YES |  | NULL |  |  |
| drugs_iv_fluids | varchar(250) | YES |  | NULL |  |  |
| pulse | int(11) | YES |  | NULL |  |  |
| bp_systolic | int(11) | YES |  | NULL |  |  |
| bp_diastolic | int(11) | YES |  | NULL |  |  |
| temperature | double(4,1) | YES |  | NULL |  |  |
| urine_volume_ml | int(11) | YES |  | NULL |  |  |
| urine_protein | varchar(10) | YES |  | NULL |  |  |
| urine_glucose | varchar(10) | YES |  | NULL |  |  |
| urine_acetone | varchar(10) | YES |  | NULL |  |  |
| entry_staff | varchar(25) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| hour_no | int(11) | YES |  | NULL |  |  |
| note | varchar(3000) | YES |  | NULL |  |  |
| labour_amniotic_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_ipt_labour_id | ipt_labour_id | no | 1 |
| ix_ipt_labour_id | observe_datetime | no | 2 |
| PRIMARY | ipt_labour_partograph_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
