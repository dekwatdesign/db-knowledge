# `operation_specimen_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_specimen_type_id | int(11) | NO | PRI | 0 |  |  |
| operation_specimen_type_name | varchar(150) | YES | UNI | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_specimen_type_name | operation_specimen_type_name | yes | 1 |
| PRIMARY | operation_specimen_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "operation_specimen_type_id": 1,
    "operation_specimen_type_name": "Biopsy หรือ ชิ้นเนื้อที่มีขนาดไม่เกิน 2 ซ.ม.",
    "icode": "3071001",
    "price": 240.0,
    "hos_guid": "{07D3B670-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "operation_specimen_type_id": 2,
    "operation_specimen_type_name": "Biopsy หรือ ชิ้นเนื้อที่มีความยาว > 2 ซ.ม. แต่ไม่เกิน 5 ซ.ม.",
    "icode": "3071002",
    "price": 500.0,
    "hos_guid": "{07D3B9B8-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "operation_specimen_type_id": 3,
    "operation_specimen_type_name": "Biopsy หรือ ชิ้นเนื้อที่มีความยาว > 5 ซ.ม.",
    "icode": "3071003",
    "price": 1000.0,
    "hos_guid": "{07D3BAC6-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "operation_specimen_type_id": 4,
    "operation_specimen_type_name": "อวัยวะ/ส่วนอวัยวะที่ไม่เลาะต่อมน้ำเหลือง",
    "icode": "3071004",
    "price": 1200.0,
    "hos_guid": "{07D3BBCA-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "operation_specimen_type_id": 5,
    "operation_specimen_type_name": "อวัยวะ/ส่วนอวัยวะที่เลาะตรวจต่อมน้ำเหลือง",
    "icode": "3071005",
    "price": 2400.0,
    "hos_guid": "{07D3BCBA-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "operation_specimen_type_id": 6,
    "operation_specimen_type_name": "Excisional biopsy & margin examination",
    "icode": "3071006",
    "price": 1000.0,
    "hos_guid": "{07D3BDB4-F61D-11DE-BFF4-00215E472B30}"
  }
]
```
