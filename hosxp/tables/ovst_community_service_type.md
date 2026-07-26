# `ovst_community_service_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_community_service_type_id | int(11) | NO | PRI | 0 |  |  |
| ovst_community_service_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| ovst_community_service_type_code | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ovst_community_service_type_name | ovst_community_service_type_name | yes | 1 |
| PRIMARY | ovst_community_service_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_community_service_type_id": 1,
    "ovst_community_service_type_name": "เยี่ยมผู้ป่วยโรคความดันโลหิตสูง",
    "hos_guid": null,
    "ovst_community_service_type_code": "1A000"
  },
  {
    "ovst_community_service_type_id": 2,
    "ovst_community_service_type_name": "เยี่ยมผู้ป่วยโรคเบาหวาน ",
    "hos_guid": null,
    "ovst_community_service_type_code": "1A001"
  },
  {
    "ovst_community_service_type_id": 3,
    "ovst_community_service_type_name": "เยี่ยมผู้ป่วยโรคมะเร็ง",
    "hos_guid": null,
    "ovst_community_service_type_code": "1A002"
  },
  {
    "ovst_community_service_type_id": 4,
    "ovst_community_service_type_name": "เยี่ยมผู้ป่วยโรคระบบทางเดินหายใจ",
    "hos_guid": null,
    "ovst_community_service_type_code": "1A003"
  },
  {
    "ovst_community_service_type_id": 5,
    "ovst_community_service_type_name": "เยี่ยมผู้ป่วยโรคสมองเสื่อม",
    "hos_guid": null,
    "ovst_community_service_type_code": "1A004"
  },
  {
    "ovst_community_service_type_id": 6,
    "ovst_community_service_type_name": "เยี่ยมผู้ป่วยโรคหลอดเลือดสมอง",
    "hos_guid": null,
    "ovst_community_service_type_code": "1A005"
  },
  {
    "ovst_community_service_type_id": 7,
    "ovst_community_service_type_name": "เยี่ยมผู้ป่วยโรคเรื้อรังอื่น ๆ",
    "hos_guid": null,
    "ovst_community_service_type_code": "1A008"
  },
  {
    "ovst_community_service_type_id": 8,
    "ovst_community_service_type_name": "เยี่ยมผู้ป่วยโรคเรื้อรังที่ไม่ระบุรายละเอียด",
    "hos_guid": null,
    "ovst_community_service_type_code": "1A009"
  }
]
```
