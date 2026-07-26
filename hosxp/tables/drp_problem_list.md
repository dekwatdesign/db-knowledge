# `drp_problem_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_problem_list_id | int(11) | NO | PRI | 0 |  |  |
| drp_regist_id | int(11) | YES | MUL | NULL |  |  |
| drp_problem_id | int(11) | YES |  | NULL |  |  |
| drp_problem_note | longtext | YES |  | NULL |  |  |
| drp_problem_type_id | int(11) | YES |  | NULL |  |  |
| drp_discover_type_id | int(11) | YES |  | NULL |  |  |
| drp_cause_id | int(11) | YES |  | NULL |  |  |
| drp_intervention_type_id_1 | int(11) | YES |  | NULL |  |  |
| drp_intervention_type_id_2 | int(11) | YES |  | NULL |  |  |
| drp_intervention_type_id_3 | int(11) | YES |  | NULL |  |  |
| intervention_note | varchar(250) | YES |  | NULL |  |  |
| drp_datetime | datetime | YES | MUL | NULL |  |  |
| need_follow_up | char(1) | YES |  | NULL |  |  |
| drp_outcome_type_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| drp_cause_group_code | varchar(5) | YES |  | NULL |  |  |
| medication_name | varchar(200) | YES |  | NULL |  |  |
| medication_atc_code | varchar(20) | YES |  | NULL |  |  |
| medication_atc_name | varchar(200) | YES |  | NULL |  |  |
| medication_atc_desc | varchar(250) | YES |  | NULL |  |  |
| medication_taken_qty | decimal(10,0) | YES |  | NULL |  |  |
| drp_problem_source_text | varchar(200) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| drp_problem_discover_text | varchar(200) | YES |  | NULL |  |  |
| drp_problem_group_code | varchar(5) | YES |  | NULL |  |  |
| intervention_time_min | int(11) | YES |  | NULL |  |  |
| drp_acceptance_type_id | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| is_potential_problem | char(1) | YES |  | NULL |  |  |
| is_manifest_problem | char(1) | YES |  | NULL |  |  |
| drp_problem_text | varchar(250) | YES |  | NULL |  |  |
| drp_acceptance_text | varchar(250) | YES |  | NULL |  |  |
| drp_outcome_text | varchar(250) | YES |  | NULL |  |  |
| officer_name_text | varchar(50) | YES |  | NULL |  |  |
| drp_active | char(1) | YES | MUL | NULL |  |  |
| drp_cause_text | text | YES |  | NULL |  |  |
| drp_intervention_text | text | YES |  | NULL |  |  |
| drp_acceptance_note | varchar(200) | YES |  | NULL |  |  |
| drp_outcome_note | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drp_datetime | drp_datetime | no | 1 |
| ix_drp_regist_id | drp_regist_id | no | 1 |
| ix_hn | hn | no | 1 |
| ix_hn_active | drp_active | no | 1 |
| ix_hn_active | hn | no | 2 |
| PRIMARY | drp_problem_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "drp_problem_list_id": 2,
    "drp_regist_id": 23754,
    "drp_problem_id": 0,
    "drp_problem_note": null,
    "drp_problem_type_id": null,
    "drp_discover_type_id": null,
    "drp_cause_id": null,
    "drp_intervention_type_id_1": null,
    "drp_intervention_type_id_2": null,
    "drp_intervention_type_id_3": null,
    "intervention_note": null,
    "drp_datetime": "2021-05-08 00:00:00",
    "need_follow_up": "N",
    "drp_outcome_type_id": 9,
    "staff": "[MASKED_FULLNAME]",
    "icode": null,
    "drp_cause_group_code": null,
    "medication_name": null,
    "medication_atc_code": null,
    "medication_atc_name": null,
    "medication_atc_desc": null,
    "medication_taken_qty": null,
    "drp_problem_source_text": null,
    "hn": null,
    "drp_problem_discover_text": null,
    "drp_problem_group_code": null,
    "intervention_time_min": null,
    "drp_acceptance_type_id": null,
    "doctor_code": null,
    "is_potential_problem": null,
    "is_manifest_problem": null,
    "drp_problem_text": null,
    "drp_acceptance_text": null,
    "drp_outcome_text": null,
    "officer_name_text": null,
    "drp_active": null,
    "drp_cause_text": null,
    "drp_intervention_text": null,
    "drp_acceptance_note": null,
    "drp_outcome_note": null
  },
  {
    "drp_problem_list_id": 11,
    "drp_regist_id": 65398,
    "drp_problem_id": 6,
    "drp_problem_note": null,
    "drp_problem_type_id": null,
    "drp_discover_type_id": null,
    "drp_cause_id": null,
    "drp_intervention_type_id_1": null,
    "drp_intervention_type_id_2": null,
    "drp_intervention_type_id_3": null,
    "intervention_note": null,
    "drp_datetime": "2024-01-25 11:08:28",
    "need_follow_up": null,
    "drp_outcome_type_id": null,
    "staff": "[MASKED_FULLNAME]",
    "icode": "1000143",
    "drp_cause_group_code": null,
    "medication_name": "Risperidone GPO(สีขาว) 1 mg เม็ด",
    "medication_atc_code": null,
    "medication_atc_name": "",
    "medication_atc_desc": null,
    "medication_taken_qty": null,
    "drp_problem_source_text": null,
    "hn": "530197053",
    "drp_problem_discover_text": "by physician",
    "drp_problem_group_code": "P3",
    "intervention_time_min": -1,
    "drp_acceptance_type_id": null,
    "doctor_code": "085",
    "is_potential_problem": "N",
    "is_manifest_problem": "N",
    "drp_problem_text": "P3.2 : อื่นๆ : ปัญหา ที่ไม่สามารถระบุได้ชัดเจน",
    "drp_acceptance_text": "",
    "drp_outcome_text": "",
    "officer_name_text": "[MASKED_FULLNAME]",
    "drp_active": "Y",
    "drp_cause_text": "C7.1 : ผู้ป่วย (Patient) : ผู้ป่วยใช้ยา น้อยกว่าที่สั่ง หรือไม่ใช้ยา",
    "drp_intervention_text": "I2.1 : ที่ตัวผู้ป่วยหรือผู้ดูแล : ให้คำแนะนำเรื่องยากับผู้ป่วย",
    "drp_acceptance_note": null,
    "drp_outcome_note": null
  }
]
```
