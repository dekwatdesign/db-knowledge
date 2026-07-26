# `teenage_preg_hhc_labor_question`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_hhc_labor_question_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_hhc_labor_name | varchar(100) | YES |  | NULL |  |  |
| teenage_preg_hhc_labor_q_type_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Refteenage_preg_hhc_labor_q_type96 | teenage_preg_hhc_labor_q_type_id | no | 1 |
| PRIMARY | teenage_preg_hhc_labor_question_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "teenage_preg_hhc_labor_question_id": 1,
    "teenage_preg_hhc_labor_name": "แผลผ่าตัด/แผลฝีเย็บ",
    "teenage_preg_hhc_labor_q_type_id": 1,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_labor_question_id": 2,
    "teenage_preg_hhc_labor_name": "ลักษณะของน้ำคาวปลา",
    "teenage_preg_hhc_labor_q_type_id": 1,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_labor_question_id": 3,
    "teenage_preg_hhc_labor_name": "อาการผิดปกติ",
    "teenage_preg_hhc_labor_q_type_id": 1,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_labor_question_id": 4,
    "teenage_preg_hhc_labor_name": "การเลี้ยงลูกด้วยนมแม่",
    "teenage_preg_hhc_labor_q_type_id": 1,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_labor_question_id": 5,
    "teenage_preg_hhc_labor_name": "เลี้ยงลูกด้วยนมแม่อย่างเดียว",
    "teenage_preg_hhc_labor_q_type_id": 1,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_labor_question_id": 6,
    "teenage_preg_hhc_labor_name": "ภาวะซึมเศร้าหลังคลอด",
    "teenage_preg_hhc_labor_q_type_id": 1,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_labor_question_id": 7,
    "teenage_preg_hhc_labor_name": "การปฏิบัติตัวหลังคลอด",
    "teenage_preg_hhc_labor_q_type_id": 1,
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_labor_question_id": 8,
    "teenage_preg_hhc_labor_name": "การคุมกำเนิดหลังคลอด",
    "teenage_preg_hhc_labor_q_type_id": 1,
    "hos_guid": null
  }
]
```
