# `tmt_tpu_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tpu_code | varchar(10) | NO | PRI |  |  |  |
| active_ingredient | varchar(200) | YES | MUL | NULL |  |  |
| strength | varchar(150) | YES |  | NULL |  |  |
| dosage_form | varchar(150) | YES |  | NULL |  |  |
| cont_value | varchar(100) | YES |  | NULL |  |  |
| cont_unit | varchar(100) | YES |  | NULL |  |  |
| disp_unit | varchar(100) | YES |  | NULL |  |  |
| trade_name | varchar(200) | YES |  | NULL |  |  |
| manufacturer | varchar(200) | YES |  | NULL |  |  |
| fsn | varchar(250) | YES | MUL | NULL |  |  |
| tmt_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_active_ingredient | active_ingredient | no | 1 |
| ix_fsn | fsn | no | 1 |
| PRIMARY | tpu_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "tpu_code": "1000043",
    "active_ingredient": "cefazolin",
    "strength": "5.5 g/100 mL",
    "dosage_form": "ear/eye drops, solution",
    "cont_value": "10",
    "cont_unit": "mL",
    "disp_unit": "bottle",
    "trade_name": "CEFAZOLIN",
    "manufacturer": "โรงพยาบาลพัทลุง",
    "fsn": "CEFAZOLIN (M 10747) (cefazolin 5.5 g/100 mL) ear/eye drops, solution, 10 mL bottle (TPU)",
    "tmt_status": "0"
  },
  {
    "tpu_code": "100005",
    "active_ingredient": "alginic acid + dried aluminium hydroxide gel + magnesium carbonate",
    "strength": "200 mg + 30 mg + 40 mg",
    "dosage_form": "chewable tablet",
    "cont_value": "",
    "cont_unit": "",
    "disp_unit": "tablet",
    "trade_name": "ALGYCON",
    "manufacturer": "TAI YU CHEMICAL & PHARMACEUTICAL, TAIWAN",
    "fsn": "ALGYCON (TAI YU CHEMICAL & PHARMACEUTICAL, TAIWAN) (alginic acid 200 mg + dried aluminium hydroxide gel 30 mg + magnesium carbonate 40 mg) chewable tablet, 1 tablet (TPU)",
    "tmt_status": "0"
  },
  {
    "tpu_code": "1000091",
    "active_ingredient": "colistin",
    "strength": "3 g/100 mL",
    "dosage_form": "ear/eye drops, solution",
    "cont_value": "5",
    "cont_unit": "mL",
    "disp_unit": "bottle",
    "trade_name": "COLISTIN",
    "manufacturer": "โรงพยาบาลพัทลุง",
    "fsn": "COLISTIN (M 10747) (colistin 3 g/100 mL) ear/eye drops, solution, 5 mL bottle (TPU)",
    "tmt_status": "0"
  },
  {
    "tpu_code": "1000138",
    "active_ingredient": "ceftazidime",
    "strength": "5 g/100 mL",
    "dosage_form": "ear/eye drops, solution",
    "cont_value": "5",
    "cont_unit": "mL",
    "disp_unit": "bottle",
    "trade_name": "CETAZIDIME",
    "manufacturer": "โรงพยาบาลพัทลุง",
    "fsn": "CETAZIDIME (M 10747) (ceftazidime 5 g/100 mL) ear/eye drops, solution, 5 mL bottle (TPU)",
    "tmt_status": "0"
  },
  {
    "tpu_code": "100014",
    "active_ingredient": "bismuth subsalicylate",
    "strength": "262 mg",
    "dosage_form": "tablet",
    "cont_value": "",
    "cont_unit": "",
    "disp_unit": "tablet",
    "trade_name": "GASTRO-BISMOL 262",
    "manufacturer": "บางกอกแล็ป แอนด์ คอสเมติค",
    "fsn": "GASTRO-BISMOL 262 (บางกอกแล็ป แอนด์ คอสเมติค) (bismuth subsalicylate 262 mg) tablet, 1 tablet (TPU)",
    "tmt_status": "0"
  },
  {
    "tpu_code": "1000172",
    "active_ingredient": "gentamicin",
    "strength": "1.4 g/100 mL",
    "dosage_form": "ear/eye drops, solution",
    "cont_value": "5",
    "cont_unit": "mL",
    "disp_unit": "bottle",
    "trade_name": "GENTAMYCIN FORTE",
    "manufacturer": "โรงพยาบาลพัทลุง",
    "fsn": "GENTAMYCIN FORTE (M 10747) (gentamicin 1.4 g/100 mL) ear/eye drops, solution, 5 mL bottle (TPU)",
    "tmt_status": "0"
  },
  {
    "tpu_code": "100022",
    "active_ingredient": "bismuth subsalicylate",
    "strength": "262 mg",
    "dosage_form": "tablet",
    "cont_value": "",
    "cont_unit": "",
    "disp_unit": "tablet",
    "trade_name": "BESMAL",
    "manufacturer": "เภสัชกรรมศรีประสิทธิ์",
    "fsn": "BESMAL (เภสัชกรรมศรีประสิทธิ์) (bismuth subsalicylate 262 mg) tablet, 1 tablet (TPU)",
    "tmt_status": "0"
  },
  {
    "tpu_code": "1000223",
    "active_ingredient": "enalapril maleate",
    "strength": "1 mg/1 mL",
    "dosage_form": "oral suspension",
    "cont_value": "60",
    "cont_unit": "mL",
    "disp_unit": "bottle",
    "trade_name": "ENALAPRIL",
    "manufacturer": "โรงพยาบาลพัทลุง",
    "fsn": "ENALAPRIL (M 10747) (enalapril maleate 1 mg/1 mL) oral suspension, 60 mL bottle (TPU)",
    "tmt_status": "0"
  }
]
```
