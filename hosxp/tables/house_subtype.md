# `house_subtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_subtype_id | int(11) | NO | PRI | 0 |  |  |
| house_subtype_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_subtype_name | house_subtype_name | yes | 1 |
| PRIMARY | house_subtype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "house_subtype_id": 1,
    "house_subtype_name": "บ้านเดี่ยว บ้านฝด",
    "hos_guid": null
  },
  {
    "house_subtype_id": 2,
    "house_subtype_name": "ทาวน์เฮาส์ ทาวน์โฮม",
    "hos_guid": null
  },
  {
    "house_subtype_id": 3,
    "house_subtype_name": "คอนโดมิเนียม",
    "hos_guid": null
  },
  {
    "house_subtype_id": 4,
    "house_subtype_name": "อพาร์ทเมนท์ หอพัก",
    "hos_guid": null
  },
  {
    "house_subtype_id": 5,
    "house_subtype_name": "บ้านพักคนงาน",
    "hos_guid": null
  },
  {
    "house_subtype_id": 8,
    "house_subtype_name": "อื่นๆ",
    "hos_guid": null
  },
  {
    "house_subtype_id": 9,
    "house_subtype_name": "ไม่ทราบ",
    "hos_guid": null
  }
]
```
