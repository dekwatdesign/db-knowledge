# `refer_vital_sign`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_vital_sign_id | int(11) | NO | PRI | 0 |  |  |
| cc | text | YES |  | NULL |  |  |
| pe | text | YES |  | NULL |  |  |
| bps | int(11) | YES |  | NULL |  |  |
| bpd | int(11) | YES |  | NULL |  |  |
| body_weight_kg | double(15,3) | YES |  | NULL |  |  |
| height_cm | double(15,3) | YES |  | NULL |  |  |
| temperature | double(15,3) | YES |  | NULL |  |  |
| rr | int(11) | YES |  | NULL |  |  |
| hr | int(11) | YES |  | NULL |  |  |
| refer_queue_id | int(11) | YES | MUL | NULL |  |  |
| fbs | double(15,3) | YES |  | NULL |  |  |
| pre_diagnosis | varchar(100) | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |
| coma_score_e | int(11) | YES |  | NULL |  |  |
| coma_score_v | int(11) | YES |  | NULL |  |  |
| coma_score_m | int(11) | YES |  | NULL |  |  |
| pupil_size | double(15,3) | YES |  | NULL |  |  |
| consciousness | char(1) | YES |  | NULL |  |  |
| death_by_transfer | char(1) | YES |  | NULL |  |  |
| pulse | int(11) | YES |  | NULL |  |  |
| coma_score_e_text | varchar(50) | YES |  | NULL |  |  |
| coma_score_v_text | varchar(50) | YES |  | NULL |  |  |
| coma_score_m_text | varchar(50) | YES |  | NULL |  |  |
| pe_ga | char(1) | YES |  | NULL |  |  |
| pe_heent | char(1) | YES |  | NULL |  |  |
| pe_heart | char(1) | YES |  | NULL |  |  |
| pe_lung | char(1) | YES |  | NULL |  |  |
| pe_neuro | char(1) | YES |  | NULL |  |  |
| pupil_size_r | double(15,3) | YES |  | NULL |  |  |
| pupil_size_text | varchar(10) | YES |  | NULL |  |  |
| pupil_size_r_text | varchar(10) | YES |  | NULL |  |  |
| consciousness_text | varchar(200) | YES |  | NULL |  |  |
| pe_ga_text | varchar(150) | YES |  | NULL |  |  |
| pe_heent_text | varchar(150) | YES |  | NULL |  |  |
| pe_heart_text | varchar(150) | YES |  | NULL |  |  |
| pe_lung_text | varchar(150) | YES |  | NULL |  |  |
| pe_neuro_text | varchar(150) | YES |  | NULL |  |  |
| referout_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_queue_id | refer_queue_id | no | 1 |
| ix_referout_id | referout_id | no | 1 |
| PRIMARY | refer_vital_sign_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "refer_vital_sign_id": 1,
    "cc": "[MASKED_FULLNAME]",
    "pe": null,
    "bps": 110,
    "bpd": 62,
    "body_weight_kg": 74.0,
    "height_cm": 160.0,
    "temperature": 36.9,
    "rr": 20,
    "hr": 0,
    "refer_queue_id": 0,
    "fbs": null,
    "pre_diagnosis": "",
    "hospcode": null,
    "coma_score_e": null,
    "coma_score_v": null,
    "coma_score_m": null,
    "pupil_size": null,
    "consciousness": null,
    "death_by_transfer": null,
    "pulse": 62,
    "coma_score_e_text": null,
    "coma_score_v_text": null,
    "coma_score_m_text": null,
    "pe_ga": "",
    "pe_heent": "",
    "pe_heart": "",
    "pe_lung": "",
    "pe_neuro": "",
    "pupil_size_r": null,
    "pupil_size_text": null,
    "pupil_size_r_text": null,
    "consciousness_text": null,
    "pe_ga_text": "",
    "pe_heent_text": "",
    "pe_heart_text": "",
    "pe_lung_text": "",
    "pe_neuro_text": "",
    "referout_id": 1681
  },
  {
    "refer_vital_sign_id": 2,
    "cc": "[MASKED_FULLNAME]",
    "pe": null,
    "bps": 120,
    "bpd": 83,
    "body_weight_kg": 72.0,
    "height_cm": 180.0,
    "temperature": 36.8,
    "rr": 20,
    "hr": 0,
    "refer_queue_id": 0,
    "fbs": null,
    "pre_diagnosis": "",
    "hospcode": null,
    "coma_score_e": null,
    "coma_score_v": null,
    "coma_score_m": null,
    "pupil_size": null,
    "consciousness": null,
    "death_by_transfer": null,
    "pulse": 85,
    "coma_score_e_text": null,
    "coma_score_v_text": null,
    "coma_score_m_text": null,
    "pe_ga": "",
    "pe_heent": "",
    "pe_heart": "",
    "pe_lung": "",
    "pe_neuro": "",
    "pupil_size_r": null,
    "pupil_size_text": null,
    "pupil_size_r_text": null,
    "consciousness_text": null,
    "pe_ga_text": "",
    "pe_heent_text": "",
    "pe_heart_text": "",
    "pe_lung_text": "",
    "pe_neuro_text": "",
    "referout_id": 1746
  },
  {
    "refer_vital_sign_id": 3,
    "cc": "[MASKED_FULLNAME]",
    "pe": null,
    "bps": 0,
    "bpd": 0,
    "body_weight_kg": 32.0,
    "height_cm": 147.0,
    "temperature": 36.8,
    "rr": 22,
    "hr": 0,
    "refer_queue_id": 0,
    "fbs": null,
    "pre_diagnosis": "",
    "hospcode": null,
    "coma_score_e": null,
    "coma_score_v": null,
    "coma_score_m": null,
    "pupil_size": null,
    "consciousness": null,
    "death_by_transfer": null,
    "pulse": 0,
    "coma_score_e_text": null,
    "coma_score_v_text": null,
    "coma_score_m_text": null,
    "pe_ga": "",
    "pe_heent": "",
    "pe_heart": "",
    "pe_lung": "",
    "pe_neuro": "",
    "pupil_size_r": null,
    "pupil_size_text": null,
    "pupil_size_r_text": null,
    "consciousness_text": null,
    "pe_ga_text": "",
    "pe_heent_text": "",
    "pe_heart_text": "",
    "pe_lung_text": "",
    "pe_neuro_text": "",
    "referout_id": 1786
  },
  {
    "refer_vital_sign_id": 4,
    "cc": "[MASKED_FULLNAME]",
    "pe": null,
    "bps": 0,
    "bpd": 0,
    "body_weight_kg": 0.0,
    "height_cm": 161.0,
    "temperature": 0.0,
    "rr": 0,
    "hr": 0,
    "refer_queue_id": 0,
    "fbs": null,
    "pre_diagnosis": "",
    "hospcode": null,
    "coma_score_e": null,
    "coma_score_v": null,
    "coma_score_m": null,
    "pupil_size": null,
    "consciousness": null,
    "death_by_transfer": null,
    "pulse": 0,
    "coma_score_e_text": null,
    "coma_score_v_text": null,
    "coma_score_m_text": null,
    "pe_ga": "",
    "pe_heent": "",
    "pe_heart": "",
    "pe_lung": "",
    "pe_neuro": "",
    "pupil_size_r": null,
    "pupil_size_text": null,
    "pupil_size_r_text": null,
    "consciousness_text": null,
    "pe_ga_text": "",
    "pe_heent_text": "",
    "pe_heart_text": "",
    "pe_lung_text": "",
    "pe_neuro_text": "",
    "referout_id": 1824
  },
  {
    "refer_vital_sign_id": 5,
    "cc": "[MASKED_FULLNAME]",
    "pe": null,
    "bps": 127,
    "bpd": 75,
    "body_weight_kg": 73.0,
    "height_cm": 181.0,
    "temperature": 36.0,
    "rr": 20,
    "hr": 0,
    "refer_queue_id": 0,
    "fbs": null,
    "pre_diagnosis": "",
    "hospcode": null,
    "coma_score_e": null,
    "coma_score_v": null,
    "coma_score_m": null,
    "pupil_size": null,
    "consciousness": null,
    "death_by_transfer": null,
    "pulse": 101,
    "coma_score_e_text": null,
    "coma_score_v_text": null,
    "coma_score_m_text": null,
    "pe_ga": "",
    "pe_heent": "",
    "pe_heart": "",
    "pe_lung": "",
    "pe_neuro": "",
    "pupil_size_r": null,
    "pupil_size_text": null,
    "pupil_size_r_text": null,
    "consciousness_text": null,
    "pe_ga_text": "",
    "pe_heent_text": "",
    "pe_heart_text": "",
    "pe_lung_text": "",
    "pe_neuro_text": "",
    "referout_id": 1825
  }
]
```
