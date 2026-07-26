# `rvp_consider`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rvp_consider_id | int(11) | NO | PRI | 0 |  |  |
| rvp_consider_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_rvp_consider_name | rvp_consider_name | yes | 1 |
| PRIMARY | rvp_consider_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "rvp_consider_id": 1,
    "rvp_consider_name": "แผลฉีกขาดทั่วไป ผู้ป่วยนอก  รักษา 7 วัน",
    "hos_guid": null
  },
  {
    "rvp_consider_id": 2,
    "rvp_consider_name": "แขนหัก (เข้าเฝือก) นอน รพ. 1 วัน",
    "hos_guid": null
  },
  {
    "rvp_consider_id": 3,
    "rvp_consider_name": "ขาหัก (เข้าเฝือก) นอน รพ. 2 วัน",
    "hos_guid": null
  },
  {
    "rvp_consider_id": 4,
    "rvp_consider_name": "แขนหักท่อนบน ผ่าตัด นอน รพ. 3 วัน",
    "hos_guid": null
  },
  {
    "rvp_consider_id": 5,
    "rvp_consider_name": "แขนหักท่อนล่าง ผ่าตัด นอน รพ. 3 วัน",
    "hos_guid": null
  },
  {
    "rvp_consider_id": 6,
    "rvp_consider_name": "ขาหักท่อนบน ผ่าตัด นอนรพ. 5 วัน",
    "hos_guid": null
  },
  {
    "rvp_consider_id": 7,
    "rvp_consider_name": "ขาหักท่อนล่าง ผ่าตัด นอนรพ. 5 วัน",
    "hos_guid": null
  },
  {
    "rvp_consider_id": 8,
    "rvp_consider_name": "ข้อมือ ผ่าตัด นอนรพ. 2 วัน",
    "hos_guid": null
  }
]
```
