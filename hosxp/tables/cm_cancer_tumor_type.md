# `cm_cancer_tumor_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_cancer_tumor_type_id | int(11) | NO | PRI | 0 |  |  |
| cm_cancer_tumor_type_name | varchar(200) | YES | UNI | NULL |  |  |
| cm_cancer_tumor_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cm_cancer_tumor_type_name | cm_cancer_tumor_type_name | yes | 1 |
| PRIMARY | cm_cancer_tumor_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "cm_cancer_tumor_type_id": 1,
    "cm_cancer_tumor_type_name": "ไม่สามารถประเมินขนาดของก้อนมะเร็งได้",
    "cm_cancer_tumor_code": "Tx"
  },
  {
    "cm_cancer_tumor_type_id": 3,
    "cm_cancer_tumor_type_name": "ไม่มีหลักฐานของก้อนมะเร็ง",
    "cm_cancer_tumor_code": "T0"
  },
  {
    "cm_cancer_tumor_type_id": 2,
    "cm_cancer_tumor_type_name": "มะเร็งระยะต้นๆ ที่อยู่บนชั้นของเซลล์ปกติยังไม่แทรกเข้าไปในเนื้อเยื่อปกติ",
    "cm_cancer_tumor_code": "Tis"
  },
  {
    "cm_cancer_tumor_type_id": 4,
    "cm_cancer_tumor_type_name": "T1",
    "cm_cancer_tumor_code": "T1"
  },
  {
    "cm_cancer_tumor_type_id": 5,
    "cm_cancer_tumor_type_name": "T2",
    "cm_cancer_tumor_code": "T2"
  },
  {
    "cm_cancer_tumor_type_id": 6,
    "cm_cancer_tumor_type_name": "T3",
    "cm_cancer_tumor_code": "T3"
  },
  {
    "cm_cancer_tumor_type_id": 7,
    "cm_cancer_tumor_type_name": "T4",
    "cm_cancer_tumor_code": "T4"
  }
]
```
