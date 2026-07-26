# `cancer_diagnosis_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_diagnosis_type_id | int(11) | NO | PRI | 0 |  |  |
| cancer_diagnosis_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_diagnosis_type_name | cancer_diagnosis_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_diagnosis_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cancer_diagnosis_type_id": 0,
    "cancer_diagnosis_type_name": "มรณะบัตร",
    "hos_guid": null
  },
  {
    "cancer_diagnosis_type_id": 1,
    "cancer_diagnosis_type_name": "ซักประวัติและตรวจร่างกาย",
    "hos_guid": null
  },
  {
    "cancer_diagnosis_type_id": 2,
    "cancer_diagnosis_type_name": "รังสีวินิจฉัย ส่องกล้อง Ultrasound",
    "hos_guid": null
  },
  {
    "cancer_diagnosis_type_id": 3,
    "cancer_diagnosis_type_name": "ผ่าตัดหรือผ่าศพ โดยไม่มีผลชิ้นเนื้อ",
    "hos_guid": null
  },
  {
    "cancer_diagnosis_type_id": 4,
    "cancer_diagnosis_type_name": "Specific Biochem / Immuno test",
    "hos_guid": null
  },
  {
    "cancer_diagnosis_type_id": 5,
    "cancer_diagnosis_type_name": "ตรวจทางเซลล์ หรือการตรวจเลือด",
    "hos_guid": null
  },
  {
    "cancer_diagnosis_type_id": 6,
    "cancer_diagnosis_type_name": "ตรวจชิ้นเนื้องอกที่แพร่กระจาย",
    "hos_guid": null
  },
  {
    "cancer_diagnosis_type_id": 7,
    "cancer_diagnosis_type_name": "ตรวจเนื้องอกปฐมภูมิ",
    "hos_guid": null
  }
]
```
