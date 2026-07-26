# `clinicmember_tb_type_other`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_tb_type_other_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_tb_type_other_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_tb_type_other_name | clinicmember_tb_type_other_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | clinicmember_tb_type_other_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "clinicmember_tb_type_other_id": 0,
    "clinicmember_tb_type_other_name": "ไม่ทราบ",
    "hos_guid": null
  },
  {
    "clinicmember_tb_type_other_id": 1,
    "clinicmember_tb_type_other_name": "ต่อมน้ำเหลือง",
    "hos_guid": null
  },
  {
    "clinicmember_tb_type_other_id": 2,
    "clinicmember_tb_type_other_name": "เยื่อหุ้มปอด",
    "hos_guid": null
  },
  {
    "clinicmember_tb_type_other_id": 3,
    "clinicmember_tb_type_other_name": "เยื่อหุ้มสมอง",
    "hos_guid": null
  },
  {
    "clinicmember_tb_type_other_id": 4,
    "clinicmember_tb_type_other_name": "ลำไส้",
    "hos_guid": null
  },
  {
    "clinicmember_tb_type_other_id": 5,
    "clinicmember_tb_type_other_name": "เยื่อบุช่องท้อง",
    "hos_guid": null
  },
  {
    "clinicmember_tb_type_other_id": 6,
    "clinicmember_tb_type_other_name": "กระดูก/ข้อ",
    "hos_guid": null
  },
  {
    "clinicmember_tb_type_other_id": 7,
    "clinicmember_tb_type_other_name": "ผิวหนัง",
    "hos_guid": null
  }
]
```
