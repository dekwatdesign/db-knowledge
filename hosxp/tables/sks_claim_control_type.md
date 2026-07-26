# `sks_claim_control_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sks_claim_control_type_id | int(11) | NO | PRI | 0 |  |  |
| sks_claim_control_type_name | varchar(150) | YES | UNI | NULL |  |  |
| sks_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sks_claim_control_type_name | sks_claim_control_type_name | yes | 1 |
| PRIMARY | sks_claim_control_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "sks_claim_control_type_id": 1,
    "sks_claim_control_type_name": "ไม่ได้กำหนดเงื่อนไข",
    "sks_code": "OD",
    "hos_guid": null
  },
  {
    "sks_claim_control_type_id": 2,
    "sks_claim_control_type_name": "เบิกไม่ได้",
    "sks_code": "NR",
    "hos_guid": null
  },
  {
    "sks_claim_control_type_id": 3,
    "sks_claim_control_type_name": "ขออนุมัติก่อนเบิก",
    "sks_code": "PA",
    "hos_guid": null
  },
  {
    "sks_claim_control_type_id": 4,
    "sks_claim_control_type_name": "ตรวจหลังการเบิก",
    "sks_code": "AU",
    "hos_guid": null
  },
  {
    "sks_claim_control_type_id": 5,
    "sks_claim_control_type_name": "ใช้ได้ตามลำดับ",
    "sks_code": "ST",
    "hos_guid": null
  },
  {
    "sks_claim_control_type_id": 6,
    "sks_claim_control_type_name": "มีข้อบ่งชี้กำกับ",
    "sks_code": "IN",
    "hos_guid": null
  }
]
```
