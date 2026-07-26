# `refer_er_treatment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_er_treatment_id | int(11) | NO | PRI | 0 |  |  |
| refer_queue_id | int(11) | YES | MUL | NULL |  |  |
| airway_position | char(1) | YES |  | NULL |  |  |
| airway_airway | char(1) | YES |  | NULL |  |  |
| airway_suction | char(1) | YES |  | NULL |  |  |
| airway_et_tube | char(1) | YES |  | NULL |  |  |
| airway_o2 | char(1) | YES |  | NULL |  |  |
| airway_o2_lpm | double(15,3) | YES |  | NULL |  |  |
| airway_o2_mask | char(1) | YES |  | NULL |  |  |
| airway_o2_canular | char(1) | YES |  | NULL |  |  |
| stop_bleed_suture | char(1) | YES |  | NULL |  |  |
| stop_bleed_suture_qty | int(11) | YES |  | NULL |  |  |
| stop_bleed_pressure_dressing | char(1) | YES |  | NULL |  |  |
| stop_bleed_other_text | varchar(250) | YES |  | NULL |  |  |
| iv_fluid_nss | char(1) | YES |  | NULL |  |  |
| iv_fluid_nss_cc_per_hr | double(15,3) | YES |  | NULL |  |  |
| iv_fluid_nss_rls | char(1) | YES |  | NULL |  |  |
| iv_fluid_nss_rls_cc_per_hr | double(15,3) | YES |  | NULL |  |  |
| iv_fluid_acetar | char(1) | YES |  | NULL |  |  |
| iv_fluid_acetar_cc_per_hr | double(15,3) | YES |  | NULL |  |  |
| iv_fluid_other_text | varchar(200) | YES |  | NULL |  |  |
| immobilized_splint | char(1) | YES |  | NULL |  |  |
| immobilized_sling | char(1) | YES |  | NULL |  |  |
| immobilized_long_spinal_board | char(1) | YES |  | NULL |  |  |
| immobilized_collars | char(1) | YES |  | NULL |  |  |
| cpr_yes | char(1) | YES |  | NULL |  |  |
| referout_id | int(11) | YES | MUL | NULL |  |  |
| treat_airway | char(1) | YES |  | NULL |  |  |
| treat_breath | char(1) | YES |  | NULL |  |  |
| treat_iv | char(1) | YES |  | NULL |  |  |
| treat_bleed | char(1) | YES |  | NULL |  |  |
| treat_splint | char(1) | YES |  | NULL |  |  |
| treat_other | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_referout_id | referout_id | no | 1 |
| ix_refer_queue_id | refer_queue_id | no | 1 |
| PRIMARY | refer_er_treatment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
