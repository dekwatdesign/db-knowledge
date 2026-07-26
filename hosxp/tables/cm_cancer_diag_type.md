# `cm_cancer_diag_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_cancer_diag_type_id | int(11) | NO | PRI | 0 |  |  |
| cm_cancer_diag_type_name | varchar(200) | YES | UNI | NULL |  |  |
| export_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cm_cancer_diag_type_name | cm_cancer_diag_type_name | yes | 1 |
| PRIMARY | cm_cancer_diag_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cm_cancer_diag_type_id": 1,
    "cm_cancer_diag_type_name": "ซักประวัติและตรวจร่างกาย",
    "export_code": "1"
  },
  {
    "cm_cancer_diag_type_id": 2,
    "cm_cancer_diag_type_name": "รังสีวินิจฉัย ส่องกล้อง Ultrasound CT MRI",
    "export_code": null
  },
  {
    "cm_cancer_diag_type_id": 3,
    "cm_cancer_diag_type_name": "ผ่าตัดหรือผ่าศพ โดยไม่มีผลชิ้นเนื้อ",
    "export_code": null
  },
  {
    "cm_cancer_diag_type_id": 4,
    "cm_cancer_diag_type_name": "Specific Biochem / Immuno test",
    "export_code": null
  },
  {
    "cm_cancer_diag_type_id": 5,
    "cm_cancer_diag_type_name": "ตรวจทางเซลล์ หรือการตรวจเลือด",
    "export_code": null
  },
  {
    "cm_cancer_diag_type_id": 6,
    "cm_cancer_diag_type_name": "ตรวจชิ้นเนื้องอกที่แพร่กระจาย",
    "export_code": null
  },
  {
    "cm_cancer_diag_type_id": 7,
    "cm_cancer_diag_type_name": "ตรวจเนื้องอกปฐมภูมิ",
    "export_code": null
  },
  {
    "cm_cancer_diag_type_id": 8,
    "cm_cancer_diag_type_name": "ผ่าศพและมีผลชิ้นเนื้อ",
    "export_code": null
  }
]
```
