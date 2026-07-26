# `lab_rlu_indicator`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_rlu_indicator_id | int(11) | NO | PRI | 0 |  |  |
| indicator_code | varchar(20) | YES |  | NULL |  |  |
| fiscal_year_be | int(11) | YES | MUL | NULL |  |  |
| name_th | varchar(250) | YES |  | NULL |  |  |
| name_en | varchar(250) | YES |  | NULL |  |  |
| threshold_pct | double(5,2) | YES |  | NULL |  |  |
| direction | char(2) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_code_year | fiscal_year_be | yes | 1 |
| ix_code_year | indicator_code | yes | 2 |
| PRIMARY | lab_rlu_indicator_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "lab_rlu_indicator_id": 1,
    "indicator_code": "FY69-IND-01",
    "fiscal_year_be": 2569,
    "name_th": "DM ผู้ป่วยที่ได้รับการตรวจ HbA1c ซ้ำภายใน 90 วัน",
    "name_en": null,
    "threshold_pct": 5.0,
    "direction": "LE",
    "active": "Y"
  },
  {
    "lab_rlu_indicator_id": 2,
    "indicator_code": "FY69-IND-02",
    "fiscal_year_be": 2569,
    "name_th": "DM ผู้ป่วยที่ได้รับการตรวจ LDL-C ซ้ำภายใน 90 วัน",
    "name_en": null,
    "threshold_pct": 5.0,
    "direction": "LE",
    "active": "Y"
  },
  {
    "lab_rlu_indicator_id": 3,
    "indicator_code": "FY69-IND-03",
    "fiscal_year_be": 2569,
    "name_th": "DM ผู้ป่วยที่ได้รับการตรวจ HbA1c อย่างน้อยปีละ 1 ครั้ง",
    "name_en": null,
    "threshold_pct": 70.0,
    "direction": "GE",
    "active": "Y"
  },
  {
    "lab_rlu_indicator_id": 4,
    "indicator_code": "FY69-IND-04",
    "fiscal_year_be": 2569,
    "name_th": "DM ผู้ป่วยที่ได้รับการตรวจ LDL-C อย่างน้อยปีละ 1 ครั้ง",
    "name_en": null,
    "threshold_pct": 70.0,
    "direction": "GE",
    "active": "Y"
  },
  {
    "lab_rlu_indicator_id": 5,
    "indicator_code": "FY69-IND-05",
    "fiscal_year_be": 2569,
    "name_th": "DM ผู้ป่วยที่ได้รับการตรวจ Creatinine อย่างน้อยปีละ 1 ครั้ง",
    "name_en": null,
    "threshold_pct": 70.0,
    "direction": "GE",
    "active": "Y"
  },
  {
    "lab_rlu_indicator_id": 6,
    "indicator_code": "FY69-IND-06",
    "fiscal_year_be": 2569,
    "name_th": "ผู้มารับบริการที่ได้รับการตรวจ Total-Cholesterol ซ้ำภายใน 90 วัน",
    "name_en": null,
    "threshold_pct": 5.0,
    "direction": "LE",
    "active": "Y"
  },
  {
    "lab_rlu_indicator_id": 7,
    "indicator_code": "FY69-IND-07",
    "fiscal_year_be": 2569,
    "name_th": "ผู้มารับบริการที่ได้รับการตรวจ Triglycerides ซ้ำภายใน 90 วัน",
    "name_en": null,
    "threshold_pct": 5.0,
    "direction": "LE",
    "active": "Y"
  },
  {
    "lab_rlu_indicator_id": 8,
    "indicator_code": "FY69-IND-08",
    "fiscal_year_be": 2569,
    "name_th": "ผู้มารับบริการที่ได้รับการตรวจ HLA-B*58:01 ซ้ำ",
    "name_en": null,
    "threshold_pct": 5.0,
    "direction": "LE",
    "active": "Y"
  }
]
```
