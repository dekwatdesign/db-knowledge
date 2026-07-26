# `sti_patient_vct_counseling_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sti_patient_vct_counseling_type_id | int(11) | NO | PRI | 0 |  |  |
| sti_patient_vct_counseling_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sti_patient_vct_counseling_type_name | sti_patient_vct_counseling_type_name | yes | 1 |
| PRIMARY | sti_patient_vct_counseling_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "sti_patient_vct_counseling_type_id": 1,
    "sti_patient_vct_counseling_type_name": "ได้รับบริการให้การปรึกษาเพื่อการตรวจเลือดหาการติดเชื้อเอชไอวีในคลินิก",
    "hos_guid": null
  },
  {
    "sti_patient_vct_counseling_type_id": 2,
    "sti_patient_vct_counseling_type_name": "ปฏิเสธการรับบริการ VCT. ในครั้งนี้",
    "hos_guid": null
  },
  {
    "sti_patient_vct_counseling_type_id": 3,
    "sti_patient_vct_counseling_type_name": "ส่งต่อมาจากงาน VCT หรือได้รับบริการ VCT มาแล้วไม่เกิน 3 เดือน",
    "hos_guid": null
  },
  {
    "sti_patient_vct_counseling_type_id": 4,
    "sti_patient_vct_counseling_type_name": "ได้รับการส่งต่อ VCT ไปยังหน่วยบริการสาธารณสุขอื่น / แผนกอื่นๆ",
    "hos_guid": null
  }
]
```
