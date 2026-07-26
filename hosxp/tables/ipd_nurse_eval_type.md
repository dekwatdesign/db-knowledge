# `ipd_nurse_eval_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_eval_type_id | int(11) | NO | PRI | 0 |  |  |
| ipt_nurse_eval_name | varchar(200) | YES | UNI | NULL |  |  |
| ipd_nurse_eval_star | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_nurse_eval_name | ipt_nurse_eval_name | yes | 1 |
| PRIMARY | ipd_nurse_eval_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipd_nurse_eval_type_id": 1,
    "ipt_nurse_eval_name": "สัญญาณชีพ",
    "ipd_nurse_eval_star": 4
  },
  {
    "ipd_nurse_eval_type_id": 2,
    "ipt_nurse_eval_name": " อาการ/อาการแสดงทางระบบประสาท",
    "ipd_nurse_eval_star": 4
  },
  {
    "ipd_nurse_eval_type_id": 3,
    "ipt_nurse_eval_name": "การได้รับการตรวจรักษาด้วยการผ่าตัด/หัตถการต่ออวัยวะที่สำคัญต่อชีวิต",
    "ipd_nurse_eval_star": 4
  },
  {
    "ipd_nurse_eval_type_id": 4,
    "ipt_nurse_eval_name": " พฤติกรรมผิดปกติที่เป็นอันตรายต่อตนเองและผู้อื่น",
    "ipd_nurse_eval_star": 4
  },
  {
    "ipd_nurse_eval_type_id": 5,
    "ipt_nurse_eval_name": "ความสามารถในการปฏิบัติกิจวัตรประจำวัน",
    "ipd_nurse_eval_star": 4
  },
  {
    "ipd_nurse_eval_type_id": 6,
    "ipt_nurse_eval_name": " ความต้องการข้อมูล/การสอนของผู้ใช้บริการญาติ และควมต้องการการสนับสนุนด้านจิตใจและอารมณ์",
    "ipd_nurse_eval_star": 4
  },
  {
    "ipd_nurse_eval_type_id": 7,
    "ipt_nurse_eval_name": " การได้รับยา/การรักษาหรือหัตถการ และการฟื้นฟูสภาพ",
    "ipd_nurse_eval_star": 4
  },
  {
    "ipd_nurse_eval_type_id": 8,
    "ipt_nurse_eval_name": "ความต้องการบรรเทาอาการรบกวน",
    "ipd_nurse_eval_star": 4
  }
]
```
