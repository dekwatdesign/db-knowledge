# `cancer_nursenote_supportinfo`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supportinfo_id | int(11) | NO | PRI | 0 |  |  |
| SupportInfo_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | supportinfo_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "supportinfo_id": 1,
    "SupportInfo_name": null,
    "hos_guid": null
  },
  {
    "supportinfo_id": 2,
    "SupportInfo_name": "ช่วยเหลือตัวเองไม่ได้",
    "hos_guid": null
  },
  {
    "supportinfo_id": 3,
    "SupportInfo_name": "ช่วยเหลือตัวเองได้น้อย",
    "hos_guid": null
  },
  {
    "supportinfo_id": 4,
    "SupportInfo_name": "หายใจเร็ว หอบ เจ้บหน้าอก",
    "hos_guid": null
  },
  {
    "supportinfo_id": 5,
    "SupportInfo_name": "ระดับความรู้สึกตัว",
    "hos_guid": null
  }
]
```
