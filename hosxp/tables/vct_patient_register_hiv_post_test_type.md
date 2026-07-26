# `vct_patient_register_hiv_post_test_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vct_patient_register_hiv_post_test_type_id | int(11) | NO | PRI | 0 |  |  |
| vct_patient_register_hiv_post_test_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hiv_result_type_1 | char(1) | YES |  | NULL |  |  |
| hiv_result_type_2 | char(1) | YES |  | NULL |  |  |
| hiv_result_type_3 | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vct_patient_register_hiv_post_test_type_name | vct_patient_register_hiv_post_test_type_name | yes | 1 |
| PRIMARY | vct_patient_register_hiv_post_test_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vct_patient_register_hiv_post_test_type_id": 1,
    "vct_patient_register_hiv_post_test_type_name": "ให้บริการปรึกษาเพื่อปรับลดพฤติกรรมเสี่ยงในการป้องกันการรับและถ่ายทอดเชื้อเอชไอวี",
    "hiv_result_type_1": "Y",
    "hiv_result_type_2": null,
    "hiv_result_type_3": null,
    "hos_guid": null
  },
  {
    "vct_patient_register_hiv_post_test_type_id": 2,
    "vct_patient_register_hiv_post_test_type_name": "รับบริการปรึกษาพร้อมคู่เพศสัมพันธ์",
    "hiv_result_type_1": "Y",
    "hiv_result_type_2": null,
    "hiv_result_type_3": null,
    "hos_guid": null
  },
  {
    "vct_patient_register_hiv_post_test_type_id": 3,
    "vct_patient_register_hiv_post_test_type_name": "อยู่ใน window period",
    "hiv_result_type_1": null,
    "hiv_result_type_2": "Y",
    "hiv_result_type_3": null,
    "hos_guid": null
  },
  {
    "vct_patient_register_hiv_post_test_type_id": 4,
    "vct_patient_register_hiv_post_test_type_name": "นัดตรวจเลือดซ้ำ",
    "hiv_result_type_1": null,
    "hiv_result_type_2": "Y",
    "hiv_result_type_3": "Y",
    "hos_guid": null
  },
  {
    "vct_patient_register_hiv_post_test_type_id": 5,
    "vct_patient_register_hiv_post_test_type_name": "ได้รับยาป้องกันการติดเชื้อ : Post Exposure Prophylaxis (PEP) (ระบุชนิดยา)",
    "hiv_result_type_1": null,
    "hiv_result_type_2": "Y",
    "hiv_result_type_3": null,
    "hos_guid": null
  },
  {
    "vct_patient_register_hiv_post_test_type_id": 6,
    "vct_patient_register_hiv_post_test_type_name": "ให้บริการปรึกษาเพื่อการดูแลด้านจิตใจ",
    "hiv_result_type_1": null,
    "hiv_result_type_2": null,
    "hiv_result_type_3": "Y",
    "hos_guid": null
  },
  {
    "vct_patient_register_hiv_post_test_type_id": 7,
    "vct_patient_register_hiv_post_test_type_name": "ผู้รับบริการมีความคิดฆ่าตัวตาย",
    "hiv_result_type_1": null,
    "hiv_result_type_2": null,
    "hiv_result_type_3": "Y",
    "hos_guid": null
  },
  {
    "vct_patient_register_hiv_post_test_type_id": 8,
    "vct_patient_register_hiv_post_test_type_name": "ให้ข้อมูลเรื่องการดูแลรักษาต่อเนื่อง",
    "hiv_result_type_1": null,
    "hiv_result_type_2": null,
    "hiv_result_type_3": "Y",
    "hos_guid": null
  }
]
```
