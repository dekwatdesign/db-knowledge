# `lab_rlu_rule`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_rlu_rule_id | int(11) | NO | PRI | 0 |  |  |
| lab_rlu_indicator_id | int(11) | YES | MUL | NULL |  |  |
| rule_name_th | varchar(250) | YES |  | NULL |  |  |
| condition_type | varchar(20) | YES |  | NULL |  |  |
| target_tmlt_code | varchar(10) | YES | MUL | NULL |  |  |
| target_lab_items_code | int(11) | YES | MUL | NULL |  |  |
| window_days | int(11) | YES |  | NULL |  |  |
| qty_threshold | int(11) | YES |  | NULL |  |  |
| icd10_prefix_list | varchar(250) | YES |  | NULL |  |  |
| min_age | int(11) | YES |  | NULL |  |  |
| max_age | int(11) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| clinic_codes | varchar(250) | YES |  | NULL |  |  |
| severity | char(1) | YES |  | NULL |  |  |
| allow_order | char(1) | YES |  | NULL |  |  |
| applies_opd | char(1) | YES |  | NULL |  |  |
| applies_ipd | char(1) | YES |  | NULL |  |  |
| allow_anonymous | char(1) | YES |  | NULL |  |  |
| message_th | varchar(500) | YES |  | NULL |  |  |
| validate_rtf_text | longtext | YES |  | NULL |  |  |
| active | char(1) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_active | active | no | 1 |
| ix_indicator | lab_rlu_indicator_id | no | 1 |
| ix_lab_items_code | target_lab_items_code | no | 1 |
| ix_tmlt | target_tmlt_code | no | 1 |
| PRIMARY | lab_rlu_rule_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "lab_rlu_rule_id": 1,
    "lab_rlu_indicator_id": 1,
    "rule_name_th": "DM-HbA1c-repeat-90d",
    "condition_type": "REPEAT_NDAY",
    "target_tmlt_code": "320131",
    "target_lab_items_code": 1133,
    "window_days": 90,
    "qty_threshold": 2,
    "icd10_prefix_list": "E10,E11,E12,E13,E14",
    "min_age": null,
    "max_age": null,
    "sex": null,
    "clinic_codes": null,
    "severity": "C",
    "allow_order": "Y",
    "applies_opd": "Y",
    "applies_ipd": "Y",
    "allow_anonymous": "N",
    "message_th": "ตรวจซ้ำ HbA1c ภายใน 90 วัน - กรุณาระบุเหตุผล",
    "validate_rtf_text": "",
    "active": "Y"
  },
  {
    "lab_rlu_rule_id": 2,
    "lab_rlu_indicator_id": 2,
    "rule_name_th": "DM-LDLC-repeat-90d",
    "condition_type": "REPEAT_NDAY",
    "target_tmlt_code": "320073",
    "target_lab_items_code": 376,
    "window_days": 90,
    "qty_threshold": 2,
    "icd10_prefix_list": "E10,E11,E12,E13,E14",
    "min_age": null,
    "max_age": null,
    "sex": null,
    "clinic_codes": null,
    "severity": "C",
    "allow_order": "Y",
    "applies_opd": "Y",
    "applies_ipd": "Y",
    "allow_anonymous": "N",
    "message_th": "ตรวจซ้ำ LDL-C ภายใน 90 วัน - กรุณาระบุเหตุผล",
    "validate_rtf_text": "",
    "active": "Y"
  },
  {
    "lab_rlu_rule_id": 3,
    "lab_rlu_indicator_id": 3,
    "rule_name_th": "DM-HbA1c-yearly",
    "condition_type": "MISSING_NDAY",
    "target_tmlt_code": "320131",
    "target_lab_items_code": 1133,
    "window_days": 365,
    "qty_threshold": 1,
    "icd10_prefix_list": "E10,E11,E12,E13,E14",
    "min_age": null,
    "max_age": null,
    "sex": null,
    "clinic_codes": null,
    "severity": "A",
    "allow_order": "Y",
    "applies_opd": "Y",
    "applies_ipd": "Y",
    "allow_anonymous": "N",
    "message_th": "DM: HbA1c ครั้งสุดท้ายเกิน 365 วัน",
    "validate_rtf_text": "",
    "active": "Y"
  },
  {
    "lab_rlu_rule_id": 4,
    "lab_rlu_indicator_id": 4,
    "rule_name_th": "DM-LDLC-yearly",
    "condition_type": "MISSING_NDAY",
    "target_tmlt_code": "320073",
    "target_lab_items_code": 376,
    "window_days": 365,
    "qty_threshold": 1,
    "icd10_prefix_list": "E10,E11,E12,E13,E14",
    "min_age": null,
    "max_age": null,
    "sex": null,
    "clinic_codes": null,
    "severity": "A",
    "allow_order": "Y",
    "applies_opd": "Y",
    "applies_ipd": "Y",
    "allow_anonymous": "N",
    "message_th": "DM: LDL-C ครั้งสุดท้ายเกิน 365 วัน",
    "validate_rtf_text": "",
    "active": "Y"
  },
  {
    "lab_rlu_rule_id": 5,
    "lab_rlu_indicator_id": 5,
    "rule_name_th": "DM-Creat-yearly",
    "condition_type": "MISSING_NDAY",
    "target_tmlt_code": "320055",
    "target_lab_items_code": 62,
    "window_days": 365,
    "qty_threshold": 1,
    "icd10_prefix_list": "E10,E11,E12,E13,E14",
    "min_age": null,
    "max_age": null,
    "sex": null,
    "clinic_codes": null,
    "severity": "A",
    "allow_order": "Y",
    "applies_opd": "Y",
    "applies_ipd": "Y",
    "allow_anonymous": "N",
    "message_th": "DM: Creatinine ครั้งสุดท้ายเกิน 365 วัน",
    "validate_rtf_text": "",
    "active": "Y"
  },
  {
    "lab_rlu_rule_id": 6,
    "lab_rlu_indicator_id": 6,
    "rule_name_th": "TotalCh-repeat-90d",
    "condition_type": "REPEAT_NDAY",
    "target_tmlt_code": "320070",
    "target_lab_items_code": 81,
    "window_days": 90,
    "qty_threshold": 2,
    "icd10_prefix_list": null,
    "min_age": null,
    "max_age": null,
    "sex": null,
    "clinic_codes": null,
    "severity": "C",
    "allow_order": "Y",
    "applies_opd": "Y",
    "applies_ipd": "Y",
    "allow_anonymous": "Y",
    "message_th": "ตรวจซ้ำ Total-C ภายใน 90 วัน",
    "validate_rtf_text": "",
    "active": "Y"
  },
  {
    "lab_rlu_rule_id": 7,
    "lab_rlu_indicator_id": 7,
    "rule_name_th": "Trig-repeat-90d",
    "condition_type": "REPEAT_NDAY",
    "target_tmlt_code": "320072",
    "target_lab_items_code": 82,
    "window_days": 90,
    "qty_threshold": 2,
    "icd10_prefix_list": null,
    "min_age": null,
    "max_age": null,
    "sex": null,
    "clinic_codes": null,
    "severity": "C",
    "allow_order": "Y",
    "applies_opd": "Y",
    "applies_ipd": "Y",
    "allow_anonymous": "Y",
    "message_th": "ตรวจซ้ำ Triglycerides ภายใน 90 วัน",
    "validate_rtf_text": "",
    "active": "Y"
  },
  {
    "lab_rlu_rule_id": 8,
    "lab_rlu_indicator_id": 8,
    "rule_name_th": "HLA-B5801-lifetime",
    "condition_type": "LIFETIME_REPEAT",
    "target_tmlt_code": "380027",
    "target_lab_items_code": null,
    "window_days": null,
    "qty_threshold": 1,
    "icd10_prefix_list": null,
    "min_age": null,
    "max_age": null,
    "sex": null,
    "clinic_codes": null,
    "severity": "B",
    "allow_order": "N",
    "applies_opd": "Y",
    "applies_ipd": "Y",
    "allow_anonymous": "Y",
    "message_th": "HLA-B*58:01 เคยตรวจแล้ว ไม่ควรตรวจซ้ำ",
    "validate_rtf_text": "",
    "active": "Y"
  }
]
```
