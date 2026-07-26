# `ktb_edc_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(2) | NO | PRI |  |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| subtype | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "11",
    "name": "ผู้ป่วยนอกทั่วไป สิทธิตนเองและครอบครัว",
    "order_no": 1,
    "subtype": null
  },
  {
    "code": "12",
    "name": "ผู้ป่วยนอกทั่วไป สิทธิบุตร 0-7 ปี",
    "order_no": 2,
    "subtype": 1
  },
  {
    "code": "13",
    "name": "ผู้ป่วยนอกทั่วไป สิทธิคู่สมรสต่างชาติ",
    "order_no": 3,
    "subtype": 2
  },
  {
    "code": "14",
    "name": "ผู้ป่วยนอกทั่วไป ไม่สามารถใช้บัตรได้",
    "order_no": 4,
    "subtype": 3
  },
  {
    "code": "21",
    "name": "หน่วยไตเทียม สิทธิตนเองและครอบครัว",
    "order_no": 5,
    "subtype": null
  },
  {
    "code": "22",
    "name": "หน่วยไตเทียม สิทธิบุตร 0-7 ปี",
    "order_no": 6,
    "subtype": 1
  },
  {
    "code": "23",
    "name": "หน่วยไตเทียม สิทธิคู่สมรสต่างชาติ",
    "order_no": 7,
    "subtype": 2
  },
  {
    "code": "24",
    "name": "หน่วยไตเทียม ไม่สามารถใช้บัตรได้",
    "order_no": 8,
    "subtype": 3
  }
]
```
