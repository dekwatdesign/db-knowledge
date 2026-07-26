# `gsy_permis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| PERMIS_ID | varchar(20) | NO | PRI | NULL |  |  |
| PERMIS_NAME | varchar(100) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | PERMIS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "PERMIS_ID": "GAS001",
    "PERMIS_NAME": "ระบบทรัพย์สิน.::จัดการงานทรัพย์สิน"
  },
  {
    "PERMIS_ID": "GCA001",
    "PERMIS_NAME": "ระบบยานพาหนะ::จัดการงานยานพาหนะ"
  },
  {
    "PERMIS_ID": "GHR001",
    "PERMIS_NAME": "ระบบบุคลากร::จัดการงานบุคลากร"
  },
  {
    "PERMIS_ID": "GLE001",
    "PERMIS_NAME": "ระบบลา::อนุมัติทั้งหมด"
  },
  {
    "PERMIS_ID": "GLE002",
    "PERMIS_NAME": "ระบบลา::อนุมัติผู้ใต้บังคับบัญชา"
  },
  {
    "PERMIS_ID": "GLE003",
    "PERMIS_NAME": "ระบบลา::ตรวจสอบข้อมูลการลา"
  },
  {
    "PERMIS_ID": "GLE004",
    "PERMIS_NAME": "ระบบลา::จัดการข้อมูลรวมของการลา"
  },
  {
    "PERMIS_ID": "GLE005",
    "PERMIS_NAME": "ระบบลา::หัวหน้ากลุ่มงานเห็นชอบ"
  }
]
```
