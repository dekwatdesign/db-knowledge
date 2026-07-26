# `emp_wf_right_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_wf_right_type_id | int(11) | NO | PRI | 0 |  |  |
| emp_wf_right_type_name | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_wf_right_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "emp_wf_right_type_id": 1,
    "emp_wf_right_type_name": "ไม่มีสิทธิได้รับเงินค่ารักษาพยาบาลจากรัฐวิสาหกิจ/หน่วยงานของส่วนราชการ/ราชการส่วนท้องถิ่น/จากหน่วยงานอื่นที่มืใช่ส่วนราชการ"
  },
  {
    "emp_wf_right_type_id": 2,
    "emp_wf_right_type_name": "มีสิทธิแต่สิทธิที่ได้รับต่ำกว่า"
  },
  {
    "emp_wf_right_type_id": 3,
    "emp_wf_right_type_name": "เป็นผู้ใช้สิทธิเบิกค่ารักษาพยาบาลสำหรับบุตรแต่เพียงผู้เดียว"
  }
]
```
