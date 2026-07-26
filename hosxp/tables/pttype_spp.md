# `pttype_spp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_spp_id | int(11) | NO | PRI | 0 |  |  |
| pttype_spp_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_pttype_spp_name | pttype_spp_name | yes | 1 |
| PRIMARY | pttype_spp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "pttype_spp_id": 1,
    "pttype_spp_name": "ข้าราชการ/รัฐวิสาหกิจ",
    "hos_guid": null
  },
  {
    "pttype_spp_id": 2,
    "pttype_spp_name": "บัตรประกันสังคม",
    "hos_guid": null
  },
  {
    "pttype_spp_id": 3,
    "pttype_spp_name": "UC (บัตรทอง ไม่มี ท.)",
    "hos_guid": null
  },
  {
    "pttype_spp_id": 4,
    "pttype_spp_name": "สปร. (บัตรทอง มี ท.)",
    "hos_guid": null
  },
  {
    "pttype_spp_id": 5,
    "pttype_spp_name": "คนต่างด้าวที่ขึ้นทะเบียน",
    "hos_guid": null
  },
  {
    "pttype_spp_id": 6,
    "pttype_spp_name": "อื่นๆ (ต่างด้าวไม่ขึ้นทะเบียน / ชำระเงินเอง)",
    "hos_guid": null
  }
]
```
