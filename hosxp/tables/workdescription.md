# `workdescription`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| work_code | char(3) | NO | PRI |  |  |  |
| work_name | char(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | work_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "work_code": "11",
    "work_name": "เจ้าหน้าที่ระดับสูง ผู้บริหาร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "work_code": "111",
    "work_name": "เจ้าหน้าที่รัฐบาลระดับสูง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "work_code": "112",
    "work_name": "เจ้าหน้าที่บริหารองค์กรเอกชน / สถาบัน ระดับสูง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "work_code": "113",
    "work_name": "เจ้าหน้าที่รัฐวิสาหกิจระดับสูง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "work_code": "114",
    "work_name": "อื่น ๆ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "work_code": "12",
    "work_name": "ผู้เชี่ยวชาญ / นักวิชาการ สาขาเฉพาะด้านต่าง ๆ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "work_code": "121",
    "work_name": "นักเคมี และ / หรือที่เกี่ยวข้อง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "work_code": "122",
    "work_name": "นักชีววิทยา และ / หรือที่เกี่ยวข้อง",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
