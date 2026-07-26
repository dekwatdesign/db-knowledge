# `vct_patient_register_hiv_pretest_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vct_patient_register_hiv_pretest_type_id | int(11) | NO | PRI | 0 |  |  |
| vct_patient_register_hiv_pretest_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vct_patient_register_hiv_pretest_type_name | vct_patient_register_hiv_pretest_type_name | yes | 1 |
| PRIMARY | vct_patient_register_hiv_pretest_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "vct_patient_register_hiv_pretest_type_id": 1,
    "vct_patient_register_hiv_pretest_type_name": "ประเมินพฤติกรรมเสี่ยงต่อการรับและการถ่ายทอดเชื้อเอชไอวี",
    "hos_guid": null
  },
  {
    "vct_patient_register_hiv_pretest_type_id": 2,
    "vct_patient_register_hiv_pretest_type_name": "รับทราบข้อมูลเพื่อประกอบการตัดสินใจในการตรวจเลือด",
    "hos_guid": null
  },
  {
    "vct_patient_register_hiv_pretest_type_id": 3,
    "vct_patient_register_hiv_pretest_type_name": "ลงนามในเอกสารที่แสดงถึงการได้รับข้อมูลเพื่อประกอบการตัดสินใจในการตรวจเลือด",
    "hos_guid": null
  }
]
```
